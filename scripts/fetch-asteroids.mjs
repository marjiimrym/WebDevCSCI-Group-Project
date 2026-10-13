// AI-assisted - see AI-USAGE.md #1
// Pulls upcoming near-Earth asteroid close approaches from NASA NeoWs
// and saves them as data/asteroids.json in our own shape.
// Usage: put NASA_API_KEY=... in .env, then run `node scripts/fetch-asteroids.mjs [weeks]`
// (weeks defaults to 4)

import { writeFile } from "node:fs/promises";

try {
  process.loadEnvFile();
} catch {
  // no .env file - fall through to the check below
}

const key = process.env.NASA_API_KEY;
if (!key) {
  console.error("Missing NASA_API_KEY. Add it to .env (see .env.example).");
  process.exit(1);
}

// The feed allows at most 7 days per request, so ask for one week at a time
const weeks = Number(process.argv[2] ?? 4);
const day = (offset) => new Date(Date.now() + offset * 864e5).toISOString().slice(0, 10);

const feeds = await Promise.all(
  Array.from({ length: weeks }, async (_, i) => {
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${day(i * 7)}&end_date=${day(i * 7 + 6)}&api_key=${key}`;
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`NeoWs request failed: ${res.status} ${res.statusText}`);
      process.exit(1);
    }
    return res.json();
  }),
);

// Each feed groups asteroids by date; flatten and keep only the fields our UI needs
const neos = feeds.flatMap((feed) => Object.values(feed.near_earth_objects).flat());
// Drop repeats so each id is unique (React keys, detail routes)
const asteroids = [...new Map(neos.map((neo) => [neo.id, neo])).values()]
  .map((neo) => {
    const approach = neo.close_approach_data[0];
    return {
      id: neo.id,
      name: neo.name,
      hazardous: neo.is_potentially_hazardous_asteroid,
      diameterMinM: Math.round(neo.estimated_diameter.meters.estimated_diameter_min),
      diameterMaxM: Math.round(neo.estimated_diameter.meters.estimated_diameter_max),
      approachDate: approach.close_approach_date,
      velocityKph: Math.round(Number(approach.relative_velocity.kilometers_per_hour)),
      missDistanceKm: Math.round(Number(approach.miss_distance.kilometers)),
      jplUrl: neo.nasa_jpl_url,
    };
  })
  .sort((a, b) => a.approachDate.localeCompare(b.approachDate));

await writeFile("data/asteroids.json", JSON.stringify(asteroids, null, 2) + "\n");
console.log(`Saved ${asteroids.length} asteroids to data/asteroids.json`);
