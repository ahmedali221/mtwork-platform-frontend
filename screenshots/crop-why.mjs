import { chromium } from 'playwright';
const b = await chromium.launch();
for (const dark of [false, true]) {
  const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
  if (dark) await p.addInitScript(() => localStorage.setItem('theme','dark'));
  await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(1500);
  const el = await p.$('.landing-why');
  await el.scrollIntoViewIfNeeded();
  await p.waitForTimeout(300);
  await el.screenshot({ path: `screenshots/crop-why-${dark?'dark':'light'}.png` });
  await p.close();
}
await b.close();
