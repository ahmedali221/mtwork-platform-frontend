import { chromium } from 'playwright';
const widths = [768, 820, 900, 1024];
const browser = await chromium.launch();
for (const w of widths) {
  const page = await browser.newPage({ viewport: { width: w, height: 1000 } });
  await page.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1800);
  // full page
  await page.screenshot({ path: `screenshots/tab-${w}-full.png`, fullPage: true });
  // per-section crops for the previously-broken sections
  const zones = [
    ['compliance', '.landing-section--compliance'],
    ['impact', '.landing-section--impact'],
    ['testimonials', '.landing-testimonials'],
    ['splits', '.landing-section--choosing'],
    ['blog', '.landing-section--blog'],
    ['footer', '.lp-footer'],
  ];
  for (const [n, sel] of zones) {
    const el = await page.$(sel);
    if (!el) continue;
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await el.screenshot({ path: `screenshots/tab-${w}-${n}.png` });
  }
  console.log(`captured ${w}`);
  await page.close();
}
await browser.close();
