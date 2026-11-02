// AI-assisted - see AI-USAGE.md #5.
import { readFileSync } from 'node:fs';
import { normalizeApod, normalizeImages, normalizeWeather } from '../../server/normalize.js';
import { apod, imageResponse, flares, meta } from '../fixtures/nasa.mjs';
export const asteroids = JSON.parse(readFileSync('data/asteroids.json', 'utf8')).map((item) => ({ ...item, jplUrl: item.jplUrl.replace(/^http:\/\//, 'https://') }));
export const responses = { asteroids, apod: normalizeApod(apod), images: normalizeImages(imageResponse), weather: normalizeWeather(flares) };
export async function mockNasa(page) {
  await page.route('https://images-assets.nasa.gov/test.jpg', (route) => route.fulfill({ path: 'assets/images/openpage.jpg', contentType: 'image/jpeg' }));
  await page.route('**/api/**', (route) => {
    const kind = new URL(route.request().url()).pathname.split('/').at(-1);
    return route.fulfill({ json: { data: responses[kind], meta } });
  });
}
