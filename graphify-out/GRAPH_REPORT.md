# Graph Report - WebDevCSCI-Group-Project  (2026-10-08)

## Corpus Check
- 66 files · ~90,729 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 2 file(s) not represented in the graph (top: (none) 1, .css 1)

## Summary
- 213 nodes · 265 edges · 48 communities (20 shown, 28 thin omitted)
- Extraction: 88% EXTRACTED · 12% INFERRED · 1% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.82)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Space Facts & Missions
- Jupiter System & Planet Art
- Course Rules & Requirements
- NASA APIs & Team Roles
- Outer Planets & Moons
- NASA API Reference
- Galaxies & Milky Way
- Nebula SVG Artwork
- Data Layer Architecture
- Betelgeuse Illustration
- Sirius & Star Glow Art
- Venus Illustration Art
- Accessibility & Favorites
- Project Concept & SPA
- Search & Filtering
- Crab Nebula Artwork
- Neptune Illustration Art
- Rigel Illustration Art
- Titan Illustration Art
- Object Details & Missions
- Io Illustration
- Whirlpool Galaxy Art
- Explore Page Ownership
- Git Workflow & Slices
- Earth Illustration
- Europa Illustration
- Mercury Illustration
- Milky Way Background Art
- Moon Photo Asset
- Openpage Photo Asset
- Sun Photo Asset
- Triangulum Galaxy Art
- Triton Illustration
- Uranus Tilt
- Uranus Planet
- Uranus Diagram
- Uranus Rings
- Vega Logo Asset
- AI Workflow Guidance
- Free AI Models Rule
- Milestone: Team & Topic
- Milestone: Proposal Prototype
- Milestone: Final Video
- Dhruv: Search Module
- Gamze: UI Module
- Maryam: Frontend Lead
- Nithin: Details Module

## God Nodes (most connected - your core abstractions)
1. `Explore Catalogue Page` - 17 edges
2. `Cosmic Explorer Home Page` - 15 edges
3. `NASA Open APIs (Data Source)` - 15 edges
4. `Jupiter Detail Page` - 14 edges
5. `About Cosmic Explorer Page` - 13 edges
6. `Cosmic Explorer` - 11 edges
7. `Europa Detail Page` - 9 edges
8. `Titan` - 9 edges
9. `Milestones Page` - 8 edges
10. `Proxima Centauri` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Mars Planet Photograph (JPG)` --conceptually_related_to--> `Mars Rover Photos`  [AMBIGUOUS]
  assets/images/mars.jpg → index.html
- `Jupiter Cover Image (banded gas giant photo)` --conceptually_related_to--> `The Four Galilean Moons`  [AMBIGUOUS]
  assets/images/jupiter.jpg → pages/jupiter.html
- `Jupiter Cover Image (banded gas giant photo)` --conceptually_related_to--> `Jupiter's Great Red Spot`  [INFERRED]
  assets/images/jupiter.jpg → pages/jupiter.html
- `Red Dwarf Radial Glow Depiction` --conceptually_related_to--> `Proxima Centauri`  [INFERRED]
  assets/images/proxima-centauri.svg → pages/proxima-centauri.html
- `NASA Open APIs` --semantically_similar_to--> `Data Source Options`  [INFERRED] [semantically similar]
  README.md → docs/PROJECT_REQUIREMENTS.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Graded Milestone Sequence M0-M4** — docs_project_requirements_m0_team_topic, docs_project_requirements_m1_proposal_static_prototype, docs_project_requirements_m2_react_foundation, docs_project_requirements_m3_baseline_working_project, docs_project_requirements_m4_independent_concept_video [EXTRACTED 1.00]
- **Team Member Roles as Vertical Slices** — readme_team_maryam, readme_team_dhruv_api, readme_team_dhruv_search, readme_team_nithin, readme_team_gamze, docs_project_requirements_vertical_slice [INFERRED 0.85]
- **Candidate NASA Endpoints** — readme_nasa_open_apis, readme_nasa_apod, readme_nasa_neo_ws, readme_nasa_mars_rover_photos, readme_nasa_earth_imagery [EXTRACTED 1.00]
- **MVP API Stack** — docs_cosmic_explorer_nasa_api_research_nasa_image_video_library, docs_cosmic_explorer_nasa_api_research_neows, docs_cosmic_explorer_nasa_api_research_eonet, docs_cosmic_explorer_nasa_api_research_apod, docs_cosmic_explorer_nasa_api_research_epic [EXTRACTED 1.00]
- **Core Architecture Decisions** — docs_cosmic_explorer_prd_centralized_api_data_layer, docs_cosmic_explorer_prd_data_normalization, docs_cosmic_explorer_prd_cosmicobject, docs_cosmic_explorer_prd_api_fallback [EXTRACTED 1.00]
- **User Experience Flow** — docs_cosmic_explorer_prd_explore_page, docs_cosmic_explorer_prd_search, docs_cosmic_explorer_prd_filtering, docs_cosmic_explorer_prd_sorting, docs_cosmic_explorer_prd_object_details [EXTRACTED 1.00]
- **Team Responsibilities** — docs_cosmic_explorer_prd_maryam, docs_cosmic_explorer_prd_dhruv, docs_cosmic_explorer_prd_nithin, docs_cosmic_explorer_prd_gamze [EXTRACTED 1.00]
- **Galilean Moon System** — galileo_galilei, galilean_moons, galilean_orbital_resonance, pages_jupiter_page, pages_io_page, pages_europa_page, pages_ganymede_page [EXTRACTED 1.00]
- **Four Candidate NASA Open API Datasets** — nasa_open_apis, apod_dataset, near_earth_objects_dataset, mars_rover_photos_dataset, earth_imagery_dataset [EXTRACTED 1.00]
- **Jupiter Icy-Moon Exploration Missions** — pages_europa_clipper_mission, juice_mission, pages_europa_page, pages_ganymede_page, pages_jupiter_page [INFERRED 0.85]
- **Voyager 2 Outer Solar System Grand Tour Encounters** — pages_neptune_voyager_2, pages_neptune_neptune, pages_triton_triton, pages_uranus_uranus [INFERRED 0.90]
- **Titan Exploration Mission Arc (Cassini-Huygens to Dragonfly)** — pages_saturn_saturn, pages_titan_titan, pages_saturn_cassini_huygens, pages_saturn_dragonfly [EXTRACTED 1.00]
- **Stellar Properties Reported Relative to the Sun** — pages_thesun_the_sun, pages_rigel_rigel, pages_sirius_sirius, pages_vega_vega, pages_proxima_centauri_proxima_centauri [INFERRED 0.85]
- **Betelgeuse SVG Space Scene Composition** — assets_images_betelgeuse, assets_images_betelgeuse_star_glow_rendering, assets_images_betelgeuse_starfield_backdrop, assets_images_betelgeuse_betelgeuse_star [EXTRACTED 1.00]
- **Crab Nebula SVG Composition (dark canvas, star circles, blur-smeared nebula, a11y label)** — assets_images_crab_nebula_crab_nebula, assets_images_crab_nebula_procedural_starfield, assets_images_crab_nebula_accessible_image_labeling [INFERRED 0.75]
- **Ganymede SVG Illustration Composition** — assets_images_ganymede, assets_images_ganymede_ganymede_moon, assets_images_ganymede_starfield_backdrop, assets_images_ganymede_accessible_image_labeling [EXTRACTED 1.00]
- **Jupiter Cover Image Reused Across Site Pages** — assets_images_jupiter_jupiter_image, pages_jupiter_page, index_home_page, pages_explore_page [EXTRACTED 1.00]
- **Mars Cover Image Reused Across Home, Explore, and Detail Pages** — assets_images_mars, index_home_page, pages_explore_page, pages_mars_page [EXTRACTED 1.00]
- **Neptune SVG Composition Techniques** — assets_images_neptune_neptune_illustration, assets_images_neptune_radial_gradient_shading, assets_images_neptune_starfield_background [INFERRED 0.75]
- **Orion Nebula Illustration Composition Layers** — assets_images_orion_nebula_starfield, assets_images_orion_nebula_nebula_clouds, assets_images_orion_nebula_glow_core, assets_images_orion_nebula_smear_filter [INFERRED 0.85]
- **Proxima Centauri Illustration Composition** — assets_images_proxima_centauri, assets_images_proxima_centauri_starfield_backdrop, assets_images_proxima_centauri_red_dwarf_glow, assets_images_proxima_centauri_diffraction_spikes [EXTRACTED 1.00]
- **Rigel SVG Composition Layers (background, starfield, glow, core)** — assets_images_rigel_rigel, assets_images_rigel_starfield_background, assets_images_rigel_radial_gradient_glow [INFERRED 0.75]
- **Sirius SVG Visual Composition (star + glow + starfield + dark sky)** — assets_images_sirius_svg_sirius_star_illustration, assets_images_sirius_svg_starfield_background, assets_images_sirius_svg_glow_gradient_technique, assets_images_sirius_svg_space_theme [EXTRACTED 1.00]
- **Titan illustration visual composition (sphere over starfield)** — assets_images_titan, assets_images_titan_titan_sphere, assets_images_titan_starfield [INFERRED 0.75]
- **SVG Techniques Composing the Venus Sphere Rendering** — assets_images_venus_svg_venus_image, assets_images_venus_svg_radial_gradient_shading, assets_images_venus_svg_starfield_background, assets_images_venus_svg_clip_path_sphere [INFERRED 0.85]

## Communities (48 total, 28 thin omitted)

### Community 0 - "Space Facts & Missions"
Cohesion: 0.09
Nodes (31): Proxima Centauri Star Illustration (SVG), Cross-shaped Diffraction Spike Effect, Red Dwarf Radial Glow Depiction, Procedural Starfield Backdrop, Apollo Program, Artemis Program, NASA Open APIs (Data Source), The Moon (+23 more)

### Community 1 - "Jupiter System & Planet Art"
Cohesion: 0.15
Nodes (27): Ganymede Moon Illustration (SVG), Accessible Image Labeling (role=img + aria-label), Ganymede Moon Rendering (grooved grey-brown sphere), Procedural Starfield Backdrop, Jupiter Cover Image (banded gas giant photo), Mars Planet Photograph (JPG), Reusable Card Cover Image Role, Depicted Subject: Planet Mars (reddish planet with polar ice caps) (+19 more)

### Community 2 - "Course Rules & Requirements"
Cohesion: 0.12
Nodes (20): AI-Free Milestones 1-2, What Counts as AI-Generated, CSCI 3230U AI Use Policy, AI Documentation Requirement, AI-Assisted Marker Comment, AI-USAGE.md Log, AI Usage Entry Template, Data Source Options (+12 more)

### Community 3 - "NASA APIs & Team Roles"
Cohesion: 0.20
Nodes (19): Accessibility & Responsive Design Requirements, APOD — Astronomy Picture of the Day, CSCI 3230U — Web Development Course, Earth Imagery (Satellite Imagery), Favourites Persisted in localStorage, Five Graded Project Milestones, Cosmic Explorer Home Page, Mars Rover Photos (+11 more)

### Community 4 - "Outer Planets & Moons"
Cohesion: 0.23
Nodes (14): Saturn Cover Image, Kuiper Belt, Neptune, Proposed Neptune Orbiter, Voyager 2 Outer-Planet Flybys, Cassini-Huygens Mission, Dragonfly Mission, Saturn (+6 more)

### Community 5 - "NASA API Reference"
Cohesion: 0.23
Nodes (13): APOD (Astronomy Picture of the Day), SSD/CNEOS, Cosmic Explorer, DONKI (Space Weather Database), EONET (Earth Observatory Natural Event Tracker), EPIC (Earth Polychromatic Imaging Camera), NASA Exoplanet Archive, GIBS (Global Imagery Browse Services) (+5 more)

### Community 6 - "Galaxies & Milky Way"
Cohesion: 0.43
Nodes (8): Andromeda Galaxy Cover Image (M31), Crab Pulsar (Central Neutron Star), The Local Group of Galaxies, Milky Way–Andromeda Merger (Milkdromeda), Crab Nebula Detail Page, Andromeda Galaxy Detail Page, Milky Way Galaxy Detail Page, Sagittarius A* Supermassive Black Hole

### Community 7 - "Nebula SVG Artwork"
Cohesion: 0.60
Nodes (5): Orion Nebula SVG Illustration, Central Glowing Core, Blurred Nebula Cloud Ellipses, Gaussian Blur Smear Filter, Scattered Star Field

### Community 8 - "Data Layer Architecture"
Cohesion: 0.40
Nodes (5): API Fallback/Sample Data, Centralized API/Data Layer, CosmicObject, Data Normalization, ObjectCard

### Community 9 - "Betelgeuse Illustration"
Cohesion: 0.67
Nodes (4): Betelgeuse Star Illustration (SVG), Betelgeuse (Red Supergiant Star), Radial-Gradient Star Glow Rendering, Dark Starfield Backdrop

### Community 10 - "Sirius & Star Glow Art"
Cohesion: 0.67
Nodes (4): Radial Gradient Glow Technique, Sirius Star Illustration, Space / Astronomy Theme, Starfield Background Pattern

### Community 11 - "Venus Illustration Art"
Cohesion: 0.67
Nodes (4): Clip-Path Sphere Cropping, Radial Gradient Planet Shading, Starfield Background Layer, Venus Planet Illustration (SVG)

### Community 12 - "Accessibility & Favorites"
Cohesion: 0.50
Nodes (4): Accessibility Requirements, Favorites, Gamze (UI/Accessibility/Favorites), Responsive Design

### Community 13 - "Project Concept & SPA"
Cohesion: 0.50
Nodes (4): Cosmic Explorer, Discovery Experience, NASA Open APIs, Single Page Application (SPA)

### Community 14 - "Search & Filtering"
Cohesion: 0.50
Nodes (4): Dhruv (API/Data/Search), Filtering, Search, Sorting

### Community 15 - "Crab Nebula Artwork"
Cohesion: 0.67
Nodes (3): Accessible SVG Image Labeling (role=img + aria-label), Crab Nebula Decorative Background SVG, Procedural Starfield / Nebula Backdrop Technique

### Community 16 - "Neptune Illustration Art"
Cohesion: 0.67
Nodes (3): Neptune Planet Illustration, Radial Gradient Sphere Shading, Starfield Background

### Community 17 - "Rigel Illustration Art"
Cohesion: 1.00
Nodes (3): Radial Gradient Glow Technique, Rigel Star Illustration (SVG), Starfield Background with Central Glowing Star

### Community 18 - "Titan Illustration Art"
Cohesion: 0.67
Nodes (3): Titan (Saturn moon) SVG illustration, Background starfield (90 scattered stars), Titan planetary sphere with layered radial gradients

### Community 19 - "Object Details & Missions"
Cohesion: 0.67
Nodes (3): Missions, Nithin (Details/Missions), Object Details

## Ambiguous Edges - Review These
- `Mars Rover Photos` → `Mars Planet Photograph (JPG)`  [AMBIGUOUS]
  assets/images/mars.jpg · relation: conceptually_related_to
- `The Four Galilean Moons` → `Jupiter Cover Image (banded gas giant photo)`  [AMBIGUOUS]
  assets/images/jupiter.jpg · relation: conceptually_related_to

## Knowledge Gaps
- **77 isolated node(s):** `Astronomy Picture of the Day`, `Near Earth Object Web Service`, `Mars Rover Photos`, `Earth Imagery and Related Datasets`, `Maryam - Project Lead / Frontend` (+72 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 94 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **28 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Mars Rover Photos` and `Mars Planet Photograph (JPG)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `The Four Galilean Moons` and `Jupiter Cover Image (banded gas giant photo)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `Explore Catalogue Page` connect `Jupiter System & Planet Art` to `NASA APIs & Team Roles`, `Galaxies & Milky Way`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `NASA Open APIs (Data Source)` connect `Space Facts & Missions` to `Outer Planets & Moons`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `Cosmic Explorer Home Page` connect `NASA APIs & Team Roles` to `Jupiter System & Planet Art`, `Galaxies & Milky Way`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **What connects `Astronomy Picture of the Day`, `Near Earth Object Web Service`, `Mars Rover Photos` to the rest of the system?**
  _77 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Space Facts & Missions` be split into smaller, more focused modules?**
  _Cohesion score 0.08817204301075268 - nodes in this community are weakly interconnected._