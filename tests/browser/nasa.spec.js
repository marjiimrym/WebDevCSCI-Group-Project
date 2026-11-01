// AI-assisted - see AI-USAGE.md #5.
import { test, expect } from '@playwright/test';
import { mockNasa, responses } from './nasa-mocks.js';
import { meta } from '../fixtures/nasa.mjs';

test.beforeEach(async ({ page }) => { await mockNasa(page); });

test('live asteroids preserve filters and show update information', async ({ page }) => {
  let calls = 0;
  await page.route('**/api/asteroids', (route) => { calls++; return route.fulfill({ json: { data: responses.asteroids, meta } }); });
  await page.goto('/asteroids');
  await expect(page.getByText(/Last successful update:/)).toBeVisible();
  await page.getByRole('radio', { name: 'Potentially hazardous' }).click();
  await expect(page.getByRole('radio', { name: 'Potentially hazardous' })).toBeChecked();
  await page.getByLabel('Sort by').selectOption('distance');
  await page.getByRole('searchbox').fill('no match');
  await expect(page.locator('#results-status')).toBeVisible();
  expect(calls).toBe(1);
});
test('loading, failure with sample, retry, and valid empty state', async ({ page }) => {
  let resolveRequest;
  const waiting = new Promise((resolve) => { resolveRequest = resolve; });
  await page.route('**/api/asteroids', async (route) => { await waiting; await route.fulfill({ status: 503, json: { error: { code: 'UNAVAILABLE' } } }); });
  await page.goto('/asteroids');
  await expect(page.getByText(/Updating NASA data/)).toBeVisible();
  resolveRequest();
  await expect(page.getByText(/Could not update NASA data/)).toBeVisible();
  await expect(page.locator('#asteroid-grid .card').first()).toBeVisible();
  await page.route('**/api/asteroids', (route) => route.fulfill({ json: { data: [], meta } }));
  await page.getByRole('button', { name: 'Retry update' }).click();
  await expect(page.getByText('No asteroid approaches reported for this period.')).toBeVisible();
});
test('previously loaded data survives offline navigation and cached server responses are labelled', async ({ page, context }) => {
  await page.route('**/api/asteroids', (route) => route.fulfill({ json: { data: responses.asteroids.slice(0, 2), meta: { ...meta, cached: true, stale: true } } }));
  await page.goto('/asteroids');
  await expect(page.getByText(/Showing previously cached NASA data/)).toBeVisible();
  await page.getByRole('navigation', { name: 'Main', exact: true }).getByRole('link', { name: 'Explore', exact: true }).click();
  await context.setOffline(true);
  await page.getByRole('navigation', { name: 'Main', exact: true }).getByRole('link', { name: 'Asteroids', exact: true }).click();
  await expect(page.getByText(/Offline\./)).toBeVisible();
  await expect(page.locator('#asteroid-grid .card')).toHaveCount(2);
  await context.setOffline(false);
});
test('APOD displays the image field, video links, and solar-flare observations', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('img', { name: 'A blue nebula' })).toHaveAttribute('src', 'https://images-assets.nasa.gov/test.jpg');
  await expect(page.getByRole('link', { name: 'M1.0 solar flare' })).toBeVisible();
  await page.route('**/api/apod', (route) => route.fulfill({ json: { data: { ...responses.apod, mediaType: 'video', imageUrl: null }, meta } }));
  await page.reload();
  await expect(page.getByText(/Video or interactive feature/)).toBeVisible();
  await expect(page.locator('iframe')).toHaveCount(0);
});
test('image search uses explicit submission, empty results, and does not alter favourites', async ({ page }) => {
  let calls = 0;
  await page.route('**/api/images?*', (route) => { calls++; return route.fulfill({ json: { data: calls === 1 ? responses.images : [], meta } }); });
  await page.goto('/explore');
  await page.getByRole('button', { name: 'Favourite Mars', exact: true }).click();
  await page.getByLabel('NASA image keywords').fill('orion');
  expect(calls).toBe(0);
  await page.getByRole('button', { name: 'Search NASA images' }).click();
  await expect(page.locator('.nasa-image-card')).toHaveCount(1);
  await page.getByLabel('NASA image keywords').fill('unfindable');
  await page.getByRole('button', { name: 'Search NASA images' }).click();
  await expect(page.getByText('No NASA images match. Try a different search.')).toBeVisible();
  await page.getByRole('navigation', { name: 'Main', exact: true }).getByRole('link', { name: 'Favourites' }).click();
  await expect(page).toHaveURL(/\/favourites$/);
  await expect(page.getByRole('heading', { level: 1, name: 'Favourites' })).toBeVisible();
  await expect(page.locator('.card-grid .card__title')).toHaveText('Mars');
});
test('new content fits mobile screens and is keyboard accessible', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 844 });
  await page.goto('/explore');
  await page.getByLabel('NASA image keywords').fill('orion');
  await page.keyboard.press('Enter');
  await expect(page.locator('.nasa-image-card')).toHaveCount(1);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'A test nebula' })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: 'test-results/nasa-mobile.png', fullPage: true });
});
test('production Express serves direct routes and JSON API 404s; no secret appears in browser requests', async ({ page, request }) => {
  const urls = [];
  page.on('request', (req) => urls.push(req.url()));
  await page.goto('/asteroids');
  await page.reload();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Near-Earth Asteroids');
  expect(urls.every((url) => !url.includes('api_key') && !url.includes('api.nasa.gov'))).toBe(true);
  const unknown = await request.get('/api/unknown');
  expect(unknown.status()).toBe(404);
  expect((await unknown.json()).error.code).toBe('NOT_FOUND');
  expect((await request.get('/assets/missing.js')).status()).toBe(404);
});
