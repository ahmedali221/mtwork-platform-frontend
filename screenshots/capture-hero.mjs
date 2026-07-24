import { chromium } from 'playwright';

const shots = [
  { name: 'hero-desktop-1440', width: 1440, height: 700 },
  { name: 'hero-tablet-768',   width: 768,  height: 700 },
  { name: 'hero-mobile-393',   width: 393,  height: 700 },
];

const browser = await chromium.launch();
for (const s of shots) {
  const page = await browser.newPage({ viewport: { width: s.width, height: s.height } });
  await page.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `screenshots/${s.name}.png` });
  await page.close();
  console.log(`captured ${s.name}`);
}
await browser.close();
