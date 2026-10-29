// AI-assisted - see AI-USAGE.md #5
import { test, expect } from '@playwright/test';
import objects from '../../data/objects.json' with { type: 'json' };

test('landing links, gallery images, and counts match the catalogue', async ({ page, request }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  await page.goto('/');
  await expect(page.locator('.hero-note--collection strong')).toHaveText(String(objects.length));
  await expect(page.locator('.hero-note--categories')).toContainText(`${new Set(objects.map((object) => object.tag)).size} categories`);
  await expect(page.locator('.discovery-card')).toHaveCount(6);
  await expect(page.locator('.resource-status').first()).toHaveText('SAMPLE DATA AVAILABLE');
  await expect(page.getByText('PLANNED INTEGRATION', { exact: true })).toBeVisible();

  const links = await page.locator('a').evaluateAll((anchors) => anchors.map((anchor) => anchor.getAttribute('href')));
  for (const href of new Set(links)) {
    if (href.startsWith('https:')) continue;
    if (href.startsWith('#')) {
      await expect(page.locator(href)).toHaveCount(1);
    } else {
      const response = await request.get(href);
      expect(response.ok(), href).toBe(true);
      expect(await response.text(), href).toContain('<html');
    }
  }
  for (const image of await page.locator('img').all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((img) => img.complete && img.naturalWidth > 0)).toBe(true);
  }
  for (const [name, filename] of [['The Sun', 'thesun'], ['The Moon', 'moon'], ['Mars', 'mars'], ['Jupiter', 'jupiter'], ['Saturn', 'saturn'], ['Andromeda Galaxy', 'galaxy']]) {
    await expect(page.locator('.discovery-card').getByRole('link', { name, exact: true })).toHaveAttribute('href', `pages/${filename}.html`);
  }
  expect(errors).toEqual([]);
});

test('mobile navigation supports keyboard, Escape, outside dismissal, and resize', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const nav = page.getByRole('navigation', { name: 'Main', exact: true });
  const toggle = page.getByRole('button', { name: 'Open navigation' });
  await expect(nav).toBeHidden();
  await toggle.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('button', { name: 'Close navigation' })).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Tab');
  await expect(nav.getByRole('link', { name: 'Explore', exact: true })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(toggle).toBeFocused();
  await expect(nav).toBeHidden();
  await toggle.click();
  await page.mouse.click(10, 700);
  await expect(nav).toBeHidden();
  await toggle.click();
  await page.setViewportSize({ width: 1280, height: 900 });
  await expect(nav).toBeVisible();
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(nav).toBeHidden();
  await toggle.click();
  await nav.getByRole('link', { name: 'Asteroids', exact: true }).click();
  await expect(page).toHaveURL(/\/pages\/asteroids\.html$/);
  await expect(page.locator('#asteroid-grid .card').first()).toBeVisible();
});

test('motion can be paused and honours changing reduced-motion preferences', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  await page.getByRole('button', { name: 'Pause ambient motion' }).click();
  await expect(page.locator('.observatory')).toHaveClass(/observatory--still/);
  await expect(page.locator('.hero-stars')).toHaveCSS('animation-name', 'none');
  await page.getByRole('button', { name: 'Enable ambient motion' }).click();
  await expect(page.locator('.observatory')).not.toHaveClass(/observatory--still/);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.getByRole('button', { name: 'Motion reduced by system preference' })).toBeDisabled();
  await expect(page.locator('.reveal-pending')).toHaveCount(0);
  await expect(page.locator('.hero-stars')).toHaveCSS('animation-name', 'none');
  await expect(page.locator('.hero-observation')).toHaveCSS('transform', 'none');
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
  await page.reload();
  await expect(page.locator('.observatory')).toHaveClass(/observatory--still/);
  await expect(page.locator('#hero-title')).toBeVisible();
  await expect(page.locator('.reveal-pending')).toHaveCount(0);
});

for (const width of [320, 390, 768, 1024, 1440, 1920]) {
  test(`landing fits ${width}px with accessible content`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Explore the Universe.');
    await expect(page.getByRole('link', { name: 'Launch Explorer', exact: true })).toBeVisible();
    const overflow = await page.evaluate(() => [...document.querySelectorAll('.observatory main a, .observatory h1, .observatory h2, .discovery-card')].filter((element) => {
      const bounds = element.getBoundingClientRect();
      return bounds.width > 0 && (bounds.left < -1 || bounds.right > window.innerWidth + 1);
    }).map((element) => element.textContent.trim()));
    expect(overflow).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.getByRole('link', { name: 'Discover More', exact: true }).click();
    await expect(page).toHaveURL(/#discover$/);
    const headerBottom = await page.locator('.obs-header').evaluate((element) => element.getBoundingClientRect().bottom);
    const headingTop = await page.locator('#intro-title').evaluate((element) => element.getBoundingClientRect().top);
    expect(headingTop).toBeGreaterThanOrEqual(headerBottom);
    await expect(page.locator('.obs-header')).toHaveClass(/is-scrolled/);
    await page.screenshot({ path: `test-results/landing-${width}.png`, fullPage: true });
  });
}
