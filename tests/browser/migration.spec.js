import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { test, expect } from '@playwright/test';
// AI-assisted - see AI-USAGE.md #5.
import { mockNasa } from './nasa-mocks.js';

const objects = JSON.parse(readFileSync('data/objects.json', 'utf8'));
const legacyRoutes = JSON.parse(readFileSync('src/data/legacyRoutes.json', 'utf8'));
const errors = new WeakMap();

test.beforeEach(async ({ page }) => {
  await mockNasa(page);
  const messages = [];
  errors.set(page, messages);
  page.on('pageerror', (error) => messages.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') messages.push(`${message.text()} ${message.location().url}`);
  });
});

test.afterEach(async ({ page }) => {
  expect(errors.get(page)).toEqual([]);
});

async function checkImages(page) {
  for (const img of await page.locator('img').all()) {
    await img.scrollIntoViewIfNeeded();
    await expect.poll(() => img.evaluate((element) => element.complete && element.naturalWidth > 0)).toBe(true);
  }
}

test('landing page, keyboard skip link and client-side navigation', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#root h1')).toHaveText('Explore theUniverse.');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to main content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  await checkImages(page);

  await page.evaluate(() => { window.navigationSentinel = 'same document'; });
  await page.getByRole('link', { name: 'Launch Explorer' }).first().click();
  await expect(page).toHaveURL(/\/explore$/);
  await expect(page.locator('.card-grid .card')).toHaveCount(26);
  await checkImages(page);
  await page.locator('.card__link[href="/objects/mars"]').click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Mars');
  await expect(page.locator('.facts .fact')).toHaveCount(8);
  await expect(page.locator('.site-nav__link.is-active')).toHaveText('Explore');
  await page.getByRole('link', { name: 'Cosmic Explorer', exact: true }).first().click();
  await expect(page).toHaveURL(/\/$/);
  expect(await page.evaluate(() => window.navigationSentinel)).toBe('same document');
});

for (const object of objects) {
  test(`profile loads directly with complete content: ${object.id}`, async ({ page }) => {
    await page.goto(`/objects/${object.id}`);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(object.title);
    await expect(page.locator('main')).toHaveCount(1);
    await expect(page.locator('.facts .fact')).toHaveCount(8);
    expect(await page.locator('.prose section').count()).toBeGreaterThanOrEqual(3);
    await checkImages(page);
    const toc = page.getByRole('navigation', { name: 'On this page' }).getByRole('link').last();
    const anchor = await toc.getAttribute('href');
    await toc.click();
    await expect(page.locator(anchor)).toBeInViewport();
    await expect(page).toHaveTitle(`${object.title} | Cosmic Explorer`);
    await page.reload();
    await expect(page.locator(anchor)).toBeInViewport();
    await page.getByRole('link', { name: 'Back to Explore' }).click();
    await expect(page).toHaveURL(/\/explore$/);
  });
}

test('every legacy URL redirects to its React route', async ({ page }) => {
  for (const [file, target] of Object.entries(legacyRoutes)) {
    await page.goto(file === 'index.html' ? '/index.html' : `/pages/${file}`);
    await expect(page).toHaveURL(`http://127.0.0.1:4173${target}`);
    await expect(page.locator('main h1')).toBeVisible();
    await expect(page.locator('header.site-header')).toHaveCount(1);
    await expect(page.locator('footer.site-footer')).toHaveCount(1);
  }
  await page.goto('/pages/thesun.html?source=bookmark#structure');
  await expect(page).toHaveURL(/\/objects\/sun\?source=bookmark#structure$/);
  await expect(page.locator('#structure')).toBeInViewport();
});

test('catalogue controls survive detail navigation, back and refresh', async ({ page }) => {
  await page.goto('/explore');
  await page.getByRole('radio', { name: 'Planets' }).check();
  await expect(page.locator('.card-grid .card')).toHaveCount(8);
  await page.getByLabel('Sort by').selectOption('name');
  await expect(page.locator('.card__title').first()).toHaveText('Earth');
  await page.getByRole('searchbox').fill('mars');
  await expect(page.locator('.card-grid .card')).toHaveCount(1);
  await page.getByRole('link', { name: 'Mars', exact: true }).click();
  await page.goBack();
  await expect(page.getByRole('searchbox')).toHaveValue('mars');
  await page.reload();
  await expect(page.getByRole('searchbox')).toHaveValue('mars');
  await expect(page.getByRole('radio', { name: 'Planets' })).toBeChecked();
  await expect(page.getByLabel('Sort by')).toHaveValue('name');
  await page.getByRole('searchbox').fill('no-such-object');
  await expect(page.locator('.card-grid .card')).toHaveCount(0);
  await expect(page.getByText('No objects match.')).toBeVisible();
});

test('favourites survive navigation across all React pages', async ({ page }) => {
  await page.goto('/explore');
  await page.getByRole('button', { name: 'Favourite Mars', exact: true }).click();
  for (const route of ['About', 'Milestones', 'Asteroids', 'Favourites']) {
    await page.getByRole('navigation', { name: 'Main', exact: true }).getByRole('link', { name: route, exact: true }).click();
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  }
  await expect(page.locator('.card__title')).toHaveText('Mars');
  await page.getByRole('link', { name: 'Mars', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Mars');
  await page.getByRole('navigation', { name: 'Main', exact: true }).getByRole('link', { name: 'Favourites' }).click();
  await page.getByRole('button', { name: 'Favourite Mars', exact: true }).click();
  await expect(page.getByText('No favourites yet')).toBeVisible();
});

test('asteroid search, hazard filtering and sort are functional', async ({ page }) => {
  await page.goto('/asteroids');
  await expect(page.locator('#asteroid-grid .card').first()).toBeVisible();
  await page.getByRole('radio', { name: 'Potentially hazardous' }).check();
  expect(await page.locator('#asteroid-grid .card').count()).toBeGreaterThan(0);
  await expect(page.locator('#asteroid-grid .type-asteroid')).toHaveCount(0);
  await page.getByLabel('Sort by').selectOption('name');
  const names = await page.locator('#asteroid-grid .card__title').allTextContents();
  expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b, 'en', { numeric: true })));
  await page.getByRole('searchbox').fill('no-such-asteroid');
  await expect(page.locator('#asteroid-grid .card')).toHaveCount(0);
  await expect(page.locator('#results-status')).toBeVisible();
  await page.getByRole('searchbox').fill('');
  await expect(page.locator('#asteroid-grid .card').first()).toBeVisible();
});

test('unknown routes have a usable recovery page', async ({ page }) => {
  for (const route of ['/missing', '/objects/missing', '/pages/missing.html']) {
    await page.goto(route);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(/not found/);
    await page.getByRole('link', { name: 'Back to Explore' }).click();
    await expect(page).toHaveURL(/\/explore$/);
  }
});

test('all local page links point at real routes or section anchors', async ({ page }) => {
  const validRoutes = new Set(['/', '/favourites', ...Object.values(legacyRoutes)]);
  for (const route of validRoutes) {
    await page.goto(route);
    await expect(page.locator('main h1')).toBeVisible();
    const links = await page.locator('a[href]').evaluateAll((elements) => elements.map((element) => element.getAttribute('href')));
    for (const href of links) {
      if (/^(https?:|mailto:)/.test(href)) continue;
      if (href.startsWith('#')) {
        await expect(page.locator(href)).toHaveCount(1);
      } else {
        expect(validRoutes.has(new URL(href, page.url()).pathname), `${route}: ${href}`).toBe(true);
        expect(href).not.toContain('.html');
      }
    }
  }
});

test('pages fit mobile screens and use a single HTML entry point', async ({ page }) => {
  expect(readdirSync('.').filter((name) => name.endsWith('.html'))).toEqual(['index.html']);
  expect(existsSync('pages') ? readdirSync('pages').filter((name) => name.endsWith('.html')) : []).toEqual([]);
  for (const width of [320, 390, 641, 768]) {
    await page.setViewportSize({ width, height: 844 });
    for (const route of ['/', '/explore', '/objects/mars', '/asteroids', '/about', '/milestones', '/favourites']) {
      await page.goto(route);
      await expect(page.locator('#root h1')).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `${width}px: ${route}`).toBe(true);
      await expect(page.getByRole('navigation', { name: 'Main', exact: true })).toBeVisible();
    }
  }
});

test('capture restored landing page', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.hero__title')).toBeVisible();
  await checkImages(page);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.screenshot({ path: 'test-results/landing-desktop.png', fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: 'test-results/landing-mobile.png', fullPage: true });
});
