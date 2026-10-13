// AI-assisted - see AI-USAGE.md #3
// Search, filter and sort for the asteroid list. No DOM code here, so it can be
// tested in Node and moved into the React build as-is.

const sorters = {
  date: (a, b) => a.approachDate.localeCompare(b.approachDate),
  distance: (a, b) => a.missDistanceKm - b.missDistanceKm,
  size: (a, b) => b.diameterMaxM - a.diameterMaxM,
  speed: (a, b) => b.velocityKph - a.velocityKph,
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
