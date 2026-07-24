import { chromium } from 'playwright';

const URL = 'http://localhost:4280/otp?email=example@gmaill.com';

const shots = [
  { name: 'otp-desktop-1440', width: 1440, height: 900,  dark: false },
  { name: 'otp-tablet-1024',  width: 1024, height: 900,  dark: false },
  { name: 'otp-mobile-393',   width: 393,  height: 850,  dark: false },
  { name: 'otp-dark-1440',    width: 1440, height: 900,  dark: true  },
];

const browser = await chromium.launch();
for (const s of shots) {
  const page = await browser.newPage({ viewport: { width: s.width, height: s.height } });
  await page.addInitScript((dark) => localStorage.setItem('theme', dark ? 'dark' : 'light'), s.dark);
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  await page.evaluate(() => Promise.all(Array.from(document.images).map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })))).catch(() => {});
  await page.screenshot({ path: `screenshots/${s.name}.png`, fullPage: false });

  // hscroll + key measurements
  const m = await page.evaluate(() => {
    const card = document.querySelector('.otp-card');
    const cells = document.querySelectorAll('.otp-cell');
    const cr = card?.getBoundingClientRect();
    const c0 = cells[0]?.getBoundingClientRect();
    return {
      hscroll: document.documentElement.scrollWidth > window.innerWidth,
      cardW: cr ? Math.round(cr.width) : null,
      cellH: c0 ? Math.round(c0.height) : null,
      cellCount: cells.length,
    };
  });
  console.log(`captured ${s.name}  hscroll=${m.hscroll} cardW=${m.cardW} cellH=${m.cellH} cells=${m.cellCount}`);
  await page.close();
}
await browser.close();
