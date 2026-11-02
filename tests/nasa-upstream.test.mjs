// AI-assisted - see AI-USAGE.md #5.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { createUpstream } from '../server/upstream.js';
const config = { retries: 2, timeoutMs: 100, upstreamBudget: 100, apiKey: 'test-key' };
const url = 'https://api.nasa.gov/neo/rest/v1/feed?api_key=test-key';
const json = (value = {}) => new Response(JSON.stringify(value), { headers: { 'content-type': 'application/json' } });

test('5xx failures use exponential backoff, then recover', async () => {
  let calls = 0, clock = 0;
  const waits = [];
  const upstream = createUpstream(config, {
    now: () => clock, random: () => 0,
    sleep: async (ms) => { waits.push(ms); clock += ms; },
    fetchImpl: async () => ++calls < 3 ? new Response('', { status: 503 }) : json({ success: true }),
  });
  assert.deepEqual(await upstream.request(url), { success: true });
  assert.equal(calls, 3);
  assert.ok(waits.includes(250) && waits.includes(500));
});
test('429 Retry-After cooldown applies across endpoints on the same host', async () => {
  let clock = 1000, calls = 0;
  const upstream = createUpstream(config, { now: () => clock, sleep: async () => {},
    fetchImpl: async () => { calls++; return new Response('', { status: 429, headers: { 'retry-after': '120' } }); } });
  await assert.rejects(upstream.request(url), (error) => error.code === 'RATE_LIMITED' && error.retryAt === 121000);
  await assert.rejects(upstream.request('https://api.nasa.gov/DONKI/FLR'), { code: 'RATE_LIMITED' });
  assert.equal(calls, 1);
  clock = 122000;
  await assert.rejects(upstream.request(url), { code: 'RATE_LIMITED' });
  assert.equal(calls, 2);
});
test('zero remaining budget suppresses the next request even after a successful response', async () => {
  let calls = 0;
  const upstream = createUpstream(config, { sleep: async () => {}, fetchImpl: async () => {
    calls++;
    return new Response('{}', { headers: { 'content-type': 'application/json', 'x-ratelimit-remaining': '0' } });
  } });
  await upstream.request(url);
  await assert.rejects(upstream.request(url), { code: 'RATE_LIMITED' });
  assert.equal(calls, 1);
});
test('HTTP-date Retry-After is honoured and a local request budget prevents an extra fetch', async () => {
  const clock = Date.parse('2026-11-01T12:00:00Z');
  const retryAt = clock + 300000;
  const limited = createUpstream(config, { now: () => clock, sleep: async () => {}, fetchImpl: async () =>
    new Response('', { status: 429, headers: { 'retry-after': new Date(retryAt).toUTCString() } }) });
  await assert.rejects(limited.request(url), (error) => error.retryAt === retryAt);
  let calls = 0;
  const budgeted = createUpstream({ ...config, upstreamBudget: 1 }, { now: () => clock, sleep: async () => {}, fetchImpl: async () => { calls++; return json(); } });
  await budgeted.request(url);
  await assert.rejects(budgeted.request(url), { code: 'RATE_LIMITED' });
  assert.equal(calls, 1);
});
test('malformed JSON, unsafe hosts and 4xx responses do not retry or disclose a key', async () => {
  for (const response of [new Response('<html>', { headers: { 'content-type': 'application/json' } }), new Response('', { status: 403 })]) {
    let calls = 0;
    const upstream = createUpstream(config, { sleep: async () => {}, fetchImpl: async () => { calls++; return response; } });
    await assert.rejects(upstream.request(url), (error) => !error.message.includes('test-key'));
    assert.equal(calls, 1);
    await assert.rejects(upstream.request('https://example.com'), { code: 'INVALID_HOST' });
  }
});
test('request timeout also covers a stalled response body', async (t) => {
  const server = createServer((_req, res) => { res.writeHead(200, { 'Content-Type': 'application/json' }); res.write('{'); });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  t.after(() => { server.closeAllConnections(); server.close(); });
  const upstream = createUpstream({ ...config, retries: 0 }, { sleep: async () => {}, fetchImpl: (_url, options) => fetch(`http://127.0.0.1:${server.address().port}`, options) });
  await assert.rejects(upstream.request(url), { code: 'TIMEOUT' });
});
