# CSCI 3230U - Cosmic Explorer

## Team Name

Cosmic Explorer

## Project

Cosmic Explorer is a web application with a React-based interface and legacy HTML pages being migrated gradually.

## Run locally

Use Node.js 22.13 or newer on the Node 22 release line, or Node.js 24 or newer.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite. The homepage now renders in React with the existing stylesheet. Explore and object detail pages are implemented in React using React Router.

Asteroids, About, and Milestones remain legacy HTML pages. Vite includes those pages in production builds so existing links continue to work. No NASA key is needed to browse the saved asteroid sample.

```sh
npm run lint
npm run build
npm run preview
```

The production output is in `dist/`. Serve it over HTTP, including its `pages/` and `assets/` directories. Do not open the app through `file://`.

Browser regression checks cover the production homepage, navigation, images, mobile overflow, keyboard skip link, and the existing asteroid feature:

```sh
npx playwright install chromium
npm run test:e2e
```

Alternatively, use an installed Edge browser. In PowerShell, set `$env:PLAYWRIGHT_CHANNEL = 'msedge'` before running `npm run test:e2e`.

See [the migration plan](docs/REACT_MIGRATION_PLAN.md) for progress and next steps.

All image sources live in `assets/images/`. The current React pages reference images using `/assets/...` URLs. Catalogue `cover` values are repository-relative paths into the same directory.

## React Features

- React Router for object detail pages
- Local catalogue data from `data/objects.json`
- Favourite state and reusable `FavouriteButton` component
- Object detail pages with facts and sections, including Mars
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