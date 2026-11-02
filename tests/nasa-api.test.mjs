// AI-assisted - see AI-USAGE.md #5.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { readConfig } from '../server/config.js';
import { createNasaService } from '../server/service.js';
import { createApp } from '../server/app.js';
import { feed, apod, imageResponse, flares } from './fixtures/nasa.mjs';

async function setup(t, env = {}, failing = false) {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'cosmic-api-'));
  const config = readConfig({ NASA_API_KEY: 'private-test-key', CACHE_DIR: directory, ...env });
  const urls = [];
  const service = await createNasaService(config, { now: () => Date.parse('2026-11-01T12:00:00Z'), upstream: { request: async (url) => {
    urls.push(new URL(url));
    if (failing) throw new Error('private-test-key');
    const pathname = new URL(url).pathname;
    return pathname.includes('neo/') ? feed : pathname.includes('apod-basic') ? apod : pathname.includes('DONKI') ? flares : imageResponse;
  } } });
  const server = createApp(config, service).listen(0, '127.0.0.1');
  await new Promise((resolve) => server.once('listening', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  t.after(async () => { server.closeAllConnections(); await new Promise((resolve) => server.close(resolve)); await service.close(); await rm(directory, { recursive: true, force: true }); });
  return { base, urls, service };
}
test('all Express endpoints return validated data, reuse cache, and keep the key server-side', async (t) => {
  const { base, urls } = await setup(t);
  for (const endpoint of ['asteroids', 'apod', 'images?q=Orion', 'weather']) {
    const response = await fetch(`${base}/api/${endpoint}`);
    assert.equal(response.status, 200);
    const body = await response.text();
    assert.ok(!body.includes('private-test-key'));
    assert.equal(JSON.parse(body).meta.source, 'nasa');
  }
  await fetch(`${base}/api/images?q=%20orion%20`);
  assert.equal(urls.length, 4);
  const neo = urls.find((url) => url.pathname.includes('neo/'));
  assert.equal(neo.searchParams.get('start_date'), '2026-11-01');
  assert.equal(neo.searchParams.get('end_date'), '2026-11-07');
  assert.equal(neo.searchParams.get('api_key'), 'private-test-key');
  assert.ok(urls.filter((url) => url.hostname !== 'api.nasa.gov').every((url) => !url.searchParams.has('api_key')));
});
test('invalid queries and unknown API routes are JSON errors and make no NASA calls', async (t) => {
  const { base, urls } = await setup(t);
  for (const route of ['images', 'images?q=', 'images?q=a&q=b', `images?q=${'a'.repeat(121)}`, 'asteroids?api_key=bad', 'apod?url=https://evil.test']) {
    assert.equal((await fetch(`${base}/api/${route}`)).status, 400);
  }
  const missing = await fetch(`${base}/api/missing`);
  assert.equal(missing.status, 404);
  assert.equal((await missing.json()).error.code, 'NOT_FOUND');
  assert.equal(urls.length, 0);
});
test('NASA failure serves historical asteroids, reports unavailable features, and backs off', async (t) => {
  const { base, urls } = await setup(t, {}, true);
  const fallback = await (await fetch(`${base}/api/asteroids`)).json();
  assert.equal(fallback.meta.source, 'fallback');
  assert.equal(fallback.meta.fetchedAt, null);
  assert.ok(fallback.data.length > 0);
  await fetch(`${base}/api/asteroids`);
  assert.equal(urls.length, 1);
  const apodResponse = await fetch(`${base}/api/apod`);
  assert.equal(apodResponse.status, 503);
  assert.ok(!(await apodResponse.text()).includes('private-test-key'));
});
test('scheduled refresh warms core caches without any page requests', async (t) => {
  const { service, urls } = await setup(t);
  await service.tick();
  await service.cache.close();
  assert.equal(urls.length, 3);
  await service.tick();
  assert.equal(urls.length, 3);
  service.cache.entries.set('images:old query', { data: [], fetchedAt: '2026-10-20T00:00:00.000Z', accessedAt: Date.parse('2026-10-20T00:00:00Z') });
  await service.tick();
  assert.equal(urls.length, 3, 'unused image queries must not consume background quota');
});
test('CORS allowlist, rate limiting and health endpoint work without exposing credentials', async (t) => {
  const { base } = await setup(t, { FRONTEND_ORIGINS: 'https://cosmic.example', API_RATE_LIMIT: '10', NASA_ENABLED: 'false' });
  const allowed = await fetch(`${base}/api/health`, { headers: { Origin: 'https://cosmic.example' } });
  assert.equal(allowed.headers.get('access-control-allow-origin'), 'https://cosmic.example');
  const disallowed = await fetch(`${base}/api/health`, { headers: { Origin: 'https://other.example' } });
  assert.equal(disallowed.headers.get('access-control-allow-origin'), null);
  for (let i = 0; i < 10; i++) await fetch(`${base}/api/asteroids`);
  assert.equal((await fetch(`${base}/api/asteroids`)).status, 429);
  assert.equal((await fetch(`${base}/api/health`)).status, 200);
});
