// AI-assisted - see AI-USAGE.md #3
// Search, filter and sort for the asteroid list. No DOM code here, so it can be
// tested in Node and moved into the React build as-is.

// AI-assisted - see AI-USAGE.md #5. Missing live measurements sort last.
const numeric = (key, direction = 1) => (a, b) => a[key] == null ? (b[key] == null ? 0 : 1)
  : b[key] == null ? -1 : direction * (a[key] - b[key]);
const sorters = {
  date: (a, b) => a.approachDate.localeCompare(b.approachDate),
  distance: numeric('missDistanceKm'),
  size: numeric('diameterMaxM', -1),
  speed: numeric('velocityKph', -1),
  name: (a, b) => a.name.localeCompare(b.name, "en", { numeric: true }),
};

// q: name search, hazard: "all" | "yes" | "no", sort: a key of `sorters`
export function filterAsteroids(asteroids, { q = "", hazard = "all", sort = "date" } = {}) {
  const query = q.trim().toLowerCase();
  return asteroids
    .filter((a) => a.name.toLowerCase().includes(query))
    .filter((a) => hazard === "all" || a.hazardous === (hazard === "yes"))
    .sort(sorters[sort] ?? sorters.date);
}
