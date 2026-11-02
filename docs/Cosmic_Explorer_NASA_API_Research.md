# Cosmic Explorer — NASA API Research & Selection Document

**Course:** CSCI 3230U  
**Project:** Cosmic Explorer  
**Research Subject:** NASA Open APIs and supporting NASA/JPL data services  
**Prepared for:** Cosmic Explorer Team  
**Primary Goal:** Determine which NASA APIs provide the strongest foundation for search, filtering, exploration, object details, imagery, missions, and interactive experiences.

---

# 1. Executive Summary

Cosmic Explorer is intended to be a single-page web application that makes NASA space and Earth-science data easier to explore.

NASA provides a large collection of APIs and machine-readable services, but these APIs serve very different purposes. Some are designed for public discovery and visual exploration, while others are highly specialized scientific, orbital, geospatial, engineering, or research services.

After reviewing the available APIs, the strongest candidates for Cosmic Explorer are:

| API | Primary Value | Recommendation |
|---|---|---|
| **NeoWs** | Near-Earth asteroids, dates, close approaches, object details | **Core** |
| **NASA Image & Video Library** | Searchable NASA images/videos and metadata | **Core** |
| **EONET** | Natural events, categories, locations, event metadata | **Core** |
| **APOD** | Daily astronomy imagery and explanations | **Core / Featured** |
| **EPIC** | Full-disc Earth imagery from DSCOVR | **Strong Secondary** |
| **Exoplanet Archive** | Searchable exoplanet scientific data | **Strong Secondary** |
| **DONKI** | Space-weather events and relationships | **Secondary / Advanced** |
| **GIBS** | High-quality global Earth satellite imagery and map layers | **Advanced Visualization** |
| **SSD/CNEOS** | Advanced asteroid/comet, close-approach, risk and mission data | **Advanced** |
| **TechPort** | NASA technology projects | **Optional Category** |
| **OSDR** | Space-life-science datasets | **Optional / Research** |
| **TLE API** | Earth-orbiting satellite orbital data | **Advanced / Optional** |
| **Mars/InSight Weather** | Mars weather observations | **Optional, but specialized** |
| **TechTransfer** | NASA patents, software and spinoffs | **Optional** |
| **Vesta/Moon/Mars Trek WMTS** | Planetary map tiles and interactive terrain | **Advanced Visualization** |
| **Satellite Situation Center** | Spacecraft location/geophysical regions | **Low Priority** |

### Recommended initial stack

For the first version of Cosmic Explorer, the team should prioritize:

```text
NASA Image & Video Library
          +
NeoWs
          +
EONET
          +
APOD
          +
EPIC
```

Then consider:

```text
Exoplanet Archive
DONKI
GIBS
SSD/CNEOS
```

as advanced features.

This gives the application a balanced mixture of:

- Astronomy
- Asteroids
- Earth imagery
- Natural events
- NASA photography
- Scientific discovery
- Search
- Filtering
- Interactive visualization

---

# 2. Important Current NASA API Changes

The NASA API portal currently warns that several APIs have changed.

The APOD API migrated to a new WordPress-based API in September 2026, and NASA states that the legacy APOD API will be taken offline on **December 1, 2026**.

The NASA Earth API has also been archived and replaced by Earthdata GIBS.

The Mars Rover API has been archived as well.

Therefore, Cosmic Explorer should avoid building new functionality around archived APIs and should use their current replacements where appropriate.

Source: NASA Open APIs.  
https://api.nasa.gov/

NASA's API portal also states that the catalog is a curated selection and does not contain every NASA API. NASA notes that many listed services are actually maintained by their original organizations rather than by the api.nasa.gov team.

---

# 3. NASA API Authentication and Rate Limits

Most APIs hosted through `api.nasa.gov` can be explored using the `DEMO_KEY`, but this key has significantly lower limits.

NASA currently documents:

```text
Normal API key:
~1,000 requests/hour by default

DEMO_KEY:
30 requests/hour/IP
50 requests/day/IP
```

The exact limit may vary by service.

NASA recommends obtaining a developer API key for applications that will make repeated requests.

The application should also monitor:

```text
X-RateLimit-Limit
X-RateLimit-Remaining
```

where available.

### Recommendation

Do not expose a production API key directly in frontend source code if the architecture allows a server-side API layer.

Recommended:

```text
React SPA
   ↓
Backend/API service
   ↓
NASA APIs
```

or, for APIs where a browser-safe key is explicitly supported:

```text
React SPA
   ↓
NASA API
```

The team should evaluate this per API.

---

# 4. Evaluation Criteria

Each API was evaluated against the needs of Cosmic Explorer.

## 4.1 Searchability

Can users search the dataset using meaningful queries?

## 4.2 Filterability

Can results be filtered by:

- Date
- Category
- Type
- Location
- Scientific properties
- Mission
- Object characteristics

## 4.3 Visual Potential

Can the API produce imagery, maps, charts, or visually interesting content?

## 4.4 Detail Views

Can an individual result have a meaningful detail page?

## 4.5 Discovery Value

Does the API help users discover interesting space content?

## 4.6 SPA Compatibility

Can the data be integrated cleanly into a React-style frontend?

## 4.7 Data Complexity

How difficult is it to normalize the data into a common application model?

## 4.8 Reliability / Maintenance

Is the API current, documented, and suitable for a student project?

## 4.9 Fit With Course Requirements

Does it support the project's:

- Browse
- Search
- Filter
- Sort
- Details
- API integration
- Responsive UI
- Accessibility

requirements?

---

# 5. APOD — Astronomy Picture of the Day

## Overview

APOD provides astronomy imagery and accompanying metadata.

It is one of NASA's most recognizable public-facing datasets and is highly suitable for creating a visually attractive landing page.

NASA's current APOD implementation has migrated to a WordPress-based API.

The current API supports:

- Single dates
- Date ranges
- Random image counts
- Titles
- Explanations
- Credits
- Copyright
- Alt text
- Media type
- NASA permalink
- Image URLs

## Example Use

```text
GET
https://science.nasa.gov/wp-json/wp/v2/apod-basic
```

Possible query parameters include:

```text
date
start_date
end_date
count
api_key
```

## Cosmic Explorer Features

APOD is ideal for:

### Featured Discovery

```text
Today's Cosmic Discovery

[ Large NASA Image ]

M83: The Southern Pinwheel

Explanation...
```

### Historical Explorer

```text
Explore APOD

2026
 ├── January
 ├── February
 ├── March
 └── ...
```

### Random Discovery

```text
[ Discover Something Random ]
```

## Search

APOD is not a general-purpose search engine.

Its strongest query mechanisms are:

- Date
- Date range
- Random selection

Therefore it should not be the primary search backend.

## Filtering

Strong:

- Date
- Media type

Weak:

- Object type
- Scientific category
- Mission

## Rating

| Category | Rating |
|---|---:|
| Search | 3/5 |
| Filtering | 3/5 |
| Visuals | 5/5 |
| Detail pages | 5/5 |
| Discovery | 5/5 |
| SPA fit | 5/5 |
| Overall | **4.4/5** |

## Recommendation

**Use APOD as a featured/discovery source, not as the main searchable dataset.**

### Important

Use the current APOD API rather than implementing the legacy endpoint because NASA has announced the legacy API will be archived December 1, 2026.

---

# 6. Asteroids NeoWs — Near Earth Object Web Service

## Overview

NeoWs provides information about near-Earth asteroids.

It supports:

- Date-based asteroid feeds
- Individual asteroid lookup
- Browsing the asteroid dataset
- Close approach information
- Hazard-related information
- Physical characteristics

NeoWs is one of the strongest APIs for Cosmic Explorer.

## Core Endpoints

### Feed

```text
GET /neo/rest/v1/feed
```

Allows asteroid searches based on closest approach dates.

### Lookup

```text
GET /neo/rest/v1/neo/{asteroid_id}
```

### Browse

```text
GET /neo/rest/v1/neo/browse
```

## Cosmic Explorer Features

### Asteroid Explorer

```text
NEAR-EARTH OBJECTS

[ Search ]

[ Date ] [ Hazardous ] [ Distance ] [ Size ]

------------------------------------------------

99942 Apophis
Potentially Hazardous
Closest Approach: ...
Estimated Diameter: ...
```

## Filters

Excellent opportunities for:

- Closest approach date
- Potentially hazardous
- Estimated diameter
- Relative velocity
- Miss distance
- Object name

## Sorting

Potential sorting:

```text
Closest Approach
Largest
Fastest
Closest Distance
Name
```

## Detail Page

Example:

```text
99942 Apophis

Potentially Hazardous: Yes

Estimated Diameter:
370m – 830m

Closest Approach:
...

Relative Velocity:
...

Miss Distance:
...
```

## Rating

| Category | Rating |
|---|---:|
| Search | 4/5 |
| Filtering | 5/5 |
| Visuals | 3/5 |
| Detail pages | 5/5 |
| Discovery | 5/5 |
| SPA fit | 5/5 |
| Overall | **4.5/5** |

## Recommendation

**CORE API**

NeoWs should be one of the main datasets behind Cosmic Explorer's search and filtering experience.

---

# 7. DONKI — Space Weather Database

## Overview

DONKI stands for:

> Space Weather Database Of Notifications, Knowledge, Information

It provides structured information about space-weather phenomena.

Examples include:

- Coronal Mass Ejections
- Geomagnetic Storms
- Interplanetary Shocks
- Radiation Belt Enhancements
- High-Speed Streams
- Solar flares
- Solar energetic particles
- Notifications
- WSA/ENLIL simulations

## Cosmic Explorer Potential

DONKI could create a:

```text
SPACE WEATHER
```

section.

Example:

```text
RECENT SPACE WEATHER

☀ CME
Coronal Mass Ejection
Oct 7

🌎 GST
Geomagnetic Storm
Oct 6

⚡ SEP
Solar Energetic Particle Event
Oct 5
```

## Filtering

Excellent date filtering.

Potential filters:

- Event type
- Date
- Severity-related fields
- Source/catalog
- Analysis status

## Visualization

DONKI is particularly useful for:

- Event timelines
- Solar activity graphs
- Cause/effect relationships
- Event chains

Example:

```text
Solar Flare
    ↓
CME
    ↓
Solar Wind
    ↓
Geomagnetic Storm
    ↓
Earth
```

## Limitation

DONKI is scientifically dense and may be difficult for casual users.

## Rating

| Category | Rating |
|---|---:|
| Search | 3/5 |
| Filtering | 5/5 |
| Visuals | 4/5 |
| Detail pages | 4/5 |
| Discovery | 4/5 |
| SPA fit | 4/5 |
| Overall | **4.0/5** |

## Recommendation

**Secondary API / Advanced feature.**

---

# 8. EONET — Earth Observatory Natural Event Tracker

## Overview

EONET provides curated metadata about natural events and links those events to related imagery services.

Potential events include:

- Wildfires
- Storms
- Dust events
- Volcanoes
- Floods
- Severe weather
- Other natural phenomena

## Why EONET Is Important

EONET is particularly valuable because it bridges:

```text
EVENT
  +
LOCATION
  +
NASA IMAGERY
```

This makes it extremely useful for an interactive application.

## Cosmic Explorer Feature

### Natural Events Explorer

```text
NATURAL EVENTS

┌───────────────────────────────┐
│ 🔥 Wildfire                  │
│ British Columbia             │
│ Started: Oct 6                │
│                               │
│ View Event →                  │
└───────────────────────────────┘
```

## Map Experience

Potential architecture:

```text
EONET Events
      ↓
Latitude / Longitude
      ↓
Interactive Map
      ↓
NASA GIBS Imagery
```

This could become one of the strongest visual features of Cosmic Explorer.

## Filtering

Potential filters:

- Event category
- Event status
- Date
- Location
- Source

## Rating

| Category | Rating |
|---|---:|
| Search | 4/5 |
| Filtering | 5/5 |
| Visuals | 5/5 |
| Detail pages | 4/5 |
| Discovery | 5/5 |
| SPA fit | 5/5 |
| Overall | **4.7/5** |

## Recommendation

**CORE API**

EONET is one of the strongest choices for a visually interesting search/filter/map experience.

---

# 9. EPIC — Earth Polychromatic Imaging Camera

## Overview

EPIC provides imagery captured by DSCOVR's Earth Polychromatic Imaging Camera.

The spacecraft is positioned near the Earth-Sun Lagrange point, allowing EPIC to capture full-disc views of Earth.

The API provides:

- Image names
- Dates
- Captions
- Earth coordinates
- DSCOVR position
- Lunar position
- Solar position
- Attitude information

## Cosmic Explorer Feature

### Earth From Space

```text
EARTH TODAY

              🌎

Full-disc Earth imagery
Captured by DSCOVR / EPIC

[ Explore Previous Dates ]
```

## Search

EPIC is primarily date-oriented.

Excellent for:

- Most recent image
- Specific date
- Available dates

Not designed for keyword search.

## Rating

| Category | Rating |
|---|---:|
| Search | 2/5 |
| Filtering | 3/5 |
| Visuals | 5/5 |
| Detail pages | 4/5 |
| Discovery | 4/5 |
| SPA fit | 5/5 |
| Overall | **3.8/5** |

## Recommendation

**Strong secondary API.**

Use it as a visually powerful Earth section rather than the primary search dataset.

---

# 10. Exoplanet Archive

## Overview

NASA's Exoplanet Archive provides programmatic access to astronomical data about exoplanets.

It is one of the most scientifically interesting APIs for Cosmic Explorer.

Users can query information about:

- Confirmed exoplanets
- Host stars
- Orbital parameters
- Planet radius
- Planet mass
- Equilibrium temperature
- Transit information
- Discovery information

## Search Potential

Unlike APOD and EPIC, the Exoplanet Archive is extremely powerful for scientific filtering.

Example:

```text
EXOPLANET EXPLORER

Planet Radius
[ 0.5 ] — [ 2.0 ] Earth radii

Temperature
[ 180K ] — [ 303K ]

Transit
☑ Yes

Discovery Method
[ Transit ▼ ]
```

## Detail Page

```text
Kepler-452 b

Radius
1.63 Earth radii

Orbital Period
384.8 days

Host Star
Kepler-452

Discovery Method
Transit

Distance
...
```

## Visualization Opportunities

Excellent for:

- Planet size comparisons
- Temperature charts
- Orbital periods
- Host-star comparisons
- Discovery timelines

## Rating

| Category | Rating |
|---|---:|
| Search | 5/5 |
| Filtering | 5/5 |
| Visuals | 4/5 |
| Detail pages | 5/5 |
| Discovery | 5/5 |
| SPA fit | 4/5 |
| Overall | **4.7/5** |

## Recommendation

**Strong secondary/core candidate.**

If the team wants Cosmic Explorer to feel more like an actual astronomy explorer rather than an image browser, this API is highly valuable.

---

# 11. GIBS — Global Imagery Browse Services

## Overview

GIBS provides access to global satellite imagery.

NASA states that GIBS provides access to more than 1,000 satellite imagery products, with many products updated daily.

It supports:

- WMTS
- WMS
- TWMS
- GDAL

It supports multiple map projections.

## Major Strength

GIBS is designed for visualization.

It can power an interactive Earth map.

## Potential Cosmic Explorer Feature

```text
EARTH EXPLORER

┌─────────────────────────────────────┐
│                                     │
│            Interactive Map          │
│                                     │
│        NASA Satellite Imagery       │
│                                     │
│  [ Layers ] [ Date ] [ Events ]     │
│                                     │
└─────────────────────────────────────┘
```

## Example Layers

Potential imagery can include:

- Vegetation
- Fires
- Clouds
- Precipitation
- Night lights
- Surface reflectance
- Other satellite products

## Relationship With EONET

A powerful architecture is:

```text
EONET
Natural Event Metadata
       ↓
Coordinates
       ↓
GIBS
Satellite Imagery
       ↓
Interactive Map
```

## Rating

| Category | Rating |
|---|---:|
| Search | 2/5 |
| Filtering | 4/5 |
| Visuals | 5/5 |
| Detail pages | 3/5 |
| Discovery | 5/5 |
| SPA fit | 4/5 |
| Overall | **3.8/5** |

## Recommendation

**Advanced visualization layer rather than the main search API.**

---

# 12. InSight Mars Weather Service API

## Overview

The InSight weather API provides Mars weather observations from NASA's InSight mission.

Data can include:

- Temperature
- Wind
- Pressure
- Wind direction
- Sol/day information
- Seasonal information

## Potential Feature

```text
MARS WEATHER

Sol 1450

Temperature
-70°C

Wind
5.2 m/s

Pressure
...
```

## Limitation

The dataset is highly specialized and availability varies by sensor/date.

NASA documentation also notes that some wind and sensor data may be missing for certain date ranges.

## Rating

| Category | Rating |
|---|---:|
| Search | 2/5 |
| Filtering | 3/5 |
| Visuals | 4/5 |
| Detail pages | 3/5 |
| Discovery | 3/5 |
| SPA fit | 4/5 |
| Overall | **3.2/5** |

## Recommendation

**Optional Mars feature.**

It can be a nice addition but should not be a core dependency.

---

# 13. NASA Image and Video Library

## Overview

The NASA Image and Video Library API provides programmatic access to NASA's media collection.

This is arguably the most useful general-purpose discovery API for Cosmic Explorer.

## Endpoints

```text
GET /search?q={q}
GET /asset/{nasa_id}
GET /metadata/{nasa_id}
GET /captions/{nasa_id}
```

## Search

This API directly supports keyword-based search.

Example:

```text
Search:
"James Webb"

        ↓

NASA Image Library

        ↓

Results
```

## Potential Filters

Depending on returned metadata and query capabilities:

- Media type
- Keywords
- Location
- Date
- Photographer/creator
- Collection

## Content Types

Potentially useful for:

- Images
- Videos
- Audio/media
- Mission photography
- Historical NASA content

## Cosmic Explorer Feature

```text
NASA DISCOVERY

[ Search NASA's media library ]

"James Webb"

┌────────┐ ┌────────┐ ┌────────┐
│ Image  │ │ Image  │ │ Video  │
└────────┘ └────────┘ └────────┘
```

## Rating

| Category | Rating |
|---|---:|
| Search | 5/5 |
| Filtering | 4/5 |
| Visuals | 5/5 |
| Detail pages | 5/5 |
| Discovery | 5/5 |
| SPA fit | 5/5 |
| Overall | **4.8/5** |

## Recommendation

**CORE API**

This should be one of the main APIs used by Cosmic Explorer.

---

# 14. Open Science Data Repository — OSDR

## Overview

NASA's Open Science Data Repository provides programmatic access to scientific datasets.

The API supports:

- Full-text search
- Dataset metadata
- Data files
- Study metadata
- Experiments
- Missions
- Payloads
- Vehicles
- Hardware
- Subjects
- Biospecimens

## Strength

OSDR is extremely rich for scientific research.

## Weakness

It is not naturally designed for a casual astronomy discovery application.

The information can be highly technical.

## Potential Feature

```text
NASA SCIENCE DATA

Search:
"microgravity"

Results:

OSD-137
Spaceflight Biology Study

OSD-...
...
```

## Rating

| Category | Rating |
|---|---:|
| Search | 5/5 |
| Filtering | 5/5 |
| Visuals | 2/5 |
| Detail pages | 4/5 |
| Discovery | 3/5 |
| SPA fit | 3/5 |
| Overall | **3.7/5** |

## Recommendation

**Optional research/science section.**

It is valuable if the team wants to emphasize scientific datasets, but it is not necessary for the MVP.

---

# 15. Satellite Situation Center

## Overview

The Satellite Situation Center provides spacecraft location information in relation to geophysical regions.

This is highly specialized scientific data.

## Potential Use

A technically advanced:

```text
SATELLITE LOCATION EXPLORER
```

could display:

```text
Satellite
    ↓
Geocentric Position
    ↓
Geophysical Region
```

## Problem

The API is not naturally aligned with the primary Cosmic Explorer user journey.

It is also more difficult to explain to a general audience.

## Rating

| Category | Rating |
|---|---:|
| Search | 2/5 |
| Filtering | 3/5 |
| Visuals | 3/5 |
| Detail pages | 3/5 |
| Discovery | 2/5 |
| SPA fit | 2/5 |
| Overall | **2.5/5** |

## Recommendation

**Low priority.**

---

# 16. SSD/CNEOS — Solar System Dynamics / Center for Near-Earth Object Studies

## Overview

JPL's SSD/CNEOS API provides machine-readable data related to small bodies and near-Earth objects.

Services include:

- Close Approach Data
- Fireball
- Mission Design
- NHATS
- Scout
- Sentry

## Why It Matters

CNEOS can provide much deeper asteroid functionality than a simple asteroid browsing interface.

Potential features include:

```text
Asteroid
 ↓
Close Approach
 ↓
Impact Risk
 ↓
Orbit Information
 ↓
Mission Accessibility
```

## Potential Advanced Features

### Close Approach Explorer

```text
Upcoming Close Approaches

Object        Date        Distance
------------------------------------------------
Asteroid A    Oct 10      0.012 AU
Asteroid B    Oct 13      0.028 AU
```

### Impact Risk

Potentially connect users to Sentry information.

### Accessible Asteroids

NHATS could support an educational mission-design feature.

## Rating

| Category | Rating |
|---|---:|
| Search | 5/5 |
| Filtering | 5/5 |
| Visuals | 3/5 |
| Detail pages | 5/5 |
| Discovery | 5/5 |
| SPA fit | 4/5 |
| Overall | **4.5/5** |

## Recommendation

**Advanced asteroid functionality.**

NeoWs should remain the simpler primary asteroid API, while CNEOS can provide advanced data.

---

# 17. TechPort

## Overview

TechPort is NASA's technology project inventory.

It contains information about:

- Active technology projects
- Completed technology projects
- Technology development
- NASA technology portfolios
- Mission-related technology

## Potential Cosmic Explorer Feature

```text
NASA TECHNOLOGY

Search:
"robotics"

Projects:

Autonomous Navigation
Robotic Systems
Advanced Propulsion
...
```

## Strength

It expands Cosmic Explorer beyond astronomy into NASA innovation.

## Weakness

It does not naturally fit the project's central space-object discovery experience.

## Rating

| Category | Rating |
|---|---:|
| Search | 4/5 |
| Filtering | 3/5 |
| Visuals | 2/5 |
| Detail pages | 4/5 |
| Discovery | 3/5 |
| SPA fit | 3/5 |
| Overall | **3.2/5** |

## Recommendation

Optional.

---

# 18. TechTransfer

## Overview

TechTransfer provides structured access to NASA:

- Patents
- Software
- Technology spinoffs

## Potential Feature

```text
NASA TECHNOLOGY TRANSFER

[ Patents ]
[ Software ]
[ Spinoffs ]
```

Users could explore how NASA research becomes commercial technology.

## Strength

Good searchability.

## Weakness

It moves the product away from astronomy and space exploration.

## Rating

| Category | Rating |
|---|---:|
| Search | 4/5 |
| Filtering | 4/5 |
| Visuals | 2/5 |
| Detail pages | 4/5 |
| Discovery | 3/5 |
| SPA fit | 3/5 |
| Overall | **3.3/5** |

## Recommendation

Low-to-medium priority.

---

# 19. TLE API

## Overview

The TLE API provides Two-Line Element data for Earth-orbiting objects.

TLE data describes orbital elements at a specific point in time.

The NASA catalog describes the service as providing up-to-date records sourced from CelesTrak.

## Endpoints

```text
GET /api/tle?search={q}
GET /api/tle/{q}
```

## Potential Feature

```text
SATELLITE EXPLORER

Search:
ISS

Satellite:
International Space Station

Orbital Data:
...
```

## Visualization Potential

TLE data can support orbital visualization if combined with an orbit propagation library.

For example:

```text
TLE
 ↓
Orbit Calculation
 ↓
3D Earth
 ↓
Satellite Orbit
```

## Complexity

This is substantially more technically complex than displaying NASA API data.

The application would need to:

- Parse TLEs
- Calculate orbital positions
- Potentially propagate orbits
- Render a 3D/2D globe

## Rating

| Category | Rating |
|---|---:|
| Search | 4/5 |
| Filtering | 3/5 |
| Visuals | 5/5 |
| Detail pages | 4/5 |
| Discovery | 4/5 |
| SPA fit | 4/5 |
| Overall | **4.0/5** |

## Recommendation

**Excellent stretch goal.**

---

# 20. Vesta/Moon/Mars Trek WMTS

## Overview

This service provides map tiles used by NASA's Trek visualization portals.

It supports:

- Mars
- Moon
- Vesta

The service uses OGC Web Map Tile Service (WMTS).

## Potential Feature

```text
PLANETARY EXPLORER

       MARS

[ + ] [ - ]

Terrain
Satellite
Elevation
Geology
```

## Major Strength

This could create one of the most visually impressive features in Cosmic Explorer.

## Technical Architecture

```text
WMTS
 ↓
Map Library
 ↓
Interactive Planet
 ↓
NASA Planetary Imagery
```

Possible frontend mapping libraries include:

- Leaflet
- OpenLayers
- Cesium
- Other compatible WMTS clients

## Rating

| Category | Rating |
|---|---:|
| Search | 1/5 |
| Filtering | 2/5 |
| Visuals | 5/5 |
| Detail pages | 3/5 |
| Discovery | 5/5 |
| SPA fit | 4/5 |
| Overall | **3.5/5** |

## Recommendation

**Stretch goal / advanced visualization.**

---

# 21. API Comparison Matrix

| API | Search | Filters | Visuals | Details | Discovery | Complexity | Priority |
|---|---:|---:|---:|---:|---:|---:|---|
| NASA Image Library | 5 | 4 | 5 | 5 | 5 | Low | **Core** |
| EONET | 4 | 5 | 5 | 4 | 5 | Medium | **Core** |
| NeoWs | 4 | 5 | 3 | 5 | 5 | Medium | **Core** |
| APOD | 3 | 3 | 5 | 5 | 5 | Low | **Core** |
| Exoplanet Archive | 5 | 5 | 4 | 5 | 5 | High | **Strong** |
| EPIC | 2 | 3 | 5 | 4 | 4 | Low | **Strong** |
| DONKI | 3 | 5 | 4 | 4 | 4 | Medium | Secondary |
| CNEOS | 5 | 5 | 3 | 5 | 5 | High | Advanced |
| GIBS | 2 | 4 | 5 | 3 | 5 | High | Advanced |
| TLE | 4 | 3 | 5 | 4 | 4 | High | Stretch |
| OSDR | 5 | 5 | 2 | 4 | 3 | High | Optional |
| TechPort | 4 | 3 | 2 | 4 | 3 | Medium | Optional |
| TechTransfer | 4 | 4 | 2 | 4 | 3 | Medium | Optional |
| Mars Weather | 2 | 3 | 4 | 3 | 3 | Low | Optional |
| Trek WMTS | 1 | 2 | 5 | 3 | 5 | High | Stretch |
| Satellite Situation Center | 2 | 3 | 3 | 3 | 2 | High | Low |

---

# 22. Recommended Cosmic Explorer API Architecture

The application should not treat every API equally.

Instead, organize them into layers.

```text
                    COSMIC EXPLORER
                           │
             ┌─────────────┼─────────────┐
             │             │             │
          Discovery      Objects       Earth
             │             │             │
       ┌─────┼─────┐   ┌──┴───┐    ┌────┼────┐
       │     │     │   │      │    │    │    │
      APOD  Image EONET NeoWs Exoplanet EPIC GIBS
                    │
                    │
                 CNEOS
```

Additional scientific/advanced services:

```text
DONKI
OSDR
TLE
TechPort
TechTransfer
Mars Weather
Trek WMTS
Satellite Situation Center
```

---

# 23. Recommended MVP API Stack

## API 1 — NASA Image and Video Library

Purpose:

> General search and discovery.

Provides:

- Keyword search
- Images
- Videos
- Metadata
- Detail pages

This should power the broadest search experience.

---

## API 2 — NeoWs

Purpose:

> Structured astronomical objects.

Provides:

- Asteroids
- Close approaches
- Object details
- Scientific properties

This should power structured object cards and filters.

---

## API 3 — EONET

Purpose:

> Real-world natural events.

Provides:

- Event categories
- Dates
- Locations
- Event metadata

This can power an interactive map.

---

## API 4 — APOD

Purpose:

> Daily featured discovery.

Provides:

- Daily imagery
- Historical imagery
- Explanations
- Credits

This should power the landing page.

---

## API 5 — EPIC

Purpose:

> Earth-from-space visual content.

Provides:

- Full Earth images
- Dates
- Captions
- Position metadata

This gives the product a strong visual Earth feature.

---

# 24. Recommended Phase 2 APIs

After the MVP is stable:

## Exoplanet Archive

Build:

```text
Exoplanet Explorer
```

with advanced filters.

## DONKI

Build:

```text
Space Weather
```

with timelines.

## GIBS

Build:

```text
Earth Explorer
```

with satellite imagery layers.

## CNEOS

Expand:

```text
Asteroid Intelligence
```

with close-approach and risk information.

---

# 25. Recommended Stretch APIs

If the core application is complete:

### TLE

Build a satellite orbit explorer.

### Trek WMTS

Build an interactive Mars/Moon/Vesta explorer.

### Mars Weather

Build a Mars weather dashboard.

### OSDR

Build a scientific research-data explorer.

---

# 26. Proposed Application Sections

Based on the API research, the application could have:

```text
COSMIC EXPLORER
│
├── Explore
│   ├── APOD
│   ├── Featured Discoveries
│   └── NASA Media
│
├── Objects
│   ├── Asteroids
│   ├── Exoplanets
│   └── Other Astronomy
│
├── Earth
│   ├── Natural Events
│   ├── EPIC
│   └── Satellite Imagery
│
├── Space Weather
│   └── DONKI
│
├── Missions
│   └── Related NASA Content
│
└── Favourites
```

---

# 27. Unified Data Model

Because the APIs have very different schemas, Cosmic Explorer should normalize them.

Recommended base interface:

```typescript
interface CosmicObject {
  id: string;
  name: string;
  type: CosmicObjectType;

  description?: string;

  imageUrl?: string;
  thumbnailUrl?: string;

  date?: string;

  source: DataSource;

  location?: {
    latitude?: number;
    longitude?: number;
  };

  metadata: Record<string, unknown>;
}
```

Example types:

```typescript
type CosmicObjectType =
  | "asteroid"
  | "exoplanet"
  | "image"
  | "video"
  | "natural-event"
  | "space-weather"
  | "earth-imagery"
  | "mission"
  | "satellite";
```

Example data source:

```typescript
type DataSource =
  | "apod"
  | "neows"
  | "eonet"
  | "epic"
  | "exoplanet"
  | "gibs"
  | "donki"
  | "images";
```

---

# 28. Search Architecture

The application should not attempt to send every search query to every API.

Instead, classify queries.

```text
User Query
    ↓
Search Router
    ↓
┌──────────────┬──────────────┬───────────────┐
│              │              │               │
Asteroid       NASA Media     Natural Event   Exoplanet
│              │              │               │
NeoWs          Image API      EONET           Archive
```

For example:

```text
"Apophis"
   ↓
NeoWs

"James Webb"
   ↓
NASA Image Library

"wildfire"
   ↓
EONET + NASA Image Library

"Kepler-452"
   ↓
Exoplanet Archive
```

This produces better results than blindly querying every API.

---

# 29. Cross-API Discovery

One of the strongest opportunities is connecting different APIs.

## Example 1 — Asteroid

```text
NeoWs
  ↓
Asteroid
  ↓
CNEOS
  ↓
Close Approach
  ↓
NASA Image Library
  ↓
Related Images
```

## Example 2 — Natural Event

```text
EONET
  ↓
Wildfire
  ↓
Location
  ↓
GIBS
  ↓
Satellite Imagery
```

## Example 3 — Space Mission

```text
NASA Image Library
  ↓
Mission
  ↓
NASA Images
  ↓
TechPort
  ↓
Technology Projects
```

## Example 4 — Mars

```text
Mars Weather
       +
Trek WMTS
       +
NASA Image Library
       ↓
Mars Explorer
```

These relationships can make Cosmic Explorer feel like one coherent product instead of a collection of unrelated API demos.

---

# 30. Search and Filter Strategy

The final search system should distinguish between universal and dataset-specific filters.

## Universal Filters

```text
Date
Type
Source
```

## Dataset-Specific Filters

### Asteroids

```text
Potentially Hazardous
Diameter
Miss Distance
Velocity
Close Approach
```

### Exoplanets

```text
Planet Radius
Mass
Temperature
Orbital Period
Discovery Method
```

### Natural Events

```text
Category
Status
Location
Date
```

### NASA Media

```text
Media Type
Keywords
Date
```

This prevents the UI from displaying irrelevant filters.

---

# 31. API Selection Decision

## Final Recommendation

The team should **not attempt to integrate all 16 APIs**.

Doing so would create unnecessary technical complexity and dilute the application's primary user experience.

Instead:

### MVP

```text
1. NASA Image & Video Library
2. NeoWs
3. EONET
4. APOD
5. EPIC
```

### Phase 2

```text
6. Exoplanet Archive
7. DONKI
8. GIBS
9. CNEOS
```

### Stretch

```text
10. TLE
11. Mars Weather
12. Trek WMTS
13. OSDR
14. TechPort
15. TechTransfer
16. Satellite Situation Center
```

---

# 32. Why This Selection Works

The MVP APIs provide complementary capabilities.

```text
             COSMIC EXPLORER
                    │
       ┌────────────┼────────────┐
       │            │            │
   Discover      Explore       Search
       │            │            │
      APOD        EPIC         Image API
       │            │            │
       └────────────┼────────────┘
                    │
              Structured Data
                    │
             ┌──────┴──────┐
             │             │
           NeoWs         EONET
             │             │
         Asteroids    Natural Events
```

This gives the team:

- Strong visual content
- Search
- Filters
- Object details
- Maps
- Dates
- Scientific metadata
- Discovery
- Favourites
- Multiple data types

without requiring the team to build a separate application for every NASA service.

---

# 33. Technical Risks

## Risk 1 — API Rate Limits

Repeated requests could exhaust limits.

### Mitigation

- Cache results
- Debounce search
- Avoid duplicate requests
- Use a production API key
- Implement loading/error states

---

## Risk 2 — API Deprecation

NASA APIs can change or be archived.

### Mitigation

- Keep API logic isolated
- Do not couple components directly to endpoints
- Maintain data mappers
- Prefer current official APIs
- Document endpoint versions

---

## Risk 3 — Different Data Models

Each API uses different schemas.

### Mitigation

Use normalized application models.

```text
NASA API
   ↓
Adapter
   ↓
CosmicObject
   ↓
UI
```

---

## Risk 4 — Image Availability

Not every dataset contains images.

### Mitigation

Use consistent placeholders and avoid making imagery mandatory for every card.

---

## Risk 5 — Overly Complex Scope

Integrating too many APIs can consume the team's implementation time.

### Mitigation

Use the MVP stack first.

Only add advanced APIs after:

- Search works
- Filtering works
- Detail pages work
- Favourites work
- Responsive UI works
- Accessibility works

---

# 34. Recommended Development Order

## Sprint 1 — Foundation

```text
Project structure
NASA API service
Data types
Explore page
Reusable cards
```

## Sprint 2 — Search

```text
NASA Image API
Search bar
Results
Loading
Errors
Empty states
```

## Sprint 3 — Structured Astronomy

```text
NeoWs
Asteroid cards
Asteroid filters
Asteroid details
```

## Sprint 4 — Earth / Events

```text
EONET
Event cards
Map
EPIC
```

## Sprint 5 — Polish

```text
APOD
Favourites
Responsive UI
Accessibility
Performance
```

## Sprint 6 — Advanced Features

Only if time allows:

```text
Exoplanets
DONKI
GIBS
CNEOS
```

---

# 35. Testing Strategy

Every integrated API should be tested for:

## Happy Path

```text
API request
   ↓
Valid response
   ↓
Data mapped
   ↓
UI displayed
```

## Empty Response

```text
API request
   ↓
No results
   ↓
Empty state
```

## Network Failure

```text
API request
   ↓
Network error
   ↓
Error state
```

## Invalid Data

```text
API request
   ↓
Unexpected schema
   ↓
Safe fallback
```

## Rate Limit

```text
API request
   ↓
429 / limit
   ↓
Friendly error
```

---

# 36. Definition of API Integration Done

An API is considered integrated when:

- [ ] Official documentation has been reviewed
- [ ] Endpoint works with real data
- [ ] Type/interface exists
- [ ] API service is isolated
- [ ] Data is normalized
- [ ] Loading state exists
- [ ] Error state exists
- [ ] Empty state exists
- [ ] UI component uses normalized data
- [ ] Search/filter behavior has been tested
- [ ] Mobile layout has been tested
- [ ] Accessibility has been tested
- [ ] API rate limits have been considered
- [ ] No API secrets are committed to Git
- [ ] Fallback/mock data exists where appropriate

---

# 37. Final Recommendation

Cosmic Explorer should be positioned as:

> **An interactive NASA discovery platform that connects astronomical objects, NASA media, Earth events, and scientific data into one searchable exploration experience.**

The most important APIs are:

### 1. NASA Image and Video Library

For broad search and visual discovery.

### 2. NeoWs

For structured astronomical objects and filtering.

### 3. EONET

For natural events and map-based exploration.

### 4. APOD

For featured daily discoveries.

### 5. EPIC

For Earth-from-space imagery.

Then:

### 6. Exoplanet Archive

For advanced astronomy.

### 7. DONKI

For space-weather exploration.

### 8. GIBS

For satellite imagery and interactive maps.

### 9. CNEOS

For advanced asteroid/near-Earth-object functionality.

The remaining APIs should be treated as optional extensions rather than MVP dependencies.

---

# 38. Sources

## Official NASA API Portal

NASA Open APIs:
https://api.nasa.gov/

## NASA API Documentation Repository

https://github.com/nasa/api-docs

## NASA Image and Video Library

https://images.nasa.gov/

## NASA Exoplanet Archive

https://exoplanetarchive.ipac.caltech.edu/

## NASA Earthdata / GIBS

https://www.earthdata.nasa.gov/data/tools/gibs

## NASA EONET

https://eonet.gsfc.nasa.gov/

## NASA CNEOS / JPL SSD

https://ssd-api.jpl.nasa.gov/

---

# 39. Final Takeaway

The API research shows that Cosmic Explorer should be built around **complementary datasets rather than maximum API count**.

The strongest architecture is:

```text
                    COSMIC EXPLORER
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
     Discovery          Objects             Earth
        │                  │                  │
     APOD             NeoWs             EONET + GIBS
     Images           Exoplanets             │
        │                  │                 EPIC
        └──────────────────┼──────────────────┘
                           │
                    Unified Search
                           │
                    Filters + Sort
                           │
                    Object Details
                           │
                       Favourites
```

The product should prioritize **quality of exploration over quantity of APIs**.

The strongest MVP is therefore:

> **APOD + NASA Image & Video Library + NeoWs + EONET + EPIC**

with:

> **Exoplanet + DONKI + GIBS + CNEOS**

as the next layer of functionality.

This approach gives Cosmic Explorer enough breadth to feel like a real NASA exploration product while keeping the technical scope realistic for a CSCI 3230U team project.
