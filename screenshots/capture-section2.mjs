import { chromium } from 'playwright';

const shots = [
  { name: 'section2-desktop-1440', width: 1440 },
  { name: 'section2-tablet-768', width: 768 },
  { name: 'section2-mobile-393', width: 393 },
];

const browser = await chromium.launch();
for (const s of shots) {
  const page = await browser.newPage({ viewport: { width: s.width, height: 900 } });
  await page.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1800);
  const region = await page.evaluate(() => {
    const panel = document.querySelector('.analysis-section__panel');
    const slider = document.querySelector('.landing-trusted__slider');
    const top = panel.getBoundingClientRect().y - 60;
    const bottom = slider.getBoundingClientRect().bottom + 20;
    return { top: Math.max(0, top), height: bottom - Math.max(0, top) };
  });
  await page.evaluate((t) => window.scrollTo(0, t), region.top);
  await page.waitForTimeout(400);
  await page.screenshot({ path: `screenshots/${s.name}.png`, clip: { x: 0, y: 0, width: s.width, height: Math.min(880, region.height) } });
  await page.close();
  console.log(`captured ${s.name}`);
}
await browser.close();
