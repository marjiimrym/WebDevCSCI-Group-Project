# AI usage

## #1 — Milestone 2 code and branch review

- **Date:** 2026-11-01
- **Member:** Dhruv Thakar (repository contributor)
- **Tool / model:** Codex; account tier was not verified.
- **Files:** No project source files changed for this review.
- **Prompt:** Not reproduced or saved, at the contributor's request.
- **What it produced:** Reviewed the React app, local catalogue, component props, UI state, event handling, routes, `.gitignore`, milestone tag, and visible Git history against the supplied Milestone 2 criteria. Compared the synchronized `dhruv` branch with `main` and created the local `audit/milestone-2-react-foundation` branch. No code was generated in this review.


### #2 - Persist favourites with a useFavourites hook
- **Date:** 2026-11-15
- **Member:** Gamze Esen Erdemir
- **Tool / model:** Claude (Claude Code)
- **Files:** `src/lib/favourites.js`, `src/hooks/useFavourites.js`, `tests/favourites.test.mjs`, `src/App.jsx`
- **Prompt:** Let's do my required M3 tasks. Don't edit the code yourself, explain it to me and I'll write it.

- **What it produced** The AI explained the design and suggested the code, and I typed it myself. The favourites logic (toggle, load, save) lives in a plain module so it can be tested with `node --test` without a browser. It is wrapped in a `useFavourites` hook that reads `localStorage` once on start and saves whenever the list changes. Broken or blocked storage falls back to an empty list instead of crashing. I ran the tests, refreshed the browser to confirm favourites persist, and checked the stored value in DevTools.
