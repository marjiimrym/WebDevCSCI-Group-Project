# Live NASA integration

## Architecture and scope

React/Vite calls Express through `/api`. Express alone owns the NASA key, validates upstream responses, normalizes data, refreshes caches and saves successful responses to disk. `shared/nasa-contract.js` validates both sides of this boundary. The existing asteroid filter functions, URL controls, card fields and units are reused. The offline snapshot script now uses the same mapper and upstream client.

The 26 curated profiles and object catalogue are editorial content, not a NASA API response. They stay in place. The exoplanet contributor's script and fixture also stay unchanged. `App.jsx`, `FavouriteButton`, `FavouritesPage`, and `ObjectCard` are unchanged; existing favourites still survive client-side navigation. Their existing lack of reload persistence is not changed by this integration. NASA response storage uses an independent `cosmic-explorer:nasa:v1:` namespace.

| UI / route | Upstream | Behaviour |
| --- | --- | --- |
| Asteroids, `GET /api/asteroids` | NeoWs `/neo/rest/v1/feed` | Today through six days later, UTC; one card per ID, earliest Earth approach |
| Homepage daily feature, `GET /api/apod` | `https://science.nasa.gov/wp-json/wp/v2/apod-basic` | Latest APOD; `hdurl` is the image, `permalink` links to NASA; video days use a link |
| Explore image form, `GET /api/images?q=orion` | `https://images-api.nasa.gov/search` | Up to 24 images; submit explicitly; whitespace/case-normalized cache keys |
| Homepage solar flares, `GET /api/weather` | `https://ccmc.gsfc.nasa.gov/DONKI/WS/get/FLR` | Seven UTC calendar dates; three most recent displayed; research observations |
| `GET /api/health` | None | Process and cache persistence health, configuration booleans; no credentials |

The current CCMC DONKI endpoint replaces the old service host and does not require a key. The `api.nasa.gov/DONKI/FLR` gateway timed out during verification, while CCMC returned live records. APOD and image search also need no key. Only NeoWs receives `NASA_API_KEY`.

## Local setup

Use the Node versions in `package.json` (Node 24 LTS recommended).

```sh
npm ci
cp .env.example .env
# Edit .env and set NASA_API_KEY to your own registered key.
npm run dev
```

PowerShell: `Copy-Item .env.example .env` (only if `.env` does not already exist). `npm run dev` runs Express on port 3001 and Vite on 5173. Vite proxies `/api` to Express. For separate terminals use `npm run dev:api` and `npm run dev:web`. `npm run preview` needs the backend running too; it is a build preview, not the production server.

Do not put the key in a `VITE_` variable, client request, Git commit or frontend hosting configuration. `.env` is ignored. On a TLS-inspecting network, use Node 22.19+ / 24 with the system certificate store (`NODE_OPTIONS=--use-system-ca`) or an approved CA via `NODE_EXTRA_CA_CERTS`; never disable TLS verification. The local live verification used `node --use-system-ca scripts/check-nasa.mjs`.

Without a key, NeoWs shows the labelled historical sample. Public APOD, imagery and DONKI can still update. `NASA_ENABLED=false` disables all upstream calls, useful for an offline demonstration. A `DEMO_KEY` is not suitable for production.

## Configuration

All durations below are seconds unless otherwise noted. Invalid numbers/booleans fail startup. Backend environment variables are read at runtime; `VITE_API_BASE_URL` is public and embedded at build time.

| Variable | Default | Purpose |
| --- | --- | --- |
| `NASA_API_KEY` | empty | Server-only registered NeoWs key |
| `NODE_ENV` | development | Set `production` to serve `dist` from Express |
| `HOST`, `PORT` | `0.0.0.0`, `3001` | Listening interface and hosting-provider port |
| `VITE_API_BASE_URL` | empty | Public backend origin/base path, without `/api`, credentials or query; blank uses same origin |
| `API_PROXY_TARGET` | `http://127.0.0.1:3001` | Development/preview proxy target |
| `FRONTEND_ORIGINS` | empty | Exact comma-separated frontend origins allowed by CORS for separate hosting |
| `TRUST_PROXY_HOPS` | `0` | Number of trusted reverse-proxy hops; set only to the actual deployment topology |
| `NASA_ENABLED`, `DONKI_ENABLED` | `true` | Global upstream switch and optional weather switch |
| `CACHE_DIR` | `.cache/nasa` | Writable persistent directory outside the public frontend |
| `CACHE_MAX_ENTRIES` | `100` | Maximum cached datasets; least-recently-used image queries evicted first |
| `NEO_REFRESH_SECONDS` | `3600` | Asteroid freshness/refresh interval; minimum 300 |
| `APOD_REFRESH_SECONDS` | `3600` | Check for the daily publication hourly; minimum 900 |
| `IMAGES_CACHE_SECONDS` | `86400` | Query result freshness; minimum 3600 |
| `DONKI_REFRESH_SECONDS` | `1800` | Solar-flare freshness; minimum 900 |
| `REFRESH_TICK_SECONDS` | `60` | Scheduler checks for due refreshes, including without visitors |
| `NASA_TIMEOUT_MS` | `8000` | Milliseconds per upstream attempt, including response body |
| `NASA_RETRIES` | `2` | Additional attempts on transient network/5xx errors (maximum 3) |
| `NASA_HOURLY_BUDGET` | `200` | Per-process NeoWs request cap (maximum 900), below NASA's usual key limit |
| `API_RATE_LIMIT` | `120` | Requests per minute per client IP; health excluded |

## Cache, refresh and outage behaviour

- Startup restores schema-validated snapshots before accepting requests, then warms the three main feeds. A timer checks freshness every minute. Image queries refresh after their TTL only while used within the past day; inactive searches refresh on their next request.
- Fresh responses reuse memory. Expired successful responses return immediately while one refresh runs in the background. Concurrent requests share the same in-flight promise. Failed/malformed responses never replace a successful snapshot.
- Last-good snapshots have **no hard expiry**: during a long outage they remain readable with their original timestamp and a stale label. A restarted process can recover them from `CACHE_DIR/cache.json`. Writes are serialized and atomically renamed. A corrupt snapshot is ignored safely.
- Missing initial asteroid data falls back to the original `data/asteroids.json`, explicitly labelled as a historical sample with its actual approach dates and no invented update timestamp. APOD/media/weather show an unavailable state until their first success; no synthetic current NASA records are presented.
- The browser retains up to 20 successful responses in its own localStorage namespace and revalidates mounted resources every minute while visible. Navigating away does not cancel a request that another subscriber may need. Old image searches cannot replace newer query results. Cached JSON remains usable offline once the app has loaded. This is **not** a service worker: a first visit or full reload without cached application assets still requires a network connection. Remote media files may be unavailable offline; a local illustration replaces failed images.
- Each response contains `meta.source`, `cached`, `stale`, `fetchedAt`, `refreshAfter`, and a safe `message`. The status area shows last successful retrieval, not an invented NASA publication time. APOD publication date and asteroid approach dates appear separately. Empty valid results are distinct from failed requests.
- Transient retries use exponential delays and jitter. A failed dataset enters a 1, 2, 4… minute cooldown capped at one hour. `Retry-After` (seconds or HTTP date) and exhausted NASA quota can extend that cooldown. 429s do not trigger an immediate retry; the host cooldown also blocks other requests. The client retry button does not bypass these limits.
- Requests to each upstream host are serialized, spaced at least 250 ms apart, and capped at 200 attempts/hour for public services. The NeoWs budget is configurable; `DEMO_KEY` is conservatively capped at two/hour. NASA documents 1,000/hour for registered keys and 30/hour plus 50/day for DEMO_KEY. Budgets here are process-local and reset on restart; use a registered key and one instance, and account for other apps sharing the key.
- URLs are constructed from fixed service hosts, queries are bounded, payloads are capped at 5 MiB, and only validated HTTPS links and plain text reach React. `html-to-text` converts WordPress explanations and credits into readable text, including entity decoding; NASA HTML is never injected. Previously cached HTML text is converted during restore without losing the original successful timestamp. Responses and logs do not include upstream URLs or API keys. Express includes security headers, CORS controls and client rate limiting.

## Production deployment

Deploy one **long-running Node service with a persistent disk**, behind HTTPS. Sleeping/ephemeral/serverless instances cannot guarantee background refresh or disk persistence. Multiple workers/replicas need a shared cache, distributed rate limiter and single refresh scheduler before scaling; do not mount this file cache concurrently in multiple processes.

1. Install dependencies with `npm ci` and build with `npm run build`.
2. Set runtime `NODE_ENV=production`, `NASA_API_KEY`, provider `PORT`, and `CACHE_DIR` to the mounted persistent directory. The service user must be able to write it; startup fails if it cannot. Keep the directory on the same filesystem for atomic rename.
3. Start with `npm start`. Express serves hashed assets, SPA routes and API routes together. `/api/*` unknown routes return JSON 404s, and missing assets remain 404s. This is the simplest same-origin deployment; no `VITE_API_BASE_URL` or CORS setting is required.
4. Configure the proxy hop count accurately and prevent bypass access around the trusted proxy. Do not cache `/api` at a CDN; the service returns `Cache-Control: no-store` because it manages freshness itself.
5. Monitor `/api/health`, refresh failure logs and data timestamps. A disk-write failure marks health `degraded` while memory data stays available. NASA outages do not fail process liveness or trigger restart loops. Graceful SIGTERM/SIGINT shutdown finishes cache writes.
6. Verify one live result per enabled service, a direct `/asteroids` and `/objects/mars` refresh, persistence across restart, and a built-asset secret scan. No deployment is performed by this PR.

Use your host's native Node runtime and process supervisor to restart the service if it exits. Build with `npm ci && npm run build`, start with `npm start`, and mount a persistent directory at the configured `CACHE_DIR`. Supply the key through the host's secret/environment settings.

For separate frontend/backend hosts: build with `VITE_API_BASE_URL=https://your-api.example`, serve static `dist` with the existing SPA rewrite, and set `FRONTEND_ORIGINS=https://your-site.example` on Express. Your static host's CSP must permit that API origin and NASA HTTPS images. Static-only hosting of `dist` does not run the backend. Rebuild after changing a `VITE_` value.

## Verification

```sh
npm run lint
npm test
npx playwright install chromium
npm run test:e2e
# Optional live check; needs network and your registered key:
node scripts/check-nasa.mjs
```

For installed Edge on Windows: `$env:PLAYWRIGHT_CHANNEL = 'msedge'` before browser tests. Browser tests run against the built React app served by Express and mock NASA responses. Unit/integration tests use synthetic fixtures and temporary cache directories, never real credentials. CI repeats lint, unit/integration tests, production build and Chromium browser tests on each push/PR.

Coverage includes data mapping, safe links, malformed responses, empty results, request coalescing, disk restart recovery, eviction, background refresh, failure cooldowns, HTTP 429 and 5xx, body timeouts, query validation, CORS, rate limiting, offline state, loading/retry, media search, favourites, all existing routes, mobile overflow and keyboard access.

### Verification recorded on 2026-11-01

- ESLint: passed.
- Node unit/integration suite: 31 tests passed.
- Production Vite build: passed; 42 Playwright browser tests passed using installed Edge.
- Development: Vite transformed the React asteroid module and proxied Express health/data successfully.
- Native production startup: `NODE_ENV=production npm start` served direct SPA routes and all four NASA API routes; unknown API and missing asset requests returned 404.
- Real NASA responses: 45 asteroid records, one APOD feature, 24 image results for `orion`, and two solar-flare records. These counts describe the verification snapshot, not guaranteed future results.
- Scanned tracked/new source and built assets for the configured secret: zero matches. Favourites implementation files, original asteroid sample, object profiles and exoplanet fixture have no changes.

Remote hosting has not been deployed or verified by this change. Configure the persistent directory, runtime secret and HTTPS settings on the chosen Node host before launch.

## Changed-file map

- `server/{config,upstream,normalize,cache,service,app,index}.js`: configuration, NASA boundary, persistent cache/scheduler and Express runtime.
- `shared/nasa-contract.js`: validated response types shared with React.
- `src/lib/nasa-client.js`, `src/hooks/useNasa.js`: deduplicated fetch, browser cache, offline/retry and polling.
- `src/components/{DataStatus,NasaHighlights,NasaImageSearch}.jsx`, `assets/css/nasa.css`: accessible statuses and scoped NASA sections.
- `src/pages/{AsteroidsPage,HomePage,ExplorePage}.jsx`, `src/main.jsx`: minimal integrations in existing pages.
- `assets/js/asteroid-filters.js`, `scripts/fetch-asteroids.mjs`: preserve existing filtering and sample workflow, handle missing live measurements.
- `tests/nasa-*.test.mjs`, `tests/fixtures/`, `tests/browser/nasa*`, `tests/start-browser-server.mjs`, existing browser setup: deterministic reliability and regression coverage.
- `.env.example`, `vite.config.js`, package files, `playwright.config.js`, ESLint/ignore files: local and production tooling.
- `.github/workflows/ci.yml`: automated verification for pushes and pull requests.
- `README.md`, this guide and `docs/LIVE_API_PR.md`: setup, operations and a local pull-request description for later review.

## Authoritative references

- [NASA API catalogue and new APOD contract](https://api.nasa.gov/)
- [NASA APOD migration notice](https://github.com/nasa/apod-api)
- [NASA key rate limits](https://api.nasa.gov/assets/html/authentication.html)
- [NASA Image and Video Library API](https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf)
- [DONKI migration and research-data terms](https://ccmc.gsfc.nasa.gov/tools/DONKI/)
- [Current DONKI API reference](https://ccmc.gsfc.nasa.gov/DONKI/api/)
