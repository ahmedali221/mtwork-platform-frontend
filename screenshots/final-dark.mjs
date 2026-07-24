import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 393]) {
  const p = await b.newPage({ viewport: { width: w, height: 1000 } });
  await p.addInitScript(() => localStorage.setItem('theme','dark'));
  await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(1800);
  // dashboard crop
  let el = await p.$('.landing-section--dashboard');
  await el.scrollIntoViewIfNeeded(); await p.waitForTimeout(250);
  await el.screenshot({ path: `screenshots/final-dash-${w}.png` });
  // why + testimonials crop (gradient artifact check)
  el = await p.$('.landing-testimonials');
  await el.scrollIntoViewIfNeeded(); await p.waitForTimeout(250);
  await el.screenshot({ path: `screenshots/final-testim-${w}.png` });
  // why header crop
  el = await p.$('.landing-why');
  await el.scrollIntoViewIfNeeded(); await p.waitForTimeout(250);
  await el.screenshot({ path: `screenshots/final-why-${w}.png` });
  console.log('captured', w);
  await p.close();
}
await b.close();
