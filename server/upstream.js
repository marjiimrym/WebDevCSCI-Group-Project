// AI-assisted - see AI-USAGE.md #5.
import { setTimeout as delay } from 'node:timers/promises';

export class UpstreamError extends Error {
  constructor(code, retryAt = 0) {
    super(code);
    this.code = code;
    this.retryAt = retryAt;
  }
}

export function createUpstream(config, { fetchImpl = fetch, now = Date.now, sleep = delay, random = Math.random } = {}) {
  const hosts = new Map();
  async function request(url) {
    const host = new URL(url).hostname;
    if (!['api.nasa.gov', 'science.nasa.gov', 'images-api.nasa.gov', 'ccmc.gsfc.nasa.gov'].includes(host)) throw new UpstreamError('INVALID_HOST');
    if (!hosts.has(host)) hosts.set(host, { tail: Promise.resolve(), times: [], blockedUntil: 0, next: 0, pending: 0 });
    const state = hosts.get(host);
    if (state.pending >= 25) throw new UpstreamError('BUSY', now() + 60000);
    state.pending++;
    const previous = state.tail;
    let release;
    state.tail = new Promise((resolve) => { release = resolve; });
    await previous;
    try {
      for (let attempt = 0; attempt <= config.retries; attempt++) {
        if (now() < state.blockedUntil) throw new UpstreamError('RATE_LIMITED', state.blockedUntil);
        state.times = state.times.filter((time) => time > now() - 3600000);
        const budget = host === 'api.nasa.gov' ? (config.apiKey === 'DEMO_KEY' ? 2 : config.upstreamBudget) : 200;
        if (state.times.length >= budget) throw new UpstreamError('RATE_LIMITED', state.times[0] + 3600000);
        await sleep(Math.max(0, state.next - now()));
        state.times.push(now());
        state.next = now() + 250;
        try {
          const response = await fetchImpl(url, {
            signal: AbortSignal.timeout(config.timeoutMs), redirect: 'error',
            headers: { Accept: 'application/json', 'User-Agent': 'CosmicExplorer/1.0' },
          });
          const retryHeader = response.headers.get('retry-after');
          const retryAt = retryHeader && /^\d+$/.test(retryHeader)
            ? now() + Number(retryHeader) * 1000 : Date.parse(retryHeader || '');
          if (response.status === 429 || response.headers.get('x-ratelimit-remaining') === '0') {
            state.blockedUntil = Math.max(now() + 1000, Number.isFinite(retryAt) ? retryAt : now() + 3600000);
          }
          if (!response.ok) {
            await response.body?.cancel();
            if (response.status === 429) throw new UpstreamError('RATE_LIMITED', state.blockedUntil);
            if (response.status >= 500) throw new UpstreamError('UPSTREAM_UNAVAILABLE', Number.isFinite(retryAt) ? retryAt : 0);
            throw new UpstreamError('UPSTREAM_REJECTED', now() + 3600000);
          }
          if (!response.headers.get('content-type')?.includes('json')) throw new UpstreamError('INVALID_RESPONSE');
          const chunks = [];
          let size = 0;
          for await (const chunk of response.body) {
            size += chunk.length;
            if (size > 5 * 1024 * 1024) throw new UpstreamError('INVALID_RESPONSE');
            chunks.push(chunk);
          }
          try { return JSON.parse(Buffer.concat(chunks).toString('utf8')); }
          catch { throw new UpstreamError('INVALID_RESPONSE'); }
        } catch (error) {
          const failure = error instanceof UpstreamError ? error
            : new UpstreamError(['TimeoutError', 'AbortError'].includes(error.name) ? 'TIMEOUT' : 'NETWORK_ERROR');
          if (failure.retryAt > now() || ['INVALID_RESPONSE', 'UPSTREAM_REJECTED', 'RATE_LIMITED'].includes(failure.code)
            || attempt === config.retries) throw failure;
          await sleep(250 * 2 ** attempt + Math.floor(random() * 250));
        }
      }
    } finally { state.pending--; release(); }
  }
  return { request };
}
