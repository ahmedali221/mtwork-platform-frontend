import { chromium } from 'playwright';

const shots = [
  { name: 'section5-desktop-1440', width: 1440, dark: false },
  { name: 'section5-mobile-393', width: 393, dark: false },
  { name: 'section5-dark-1440', width: 1440, dark: true },
];

const browser = await chromium.launch();
for (const s of shots) {
  const page = await browser.newPage({ viewport: { width: s.width, height: 1000 } });
  if (s.dark) await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
  await page.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1800);
  const tops = await page.evaluate(() => {
    const y = (sel) => document.querySelector(sel).getBoundingClientRect().y + window.scrollY;
    return { a: y('.landing-why') - 20, b: y('.splits') - 40 };
  });
  await page.evaluate(t => window.scrollTo({ top: t, left: 0, behavior: 'instant' }), tops.a);
  await page.waitForTimeout(400);
  await page.screenshot({ path: `screenshots/${s.name}-a.png` });
  await page.evaluate(t => window.scrollTo({ top: t, left: 0, behavior: 'instant' }), tops.b);
  await page.waitForTimeout(400);
  await page.screenshot({ path: `screenshots/${s.name}-b.png` });
  await page.close();
  console.log(`captured ${s.name}`);
}
await browser.close();

