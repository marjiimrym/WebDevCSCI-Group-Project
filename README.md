# CSCI 3230U - Cosmic Explorer

## Team Name

Cosmic Explorer

## Project

Cosmic Explorer is a single-page web application for exploring astronomy and space discovery data.

## Run locally

Use Node.js 22.13 or newer on the Node 22 release line, or Node.js 24 or newer.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite. The homepage now renders in React with the existing
stylesheet. Explore, object profiles, Asteroids, About, and Milestones remain HTML
pages during this first migration step. Vite includes those pages in production
builds so existing links continue to work. No NASA key is needed to browse the
saved asteroid sample.

```sh
npm run lint
npm test
npm run build
npm run preview
```

The production output is in `dist/`. Serve it over HTTP, including its `pages/`
and `assets/` directories. Do not open the app through `file://`.

Browser regression checks cover the production homepage, navigation, images,
mobile overflow, keyboard skip link, and the existing asteroid feature:

```sh
npx playwright install chromium
npm run test:e2e
```

Alternatively, use an installed Edge browser. In PowerShell, set
`$env:PLAYWRIGHT_CHANNEL = 'msedge'` before running `npm run test:e2e`.

See [the migration plan](docs/REACT_MIGRATION_PLAN.md) for progress and next steps.
All image sources live in `assets/images/`; React imports images so Vite can
generate their production URLs. Catalogue `cover` values are repository-relative
paths into the same directory.

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

### Member 5 - UI / Accessibility Gamze

* Develop responsive layouts
* Implement accessibility requirements
* Build favourites and saved-object interfaces

## API

### NASA Open APIs

https://api.nasa.gov/

The primary data source for Cosmic Explorer will be NASA's public API platform.

Potential endpoints and datasets include:

* Astronomy Picture of the Day
* Near Earth Object Web Service
* Mars Rover Photos
* Earth imagery and related datasets

The team will finalize the specific endpoints after evaluating available data for search, filtering, and detailed object views.
