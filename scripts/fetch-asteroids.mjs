// AI-assisted - see AI-USAGE.md #1
// Pulls upcoming near-Earth asteroid close approaches from NASA NeoWs
// and saves them as data/asteroids.json in our own shape.
// Usage: put NASA_API_KEY=... in .env, then run `node scripts/fetch-asteroids.mjs [weeks]`
// (weeks defaults to 4)

import { writeFile } from "node:fs/promises";
// AI-assisted - see AI-USAGE.md #5.
import { normalizeAsteroids } from '../server/normalize.js';
import { readConfig } from '../server/config.js';
import { createUpstream } from '../server/upstream.js';

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
if (!Number.isInteger(weeks) || weeks < 1 || weeks > 12) throw new Error('Choose 1–12 weeks.');
const upstream = createUpstream(readConfig());
const day = (offset) => new Date(Date.now() + offset * 864e5).toISOString().slice(0, 10);

const feeds = await Promise.all(
  Array.from({ length: weeks }, async (_, i) => {
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${day(i * 7)}&end_date=${day(i * 7 + 6)}&api_key=${key}`;
    try {
      return normalizeAsteroids(await upstream.request(url), day(i * 7), day(i * 7 + 6));
    } catch {
      console.error('NASA refresh failed. The existing sample was not changed.');
      process.exit(1);
    }
  }),
);

// Each feed groups asteroids by date; flatten and keep only the fields our UI needs
const neos = feeds.flat();
// Drop repeats so each id is unique (React keys, detail routes)
const unique = new Map();
for (const neo of neos) if (!unique.has(neo.id)) unique.set(neo.id, neo);
const asteroids = [...unique.values()]
  .sort((a, b) => a.approachDate.localeCompare(b.approachDate));

await writeFile("data/asteroids.json", JSON.stringify(asteroids, null, 2) + "\n");
console.log(`Saved ${asteroids.length} asteroids to data/asteroids.json`);
