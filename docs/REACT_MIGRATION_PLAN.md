# Cosmic Explorer — React Migration Plan

Migrate incrementally to **React + Vite + React Router**, preserving the current design. This matches the project's React foundation milestone and [React's guidance for learning-focused apps built with Vite](https://react.dev/learn/build-a-react-app-from-scratch).

## Current foundations

- 26 objects in `data/objects.json`.
- Detailed HTML profiles in `pages/`.
- Shared styling in `assets/css/styles.css`.
- Asteroid sample data in `data/asteroids.json`.
- Reusable asteroid filtering logic in `assets/js/asteroid-filters.js`, with existing tests.
- No React or npm setup yet.

## 1. Set up the React foundation

- Add Vite with JavaScript/JSX.
- Add npm scripts for development, build, preview, and linting.
- Bring the existing stylesheet into React.
- Consolidate images into one asset location and fix inconsistent `images/` and `assets/images/` references.

**Done when:** the existing homepage renders through React with its styling intact.

## 2. Extract shared layout and add routes

- Create `AppLayout`, `Header`, `Footer`, and shared card components.
- Convert Home, About, and Milestones into page components.
- Use React Router for navigation and active links.
- Preserve skip links, breadcrumbs, page titles, and section anchors.
- Map old filenames such as `thesun.html` to the canonical object ID `sun`.

| Route | Purpose |
|---|---|
| `/` | Homepage |
| `/explore` | Object catalogue |
| `/objects/:id` | Object details |
| `/asteroids` | Asteroid catalogue |
| `/about` | Project information |
| `/milestones` | Project timeline |
| `*` | Not-found page |

Reference: [React Router installation](https://reactrouter.com/start/declarative/installation).

## 3. Make the catalogue data-driven

- Extend the existing object JSON with the facts, descriptions, image alternatives, and content sections currently embedded in the 26 HTML profiles.
- Build one reusable `ObjectDetailPage` to render those records.
- Define explicit numeric units for distance and radius, keeping display formatting separate.
- Audit existing values before using them for sorting.
- Generate category counts, featured cards, and previous/next navigation from the data.

**Done when:** all 26 profiles retain their content and images without duplicated page markup.

## 4. Implement Explore interactions

- Turn the existing search, category filters, and sort selector into controlled React inputs.
- Derive results from the catalogue.
- Show an accurate result count and empty state.
- Store `q`, `type`, and `sort` in URL parameters so returning from a detail page restores the selection.

**Done when:** users can browse, search, filter, sort, and open any object using local data.

## 5. Port the working asteroid feature

- Reuse `filterAsteroids` and its existing tests.
- Replace DOM queries, template cloning, and manual event listeners with React components and state.
- Initially load the existing asteroid JSON.
- Preserve hazard filters, sorting, date formatting, and NASA links.
- Handle loading, failure, and empty results.

**Done when:** the React version matches the current asteroid functionality and handles each data-loading state.

## 6. Complete the later milestone features

The project requirements separate the local-data React foundation from the full working application. After the foundation is stable:

- Add favourites through a custom hook/Context and `localStorage`, plus a `/favourites` route.
- Connect the asteroid collection to live NASA data through a service and mapping layer.
- Add `/asteroids/:id` so API-backed items have an internal detail view.
- Handle cancelled requests, API failures, and retries.
- Keep private API credentials outside the frontend bundle; use a small server-side proxy if needed.

The controlled search/filter form can satisfy the controlled-form requirement.

## 7. Verify and prepare deployment

- Keep the existing logic tests.
- Add focused checks for catalogue filtering, detail lookup, favourites persistence, and key component interactions.
- Check mobile layouts, keyboard navigation, missing images, and browser back/forward behavior.
- Configure hosting for direct route refreshes and the correct asset base path.
- Verify the production build.

Reference: [Vite deployment documentation](https://vite.dev/guide/static-deploy).

## Suggested ownership

| Team member | Feature ownership |
|---|---|
| Maryam | App shell and Explore experience |
| Dhruv | Data integration, search, filtering, and sorting |
| Nithin | Object and asteroid detail views |
| Gamze | Favourites and accessibility |

Each feature owner should include tests for their feature.

## First reviewable milestone

**Home → Explore → Object Detail working in React with local data and the current styling.**

This document is a migration plan; implementation is separate.
