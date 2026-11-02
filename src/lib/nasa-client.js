// AI-assisted - see AI-USAGE.md #5.
import { envelopeSchema } from '../../shared/nasa-contract.js';
import asteroidSample from '../../data/asteroids.json' with { type: 'json' };

const configuredBase = (import.meta.env?.VITE_API_BASE_URL || '').replace(/\/$/, '');
if (configuredBase && (!/^https?:\/\//.test(configuredBase) || new URL(configuredBase).username
  || new URL(configuredBase).password || new URL(configuredBase).search || new URL(configuredBase).hash)) {
  throw new Error('VITE_API_BASE_URL must be a public HTTP(S) origin or base path without credentials or query parameters.');
}
const resources = new Map();
const prefix = `cosmic-explorer:nasa:v1:${configuredBase}:`;
const bundledAsteroids = asteroidSample.map((item) => ({ ...item, jplUrl: item.jplUrl.replace(/^http:\/\//, 'https://') }));
function browserStorage() {
  try { return globalThis.localStorage || null; } catch { return null; }
}

export function createResource(kind, query = '', {
  fetchImpl = (...args) => fetch(...args),
  storage = browserStorage(),
  online = () => typeof navigator === 'undefined' || navigator.onLine !== false,
  pollMs = 60000,
} = {}) {
  const key = `${prefix}${kind}:${query}`;
  const schema = envelopeSchema(kind);
  let initial = {
    data: kind === 'asteroids' ? bundledAsteroids : kind === 'apod' ? null : [],
    meta: { source: kind === 'asteroids' ? 'fallback' : 'unavailable', cached: false, stale: true,
      fetchedAt: null, refreshAfter: null, message: null },
  };
  try {
    const saved = schema.safeParse(JSON.parse(storage?.getItem(key) || 'null'));
    if (saved.success && saved.data.meta.source === 'nasa') {
      initial = { ...saved.data, meta: { ...saved.data.meta, cached: true, stale: true } };
    }
  } catch { /* Storage can be unavailable in private browsing. */ }
  let state = { ...initial, loading: true, error: null, offline: !online() };
  let inFlight;
  let lastAttempt = 0;
  let timer;
  const listeners = new Set();
  const publish = (value) => { state = value; listeners.forEach((listener) => listener()); };
  function save(envelope) {
    if (envelope.meta.source !== 'nasa') return;
    try {
      const keys = Object.keys(storage || {}).filter((item) => item.startsWith(prefix) && item !== key);
      while (keys.length >= 20) storage.removeItem(keys.shift());
      storage?.setItem(key, JSON.stringify(envelope));
    } catch { /* Memory cache remains usable if storage is full or blocked. */ }
  }
  async function load() {
    if (inFlight) return inFlight;
    if (!online()) {
      publish({ ...state, loading: false, offline: true, meta: { ...state.meta, cached: state.meta.source === 'nasa', stale: true } });
      return;
    }
    lastAttempt = Date.now();
    publish({ ...state, loading: true, offline: false, error: null });
    inFlight = (async () => {
      try {
        const suffix = kind === 'images' ? `?${new URLSearchParams({ q: query })}` : '';
        const response = await fetchImpl(`${configuredBase}/api/${kind}${suffix}`, {
          signal: AbortSignal.timeout(40000), headers: { Accept: 'application/json' },
        });
        const parsed = schema.safeParse(await response.json());
        if (!parsed.success || (!response.ok && !['unavailable', 'disabled'].includes(parsed.data.meta.source))) throw new Error('API unavailable');
        const envelope = parsed.data;
        if (envelope.meta.source !== 'nasa' && state.meta.source === 'nasa') {
          publish({ ...state, loading: false, error: envelope.meta.message || 'Live data is unavailable.',
            meta: { ...state.meta, cached: true, stale: true } });
        } else {
          save(envelope);
          publish({ ...envelope, loading: false, offline: false, error: response.ok ? null : envelope.meta.message });
        }
      } catch {
        publish({ ...state, loading: false, offline: !online(), error: 'Could not update NASA data. Please try again.',
          meta: { ...state.meta, cached: state.meta.source === 'nasa', stale: true } });
      }
    })();
    try { await inFlight; } finally { inFlight = null; }
  }
  const connectivity = () => {
    if (online()) void load();
    else publish({ ...state, offline: true, meta: { ...state.meta, cached: state.meta.source === 'nasa', stale: true } });
  };
  return {
    getSnapshot: () => state,
    retry: load,
    subscribe(listener) {
      listeners.add(listener);
      if (listeners.size === 1) {
        if (!online() || state.offline) connectivity();
        else if (Date.now() - lastAttempt > 5000) void load();
        timer = setInterval(() => {
          if (typeof document === 'undefined' || document.visibilityState === 'visible') void load();
        }, pollMs);
        globalThis.addEventListener?.('online', connectivity);
        globalThis.addEventListener?.('offline', connectivity);
      }
      return () => {
        listeners.delete(listener);
        if (!listeners.size) {
          clearInterval(timer);
          globalThis.removeEventListener?.('online', connectivity);
          globalThis.removeEventListener?.('offline', connectivity);
        }
      };
    },
    get active() { return listeners.size > 0; },
  };
}

export function getResource(kind, query = '') {
  const key = `${kind}:${query}`;
  if (!resources.has(key)) {
    if (resources.size >= 30) {
      for (const [oldKey, resource] of resources) {
        if (!resource.active) { resources.delete(oldKey); break; }
      }
    }
    resources.set(key, createResource(kind, query));
  }
  return resources.get(key);
}
