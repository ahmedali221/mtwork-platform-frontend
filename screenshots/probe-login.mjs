import { chromium } from 'playwright';
const browser = await chromium.launch();
for (const vp of [{w:1440,h:900},{w:1440,h:1086},{w:1536,h:864}]) {
  const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
  await page.addInitScript(() => localStorage.setItem('theme','light'));
  await page.goto('http://localhost:4280/login', { waitUntil:'networkidle' });
  await page.waitForTimeout(1000);
  const hero = await page.$eval('.login-panel__hero', el => {
    const r = el.getBoundingClientRect();
    return { top:+r.top.toFixed(0), bottom:+r.bottom.toFixed(0), visible: r.bottom <= window.innerHeight && r.top >= 0 };
  }).catch(()=>null);
  const panelH = await page.$eval('.login-panel--left', el => +el.getBoundingClientRect().height.toFixed(0));
  const cl = await page.$eval('.login-cluster', el => { const r = el.getBoundingClientRect(); return {w:+r.width.toFixed(0),h:+r.height.toFixed(0),top:+r.top.toFixed(0)}; }).catch(()=>null);
  console.log(`vp ${vp.w}x${vp.h}: panelH=${panelH} cluster=${JSON.stringify(cl)} hero.top=${hero?.top} hero.bottom=${hero?.bottom} heroFullyVisible=${hero?.visible}`);
  await page.screenshot({ path:`screenshots/_probe_${vp.w}x${vp.h}.png` });
  await page.close();
}
await browser.close();
