import { chromium } from 'playwright';
const browser = await chromium.launch();
for (const dark of [false, true]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  if (dark) await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
  await page.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  const r = await page.evaluate(() => {
    const wrap = document.querySelector('.landing-section--steps');
    const host = document.querySelector('app-steps-component');
    const steps = document.querySelector('.steps');
    return {
      wrapperBg: getComputedStyle(wrap).backgroundColor,
      hostBg: getComputedStyle(host).backgroundColor,
      stepsBg: steps ? getComputedStyle(steps).backgroundColor : null,
      seam: getComputedStyle(wrap).backgroundColor !== getComputedStyle(host).backgroundColor,
    };
  });
  console.log(`${dark ? 'DARK' : 'LIGHT'}:`, JSON.stringify(r));
  await page.close();
}
await browser.close();
