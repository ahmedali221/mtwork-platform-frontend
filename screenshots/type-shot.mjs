import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [name,w] of [['type-hero-1440',1440],['type-hero-393',393]]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 }, deviceScaleFactor: 2 });
  await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(2000);
  const el = await p.$('.landing-hero__content');
  await el.scrollIntoViewIfNeeded();
  await p.waitForTimeout(300);
  await el.screenshot({ path: `screenshots/${name}.png` });
  console.log('shot', name);
  await p.close();
}
await b.close();
