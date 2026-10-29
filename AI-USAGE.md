# AI usage

## #5 - Premium landing-page redesign

- **Date:** 2026-10-29
- **Member:** Dhruv Thakar.
- **Tool / model:** Opencode.
- **Branch:** `feature/cinematic-landing-page`.
- **Files:** `src/App.jsx`, `src/pages/HomePage.jsx`, `src/components/Header.jsx`,
  `src/components/Footer.jsx`, `src/components/DiscoveryCard.jsx`,
  `src/components/SpaceIcon.jsx`, `src/hooks/useLandingMotion.js`,
  `src/data/landing.js`, `assets/css/landing.css`, `assets/images/landing/*.webp`,
  `assets/images/favicon.svg`, `scripts/optimize-landing-images.py`, `index.html`,
  `tests/browser/landing.spec.js`, `tests/browser/migration.spec.js`,
  `docs/LANDING_PAGE_REDESIGN.md`, `docs/ai-prompts/landing-redesign.md`, and this file.
- **Prompt (verbatim):** See [the full original request](docs/ai-prompts/landing-redesign.md).
  The user repeated the same request through the first animation bullet while
  validation was underway; it did not change the implementation scope.
- **What it produced & what changed:** Reworked the React landing page around the
  existing brand and assets, with a cinematic Saturn hero, data-derived featured
  cards and counts, mobile navigation, scoped styling, motion controls, and honest
  sample/planned NASA feature labels. Added compressed image derivatives, a
  matching favicon, regression checks, and review documentation. Browser testing
  caught and led to fixes for menu visibility timing and a missing favicon.
- **Review:** Team review and member attribution remain pending. Validation and
  scope limits are recorded in `docs/LANDING_PAGE_REDESIGN.md`.

This checkout did not contain `AI-USAGE.md` when this task started. Existing
references to entries #1–#4 predate this work; those entries have not been
reconstructed or attributed here. The course policy remains in `docs/ai-policy.md`.
