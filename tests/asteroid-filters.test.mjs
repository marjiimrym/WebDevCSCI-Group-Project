// AI-assisted - see AI-USAGE.md #3
// Run with: node --test
import { test } from "node:test";
import assert from "node:assert/strict";
import { filterAsteroids } from "../assets/js/asteroid-filters.js";

const list = [
  { name: "433 Eros", hazardous: false, approachDate: "2026-10-20", missDistanceKm: 300, diameterMaxM: 30000, velocityKph: 20000 },
  { name: "(2010 DO)", hazardous: true, approachDate: "2026-10-13", missDistanceKm: 100, diameterMaxM: 277, velocityKph: 91000 },
  { name: "99942 Apophis", hazardous: true, approachDate: "2026-10-15", missDistanceKm: 200, diameterMaxM: 450, velocityKph: 30000 },
];
const names = (results) => results.map((a) => a.name);

test("defaults to everything, soonest approach first", () => {
  assert.deepEqual(names(filterAsteroids(list)), ["(2010 DO)", "99942 Apophis", "433 Eros"]);
});

test("search ignores case and surrounding spaces", () => {
  assert.deepEqual(names(filterAsteroids(list, { q: "  APO " })), ["99942 Apophis"]);
  assert.deepEqual(filterAsteroids(list, { q: "nothing" }), []);
});

test("hazard filter", () => {
  assert.deepEqual(names(filterAsteroids(list, { hazard: "yes" })), ["(2010 DO)", "99942 Apophis"]);
  assert.deepEqual(names(filterAsteroids(list, { hazard: "no" })), ["433 Eros"]);
});

test("sort options", () => {
  assert.deepEqual(names(filterAsteroids(list, { sort: "distance" })), ["(2010 DO)", "99942 Apophis", "433 Eros"]);
  assert.deepEqual(names(filterAsteroids(list, { sort: "size" })), ["433 Eros", "99942 Apophis", "(2010 DO)"]);
  assert.deepEqual(names(filterAsteroids(list, { sort: "speed" })), ["(2010 DO)", "99942 Apophis", "433 Eros"]);
  assert.deepEqual(names(filterAsteroids(list, { sort: "unknown" })), ["(2010 DO)", "99942 Apophis", "433 Eros"]);
});

test("does not reorder the original list", () => {
  const before = names(list);
  filterAsteroids(list, { sort: "size" });
  assert.deepEqual(names(list), before);
});
