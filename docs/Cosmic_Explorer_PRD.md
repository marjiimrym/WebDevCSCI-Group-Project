# CSCI 3230U — Cosmic Explorer
## Product Requirements Document (PRD)

**Team Name:** Cosmic Explorer  
**Course:** CSCI 3230U  
**Application Type:** Single-Page Web Application (SPA)  
**Primary Data Source:** NASA Open APIs

---

# 1. Product Overview

## Product Vision

Cosmic Explorer is an interactive astronomy discovery platform that allows users to explore space-related objects, missions, imagery, and scientific information through a visually engaging and accessible single-page web application.

The application transforms NASA's publicly available astronomy data into an intuitive exploration experience where users can:

- Browse space discoveries
- Search for astronomical objects and content
- Filter and sort results
- View detailed information
- Explore NASA imagery
- Discover missions and related information
- Save/favourite interesting objects
- Navigate between discovery and detailed views without leaving the application

The application should feel like a modern **space-exploration dashboard**, rather than simply displaying raw NASA API responses.

---

# 2. Problem Statement

NASA provides a large amount of publicly available astronomy and space data through its APIs. However, this information is distributed across different datasets and endpoints and is generally presented in a developer-oriented format.

Users need a more approachable interface that allows them to:

> **Discover → Search → Filter → Explore → Understand → Save**

Cosmic Explorer will provide a unified interface for discovering and interacting with this information.

---

# 3. Goals

## Primary Goals

### G1 — Space Discovery

Allow users to easily discover astronomy and space-related content.

Users should be able to browse:

- Astronomical objects
- NASA imagery
- Near-Earth objects
- Mars imagery
- Missions
- Other supported NASA datasets

### G2 — Search

Provide a fast and intuitive search experience.

Users should be able to search for:

- Object names
- Missions
- Dates
- Categories
- NASA content

### G3 — Filtering & Sorting

Allow users to narrow large datasets using filters and sorting.

Potential filters include:

- Object type
- Date
- Mission
- Distance
- Size
- Relevance
- Recently added
- Alphabetical order

The exact filters will depend on the final NASA datasets selected.

### G4 — Detailed Exploration

Provide a detailed view for individual objects/content items.

A detail page should expose useful information without requiring users to understand NASA's raw API structure.

### G5 — Favourites

Allow users to save interesting objects/content for later.

### G6 — Accessibility

The application must be usable across:

- Desktop
- Tablet
- Mobile

and follow appropriate accessibility practices.

---

# 4. Non-Goals

Cosmic Explorer will not attempt to:

- Build a complete replacement for NASA's website
- Provide professional astronomical analysis
- Generate original scientific discoveries
- Implement real-time satellite tracking unless supported by the selected API
- Build a full user social network
- Implement complex user accounts unless required by the course
- Store or reproduce the entire NASA dataset locally

The application is primarily an **exploration and visualization interface** over NASA's public data.

---

# 5. Target Users

## Curious Explorer

A user interested in:

- Space
- Astronomy
- NASA
- Planets
- Asteroids
- Space missions
- Astronomy photography

They may not have technical or scientific expertise.

## Student / Learner

A student who wants to quickly learn about:

- Astronomical objects
- Space missions
- NASA discoveries
- Planetary exploration

## Space Enthusiast

A user who wants to:

- Browse interesting objects
- Search specific objects
- Save favourites
- Explore NASA imagery and information

---

# 6. Core User Journey

```text
Landing / Explore
       ↓
Browse NASA Content
       ↓
Search / Filter
       ↓
Results
       ↓
Select Object
       ↓
Object Details
       ↓
Related Mission / Content
       ↓
Favourite / Save
```

---

# 7. Information Architecture

The application should use a SPA navigation model.

## Primary Navigation

```text
Cosmic Explorer
│
├── Explore
├── Discoveries
├── Missions
├── Favourites
└── Search
```

Potential landing experience:

```text
┌──────────────────────────────────────────────┐
│ COSMIC EXPLORER    Explore  Missions  ♥      │
├──────────────────────────────────────────────┤
│                                              │
│              Explore the Universe            │
│                                              │
│        [ Search the cosmos... ]              │
│                                              │
├──────────────────────────────────────────────┤
│ Featured NASA Content                        │
│                                              │
│ [ Object ] [ Object ] [ Object ]             │
│                                              │
└──────────────────────────────────────────────┘
```

---

# 8. Explore Page

**Owner:** Maryam

The Explore page is the application's primary landing experience.

## Requirements

The page should contain:

- Hero section
- Global search
- Featured NASA content
- Popular/interesting discoveries
- Recent content
- Quick category navigation
- Responsive object cards

## Example Categories

```text
Explore
├── Near-Earth Objects
├── Mars
├── Astronomy Pictures
├── Missions
└── Earth
```

## Object Card

Each card should display:

- Image
- Object/content name
- Category
- Short description
- Relevant metadata
- Favourite button
- View details action

---

# 9. Search

**Owner:** Dhruv

Search should be available globally.

## Search Bar

```text
┌─────────────────────────────────────────────┐
│ 🔍 Search planets, asteroids, missions...   │
└─────────────────────────────────────────────┘
```

## Search Behavior

Users should be able to:

1. Enter a search query
2. Submit the query
3. Receive matching results
4. See result count
5. Refine results with filters
6. Sort results
7. Open a result

## Search States

### Initial

```text
Search NASA's universe
```

### Loading

```text
Searching the cosmos...
```

### Results

```text
42 results found
```

### No Results

```text
No cosmic objects found.

Try another search term.
```

### Error

```text
NASA data couldn't be loaded.

Try again
```

---

# 10. Filtering

**Owner:** Dhruv

Filters should appear on the search/results interface.

Example:

```text
FILTERS

Object Type
□ Asteroid
□ Comet
□ Planet
□ Moon

Mission
□ Mars Rover
□ Artemis
□ Voyager

Date
[ From ] [ To ]

Distance
[ Minimum ] [ Maximum ]

        Apply Filters
```

The exact filters should be based on the final NASA APIs selected.

## Filter Requirements

Filters must:

- Work independently
- Support multiple filters simultaneously
- Update the displayed result set
- Be removable
- Provide a clear-all option

Example:

```text
Active filters:

Asteroid ×
2026 ×
Near Earth ×

[ Clear all ]
```

---

# 11. Sorting

Users should be able to sort results.

Possible options:

```text
Sort by:

Relevance
Name A–Z
Name Z–A
Newest
Oldest
Distance
Size
```

Only options supported by the selected dataset should be shown.

---

# 12. Object Details

**Owner:** Nithin

Each NASA object/content item should have a dedicated detail view.

## Detail Layout

```text
┌─────────────────────────────────────────────┐
│ ← Back                                      │
│                                             │
│              OBJECT IMAGE                   │
│                                             │
├─────────────────────────────────────────────┤
│ Object Name                       ♡ Save    │
│                                             │
│ Type: Asteroid                              │
│                                             │
│ Description                                 │
│ Lorem ipsum...                              │
│                                             │
├─────────────────────────────────────────────┤
│ Key Information                             │
│                                             │
│ Discovery Date    XXXX                      │
│ Size              XXXX                      │
│ Distance          XXXX                      │
│ Mission           XXXX                      │
│                                             │
├─────────────────────────────────────────────┤
│ Related Content                             │
│ [ Card ] [ Card ] [ Card ]                  │
└─────────────────────────────────────────────┘
```

## Requirements

Details should:

- Clearly identify the object
- Display NASA-provided information
- Display imagery when available
- Display structured metadata
- Provide a favourite/save action
- Provide related content
- Provide navigation back to results

---

# 13. Missions

**Owner:** Nithin

The Missions section allows users to discover NASA missions associated with supported data.

Potential mission information:

- Mission name
- Mission description
- Launch date
- Destination
- Mission status
- Mission imagery
- Related astronomical objects
- NASA links

Example:

```text
MISSIONS

┌──────────────┐
│ Artemis      │
│ Moon         │
│ Active       │
│ View Mission │
└──────────────┘

┌──────────────┐
│ Mars Rover   │
│ Mars         │
│ Active       │
│ View Mission │
└──────────────┘
```

---

# 14. Favourites

**Owner:** Gamze

Users should be able to save objects/content they are interested in.

## Favourite Button

Unselected:

```text
♡
```

Saved:

```text
♥
```

## Favourites Page

```text
MY FAVOURITES

12 saved objects

[ Asteroid ] [ Mars Image ] [ Mission ]
[ Asteroid ] [ Planet ]    [ Mission ]
```

Users should be able to:

- Save an item
- Remove an item
- View saved items
- Open item details

If authentication is not implemented, favourites can use browser local storage.

---

# 15. NASA API Integration

**Owner:** Dhruv

The application will use NASA Open APIs.

Primary API platform:

https://api.nasa.gov/

## Potential APIs

### Astronomy Picture of the Day

Useful for:

- Featured content
- Daily astronomy imagery
- Educational discovery

### Near Earth Object Web Service

Useful for:

- Asteroid discovery
- Search
- Filtering
- Distance information
- Object details

### Mars Rover Photos

Useful for:

- Mars exploration
- Rover imagery
- Mission-based browsing

### Earth Imagery

Potentially useful for:

- Earth imagery
- Geographic exploration

The team will finalize the exact endpoints after evaluating:

- Data quality
- Searchability
- Filtering capabilities
- Availability
- Rate limits
- Relevance to the application's core user journey

---

# 16. API Architecture

Do **not** allow individual UI components to directly handle raw NASA API responses.

Use a centralized API/data layer.

Recommended structure:

```text
src/
├── api/
│   ├── nasa.ts
│   ├── apod.ts
│   ├── neo.ts
│   ├── mars.ts
│   └── earth.ts
│
├── types/
│   ├── nasa.ts
│   ├── objects.ts
│   └── missions.ts
│
├── services/
│   ├── searchService.ts
│   ├── filterService.ts
│   └── favoritesService.ts
│
├── components/
│   ├── SearchBar
│   ├── ObjectCard
│   ├── FilterPanel
│   ├── SortDropdown
│   ├── LoadingState
│   └── ErrorState
│
├── pages/
│   ├── Explore
│   ├── SearchResults
│   ├── ObjectDetails
│   ├── Missions
│   └── Favorites
│
└── App
```

---

# 17. Data Normalization

Different NASA APIs return different data structures.

The frontend should not depend directly on each API's raw schema.

Instead, normalize data into a common application model.

Example:

```typescript
interface CosmicObject {
  id: string;
  name: string;
  type: string;
  description?: string;
  imageUrl?: string;
  date?: string;
  mission?: string;
  metadata: Record<string, unknown>;
  source: string;
}
```

This allows components such as `ObjectCard` to work regardless of whether the underlying data came from:

- NEO API
- Mars API
- APOD
- Earth imagery

---

# 18. Sample Data / API Fallback

The application should support sample/mock data during development.

Architecture:

```text
NASA API
   ↓
API Service
   ↓
Data Mapper
   ↓
Normalized CosmicObject
   ↓
React Components
```

If the NASA API is unavailable:

```text
NASA API unavailable
        ↓
Fallback/sample data
        ↓
Application remains usable
```

This is useful for:

- Development
- Testing
- Demonstrations
- API outage handling

---

# 19. API Error Handling

The application must gracefully handle:

## Network Failure

```text
Unable to connect to NASA.

Please try again.
```

## API Rate Limit

```text
NASA API request limit reached.

Please try again later.
```

## Invalid Response

```text
We couldn't understand the NASA data.

Please try again.
```

## Missing Image

Use a visually consistent fallback:

```text
Image unavailable
```

The UI should **never crash because one NASA API request fails.**

---

# 20. Loading States

Use loading indicators for asynchronous API operations.

Examples:

```text
Loading cosmic data...
```

Skeleton cards are preferred over blank screens.

Example:

```text
┌─────────────┐
│ ░░░░░░░░░░  │
│ ░░░░░░░░░░  │
│ ░░░░░░░░░░  │
└─────────────┘
```

---

# 21. Accessibility Requirements

**Owner:** Gamze

The application should follow WCAG-oriented accessibility practices.

Requirements:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Accessible buttons
- Accessible form controls
- Appropriate heading hierarchy
- Alt text for meaningful images
- Decorative images marked appropriately
- Sufficient color contrast
- No information conveyed through colour alone
- Responsive text
- Screen-reader-friendly labels

Example:

```html
<button aria-label="Add Mars Rover photo to favourites">
  ♡
</button>
```

---

# 22. Responsive Design

The application must work across:

## Desktop

```text
1440px+
```

## Tablet

```text
768px – 1439px
```

## Mobile

```text
<768px
```

Cards should adapt:

```text
Desktop:

[ Card ][ Card ][ Card ][ Card ]


Tablet:

[ Card ][ Card ][ Card ]


Mobile:

[ Card ]
[ Card ]
[ Card ]
```

---

# 23. Visual Design Direction

Cosmic Explorer should have a **modern futuristic space aesthetic**.

## Design Keywords

- Deep space
- Scientific
- Futuristic
- Minimal
- Cinematic
- Clean
- High contrast
- Premium

## Suggested Visual System

```text
Background
    ↓
Dark space environment

Cards
    ↓
Subtle translucent surfaces

Accent
    ↓
Cool blue / space-inspired accent

Typography
    ↓
Modern sans-serif

Images
    ↓
Large astronomical photography
```

Avoid making the interface look like a generic dashboard.

The primary visual emphasis should be on **space imagery and discovery**.

---

# 24. Performance Requirements

The application should:

- Avoid unnecessary API requests
- Cache repeated API requests where appropriate
- Lazy-load images
- Avoid loading huge datasets at once
- Use pagination or progressive loading where necessary
- Keep UI interactions responsive
- Avoid unnecessary React re-renders

Example:

```text
Search:
"asteroid"

      ↓

NASA API

      ↓

Cache result

      ↓

Repeated search
      ↓
Use cached result
```

---

# 25. State Management

Application state should include:

```typescript
interface AppState {
  searchQuery: string;

  filters: {
    type?: string;
    mission?: string;
    dateFrom?: string;
    dateTo?: string;
  };

  sortBy: string;

  results: CosmicObject[];

  selectedObject?: CosmicObject;

  favorites: string[];

  loading: boolean;

  error?: string;
}
```

Keep state localized where possible and avoid unnecessary global state.

---

# 26. Search + Filtering Architecture

Recommended flow:

```text
User Input
    ↓
Search Query
    ↓
NASA API
    ↓
Normalize Data
    ↓
Filter
    ↓
Sort
    ↓
Results
    ↓
Object Cards
```

For datasets where server-side filtering is available:

```text
Search
 ↓
NASA API Query
 ↓
Results
```

For datasets where API filtering is limited:

```text
NASA API
 ↓
Normalized Dataset
 ↓
Client-side Filtering
 ↓
Sorting
```

---

# 27. User Stories

## Discovery

**US-01**

> As a user, I want to browse featured space content so that I can discover interesting astronomical information without searching for it.

**US-02**

> As a user, I want to browse different categories of space content so that I can explore areas that interest me.

## Search

**US-03**

> As a user, I want to search for astronomical objects so that I can quickly find specific information.

**US-04**

> As a user, I want search results to update based on my query so that I can efficiently find relevant content.

## Filtering

**US-05**

> As a user, I want to filter results by category so that I can narrow down the information displayed.

**US-06**

> As a user, I want to sort results so that I can organize information according to my preference.

## Details

**US-07**

> As a user, I want to open an object's details so that I can learn more about it.

**US-08**

> As a user, I want to see relevant imagery so that I can visually understand the object or mission.

## Favourites

**US-09**

> As a user, I want to save interesting objects so that I can return to them later.

**US-10**

> As a user, I want to remove saved objects so that I can manage my favourites.

---

# 28. Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | Application loads as an SPA | Must |
| FR-02 | NASA API integration | Must |
| FR-03 | Browse NASA content | Must |
| FR-04 | Global search | Must |
| FR-05 | Search results interface | Must |
| FR-06 | Filtering | Must |
| FR-07 | Sorting | Should |
| FR-08 | Object detail view | Must |
| FR-09 | Mission information | Should |
| FR-10 | Favourites | Must |
| FR-11 | Responsive design | Must |
| FR-12 | Accessibility support | Must |
| FR-13 | API error handling | Must |
| FR-14 | Loading states | Must |
| FR-15 | Sample/mock data | Should |
| FR-16 | Related content | Should |
| FR-17 | API caching | Could |

---

# 29. Non-Functional Requirements

## NFR-01 — Performance

Common interactions should feel instantaneous and API loading should provide clear feedback.

## NFR-02 — Reliability

A failed API request should not crash the application.

## NFR-03 — Accessibility

Core functionality must be accessible using keyboard navigation and assistive technologies.

## NFR-04 — Responsiveness

The application must function across desktop, tablet, and mobile.

## NFR-05 — Maintainability

API logic, UI components, types, and business logic should be separated.

## NFR-06 — Scalability

Adding another NASA endpoint should not require rewriting existing components.

---

# 30. Team Responsibilities

## Maryam — Project Lead / Frontend

### Responsibilities

- Project architecture
- Explore page
- Main layout
- Navigation
- Reusable components
- Frontend integration
- Overall UI consistency

### Deliverables

```text
Explore Page
Navigation
Layout System
Reusable Components
Frontend Architecture
```

---

## Dhruv — API / Data

### Responsibilities

- NASA API research
- Endpoint selection
- API integration
- Data models
- Data normalization
- API error handling
- Mock/sample data
- API documentation

### Deliverables

```text
NASA API Service
Data Types
Data Mappers
API Error Handling
Sample Data
API Documentation
```

---

## Dhruv — Search / Filtering

### Responsibilities

- Search architecture
- Search UI
- Search results
- Filtering
- Sorting
- Search states
- Result interactions

### Deliverables

```text
Search Bar
Search Results
Filter Panel
Sort Controls
Empty States
Search Logic
```

---

## Nithin — Object Details / Missions

### Responsibilities

- Object detail pages
- Mission interfaces
- Related objects
- Mission data presentation
- Detail-page navigation

### Deliverables

```text
Object Details
Mission Details
Related Content
Metadata UI
```

---

## Gamze — UI / Accessibility

### Responsibilities

- Responsive design
- Accessibility
- Favourites
- Saved-object interface
- Mobile layouts
- Accessibility testing

### Deliverables

```text
Responsive Layout
Accessibility
Favourites
Saved Objects
Mobile UX
```

---

# 31. MVP

The minimum viable application should include:

```text
✓ SPA architecture
✓ Explore page
✓ NASA API integration
✓ Search
✓ Search results
✓ Filtering
✓ Sorting
✓ Object details
✓ Favourites
✓ Responsive UI
✓ Accessibility
✓ Loading states
✓ Error states
```

---

# 32. Stretch Goals

If the core application is complete, potential extensions include:

## S1 — Advanced Search

Search across multiple NASA datasets simultaneously.

## S2 — Related Objects

```text
Asteroid
   ↓
Related Mission
   ↓
Related NASA Images
```

## S3 — Astronomy Timeline

Allow users to explore discoveries chronologically.

## S4 — Interactive Visualizations

Potential visualizations:

- Asteroid distance
- Object size
- Mission timelines
- Planetary comparisons

## S5 — Daily Discovery

A rotating daily NASA discovery.

## S6 — Personalized Exploration

Create a section such as:

```text
Your Cosmic Interests
```

based on saved content.

## S7 — Offline / Cached Experience

Previously loaded content remains accessible when the API is temporarily unavailable.

---

# 33. Definition of Done

A feature is considered complete when:

- [ ] Functionality works as intended
- [ ] NASA data is correctly mapped
- [ ] Loading state exists
- [ ] Error state exists
- [ ] Empty state exists where relevant
- [ ] Responsive layout works
- [ ] Keyboard navigation works
- [ ] Accessibility labels exist
- [ ] No console errors
- [ ] Code is reusable
- [ ] Feature has been tested with real API data
- [ ] Feature has been tested with sample/fallback data

---

# 34. Recommended Final Application Structure

```text
                         COSMIC EXPLORER
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
          Explore           Search           Missions
             │                 │                 │
             │          ┌──────┴──────┐          │
             │          │             │          │
             │       Filters        Sort         │
             │          │             │          │
             └──────────┴──────┬──────┴──────────┘
                               │
                         Search Results
                               │
                               ▼
                        Cosmic Object
                               │
                     ┌─────────┴─────────┐
                     │                   │
                Object Details       Favourite
                     │
                     ▼
               Related Content
```

---

# 35. Core Product Principle

> **NASA provides the data; Cosmic Explorer provides the experience.**

The application should not feel like a simple wrapper around an API. NASA's data should be transformed into a coherent **discovery experience** with strong search, filtering, visual presentation, accessibility, and exploration flows.

The team division should remain clear:

- **Maryam:** application shell, Explore experience, frontend architecture
- **Dhruv:** NASA API, data pipeline, search, filtering, and sorting
- **Nithin:** object details, missions, and related content
- **Gamze:** accessibility, responsive UX, favourites, and saved objects
