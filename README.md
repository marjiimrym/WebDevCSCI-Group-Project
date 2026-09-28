# 🌌 Cosmic Explorer

> **Explore the universe. Discover the unknown.**

Cosmic Explorer is an interactive single-page web application for discovering and exploring astronomical objects, space missions, planetary data, and NASA imagery.

The application transforms publicly available NASA and astronomy data into an immersive exploration experience where users can browse the universe, inspect individual celestial objects, search for discoveries, and save their favourite findings.

The goal is to combine **real scientific data**, **interactive visualization**, and **modern web design** into a visually engaging space-exploration platform.

---

## 🚀 Project Overview

Cosmic Explorer provides users with a centralized interface for exploring space-related information from web APIs.

Users can:

* 🌌 Discover astronomical objects
* 🪐 Explore planets and moons
* ☄️ Browse asteroids and other small bodies
* 🚀 Explore historical and current space missions
* 📸 View astronomy imagery
* 🔎 Search the collection
* ⭐ Save objects to favourites
* 📊 View detailed information about discovered objects
* 🌐 Interact with an immersive astronomy visualization

The application will be developed as a **Single Page Application (SPA)** with multiple views managed through client-side navigation.

---

# ✨ Core Features

## 🌌 Explore

The Explore page acts as the main discovery interface.

Users can browse a collection of space-related objects and discoveries through cards, filters, categories, and visual previews.

Possible categories include:

* Astronomy Pictures
* Planets
* Moons
* Asteroids
* Comets
* Galaxies
* Nebulae
* Stars
* Space Missions

Each result provides a quick overview and can be opened to view additional information.

---

## 🔭 Object Details

Users can select an astronomical object to view a dedicated detail view.

Depending on the object, information may include:

* Name
* Object type
* Description
* Images
* Discovery information
* Physical characteristics
* Location
* Distance
* Orbital information
* Related missions
* Additional NASA data

The page will combine structured information with large-scale imagery to create an immersive object exploration experience.

---

## 🚀 Missions

The Missions section allows users to explore space missions.

Example mission categories:

* Human spaceflight
* Robotic exploration
* Planetary missions
* Earth observation
* Space telescopes
* Deep-space missions

Each mission can contain:

* Mission name
* Launch date
* Mission status
* Target
* Agency
* Description
* Mission imagery
* Related discoveries

---

## ⭐ Favourites

Users can save interesting discoveries to a personal favourites collection.

Favourite objects can include:

* Astronomical objects
* NASA images
* Missions
* Planets

Users can remove objects from their favourites at any time.

For the initial implementation, favourites may be persisted using browser storage such as `localStorage`.

---

## 🔎 Search

Cosmic Explorer will provide a global search interface.

Users can search for:

* Object names
* Missions
* Planets
* Asteroids
* Astronomy images
* Categories

Search results should update dynamically and provide relevant objects that users can open for additional information.

---

# 🌠 Interactive Astronomy Visualization

One of the major features of Cosmic Explorer is an interactive astronomy visualization.

### M4 — Interactive Visualization

The application will use **Canvas/WebGL** to create an interactive representation of astronomical data.

Possible interactions include:

* 🖱️ Pan around the visualization
* 🔍 Zoom in and out
* ✨ Select celestial objects
* 🌌 Navigate through a star field
* 🪐 Display planetary objects
* 📍 Highlight selected objects
* 💫 Animate celestial bodies
* ℹ️ Display information about selected objects

The visualization should complement the application's data rather than simply acting as decoration.

For example:

```text
              ✦
                    ✦

        ✦        🪐        ✦

   ✦                       ✦

             ✦
                  ✦
```

Selecting an object can open its corresponding information within the application.

---

# 🛰️ Data Sources

Cosmic Explorer will use publicly available astronomy and NASA APIs.

Potential sources include:

### NASA APIs

NASA's API ecosystem can provide information such as:

* Astronomy Picture of the Day
* Near-Earth Objects
* Mars imagery
* Earth imagery
* Space-related datasets

### Additional Astronomy APIs

Additional public APIs may be used where appropriate to provide:

* Planetary information
* Astronomical objects
* Mission information
* Stellar data
* Orbital information

All external data sources will be documented in the project.

---

# 🧭 Application Structure

The application will contain several major views.

```text
Cosmic Explorer
│
├── 🌌 Explore
│   ├── Featured discoveries
│   ├── Categories
│   ├── Object collection
│   └── Filters
│
├── 🔭 Object Details
│   ├── Overview
│   ├── Imagery
│   ├── Scientific data
│   └── Related discoveries
│
├── 🚀 Missions
│   ├── Mission collection
│   ├── Mission details
│   └── Mission imagery
│
├── ⭐ Favourites
│   └── Saved discoveries
│
├── 🔎 Search
│   └── Search results
│
└── 🌌 Interactive Visualization
    └── Canvas / WebGL astronomy explorer
```

---

# 🎨 Design Direction

Cosmic Explorer will use a cinematic space-inspired visual design.

### Visual language

* Deep-space backgrounds
* Stars and subtle particle effects
* Large astronomy imagery
* Glass-like information panels
* Smooth transitions
* Minimal interface chrome
* High-contrast typography
* Responsive layouts
* Interactive hover states
* Subtle animations

The interface should feel like a **modern space exploration console** rather than a traditional data dashboard.

### Example visual hierarchy

```text
┌───────────────────────────────────────────────────────┐
│ COSMIC EXPLORER                         SEARCH  ★     │
├───────────────────────────────────────────────────────┤
│                                                       │
│              EXPLORE THE UNIVERSE                    │
│                                                       │
│       Discover worlds beyond our own.                │
│                                                       │
│              [ Start Exploring ]                     │
│                                                       │
│                  ✦    ✧    ✦                         │
│             ✦              🪐                         │
│                                                       │
├───────────────────────────────────────────────────────┤
│ Featured Discoveries                                  │
│                                                       │
│  [Image]       [Image]       [Image]                  │
│  Mars          Nebula        Asteroid                 │
│                                                       │
└───────────────────────────────────────────────────────┘
```

---

# 🧑‍💻 Technology

The project will be implemented as a modern web application.

Potential technologies include:

* **HTML5**
* **CSS3**
* **JavaScript / TypeScript**
* **React**
* **Canvas / WebGL**
* **REST APIs**
* **NASA APIs**
* **Browser Local Storage**

The exact technology stack will be finalized by the project team during development.

---

# 📱 Responsive Design

Cosmic Explorer will support:

* Desktop
* Laptop
* Tablet
* Mobile

The interface should adapt to different screen sizes while maintaining the core exploration experience.

The interactive visualization should also provide an appropriate experience on smaller screens.

---

# ⚡ User Experience

The application should prioritize discovery and exploration.

A typical user flow might look like:

```text
Landing Page
     ↓
Explore
     ↓
Browse Space Objects
     ↓
Select Object
     ↓
Object Details
     ↓
Save to Favourites
     ↓
Continue Exploring
```

Another flow:

```text
Search
   ↓
"Saturn"
   ↓
Search Results
   ↓
Saturn
   ↓
Planet Details
   ↓
Related Missions
   ↓
Cassini Mission
```

---

# 🧪 Functional Requirements

The application should allow users to:

### FR1 — Browse Objects

Users can browse a collection of astronomical objects retrieved from a web service.

### FR2 — View Object Details

Users can select an object and view additional information about it.

### FR3 — Search

Users can search for objects and missions.

### FR4 — Filter

Users can filter objects by relevant categories.

### FR5 — View Images

Users can view imagery associated with astronomical objects and missions.

### FR6 — Browse Missions

Users can browse available space missions.

### FR7 — Save Favourites

Users can add and remove objects from their favourites.

### FR8 — Interactive Visualization

Users can interact with a Canvas/WebGL astronomy visualization.

### FR9 — Navigation

Users can navigate between application views without requiring full-page reloads.

### FR10 — API Integration

The application retrieves and displays data from external web services.

---

# 🔒 Error Handling

Cosmic Explorer should gracefully handle external API failures.

Examples include:

* API unavailable
* Network connection failure
* No search results
* Missing imagery
* Invalid object
* Rate limiting
* Incomplete API response

Instead of displaying a broken interface, the application should provide clear feedback to the user.

Example:

```text
Unable to retrieve astronomical data.

Please try again in a moment.
[ Retry ]
```

---

# ♿ Accessibility

Accessibility will be considered throughout development.

The application should include:

* Semantic HTML
* Keyboard navigation
* Accessible buttons
* Descriptive image alternatives
* Sufficient colour contrast
* Visible focus states
* Responsive text
* Reduced-motion considerations

Interactive visualizations should not be the only way users can access important information.

---

# 👥 Team Development

The project will be developed collaboratively using Git.

A possible division of responsibilities:

| Area          | Responsibilities                                |
| ------------- | ----------------------------------------------- |
| Frontend      | UI components, layouts, navigation              |
| API/Data      | NASA APIs, data processing, error handling      |
| Visualization | Canvas/WebGL astronomy experience               |
| UX/Design     | Visual system, responsive design, accessibility |
| Integration   | Connecting components, testing, deployment      |

Responsibilities may overlap so that all team members contribute to the core application.

---

# 🌿 Git Workflow

The team will use feature branches.

Example:

```text
main
│
├── feature/explore
├── feature/search
├── feature/missions
├── feature/favourites
├── feature/object-details
└── feature/visualization
```

Changes will be merged through pull requests after review.

---

# 📂 Suggested Project Structure

```text
cosmic-explorer/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── ObjectCard/
│   │   ├── MissionCard/
│   │   ├── SearchBar/
│   │   └── Visualization/
│   │
│   ├── pages/
│   │   ├── Explore/
│   │   ├── ObjectDetails/
│   │   ├── Missions/
│   │   ├── Favourites/
│   │   └── Search/
│   │
│   ├── services/
│   │   └── api/
│   │
│   ├── hooks/
│   │
│   ├── utils/
│   │
│   ├── styles/
│   │
│   ├── App
│   └── main
│
├── README.md
├── package.json
└── .gitignore
```

---

# 🎯 Project Goals

The main goals of Cosmic Explorer are to:

1. Build a functional single-page web application.
2. Integrate external astronomy web services.
3. Present complex scientific information in an accessible way.
4. Provide meaningful search and discovery functionality.
5. Implement persistent favourites.
6. Create an interactive Canvas/WebGL visualization.
7. Provide a polished responsive user experience.
8. Practice collaborative software development using Git.
9. Apply frontend software engineering principles learned throughout the course.

---

# 🌌 Future Enhancements

If time permits, Cosmic Explorer could be extended with:

* 🔭 3D planetary models
* 🛰️ Real-time satellite tracking
* ☄️ Near-Earth object tracking
* 🌍 Interactive Earth visualization
* 🧑‍🚀 Astronaut profiles
* 📅 Mission timelines
* 🔔 Space-event notifications
* 🧠 AI-powered astronomy explanations
* 🗺️ Interactive star maps
* 📡 Live space-mission telemetry
* 🌙 Interactive solar-system navigation

These features are considered optional and will only be implemented after the required project functionality is complete.

---

# 📜 License

This project is developed for educational purposes as part of **CSCI 3230U** at Ontario Tech University.

Astronomy imagery and data remain subject to the licensing and attribution requirements of their respective sources.

---

## 🌠 Roles
* Maryam : Project Manager -- ensures the project is developing on schedule and Github is upto date. Contributes to frontend and backend equally as the rest. 
* Dhruv: Full Stack Lead -- ensures the project is running smoothly and is in charge for fixing any bugs. Contributes to frontend and backend equally as the rest. 
* Gamze: Backend Lead -- ensures the functionality of the website is developed properly. 
* Nithin: Frontend Lead -- ensures the layout and structure of the website. 

**Cosmic Explorer turns publicly available astronomy data into an interactive journey through the universe.**

> *The universe is vast. Start exploring.*
