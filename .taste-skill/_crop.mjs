import { chromium } from '@playwright/test';
const [out, w, h, ...shots] = process.argv.slice(2);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +h } });
for (const s of shots) {
  const [route, sel, name] = s.split('|');
  await p.goto('http://localhost:4173/' + route, { waitUntil: 'load' }); await p.waitForTimeout(1500);
  if (sel) { await p.locator(sel).first().scrollIntoViewIfNeeded(); await p.evaluate(()=>scrollBy(0,-80)); await p.waitForTimeout(500); }
  await p.screenshot({ path: `${out}/${name}.png` });
}
await b.close();
