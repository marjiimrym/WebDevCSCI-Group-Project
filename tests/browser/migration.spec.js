// AI-assisted - see AI-USAGE.md #4
import { readdirSync } from 'node:fs';
import { test, expect } from '@playwright/test';

test('React homepage keeps its links, images, and keyboard skip link', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.locator('#root h1')).toHaveText('Explore theUniverse.');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to main content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();

  for (const img of await page.locator('img').all()) {
    await img.scrollIntoViewIfNeeded();
    await expect.poll(() => img.evaluate((element) => element.complete && element.naturalWidth > 0)).toBe(true);
  }

  await page.getByRole('link', { name: 'Launch Explorer' }).first().click();
  await expect(page).toHaveURL(/\/pages\/explore\.html$/);
  await page.locator('.card__link[href="mars.html"]').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Mars');
  await page.getByRole('link', { name: 'Cosmic Explorer' }).first().click();
  await expect(page.locator('#root h1')).toBeVisible();
  expect(errors).toEqual([]);
});

test('all legacy pages and their local assets survive the production build', async ({ request }) => {
  for (const file of readdirSync('pages').filter((name) => name.endsWith('.html'))) {
    const path = `/pages/${file}`;
    const response = await request.get(path);
    expect(response.ok(), path).toBe(true);
    const html = await response.text();
    expect(html).toContain('<main');
    for (const [, attribute] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
      if (/^(https?:|#|mailto:|data:)/.test(attribute)) continue;
      const url = new URL(attribute, `http://127.0.0.1:4173${path}`);
      const asset = await request.get(url.href);
      expect(asset.ok(), `${file}: ${attribute}`).toBe(true);
      if (/\.(svg|png|jpe?g|webp)$/.test(url.pathname)) {
        expect(asset.headers()['content-type']).toMatch(/^image\//);
      }
    }
  }
});

test('legacy asteroid data loads and filtering still works', async ({ page }) => {
  await page.goto('/pages/asteroids.html');
  await expect(page.locator('#asteroid-grid .card').first()).toBeVisible();
  await page.locator('#asteroid-filters input[name="q"]').fill('no-such-asteroid');
  await expect(page.locator('#asteroid-grid .card')).toHaveCount(0);
  await expect(page.locator('#results-status')).toBeVisible();
  await page.locator('#asteroid-filters input[name="q"]').fill('');
  await expect(page.locator('#asteroid-grid .card').first()).toBeVisible();
});

test('homepage fits a mobile viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(page.locator('#root h1')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await expect(page.getByRole('navigation', { name: 'Main', exact: true })).toBeVisible();
});
