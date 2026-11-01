// AI-assisted - see AI-USAGE.md #5.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createResource } from '../src/lib/nasa-client.js';
import { meta, feed } from './fixtures/nasa.mjs';
import { normalizeAsteroids } from '../server/normalize.js';
const data = normalizeAsteroids(feed, '2026-11-01', '2026-11-07');
const response = () => Response.json({ data, meta });

test('client deduplicates simultaneous requests and keeps last good data after malformed responses', async () => {
  let calls = 0;
  const resource = createResource('asteroids', '', { storage: null, fetchImpl: async () => {
    calls++;
    return calls === 1 ? response() : Response.json({ data: [{ invalid: true }], meta });
  } });
  await Promise.all([resource.retry(), resource.retry(), resource.retry()]);
  assert.equal(calls, 1);
  assert.deepEqual(resource.getSnapshot().data, data);
  await resource.retry();
  assert.deepEqual(resource.getSnapshot().data, data);
  assert.ok(resource.getSnapshot().error);
  assert.equal(resource.getSnapshot().meta.stale, true);
  assert.equal(resource.getSnapshot().meta.fetchedAt, meta.fetchedAt);
});
test('offline client renders sample without a fetch; browser persistence uses only its own namespace', async () => {
  let calls = 0;
  const offline = createResource('asteroids', '', { storage: null, online: () => false, fetchImpl: async () => { calls++; } });
  await offline.retry();
  assert.equal(calls, 0);
  assert.equal(offline.getSnapshot().offline, true);
  assert.ok(offline.getSnapshot().data.length > 0);
  const map = new Map([['favourites', '["mars"]']]);
  const storage = { getItem: (key) => map.get(key), setItem: (key, value) => map.set(key, value) };
  const first = createResource('asteroids', '', { storage, fetchImpl: async () => response() });
  await first.retry();
  const restored = createResource('asteroids', '', { storage, online: () => false });
  assert.equal(restored.getSnapshot().meta.cached, true);
  assert.deepEqual(restored.getSnapshot().data, data);
  assert.equal(map.get('favourites'), '["mars"]');
});
test('HTTP errors use sample; backend fallback never replaces browser last-good live data', async () => {
  let stage = 0;
  const resource = createResource('asteroids', '', { storage: null, fetchImpl: async () => stage === 1 ? response()
    : stage === 2 ? Response.json({ data: [], meta: { ...meta, source: 'fallback', fetchedAt: null } })
      : Response.json({ error: {} }, { status: 429 }) });
  await resource.retry();
  assert.equal(resource.getSnapshot().meta.source, 'fallback');
  assert.ok(resource.getSnapshot().error);
  stage = 1;
  await resource.retry();
  assert.equal(resource.getSnapshot().meta.source, 'nasa');
  stage = 2;
  await resource.retry();
  assert.deepEqual(resource.getSnapshot().data, data);
  assert.equal(resource.getSnapshot().meta.fetchedAt, meta.fetchedAt);
  assert.equal(resource.getSnapshot().meta.stale, true);
});

test('blocked or corrupt browser storage cannot prevent fetching and rendering live data', async () => {
  const storage = { getItem() { throw new Error('Storage disabled'); }, setItem() { throw new Error('Quota exceeded'); } };
  const resource = createResource('asteroids', '', { storage, fetchImpl: async () => response() });
  await resource.retry();
  assert.deepEqual(resource.getSnapshot().data, data);
  assert.equal(resource.getSnapshot().error, null);
});
