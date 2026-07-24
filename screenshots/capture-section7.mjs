import { chromium } from 'playwright';

const shots = [
  { name: 'section7-desktop-1440', width: 1440, dark: false },
  { name: 'section7-mobile-393', width: 393, dark: false },
  { name: 'section7-dark-1440', width: 1440, dark: true },
];

const browser = await chromium.launch();
for (const s of shots) {
  const page = await browser.newPage({ viewport: { width: s.width, height: 1000 } });
  if (s.dark) await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
  await page.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1800);
  const top = await page.evaluate(() => document.querySelector('.steps').getBoundingClientRect().y + window.scrollY - 20);
  await page.evaluate(t => window.scrollTo({ top: t, left: 0, behavior: 'instant' }), top);
  await page.waitForTimeout(400);
  await page.screenshot({ path: `screenshots/${s.name}.png` });
  await page.close();
  console.log(`captured ${s.name}`);
}
await browser.close();
