// AI-assisted - see AI-USAGE.md #3
// Asteroids page: loads data/asteroids.json, then re-renders the cards whenever
// the search, hazard filter or sort changes.
import { filterAsteroids } from "./asteroid-filters.js";

const form = document.querySelector("#asteroid-filters");
const grid = document.querySelector("#asteroid-grid");
const count = document.querySelector("#results-title");
const status = document.querySelector("#results-status");
const template = document.querySelector("#asteroid-card");

const num = new Intl.NumberFormat("en-CA");
const formatDate = (iso, opts = { year: "numeric" }) =>
  new Date(iso).toLocaleDateString("en-CA", { month: "short", day: "numeric", timeZone: "UTC", ...opts });
const formatKm = (km) => (km >= 1e6 ? `${(km / 1e6).toFixed(1)} million km` : `${num.format(km)} km`);

function card(a) {
  const li = template.content.firstElementChild.cloneNode(true);
  const fill = (slot, text) => (li.querySelector(`[data-slot="${slot}"]`).textContent = text);
  li.querySelector(".card").classList.add(a.hazardous ? "type-hazard" : "type-asteroid");
  fill("category", a.hazardous ? "Potentially hazardous" : "Asteroid");
  fill("name", a.name);
  li.querySelector(".card__link").href = a.jplUrl;
  fill("date", formatDate(a.approachDate));
  fill("distance", formatKm(a.missDistanceKm));
  fill("size", `${num.format(a.diameterMinM)}–${num.format(a.diameterMaxM)} m`);
  fill("speed", `${num.format(a.velocityKph)} km/h`);
  return li;
}

function render(asteroids, range) {
  const results = filterAsteroids(asteroids, Object.fromEntries(new FormData(form)));
  grid.replaceChildren(...results.map(card));
  count.innerHTML = `Showing <strong>${results.length}</strong> of ${asteroids.length} asteroids · ${range}`;
  status.textContent = "No asteroids match. Try a different name or filter.";
  status.hidden = results.length > 0;
}

async function main() {
  let asteroids;
  try {
    // AI-assisted - see AI-USAGE.md #4. Let Vite include the fixture in the build.
    const res = await fetch(new URL("../../data/asteroids.json", import.meta.url));
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    asteroids = await res.json();
  } catch {
    count.textContent = "Couldn't load asteroid data";
    status.textContent =
      "Open this page through a local web server (browsers block data loading from file://), " +
      "and make sure data/asteroids.json exists - run node scripts/fetch-asteroids.mjs to create it.";
    status.hidden = false;
    return;
  }

  const hazardous = asteroids.filter((a) => a.hazardous).length;
  form.querySelector('[data-count="all"]').textContent = asteroids.length;
  form.querySelector('[data-count="yes"]').textContent = hazardous;
  form.querySelector('[data-count="no"]').textContent = asteroids.length - hazardous;

  // The file is saved in date order, so the first and last entries give the window
  const range = asteroids.length
    ? `passing Earth ${formatDate(asteroids[0].approachDate, {})} – ${formatDate(asteroids.at(-1).approachDate)}`
    : "";

  form.addEventListener("input", () => render(asteroids, range));
  form.addEventListener("submit", (e) => e.preventDefault());
  render(asteroids, range);
}

main();
