// AI-assisted - see AI-USAGE.md #5.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, writeFile, readFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { DataCache } from '../server/cache.js';
import { normalizeAsteroids, normalizeImages } from '../server/normalize.js';
import { feed, imageResponse, apod } from './fixtures/nasa.mjs';
import { normalizeApod } from '../server/normalize.js';

async function setup(t, now = Date.now, maxEntries = 4) {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'cosmic-cache-'));
  const cache = new DataCache({ directory, now, maxEntries, warn: () => {} });
  await cache.init();
  t.after(async () => { await cache.close(); await rm(directory, { recursive: true, force: true }); });
  return cache;
}
const data = normalizeAsteroids(feed, '2026-11-01', '2026-11-07');

test('concurrent cold requests share one fetch; fresh cache makes no upstream call', async (t) => {
  const cache = await setup(t);
  let calls = 0;
  const options = { ttl: 10000, fallback: [], load: async () => { calls++; return data; } };
  const responses = await Promise.all(Array.from({ length: 10 }, () => cache.get('asteroids', options)));
  assert.equal(calls, 1);
  assert.ok(responses.every((item) => item.meta.source === 'nasa'));
  assert.equal((await cache.get('asteroids', options)).meta.cached, true);
  assert.equal(calls, 1);
});
test('expired data is served during refresh; failures preserve timestamp and back off', async (t) => {
  let clock = Date.parse('2026-11-01T12:00:00Z');
  const cache = await setup(t, () => clock);
  const options = { ttl: 1000, fallback: [], load: async () => data };
  const first = await cache.get('asteroids', options);
  clock += 2000;
  let failures = 0;
  options.load = async () => { failures++; throw new Error('Unavailable'); };
  const stale = await cache.get('asteroids', options);
  await cache.close();
  assert.equal(stale.meta.stale, true);
  assert.equal(stale.meta.fetchedAt, first.meta.fetchedAt);
  await cache.get('asteroids', options);
  assert.equal(failures, 1);
  assert.deepEqual(cache.entries.get('asteroids').data, data);
  clock += 61000;
  options.load = async () => [];
  await cache.get('asteroids', options);
  await cache.close();
  assert.deepEqual((await cache.get('asteroids', options)).data, []);
});
test('last good data survives restart and malformed new responses never replace it', async (t) => {
  const cache = await setup(t);
  await cache.get('asteroids', { ttl: 1000, fallback: [], load: async () => data });
  await cache.refresh('asteroids', async () => [{ invalid: true }]);
  const restarted = new DataCache({ directory: cache.directory, warn: () => {} });
  await restarted.init();
  t.after(() => restarted.close());
  const result = await restarted.get('asteroids', { enabled: false, ttl: 1, fallback: [] });
  assert.equal(result.meta.source, 'nasa');
  assert.equal(result.meta.stale, true);
  assert.deepEqual(result.data, data);
  const serialized = await readFile(path.join(cache.directory, 'cache.json'), 'utf8');
  assert.ok(!serialized.includes('api_key'));
});
test('corrupt disk cache falls back honestly; bounded media entries preserve core feeds', async (t) => {
  const cache = await setup(t);
  await writeFile(path.join(cache.directory, 'cache.json'), 'broken JSON');
  await cache.init();
  const result = await cache.get('asteroids', { enabled: false, fallback: data, ttl: 1000 });
  assert.equal(result.meta.source, 'fallback');
  assert.equal(result.meta.fetchedAt, null);
  await cache.refresh('asteroids', async () => data);
  for (let i = 0; i < 10; i++) await cache.refresh(`images:query-${i}`, async () => normalizeImages(imageResponse));
  assert.equal(cache.entries.size, 4);
  assert.ok(cache.entries.has('asteroids'));
});

test('restored WordPress markup is converted without discarding last-good data or its timestamp', async (t) => {
  const cache = await setup(t);
  const fetchedAt = '2026-11-01T12:00:00.000Z';
  const saved = { ...normalizeApod(apod), explanation: '<strong>The Moon</strong> &amp; stars.' };
  await writeFile(path.join(cache.directory, 'cache.json'), JSON.stringify({ version: 1, entries: [['apod', { data: saved, fetchedAt }]] }));
  await cache.init();
  const result = await cache.get('apod', { enabled: false, fallback: null, ttl: 1 });
  assert.equal(result.data.explanation, 'The Moon & stars.');
  assert.equal(result.meta.fetchedAt, fetchedAt);
  assert.equal(result.meta.source, 'nasa');
});
