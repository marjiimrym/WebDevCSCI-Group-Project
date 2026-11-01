// AI-assisted - see AI-USAGE.md #5.
import { mkdir, readFile, writeFile, rename, stat } from 'node:fs/promises';
import path from 'node:path';
import { schemas, timestamp } from '../shared/nasa-contract.js';
import { cleanCachedText } from './normalize.js';

// Single-process cache. Mount CACHE_DIR on persistent storage; never share it between replicas.
export class DataCache {
  constructor({ directory, maxEntries = 100, now = Date.now, warn = console.warn }) {
    this.directory = directory;
    this.maxEntries = maxEntries;
    this.now = now;
    this.warn = warn;
    this.entries = new Map();
    this.jobs = new Map();
    this.failures = new Map();
    this.writeQueue = Promise.resolve();
    this.persistenceHealthy = true;
  }

  async init() {
    await mkdir(this.directory, { recursive: true });
    // Fail startup if persistence cannot be written, including on a new deployment.
    await writeFile(path.join(this.directory, '.write-check'), 'ok', { mode: 0o600 });
    try {
      const file = path.join(this.directory, 'cache.json');
      if ((await stat(file)).size > 30 * 1024 * 1024) throw new Error('Oversized cache');
      const saved = JSON.parse(await readFile(file, 'utf8'));
      if (saved.version !== 1 || !Array.isArray(saved.entries)) throw new Error('Invalid cache');
      for (const [key, entry] of saved.entries.slice(-this.maxEntries)) {
        if (typeof key !== 'string' || !/^(asteroids|apod|weather|images:.{1,120})$/.test(key)
          || [...key].some((char) => char.charCodeAt(0) < 32)) continue;
        const kind = key.split(':')[0];
        const data = schemas[kind]?.safeParse(entry?.data);
        if (!data?.success || (kind === 'apod' && !data.data) || !timestamp.safeParse(entry.fetchedAt).success) continue;
        const fetched = Date.parse(entry.fetchedAt);
        if (fetched > this.now() + 60000) continue;
        const accessedAt = Number.isFinite(entry.accessedAt) ? Math.min(entry.accessedAt, this.now()) : fetched;
        this.entries.set(key, { data: cleanCachedText(kind, data.data), fetchedAt: entry.fetchedAt, accessedAt });
      }
    } catch (error) {
      if (error.code !== 'ENOENT') this.warn('NASA cache could not be restored; using bundled fallback until refresh succeeds.');
    }
  }

  persist() {
    this.writeQueue = this.writeQueue.then(async () => {
      const serialized = JSON.stringify({ version: 1, entries: [...this.entries] });
      const temp = path.join(this.directory, 'cache.tmp');
      await writeFile(temp, serialized, { mode: 0o600 });
      await rename(temp, path.join(this.directory, 'cache.json'));
      this.persistenceHealthy = true;
    }).catch(() => {
      this.persistenceHealthy = false;
      this.warn('NASA cache persistence failed; serving the last good data from memory. Check CACHE_DIR permissions and disk space.');
    });
    return this.writeQueue;
  }

  refresh(key, load) {
    if (this.jobs.has(key)) return this.jobs.get(key);
    if ((this.failures.get(key)?.retryAt || 0) > this.now()) return Promise.resolve();
    const job = (async () => {
      try {
        const data = schemas[key.split(':')[0]].parse(await load());
        this.entries.set(key, { data, fetchedAt: new Date(this.now()).toISOString(), accessedAt: this.now() });
        this.failures.delete(key);
        while (this.entries.size > this.maxEntries) {
          const removable = [...this.entries].filter(([candidate]) => candidate.startsWith('images:'))
            .sort((a, b) => a[1].accessedAt - b[1].accessedAt);
          if (!removable.length) break;
          this.entries.delete(removable[0][0]);
        }
        await this.persist();
      } catch (error) {
        const count = (this.failures.get(key)?.count || 0) + 1;
        this.failures.delete(key);
        this.failures.set(key, {
          count, retryAt: Math.max(error.retryAt || 0, this.now() + Math.min(3600000, 60000 * 2 ** Math.min(count - 1, 6))),
        });
        while (this.failures.size > this.maxEntries) this.failures.delete(this.failures.keys().next().value);
        // Never log upstream URLs, bodies, errors, or credentials.
        this.warn(`NASA ${key.split(':')[0]} refresh failed; keeping last successful data.`);
      }
    })();
    this.jobs.set(key, job);
    job.finally(() => this.jobs.delete(key));
    return job;
  }

  async get(key, { load, ttl, fallback, enabled = true }) {
    let entry = this.entries.get(key);
    const hadEntry = !!entry;
    const expired = !entry || this.now() - Date.parse(entry.fetchedAt) >= ttl;
    if (enabled && expired) {
      const job = this.refresh(key, load);
      if (!entry) await job;
      entry = this.entries.get(key);
    }
    if (entry) {
      entry.accessedAt = this.now();
      return { data: entry.data, meta: {
        source: 'nasa', cached: hadEntry,
        stale: !enabled || this.now() - Date.parse(entry.fetchedAt) >= ttl,
        fetchedAt: entry.fetchedAt, refreshAfter: new Date(Math.max(Date.parse(entry.fetchedAt) + ttl, this.failures.get(key)?.retryAt || 0)).toISOString(),
        message: !enabled ? 'Live updates are disabled.' : this.failures.has(key) ? 'NASA is temporarily unavailable. Showing the last successful update.' : null,
      } };
    }
    return { data: fallback, meta: {
      source: key === 'asteroids' ? 'fallback' : enabled ? 'unavailable' : 'disabled',
      cached: false, stale: true, fetchedAt: null,
      refreshAfter: this.failures.has(key) ? new Date(this.failures.get(key).retryAt).toISOString() : null,
      message: key === 'asteroids' ? 'Showing the bundled historical sample; these are not current approaches.'
        : enabled ? 'NASA data is temporarily unavailable. Please try again later.' : 'Live data is not configured for this service.',
    } };
  }

  async close() { await Promise.all([...this.jobs.values()]); await this.writeQueue; }
}
