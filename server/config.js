// AI-assisted - see AI-USAGE.md #5.
import path from 'node:path';

export function readConfig(env = process.env) {
  const integer = (name, value, min, max) => {
    const parsed = Number(env[name] ?? value);
    if (!Number.isInteger(parsed) || parsed < min || parsed > max) throw new Error(`Invalid ${name}`);
    return parsed;
  };
  const boolean = (name, fallback) => {
    if (env[name] === undefined) return fallback;
    if (!['true', 'false'].includes(env[name])) throw new Error(`Invalid ${name}`);
    return env[name] === 'true';
  };
  const origins = (env.FRONTEND_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
  for (const origin of origins) {
    if (new URL(origin).origin !== origin || !/^https?:/.test(origin)) throw new Error('Invalid FRONTEND_ORIGINS');
  }
  const production = env.NODE_ENV === 'production';
  return {
    production, port: integer('PORT', 3001, 1, 65535), host: env.HOST || '0.0.0.0',
    apiKey: env.NASA_API_KEY?.trim() || '', enabled: boolean('NASA_ENABLED', true),
    donkiEnabled: boolean('DONKI_ENABLED', true), origins,
    trustProxy: integer('TRUST_PROXY_HOPS', 0, 0, 5),
    cacheDir: path.resolve(env.CACHE_DIR || '.cache/nasa'),
    maxEntries: integer('CACHE_MAX_ENTRIES', 100, 4, 1000),
    timeoutMs: integer('NASA_TIMEOUT_MS', 8000, 100, 30000),
    retries: integer('NASA_RETRIES', 2, 0, 3),
    requestLimit: integer('API_RATE_LIMIT', 120, 10, 10000),
    upstreamBudget: integer('NASA_HOURLY_BUDGET', 200, 1, 900),
    ttls: {
      asteroids: integer('NEO_REFRESH_SECONDS', 3600, 300, 86400) * 1000,
      apod: integer('APOD_REFRESH_SECONDS', 3600, 900, 86400) * 1000,
      images: integer('IMAGES_CACHE_SECONDS', 86400, 3600, 604800) * 1000,
      weather: integer('DONKI_REFRESH_SECONDS', 1800, 900, 86400) * 1000,
    },
    tickMs: integer('REFRESH_TICK_SECONDS', 60, 10, 300) * 1000,
  };
}
