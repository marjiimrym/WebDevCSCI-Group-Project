// AI-assisted - see AI-USAGE.md #5.
import { readFile } from 'node:fs/promises';
import { DataCache } from './cache.js';
import { createUpstream } from './upstream.js';
import { normalizeApod, normalizeAsteroids, normalizeImages, normalizeWeather } from './normalize.js';
import { schemas } from '../shared/nasa-contract.js';

export async function createNasaService(config, dependencies = {}) {
  const now = dependencies.now || Date.now;
  const cache = dependencies.cache || new DataCache({ directory: config.cacheDir, maxEntries: config.maxEntries, now });
  await cache.init();
  const upstream = dependencies.upstream || createUpstream(config);
  const fallback = schemas.asteroids.parse(JSON.parse(await readFile(new URL('../data/asteroids.json', import.meta.url), 'utf8'))
    .map((item) => ({ ...item, jplUrl: item.jplUrl.replace(/^http:\/\//, 'https://') })));
  const day = (offset) => new Date(now() + offset * 86400000).toISOString().slice(0, 10);
  function descriptor(kind, query = '') {
    const enabled = config.enabled && (kind !== 'asteroids' || !!config.apiKey)
      && (kind !== 'weather' || config.donkiEnabled);
    return {
      enabled, ttl: config.ttls[kind], fallback: kind === 'asteroids' ? fallback : kind === 'apod' ? null : [],
      load: async () => {
        let url;
        if (kind === 'asteroids') {
          const start = day(0), end = day(6);
          url = new URL('https://api.nasa.gov/neo/rest/v1/feed');
          url.search = new URLSearchParams({ start_date: start, end_date: end, api_key: config.apiKey });
          return normalizeAsteroids(await upstream.request(url), start, end);
        }
        if (kind === 'apod') return normalizeApod(await upstream.request('https://science.nasa.gov/wp-json/wp/v2/apod-basic'));
        if (kind === 'images') {
          url = new URL('https://images-api.nasa.gov/search');
          url.search = new URLSearchParams({ q: query, media_type: 'image', page_size: '24' });
          return normalizeImages(await upstream.request(url));
        }
        // Official CCMC endpoint after the September 2026 migration; no API key required.
        url = new URL('https://ccmc.gsfc.nasa.gov/DONKI/WS/get/FLR');
        url.search = new URLSearchParams({ startDate: day(-6), endDate: day(0) });
        return normalizeWeather(await upstream.request(url));
      },
    };
  }
  const get = (kind, query = '') => cache.get(kind === 'images' ? `images:${query}` : kind, descriptor(kind, query));
  let timer;
  let ticking = false;
  let closing = false;
  async function tick() {
    if (ticking || closing) return;
    ticking = true;
    try {
      await Promise.all(['asteroids', 'apod', 'weather'].map((kind) => get(kind)));
      for (const [key, entry] of cache.entries) {
        if (closing) break;
        if (key.startsWith('images:') && now() - entry.accessedAt < 86400000
          && now() - Date.parse(entry.fetchedAt) >= config.ttls.images) {
          const descriptorValue = descriptor('images', key.slice(7));
          if (descriptorValue.enabled) await cache.refresh(key, descriptorValue.load);
        }
      }
    } finally { ticking = false; }
  }
  return {
    get, cache, tick,
    start() { void tick(); timer = setInterval(() => void tick(), config.tickMs); timer.unref(); },
    async close() { closing = true; clearInterval(timer); await cache.close(); },
  };
}
