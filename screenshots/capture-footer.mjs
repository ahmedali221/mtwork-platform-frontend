import { chromium } from 'playwright';

const shots = [
  { name: 'footer-desktop-1440', width: 1440, dark: false },
  { name: 'footer-mobile-393', width: 393, dark: false },
  { name: 'footer-dark-1440', width: 1440, dark: true },
];

const browser = await chromium.launch();
for (const s of shots) {
  const page = await browser.newPage({ viewport: { width: s.width, height: 1000 } });
  if (s.dark) await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
  await page.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1800);
  const el = await page.$('.lp-footer');
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await el.screenshot({ path: `screenshots/${s.name}.png` });
  await page.close();
  console.log(`captured ${s.name}`);
}
await browser.close();
