import { chromium } from 'playwright';

const shots = [
  { name: 'login-desktop-1440', width: 1440, height: 900,  dark: false }, // real laptop fold
  { name: 'login-desktop-tall', width: 1440, height: 1086, dark: false }, // full Figma frame
  { name: 'login-tablet-1024',  width: 1024, height: 900,  dark: false },
  { name: 'login-mobile-393',   width: 393,  height: 850,  dark: false },
  { name: 'login-dark-1440',    width: 1440, height: 900,  dark: true  },
];

const browser = await chromium.launch();
for (const s of shots) {
  const page = await browser.newPage({ viewport: { width: s.width, height: s.height } });
  if (s.dark) await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
  else        await page.addInitScript(() => localStorage.setItem('theme', 'light'));
  await page.goto('http://localhost:4280/login', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1600);
  await page.evaluate(() => Promise.all(Array.from(document.images).map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })))).catch(() => {});
  await page.screenshot({ path: `screenshots/${s.name}.png`, fullPage: false });
  await page.close();
  console.log(`captured ${s.name}`);
}
await browser.close();
