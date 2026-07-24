import { chromium } from 'playwright';
const sels = [
  '.landing-hero', '.landing-section--dashboard', '.landing-trusted',
  '.landing-why', '.landing-testimonials', '.landing-section--choosing', 'app-choosing-component',
  '.landing-section--hr', '.landing-section--impact', '.landing-section--blog',
  '.landing-section--compliance', '.landing-section--steps',
];
const browser = await chromium.launch();
for (const dark of [false, true]) {
  for (const w of [1440, 393]) {
    const page = await browser.newPage({ viewport: { width: w, height: 1000 } });
    if (dark) await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
    await page.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
    const r = await page.evaluate((sels) => sels.map(s => {
      const el = document.querySelector(s);
      return el ? { s, bg: getComputedStyle(el).backgroundColor } : { s, bg: 'MISSING' };
    }), sels);
    console.log(`--- ${dark?'DARK':'LIGHT'} ${w} ---`);
    for (const x of r) console.log(`  ${x.s}: ${x.bg}`);
    await page.close();
  }
}
await browser.close();
