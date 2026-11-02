// AI-assisted - see AI-USAGE.md #5.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { normalizeApod, normalizeAsteroids, normalizeImages, normalizeWeather } from '../server/normalize.js';
import { feed, neo, apod, imageResponse, flares, approach } from './fixtures/nasa.mjs';
import { filterAsteroids } from '../assets/js/asteroid-filters.js';

test('NeoWs deduplicates IDs and keeps fields from the earliest Earth approach in range', () => {
  const result = normalizeAsteroids(feed, '2026-11-01', '2026-11-07');
  assert.equal(result.length, 1);
  assert.equal(result[0].approachDate, '2026-11-01');
  assert.equal(result[0].missDistanceKm, 456);
  assert.equal(result[0].diameterMaxM, 26);
  assert.equal(result[0].velocityKph, 42001);
  assert.equal(filterAsteroids(result, { hazard: 'yes', q: 'test' }).length, 1);
});
test('NeoWs excludes non-Earth and out-of-range approaches, accepts valid empty feeds', () => {
  const input = { near_earth_objects: { day: [{ ...neo, close_approach_data: [approach('2026-10-01'), { ...approach('2026-11-02'), orbiting_body: 'Mars' }] }] } };
  assert.deepEqual(normalizeAsteroids(input, '2026-11-01', '2026-11-07'), []);
  assert.deepEqual(normalizeAsteroids({ near_earth_objects: {} }, '2026-11-01', '2026-11-07'), []);
});
test('malformed feeds fail validation; missing measurements remain null and sort last', () => {
  for (const data of [null, {}, { near_earth_objects: [] }, { near_earth_objects: { bad: null } }]) {
    assert.throws(() => normalizeAsteroids(data, '2026-11-01', '2026-11-07'));
  }
  const input = { near_earth_objects: { day: [{ ...neo, estimated_diameter: null }] } };
  const [item] = normalizeAsteroids(input, '2026-11-01', '2026-11-07');
  assert.equal(item.diameterMaxM, null);
  assert.equal(filterAsteroids([item, { ...item, id: '456', diameterMaxM: 25 }], { sort: 'size' })[0].id, '456');
});
test('new WordPress APOD uses hdurl for the image and permalink for the page', () => {
  const normalized = normalizeApod(apod);
  assert.equal(normalized.imageUrl, apod.hdurl);
  assert.equal(normalized.pageUrl, apod.permalink);
  assert.equal(normalizeApod([{ ...apod, media_type: 'video', hdurl: undefined }]).imageUrl, null);
  assert.throws(() => normalizeApod({ ...apod, hdurl: 'javascript:alert(1)' }));
  assert.throws(() => normalizeApod({ ...apod, date: '2026-02-30' }));
});
test('WordPress HTML and entities become readable text without executing content or showing markup', () => {
  const item = normalizeApod({ ...apod,
    title: 'Moon &amp; stars', credit: '<a href="https://example.com">A photographer</a>',
    explanation: '<strong>Explanation:</strong> See <a href="https://example.com">the Moon</a>.<br><script>alert(1)</script>Next paragraph.',
  });
  assert.equal(item.title, 'Moon & stars');
  assert.equal(item.credit, 'A photographer');
  assert.ok(item.explanation.includes('Explanation: See the Moon.'));
  assert.ok(!item.explanation.includes('<') && !item.explanation.includes('alert') && !item.explanation.includes('https:'));
});
test('NASA media and DONKI normalization validate links and accept empty results', () => {
  assert.equal(normalizeImages(imageResponse)[0].id, 'test-image');
  assert.deepEqual(normalizeImages({ collection: { items: [] } }), []);
  assert.throws(() => normalizeImages({ collection: { items: [{}] } }));
  assert.equal(normalizeWeather(flares)[0].beginTime, '2026-11-01T10:00:00.000Z');
  assert.deepEqual(normalizeWeather([]), []);
  assert.throws(() => normalizeWeather([{ ...flares[0], beginTime: 'bad' }]));
});
