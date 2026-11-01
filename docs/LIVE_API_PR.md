# Add live NASA data with persistent caching and offline fallback

Local pull-request description only. No commit, push or GitHub PR has been created for this implementation, per the latest instruction.

## Summary

Cosmic Explorer previously used only a saved asteroid sample. It now loads validated live NASA data through Express, retains successful responses across outages and restarts, and clearly labels historical fallback data.

- Add live NeoWs asteroids using the existing card fields, search, hazard filters and sorting.
- Add the new WordPress APOD daily feature, searchable NASA images and current CCMC DONKI solar-flare observations. Convert WordPress HTML/credits to readable text without injecting markup.
- Keep the NASA key server-side. Add bounded disk/memory caches, background refresh, request coalescing, timeouts, exponential backoff and quota/429 handling.
- Add loading, empty, error, cached and offline states, timestamps, and independent browser response storage.
- Preserve existing favourites components/state, curated profiles, catalogue and exoplanet work.
- Support native Node deployment, Vite proxy development and separate frontend/API hosting. No Docker files or workflow.

## Review map

See [the changed-file map](LIVE_NASA_API.md#changed-file-map) and [configuration/deployment guide](LIVE_NASA_API.md).

## Validation

- `npm run lint`
- `npm test`: 31 unit/integration tests
- `npm run build`
- Playwright: 42 browser tests passed using installed Edge, covering existing routes/favourites and new NASA flows
- Development browser smoke: 45 live asteroids, no page errors
- Native production smoke: direct routes, all four NASA APIs, JSON API 404s, missing-asset 404s and security headers
- Real source check: NeoWs, APOD WordPress, NASA imagery and CCMC DONKI returned valid data
- Configured-secret scan: no matches in source files or built assets
- Production dependency audit: zero reported vulnerabilities

## Deployment notes

Run one long-lived Node instance with a persistent writable `CACHE_DIR`, runtime `NASA_API_KEY`, `NODE_ENV=production` and HTTPS. Multiple instances need a shared cache/limiter/scheduler before scaling. Browser offline support retains JSON after the app has loaded; it does not add a service worker or guarantee first-load offline access. Favourites retain their existing navigation behaviour; reload persistence remains outside this change. Remote hosting has not been deployed.
