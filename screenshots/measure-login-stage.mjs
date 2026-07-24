import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1086 } });
await page.addInitScript(() => localStorage.setItem('theme', 'light'));
await page.goto('http://localhost:4280/login', { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);

const scale = await page.$eval('.login-panel--left', el =>
  parseFloat(getComputedStyle(el).getPropertyValue('--login-scale')) || (720/742));
console.log('panel scale (--login-scale):', (720/742).toFixed(4), '\n');

// rect relative to the left panel; divide by scale → stage (Figma) coords
const panel = await page.$eval('.login-panel--left', el => {
  const r = el.getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width };
});
const s = panel.w / 742;

const stageCoord = async (sel) => {
  const r = await page.$eval(sel, el => { const b = el.getBoundingClientRect(); return { x: b.x, y: b.y, w: b.width, h: b.height }; }).catch(() => null);
  if (!r) return 'NOT FOUND';
  return {
    figX: +((r.x - panel.x) / s).toFixed(1),
    figY: +((r.y - panel.y) / s).toFixed(1),
    figW: +(r.w / s).toFixed(1),
    figH: +(r.h / s).toFixed(1),
  };
};

const cards = {
  '.mock-card--profit':    { fig: 'x35.4 y273.2 139×196' },
  '.mock-card--employees': { fig: 'x120.6 y402 495×223' },
  '.mock-card--payroll':   { fig: 'x514 y584 187×206' },
  '.login-panel__hero':    { fig: 'x64.5 y761 613×~196' },
  '.login-panel__topbar':  { fig: 'x21.5 y23 699×32' },
  '.mock-avatar':          { fig: '98.755×98.755' },
};
console.log('=== LEFT STAGE coords (de-scaled to Figma 742×1055) ===\n');
for (const [sel, m] of Object.entries(cards)) {
  console.log(`${sel}\n  Figma: ${m.fig}\n  DOM:   ${JSON.stringify(await stageCoord(sel))}\n`);
}

// right form absolute x (page coords)
const form = await page.$eval('.login-form-card', el => { const r = el.getBoundingClientRect(); return { x: +r.x.toFixed(1), w: +r.width.toFixed(1) }; });
console.log(`right form: live x=${form.x} w=${form.w}  (Figma content x=877 w=464)`);

for (const w of [1440, 1024, 393]) {
  await page.setViewportSize({ width: w, height: 1000 });
  await page.waitForTimeout(250);
  const o = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  console.log(`hscroll @${w}: ${o}`);
}
await browser.close();
