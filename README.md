# CSCI 3230U - Cosmic Explorer

## Team Name

Cosmic Explorer

## Project

Cosmic Explorer is a React single-page application for exploring astronomy and space discovery data. All pages render from JSX using React Router.

## Run locally

Use Node.js 22.13 or newer on the Node 22 release line, or Node.js 24 or newer.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite. The landing page is at `/`, and the catalogue is at `/explore`.

The routes are `/`, `/explore`, `/objects/:id`, `/favourites`, `/asteroids`, `/about`, and `/milestones`. All 26 object profiles retain their original facts, images, sections, and previous/next links. Old `/pages/*.html` URLs redirect to the matching React routes, including `/pages/thesun.html` → `/objects/sun`. Unknown URLs show a recovery page. No NASA key is needed to browse the saved asteroid sample.

```sh
npm run lint
npm run build
npm run preview
```

The production output is in `dist/`. Serve it over HTTP at the domain root. Configure your host to serve `index.html` for routes that do not match a static file, so direct links and page refreshes work. `public/_redirects` provides that fallback for hosts supporting this format (such as Netlify); other hosts need the equivalent SPA rewrite. Vite's development and preview servers already provide it. Do not open the app through `file://` or a static Live Server without route fallback.

`index.html` is the required Vite entry shell; all page content lives in `src/pages/*.jsx` and `src/pages/objects/*.jsx`.

Browser regression checks cover the production landing page, every profile, legacy redirects, direct links and refreshes, navigation/back, images, mobile overflow, keyboard skip link, favourites, and both catalogues' filters:

```sh
npx playwright install chromium
npm run test:e2e
```

Alternatively, use an installed Edge browser. In PowerShell, set `$env:PLAYWRIGHT_CHANNEL = 'msedge'` before running `npm run test:e2e`.

See [the migration plan](docs/REACT_MIGRATION_PLAN.md) for progress and next steps.

All image sources live in `assets/images/`. React imports them through Vite so the production build includes the correct asset URLs. Catalogue `cover` values are resolved by `src/data/images.js`.

## React Features

- React Router for every page, with legacy URL redirects and a not-found page
- Local catalogue data from `data/objects.json`
- Favourite state and reusable `FavouriteButton` component
- All 26 object detail pages with full facts and sections
- Search, filters, and sorting for objects and asteroids, stored in URL parameters
- Responsive layouts and accessibility support

## Team Members & Roles

### Member 1 - Project Lead / Frontend - Maryam

* Coordinate project structure and development
* Build the main Explore page
* Implement reusable UI components

### Member 2 - API / Data - Dhruv

* Research and integrate the NASA API
* Define the application's data structure
* Handle API data mapping and sample data

### Member 3 - Search / Filtering - Dhruv

* Design and implement search functionality
* Implement filtering and sorting
* Build the search results interface

### Member 4 - Object Details / Missions - Nithin

* Build astronomical object detail pages
* Design mission-related interfaces
* Create detailed object and mission views

### Member 5 - UI / Accessibility - Gamze

* Develop responsive layouts
* Implement accessibility requirements
* Build favourites and saved-object interfaces

## API

[https://api.nasa.gov/](https://api.nasa.gov/)

NASA's public API platform provides access to astronomy and space-related datasets.

[https://exoplanetarchive.ipac.caltech.edu/](https://exoplanetarchive.ipac.caltech.edu/)


The project includes a NASA Exoplanet Archive TAP API data script.
The script retrieves selected exoplanet records and saves them locally
in `public/data/exoplanets.json`.

To download or refresh the exoplanet data, run:

```sh
node scripts/downloadPlanets.mjs
```

The React application also uses local catalogue data from
`data/objects.json`.

Potential additional endpoints and datasets include:

* Astronomy Picture of the Day
* Near Earth Object Web Service
* Mars Rover Photos
* Earth imagery and related datasets

The team will evaluate additional endpoints as development continues.
