import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.addInitScript(() => localStorage.setItem('theme', 'light'));
await page.goto('http://localhost:4280/login', { waitUntil: 'networkidle' });
await page.waitForTimeout(1400);
await page.click('.login-link--danger');
await page.waitForTimeout(400);
const info = await page.evaluate(() => {
  const b = document.querySelector('.modal-btn');
  const c = getComputedStyle(b);
  const r = b.getBoundingClientRect();
  return { bg: c.backgroundColor, bgImage: c.backgroundImage, opacity: c.opacity,
           filter: c.filter, mixBlend: c.mixBlendMode, color: c.color,
           rect: {x:Math.round(r.x), y:Math.round(r.y), w:Math.round(r.width), h:Math.round(r.height)} };
});
console.log(JSON.stringify(info, null, 2));
// sample the actual painted pixel at button center via canvas
const buf = await page.screenshot({ clip: { x: info.rect.x+ info.rect.w/2, y: info.rect.y + info.rect.h/2, width: 2, height: 2 } });
import('fs').then(fs => { fs.writeFileSync('screenshots/forgot/_btnpx.png', buf); });
await browser.close();
