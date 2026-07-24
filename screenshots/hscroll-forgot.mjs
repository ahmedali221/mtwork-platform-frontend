import { chromium } from 'playwright';
const browser = await chromium.launch();
for (const w of [1440, 1024, 393]) {
  const page = await browser.newPage({ viewport: { width: w, height: 850 } });
  await page.addInitScript(() => localStorage.setItem('theme', 'light'));
  await page.goto('http://localhost:4280/login', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  await page.click('.login-link--danger');
  await page.waitForTimeout(300);
  const r = await page.evaluate(() => ({
    hscroll: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth,
    cardW: Math.round(document.querySelector('.modal-card').getBoundingClientRect().width),
  }));
  console.log(`@${w}: hscroll=${r.hscroll} (sw ${r.sw}/cw ${r.cw}) cardW=${r.cardW}`);
  await page.close();
}
await browser.close();
