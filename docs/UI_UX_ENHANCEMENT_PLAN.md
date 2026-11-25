# Cosmic Explorer — UI/UX Enhancement Plan

software  
Deal: client-brand dark palette (`#080914` ground, `#f7f4ea` ink, `#ff9f43` accent) overrides the dealt flour-terracotta because a deep space ground and warm signal accent fit an astronomy catalogue; centred hero; nav-centre; footer-dark; close-type; space rhythm; pill buttons; initial mark; moments letters-assemble and line-carries-colour; existing Fraunces/Figtree kept as the client's own pairing.

**Date:** 2026-11-25  
**Status:** Proposed  
**Scope:** Frontend presentation, interaction design, and user experience only. No backend or data-model changes are required.  
**Baseline source:** Built React/Vite app inspected with the Playwright MCP at `1440×900` and `375×844`.

> **Post-plan decision (2026-11-25):** Every hero now uses a self-contained WebGL2 halftone nebula at `src/components/ui/halftone-nebula.jsx`, shared through `src/components/ui/HeroBackdrop.jsx` with `home`, `catalogue` and `article` variants. It is a JS port of the supplied component in the shadcn-style `components/ui` folder, with a `cosmic` preset built from this project's own palette (`#080914`, `#15182d`, `#ff9f43`, `#ffb866`, `#f7f4ea`). It replaces the low-resolution hero images and decorative star layers, and keeps the reduced-motion fallback. No Tailwind or TypeScript migration was introduced.

---

## 1. Executive summary

Cosmic Explorer already has a strong foundation: a clear dark space theme, good typography, working URL-synced filters, resilient NASA data handling, and well-structured detail pages. The main problem is not correctness — it is **density, predictability, and interactivity**.

The site currently reads like a polished static prototype. To make it feel like a modern product, the plan is to:

1. **Shrink and sharpen the catalogue card** so users can scan 26 objects quickly.
2. **Cut the home page from a long stack into one strong moment plus a curated spotlight.**
3. **Add real product interactions**: quick search, scroll-spy, live-data states, lightbox, and better empty states.
4. **Make every control intentional**: 44px targets, visible focus, clear hover/active states, honest status copy.
5. **Keep motion restrained and accessible** — one hero moment, micro-interactions elsewhere, reduced-motion support everywhere.

Target outcome: a site that still feels editorial and astronomical, but behaves like a modern explorer rather than a long article.

---

## 2. Audit baseline

### 2.1 What was checked

- Home, Explore, Object Detail, and Favourites routes in a production build.
- Desktop `1440×900` and mobile `375×844`.
- Browser console, network responses, fonts, contrast, DOM text, section heights, tap targets, filter behaviour, and lazy image loading.
- Source files: `index.html`, `src/main.jsx`, `src/App.jsx`, `src/pages/HomePage.jsx`, `src/pages/ExplorePage.jsx`, `src/pages/ObjectDetailPage.jsx`, `src/components/Header.jsx`, `src/components/Footer.jsx`, `src/components/ObjectCard.jsx`, `src/components/FavouriteButton.jsx`, `src/components/NasaHighlights.jsx`, `assets/css/styles.css`, `assets/css/nasa.css`.

### 2.2 Findings

| Area | Evidence from browser | Impact | Priority |
|---|---|---|---|
| Home length | `7,891px` desktop, `11,045px` mobile | Users must scroll many screens before reaching the real catalogue | P0 |
| Featured section | `2,432px` desktop, `3,493px` mobile | Six tall cards dominate the home page | P0 |
| Explore cards | 26 cards at `400×579px` each | Low scanability; media outweighs information | P0 |
| Favourite button | `40×40px` | Below comfortable `44px` target | P1 |
| CTA copy | “Launch Explorer →”, “Discover More”, “Ready to explore?” repeated | Generic product voice | P1 |
| Hero heading | Computed `126.4px`; DOM text `Explore theUniverse.` | Visually strong, but copy/paste and text nodes lack spacing | P2 |
| NASA live section | Plain status sentence + basic list | Live data does not feel live | P1 |
| Detail page | Good facts/TOC/prev-next, but no scroll-spy or comparison | Underexplored high-intent page | P1 |
| Mobile nav | Five text links in one `375px` row | Functional but cramped | P2 |
| Console/network | 0 errors, 0 warnings, `/api/apod` and `/api/weather` `200` | No blocking defects found | — |
| Contrast | Body `18.0:1`, muted `6.45:1`, accent `9.7:1` | Accessibility foundation is good; preserve it | — |

### 2.3 What is already working and should be preserved

- Fraunces display + Figtree body pairing.
- Deep dark palette with a single warm accent.
- Skip link, semantic landmarks, breadcrumb, sticky TOC, and labelled regions.
- URL-backed filters: `?type=planet` correctly shows 8 of 26 objects.
- Cached NASA data fallback with clear data-status messaging.
- Lazy-loaded detail route and resilient image fallback.
- Reduced-motion CSS rules already present.

---

## 3. Experience principles

Use these as decision rules during implementation.

1. **One system, one voice.** One spacing scale, one radius scale, one icon language, one motion language.
2. **One dealt moment per page.** Home gets the hero entrance; detail gets the fact/comparison moment; Explore gets quick-find and card motion. No page should animate everywhere.
3. **Equal edges.** Container and section edges should line up at every breakpoint. Currently desktop uses ~`89px` margins and mobile `20px`; keep that alignment exact.
4. **Information before decoration.** A user should find Mars, understand it, and save it without fighting tall imagery.
5. **Honest live data.** If data is cached, say so. If it is loading, show a skeleton. If it fails, offer a retry.
6. **Keyboard-first interactions.** Anything clickable must be focusable, visible, and operable without a pointer.
7. **Restraint over novelty.** No WebGL starfield, no fake 3D, no gradient soup. The cosmos is already the visual.

---

## 4. Target experience map

### 4.1 Primary flow

```text
Home hero
  → Open catalogue
  → Scan compact cards / use Quick Find
  → Open object detail
  → Compare facts / read sections
  → Save to favourites
  → Return via Favourites shelf
```

### 4.2 Secondary flow

```text
Home NASA card
  → APOD detail / source link
  → Solar flare timeline
  → Explore related object
```

### 4.3 Tertiary flow

```text
Explore
  → Search NASA imagery
  → Gallery / lightbox
  → Source attribution
  → Back to catalogue
```

---

## 5. Design system updates

### 5.1 Token layer

Extend `:root` in `assets/css/styles.css`. Keep existing names where possible and add semantic aliases.

```css
:root {
  /* Existing surfaces stay */
  --bg-primary: #080914;
  --bg-secondary: #0d1020;
  --bg-surface: #15182d;
  --bg-surface-light: #1d2140;

  /* New semantic aliases */
  --surface-1: var(--bg-secondary);
  --surface-2: var(--bg-surface);
  --surface-3: var(--bg-surface-light);
  --line: rgba(255, 255, 255, 0.10);
  --line-strong: rgba(255, 255, 255, 0.18);

  --text: #f7f4ea;
  --muted: #8a92b2;
  --accent: #ff9f43;

  /* Shape */
  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-card: 18px;
  --radius-pill: 999px;

  /* Elevation */
  --shadow-card: 0 18px 50px rgba(0, 0, 0, 0.35);
  --shadow-pop: 0 24px 80px rgba(0, 0, 0, 0.55);

  /* Motion */
  --dur-fast: 140ms;
  --dur: 220ms;
  --dur-slow: 420ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
}
```

### 5.2 Category accents

Use quiet, semantic category hues only in chips, dots, and small rules — not full backgrounds.

| Category | Hue | Usage example |
|---|---|---|
| Planet | `#5cc8d8` | chip border, 2px top rule |
| Moon | `#c9d2e3` | chip text |
| Star | `#ffd166` | live pulse, chip |
| Galaxy | `#b69cff` | chip accent |
| Nebula | `#ff8fc7` | chip accent |

### 5.3 Typography scale

| Role | Current | Target | Note |
|---|---|---|---|
| Hero `h1` | `126px` | `clamp(3.5rem, 8vw, 7rem)` | Reduce maximum; keep Fraunces |
| Section `h2` | `56px` | `clamp(2.25rem, 4vw, 3.5rem)` | Keeps rhythm |
| Card title | existing | `1.25rem / 1.2` | Tighter for compact cards |
| Body | `17px / 28px` | keep | Already readable |
| Eyebrow/label | `12.5px` mono | keep, add `0.14em` tracking | Already working |

Fix broken text nodes in `HomePage.jsx` and `ExplorePage.jsx` by inserting explicit spaces around line breaks, e.g. `Explore the{' '}Universe.`

### 5.4 Motion contract

| Element | Motion | Duration | Reduced motion |
|---|---|---|---|
| Hero entrance | translateY `12px` → `0`, opacity `0` → `1`, stagger `80ms` | `420ms` | Show immediately |
| Card hover | translateY `-2px`, image scale `1.03` | `220ms` | No transform; border colour only |
| Route change | fade + slight rise | `180ms` | Instant |
| Live pulse | opacity ring `1 → 0` | `1600ms` | Static dot |
| Modal/palette | scale `.98 → 1`, opacity | `140ms` | Opacity only |

---

## 6. Component roadmap

| ID | Component / change | Files | Outcome | Priority | Est. effort |
|---|---|---|---|---|---|
| C1 | Compact `ObjectCard` | `ObjectCard.jsx`, `styles.css` | Cards ~`340px`, scannable, full-card click | P0 | 0.5d |
| C2 | Home featured spotlight | `HomePage.jsx`, `styles.css` | 3 cards instead of 6; section ~`900px` | P0 | 0.5d |
| C3 | `FilterBar` refactor | `ExplorePage.jsx`, `styles.css` | Segmented control, counts, clear-all | P1 | 0.5d |
| C4 | `QuickFind` command palette | new `QuickFind.jsx`, `App.jsx` | `Ctrl/⌘K` object search | P1 | 1d |
| C5 | Header search affordance | `Header.jsx` | Discoverable entry to C4 | P1 | 0.25d |
| C6 | Detail enhancement | `ObjectDetailPage.jsx`, `styles.css` | Scroll-spy TOC, comparison widget, copyable facts | P1 | 1d |
| C7 | NASA live card + flare timeline | `NasaHighlights.jsx`, `nasa.css` | Live-looking, explicit states | P1 | 1d |
| C8 | NASA image gallery/lightbox | `NasaImageSearch.jsx`, `nasa.css` | Masonry grid, keyboard lightbox | P2 | 1d |
| C9 | Favourites shelf + empty states | `FavouritesPage.jsx`, `styles.css` | Save/reorder/share-intent flow | P2 | 0.5d |
| C10 | Motion + focus polish | `styles.css`, `RouteEffects.jsx` | Consistent transitions, visible focus | P2 | 0.5d |

Total estimated effort: **~6–7 developer-days**, or roughly one focused group sprint.

---

## 7. Detailed component specifications

### 7.1 `ObjectCard` — P0

**Current:** `400×579px`, tall image, title-only link, `40px` heart glyph.

**Target:**

- Width stays `~400px` on desktop; height target `320–360px`.
- Media ratio `16:10`; `object-fit: cover`; object-position tuned per image if needed.
- Eyebrow row: category chip + one key stat.
- Title link stretched across the card using `::after { inset: 0 }`.
- Favourite button is a sibling placed above the stretched link with `z-index: 2`.
- Favourite button becomes `44×44px`, circular glass surface, heart icon SVG, label + pressed state.
- Hover: card lift, border brighten, image scale; no layout shift.
- Focus: `:focus-visible` outline on the link outline wrapper, not the whole document.

**States:** default, hover, focus, favourite-on, favourite-off, image-loading skeleton.

**Acceptance criteria:**

- Card height `≤360px` at `1440px`.
- Whole card opens detail except the favourite button.
- Favourite button keyboard-operable and `aria-pressed` correct.
- No broken images after scrolling all cards into view.

---

### 7.2 Home featured spotlight — P0

**Current:** six tall cards, `2,432px` desktop / `3,493px` mobile.

**Target:**

- Show three objects: Moon, Mars, Andromeda — near, mid, far.
- Each card uses compact `ObjectCard`.
- Add a small “Why these three?” caption: one line explaining the distance range.
- Add a single “View all 26 objects →” link below.
- Section target height: `≤900px` desktop, `≤1,400px` mobile.

**Acceptance criteria:**

- Home total height reduced by at least `1,500px` desktop and `2,000px` mobile.
- Each major home section fits within ~1–1.3 viewport heights where content allows.
- No loss of access to any object — full catalogue remains one click away.

---

### 7.3 `FilterBar` — P1

**Current:** radio chips with counts and native sort select; URL sync already works.

**Keep:** URL sync, counts, native select semantics.

**Improve:**

- Wrap in a single subtle surface with a label row.
- Active chip becomes a filled pill with accent underline, not just colour change.
- Add “Clear filters” button that appears only when a filter/search is active.
- Add result summary as a live region: `Showing 8 of 26 planets · distance`.
- Add keyboard hint: `/` focuses search.

**Acceptance criteria:**

- Filter, sort, and search remain encoded in the URL.
- Clear filters resets `q`, `type`, and `sort` to defaults.
- Screen reader announces result count changes without stealing focus.

---

### 7.4 `QuickFind` — P1

**Behaviour:**

- Trigger from header search button or `Ctrl/⌘K`.
- Modal with input, grouped results: Favourites, Objects, NASA tools.
- Each result row: category dot, title, one-line summary, `↵` affordance.
- Arrow keys move active row; Enter navigates; Escape closes.
- Empty query shows recent/favourite objects.
- No results shows “No object matches ‘x’. Try a category like ‘nebula’.”

**Accessibility:**

- `role="dialog"`, `aria-modal="true"`, labelled by title.
- Focus trapped; focus returns to trigger on close.
- Active result uses `aria-activedescendant`.

**Acceptance criteria:**

- Full keyboard flow works without pointer.
- Opening the palette never changes the route until Enter.
- Works on mobile as a full-screen sheet.

---

### 7.5 Header / navigation — P1/P2

**Desktop:**

- Keep logo left, nav right.
- Add a compact search button before Explore with `⌘K` badge.
- Active nav item gets a pill background plus underline; Explore stays active on `/objects/*` (already implemented).

**Mobile:**

- Replace five cramped links with: logo, search icon, menu button.
- Menu opens a sheet with the same five links, larger `48px` rows.
- Keep the skip link as the first focusable element.

**Acceptance criteria:**

- No horizontal overflow at `375px`.
- All nav targets ≥`44px` high.
- Menu closes on route change and Escape.

---

### 7.6 Object detail — P1

**Keep:** breadcrumb, hero image, key facts, sticky TOC, sections, prev/next.

**Add:**

1. **Scroll-spy TOC**  
   Active section highlighted using `IntersectionObserver`; anchor focus moves with `scroll-margin-top` accounting for header height.

2. **Scale comparison strip**  
   A small widget under Key facts:

   ```text
   Earth radius          ██████████ 6,371 km
   Selected object       ████████████████████ 69,911 km
   ```

   Use a horizontal bar with accessible text, not colour alone.

3. **Copyable facts**  
   Each `.fact` gets a small copy icon; click copies `Radius: 6,371 km`; button announces “Copied”.

4. **Richer prev/next**  
   Show thumbnail, category, and title instead of text-only links.

**Acceptance criteria:**

- TOC active state updates while scrolling.
- Comparison has text equivalent for screen readers.
- Copy action works and has a visible confirmation for 2 seconds.
- Detail page remains under ~`4,200px` desktop.

---

### 7.7 NASA live section — P1

**APOD card:**

- Full-bleed image on desktop, stacked on mobile.
- Overlay badge: `NASA / APOD`.
- Status line: `Updated 11:17 AM · cached copy` with a live dot when fresh.
- Title + source link above the fold.
- Explanation in a collapsible `<details>` or expand button, collapsed by default on mobile.

**Solar flare timeline:**

- Convert the current list into a horizontal/vertical timeline with severity colour and time.
- Each item: class label, peak time, short note.
- Add “Past 7 days · DONKI research data, not an operational forecast”.

**States:** loading skeleton, fresh, cached, error + retry, empty.

**Acceptance criteria:**

- No layout jump when API data resolves.
- Cached and live states are visually distinct.
- Retry re-runs the existing `useNasa` fetch path.
- Reduced motion turns the live pulse into a static dot.

---

### 7.8 NASA image gallery / lightbox — P2

**Current:** text input + button + plain result text.

**Target:**

- Results render as a responsive masonry grid with thumbnails and source IDs.
- Click opens a lightbox with large image, title, date, centre, and NASA source link.
- Lightbox supports ArrowLeft/ArrowRight/Escape and focus trap.
- Images lazy-load with blurred placeholder.

**Acceptance criteria:**

- Keyboard navigation works in lightbox.
- Every image has meaningful alt text or is explicitly decorative.
- Empty/error states provide a retry and example queries.

---

### 7.9 Favourites — P2

**Target:**

- Grid uses the compact `ObjectCard`.
- Add a “Favourites shelf” row on Home if at least one saved object exists.
- Empty state: illustration-free, plain copy + two suggested cards.
- Optional reorder with drag handle; preserve localStorage order.

**Copy example:**

> Nothing saved yet. Tap the heart on any object to keep it here.

**Acceptance criteria:**

- Favourites persist across reloads and routes.
- Removing a favourite updates count in header and empty state immediately.
- Empty state offers a real next action.

---

### 7.10 Motion and focus polish — P2

- Add one shared `Reveal` wrapper using `IntersectionObserver` for section entrances; do not animate every card individually.
- Route transitions via `RouteEffects.jsx`: fade + `translateY(6px)`, `180ms`.
- Global `:focus-visible` ring: `2px solid var(--accent)`, `3px` offset.
- Add `scroll-margin-top: calc(var(--header-h) + 1rem)` to all heading anchors.
- Extend existing `@media (prefers-reduced-motion: reduce)` to disable transforms and pulses.

---

## 8. Copy and voice guide

### 8.1 Voice rules

- Plain, specific, curious. No marketing fog.
- Prefer numbers and named objects over adjectives.
- One idea per headline.
- Buttons describe the destination or action, not the brand.
- Data status states exactly what is true: live, cached, loading, failed.

### 8.2 Before / after

| Location | Current | Proposed |
|---|---|---|
| Hero title | Explore the Universe. | 26 objects. One searchable sky. |
| Hero copy | Cosmic Explorer is your guide to the night sky... | Start with the Moon. End at Andromeda. Browse planets, moons, stars, galaxies and nebulae, then open any one for the facts that define it. |
| Primary CTA | Launch Explorer → | Open the catalogue |
| Secondary CTA | Discover More | Read the field guide |
| Section CTA | Ready to explore? | Pick a starting point |
| NASA status | Showing cached NASA data. Last successful update: ... | NASA data · updated 11:17 AM · cached copy |
| Search hint | Search by name, e.g. Saturn | Try Mars, nebula, or 1 AU |
| Empty favourites | generic empty page | Nothing saved yet. Tap the heart on any object to keep it here. |
| Footer | Discover the cosmos with our local catalogue. | A course project built on NASA open data. |

Keep the existing section title **“From our nearest neighbour to the nearest large galaxy.”** It is specific and already sounds like the product.

---

## 9. Accessibility and UX standards

### 9.1 Non-negotiables

- All interactive targets ≥`44×44px`.
- Visible `:focus-visible` on every interactive element.
- No colour-only meaning; pair colour with text or shape.
- Headings in order; no skipped levels.
- Decorative images use `alt=""`; informative images describe the object.
- Live regions for result counts, data status, and copy confirmations.
- `prefers-reduced-motion` disables transforms, pulses, and parallax.
- Text contrast stays at or above current levels (`6.45:1` minimum measured for muted text).

### 9.2 Keyboard map

| Action | Key |
|---|---|
| Skip to main | Tab from page load |
| Open Quick Find | `Ctrl/⌘K` or header button |
| Focus catalogue search | `/` while on Explore |
| Move Quick Find results | ArrowUp / ArrowDown |
| Select Quick Find result | Enter |
| Close modal/menu/lightbox | Escape |
| Move lightbox images | ArrowLeft / ArrowRight |
| Toggle favourite | Tab to heart, Enter or Space |

---

## 10. Responsive behaviour

| Breakpoint | Layout rule |
|---|---|
| `≥1200px` | 3-column card grid, `1248px` container, hero side media |
| `768–1199px` | 2-column card grid, stacked hero media if needed |
| `600–767px` | 2-column compact cards, simplified filter chips, NASA media stacked |
| `<600px` | 1-column cards, 20px edges, menu sheet, full-screen Quick Find |
| Any width | No horizontal overflow; equal left/right container edges |

Page-height targets after implementation:

| Page | Current | Target |
|---|---|---|
| Home desktop | `7,891px` | `≤5,200px` |
| Home mobile | `11,045px` | `≤6,500px` |
| Explore desktop | `7,387px` | `≤4,800px` with load-more/pagination |
| Featured section desktop | `2,432px` | `≤900px` |
| Featured section mobile | `3,493px` | `≤1,400px` |

---

## 11. Implementation phases

### Phase 0 — Baseline and tokens

**Deliverables**

- Add/extend tokens in `assets/css/styles.css`.
- Add focus ring and reduced-motion extensions.
- Fix broken heading text nodes.
- Record Playwright screenshots + measurements before/after.

**Done when:** tokens are used by at least the card, chip, and button components.

### Phase 1 — Card and home compression

**Deliverables**

- C1 compact `ObjectCard`.
- C2 home featured spotlight.
- C10 basic hover/focus polish.

**Done when:** page-height targets met, card click target verified, favourites still work.

### Phase 2 — Find and filter

**Deliverables**

- C3 `FilterBar`.
- C4 `QuickFind`.
- C5 header search/menu.

**Done when:** keyboard-only flow works from header → palette → detail → back.

### Phase 3 — Depth and live data

**Deliverables**

- C6 detail enhancements.
- C7 NASA live card and flare timeline.

**Done when:** scroll-spy, copy, comparison, cached/fresh/retry states verified.

### Phase 4 — Gallery, favourites, QA

**Deliverables**

- C8 gallery/lightbox.
- C9 favourites shelf and empty states.
- Full accessibility and responsive regression pass.

**Done when:** QA checklist below is fully checked and no P0/P1 items remain.

---

## 12. QA checklist

### Functional

- [ ] All 26 objects reachable from Explore.
- [ ] Filter and sort update URL and back/forward works.
- [ ] Favourites add/remove persists after reload.
- [ ] Quick Find opens, filters, navigates, closes.
- [ ] NASA APOD/weather show loading, cached, fresh, and error states.
- [ ] Image gallery lightbox navigates and closes.
- [ ] No console errors on any route.

### Visual

- [ ] Container edges align across all sections.
- [ ] Cards have consistent height and media ratio.
- [ ] No layout shift when images/data load.
- [ ] Active nav and filter states are unmistakable.
- [ ] Accent used sparingly and consistently.

### Accessibility

- [ ] Keyboard-only pass on Home, Explore, Detail, Favourites.
- [ ] Focus visible everywhere; no focus trapped incorrectly.
- [ ] All targets ≥`44px`.
- [ ] Headings ordered; landmarks labelled.
- [ ] Contrast still ≥`4.5:1` for body and muted text.
- [ ] Reduced-motion pass with no transforms or pulses.

### Responsive

- [ ] `1440`, `1024`, `768`, `390`, `375` widths checked.
- [ ] No horizontal scroll.
- [ ] Mobile menu and Quick Find sheet usable one-handed.
- [ ] NASA media does not overflow.

---

## 13. Success metrics

| Metric | Baseline | Target |
|---|---:|---:|
| Home page height, desktop | `7,891px` | `≤5,200px` |
| Home page height, mobile | `11,045px` | `≤6,500px` |
| Explore card height | `579px` | `≤360px` |
| Favourite target size | `40px` | `44px` |
| Console errors | `0` | `0` |
| Keyboard-blocking issues | not fully tested | `0` |
| Section fit | featured `2.7` screens | featured `≤1.2` screens |

Qualitative success: a new visitor can understand what the app does, find one object, open it, and save it within **three interactions**.

---

## 14. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Reducing featured cards feels like lost content | Keep one clear link to all 26 objects; add “Why these three?” caption |
| Quick Find adds complexity | Build it as one isolated component; keep native Explore filters untouched |
| More motion hurts performance | CSS-only effects; one hero entrance; no WebGL |
| Category colours become noisy | Use only in chips/dots/rules, never large fills |
| NASA data states become confusing | Use one shared `DataStatus` pattern with exact labels |
| Mobile menu hides navigation | Keep search and menu buttons visible; sheet includes all links |
| Scope creep into backend | Explicitly out of scope: API changes, auth, database, object data schema |

---

## 15. File impact map

| File | Likely changes |
|---|---|
| `assets/css/styles.css` | Tokens, card rules, nav states, motion, focus, heading spacing |
| `assets/css/nasa.css` | Live card, timeline, gallery, skeleton states |
| `src/pages/HomePage.jsx` | 3-card spotlight, favourites shelf, copy updates |
| `src/pages/ExplorePage.jsx` | FilterBar wiring, load-more/pagination, live summary |
| `src/pages/ObjectDetailPage.jsx` | Scroll-spy, comparison strip, copyable facts, richer prev/next |
| `src/pages/FavouritesPage.jsx` | Empty state, shelf behaviour |
| `src/components/ObjectCard.jsx` | Full card component rebuild |
| `src/components/FavouriteButton.jsx` | SVG icon, 44px target, tooltip |
| `src/components/Header.jsx` | Search trigger, mobile menu sheet |
| `src/components/NasaHighlights.jsx` | APOD card + flare timeline states |
| `src/components/NasaImageSearch.jsx` | Gallery + lightbox |
| `src/components/RouteEffects.jsx` | Route transition timing |
| `src/App.jsx` | Quick Find mount point if global |

---

## 16. Explicit non-goals

- No new framework, CSS-in-JS library, or component kit.
- No WebGL/shader hero scene — **superseded by explicit request**; one contained hero shader was added later.
- No dark-mode toggle — the product is intentionally dark.
- No infinite scroll — use explicit load-more/pagination.
- No backend, API key management, auth, or database changes.
- No rewriting the object dataset.

---

## 17. Recommended next action

Start with **C1 + C2 together**: rebuild `ObjectCard` and reduce the home featured section to three cards. This pair gives the largest visible improvement for the smallest risk, and it creates the component that every later phase reuses.

After that, run a quick Playwright pass at `1440` and `375` again and compare against the baseline table in Section 2.2 before moving to Quick Find.
