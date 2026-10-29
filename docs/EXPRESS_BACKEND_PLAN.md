# Cosmic Explorer — Simple Express Backend Plan

## Goal

Build a small JavaScript/Express backend that loads NASA data for the React frontend. Keep the first version focused on browsing near-Earth asteroids and opening their details.

This plan complements [the React migration plan](REACT_MIGRATION_PLAN.md). It describes future work; it does not implement the backend.

## How it will work

```text
React frontend
    ↓ requests /api/asteroids
Express backend
    ↓ requests NASA data using the server's API key
NASA NeoWs API
    ↓ returns asteroid data
Express simplifies the response
    ↓ returns JSON
React renders cards, filters, and detail views
```

The backend handles NASA requests, input validation, data mapping, and errors. React handles display, search, filtering, sorting, and favourites. Favourites remain in browser `localStorage` for the first version.

NASA NeoWs supports date-based asteroid feeds and lookup by asteroid ID. These match the project's existing asteroid feature. [NASA API documentation](https://api.nasa.gov/)

## Keep the first version small

| Area | Initial decision |
|---|---|
| Language | JavaScript with ES modules |
| Server | Express 5 |
| Runtime | A currently supported Node.js LTS version, shared by the team |
| NASA requests | Node's built-in `fetch` |
| Configuration | `dotenv`, with private values in `server/.env` |
| Data storage | Existing local JSON and a small in-memory response cache |
| User state | Favourites stored in the frontend's `localStorage` |
| Development | Vite frontend on port 5173; Express on port 3001 |
| Production | Express serves both `/api` and the built React frontend |
| Initial NASA integration | NeoWs asteroid list and detail |

Accounts, a database, and additional NASA services can be separate future features.

The existing 26 planets, moons, stars, galaxies, and nebulae remain a curated local catalogue. NeoWs supplies asteroid data; it does not replace those object profiles. Keep the curated catalogue and live NASA data clearly identified in the UI.

Reference: [Express installation documentation](https://expressjs.com/en/starter/installing/).

## Proposed folder structure

Keep the React app at the repository root, as described in the migration plan. Give the backend its own package and scripts.

```text
server/
  package.json
  package-lock.json
  .env.example
  src/
    app.js                 # Express setup, routes, error handling
    server.js              # Configuration validation and server startup
    routes/
      asteroids.js         # List/detail routes and input validation
    services/
      nasa.js              # NASA requests, timeout, response cache
    mappers/
      asteroid.js          # NASA JSON to the frontend's data shape
  tests/
    asteroids.test.js
    asteroid-mapper.test.js
src/                       # React frontend, created during migration
data/
  objects.json             # Curated catalogue
  asteroids.json           # Existing sample asteroid data
scripts/
  fetch-asteroids.mjs       # Existing script for refreshing sample data
```

Start with these few files. Add more layers only when a feature needs them.

## API contract

Agree on these routes and response fields before connecting the frontend. This lets teammates work against fixtures while the backend is being built.

| Endpoint | Purpose | Response |
|---|---|---|
| `GET /api/health` | Confirm Express is running without calling NASA | `{ "status": "ok" }` |
| `GET /api/asteroids?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` | Asteroids approaching Earth within a date range | `{ "data": [...], "meta": { "startDate": "...", "endDate": "...", "source": "nasa", "fetchedAt": "..." } }` |
| `GET /api/asteroids/:id` | A single asteroid's details | `{ "data": {...}, "meta": { "source": "nasa", "fetchedAt": "..." } }` |

### List fields

Reuse the names already used by `data/asteroids.json` and `filterAsteroids`:

- `id`: NASA identifier as a string.
- `name`: display name.
- `hazardous`: boolean.
- `diameterMinM`, `diameterMaxM`: numeric diameter in metres.
- `approachDate`: `YYYY-MM-DD`.
- `velocityKph`: numeric speed in kilometres per hour.
- `missDistanceKm`: numeric miss distance in kilometres.
- `jplUrl`: link to NASA/JPL details.

For the feed, return one card per asteroid. If an asteroid has multiple approaches in the requested range, select its earliest Earth approach in that range. Derive the date, distance, and velocity from that same approach.

### Detail fields

Return `id`, `name`, `hazardous`, diameter fields, and `jplUrl`, plus `approaches`: an array of Earth approaches containing `approachDate`, `velocityKph`, and `missDistanceKm`. Use an empty array when no approaches are available, and `null` for unavailable numeric values. The UI should display “Unavailable” for missing values.

### Input and error rules

- If both dates are omitted, use today in UTC through six days later: seven calendar dates.
- If only one date is supplied, return a validation error explaining that both are required.
- Validate real dates, date order, and a maximum of seven calendar dates per request. This is the application's deliberately small initial range.
- Validate that an asteroid ID contains only digits before calling NASA.
- Use a consistent error body: `{ "error": { "code": "INVALID_DATE_RANGE", "message": "Choose a range of up to seven calendar dates." } }`.
- Return `400` for invalid input, `404` for an unknown asteroid or API route, `503` for NASA rate-limit/unavailability responses, `504` for a NASA timeout, and `502` for other upstream failures or malformed responses.
- Handle unexpected internal errors with `500` and a generic message. Keep stack traces and API keys out of responses.

## Implementation steps

### Step 1 — Set up Express

**Lead: Dhruv. Reviewer: Maryam.**

1. Create `server/package.json` with ES modules and install Express and `dotenv`.
2. Add `dev`, `start`, and `test` scripts. Use Node's watch mode for development and built-in test runner for tests.
3. Keep the Express app separate from the listening server so tests can exercise it.
4. Implement `/api/health`.
5. Add `server/.env.example` with placeholders for `NASA_API_KEY` and `PORT`.
6. Ensure `.env` files, `node_modules`, and build output are ignored by Git; keep example configuration tracked.
7. Fail startup with a clear local error if the NASA key is missing.

**Done when:** a teammate can install the backend dependencies, configure their local key, and receive a successful health response.

### Step 2 — Build the NASA list endpoint

**Lead: Dhruv. Reviewer: Nithin.**

1. Extract the useful mapping logic from `scripts/fetch-asteroids.mjs` into the backend mapper.
2. Request NASA's `/neo/rest/v1/feed` using validated dates and the server-side key.
3. Add a finite timeout, such as 10 seconds, and check the upstream HTTP status before parsing JSON.
4. Map the response to the agreed list fields and sort by approach date.
5. Implement the documented input and error rules.
6. Build NASA URLs from a fixed base URL and validated parameters; expose only the planned routes.

**Done when:** `/api/asteroids` returns real, normalized NASA records and predictable errors.

### Step 3 — Build the asteroid detail slice

**Lead: Nithin. Reviewer: Dhruv.**

1. Implement `/api/asteroids/:id` using NASA's `/neo/rest/v1/neo/{id}` lookup.
2. Map the response to the agreed detail fields.
3. Build the React `/asteroids/:id` page with loading, error, and not-found states.
4. Link asteroid cards to the internal detail page and retain the external NASA/JPL link on that page.
5. Test both a valid object and an unknown ID.

**Done when:** an asteroid detail URL works directly, including after a browser refresh.

### Step 4 — Connect React to Express

**Lead: Maryam. Support: Dhruv.**

1. Configure Vite to proxy `/api` requests to `http://localhost:3001` in development.
2. Add a small frontend API helper that reads the documented response and error bodies.
3. Replace the asteroid page's local JSON request with `/api/asteroids`.
4. Add a controlled date-range form with labels, validation, and an explicit submit button.
5. Keep name search, hazard filtering, and sorting in React using the already-loaded list and existing filtering logic.
6. Cancel outdated frontend requests when the date range changes or the page unmounts.
7. Show the requested dates, loading state, result count, empty state, and a retry option after errors.

The frontend calls relative `/api` URLs. The NASA API key stays in Express and is never put in a `VITE_` environment variable.

**Done when:** a user can choose dates, load live asteroid data, filter it, and open a result.

### Step 5 — Add a small cache and honest sample-data behavior

**Lead: Dhruv. Support: Gamze.**

1. Cache successful NASA responses in memory for about 10 minutes, keyed by endpoint and validated parameters.
2. Bound the cache, for example to 100 entries, and discard expired entries. Restarting the server clears it.
3. Avoid caching failed responses. Reuse an in-flight request when simultaneous requests ask for the same data.
4. Keep the existing JSON as test/demo data. If a sample-data option is offered after an error, require an explicit user action and label it “Sample data” with its actual date range.
5. Never describe the saved sample file as live or automatically substitute it for a different requested date range.

NASA applies API request limits, and `DEMO_KEY` has lower limits than a registered key. Caching reduces repeated requests when teammates or users load the same dates. [NASA authentication and rate-limit documentation](https://api.nasa.gov/assets/html/authentication.html)

**Done when:** repeated requests for the same range reuse fresh cached data, and the UI clearly identifies sample data.

### Step 6 — Finish favourites and accessibility

**Lead: Gamze. Reviewers: Maryam and Nithin.**

1. Add favourite controls to asteroid cards and detail views, connected to a shared frontend hook/Context.
2. Persist a small summary with each favourite so the saved list remains readable after the active date range changes.
3. Use namespaced identifiers such as `asteroid:2339714` and `object:mars` to keep different collections distinct.
4. Add the favourites route with removal controls and an empty state.
5. Verify keyboard navigation, form labels, focus behavior, result announcements, and mobile layouts.

**Done when:** saved objects survive a reload and the browse-to-detail-to-favourite flow works with a keyboard.

### Step 7 — Test, document, and deploy

**Owners: everyone tests their slice; Maryam coordinates integration.**

- Backend tests use mocked NASA responses, with no live API key required.
- Test mapping, missing fields, repeated feed IDs, date validation, unknown IDs, NASA failures, timeouts, and cache expiry.
- Retain the existing asteroid filtering tests.
- Test frontend loading, error/retry, empty results, date submission, detail navigation, and favourites persistence.
- Document root/frontend and `server/` installation commands, environment setup, and the two development terminals.
- For production, build React and serve its `dist` directory from Express on a host that runs Node.
- Register API routes and an API JSON 404 handler before the frontend fallback. Serve the SPA entry point for supported client routes; missing asset requests should remain 404s.
- Configure the NASA key in the hosting environment and listen on the host-provided `PORT`.
- Verify the deployed health endpoint, one live NASA request, direct detail-page refresh, and the absence of the API key from frontend assets.

**Done when:** a fresh checkout is runnable from the README and the complete flow works at the deployed URL.

## How everyone can help

| Teammate | Main deliverable | Useful support work | Reviewable evidence |
|---|---|---|---|
| Dhruv | NASA service, list endpoint, mapping, cache, filtering | Agree on data fields with the UI owners and help debug integration | API tests, sample responses, live list demo |
| Maryam | React API integration, date form, shared shell, deployment setup | Review endpoint usability and coordinate merges | Working date search, loading/retry UI, deployed app |
| Nithin | Backend detail endpoint and React detail page | Review NASA mapping and document missing-data cases | Direct detail link, not-found handling, detail tests |
| Gamze | Favourites, persisted state, responsive and accessible interactions | Review status messages and sample-data labels | Reload-persistent favourites, keyboard walkthrough, component tests |

These assignments follow the roles already listed in the repository. Each person owns a feature through its UI/state/data needs and tests, with another teammate reviewing it.

## Suggested issue and merge order

1. **Agree on the API contract and fixtures** — all teammates; Dhruv records the final field names.
2. **Express skeleton and health endpoint** — Dhruv.
3. **NASA feed service, mapping, validation, and tests** — Dhruv.
4. **React list integration and date form** — Maryam; can begin against fixtures after issue 1.
5. **Asteroid detail endpoint and page** — Nithin; can begin against fixtures after issue 1.
6. **Favourites and accessibility** — Gamze; can begin using agreed object IDs after issue 1.
7. **Cache, failure handling, and integration review** — Dhruv with the UI owners.
8. **Production serving, README, and team demo** — Maryam coordinates; everyone verifies their slice.

Use one branch and a focused pull request per issue. Agree on response-shape changes together before merging them so frontend and backend work stay compatible.

## First demo target

**Start Express → load NASA asteroids in React → filter results → open one asteroid's detail page.**

Complete that flow before adding another NASA service. Future image or daily-discovery features should get their own small endpoint after the team verifies the service's current documentation and availability.
