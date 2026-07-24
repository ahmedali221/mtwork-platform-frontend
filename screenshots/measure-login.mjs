import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1086 } });
await page.addInitScript(() => localStorage.setItem('theme', 'light'));
await page.goto('http://localhost:4280/login', { waitUntil: 'networkidle' });
await page.waitForTimeout(1200);

const box = (sel) => page.$eval(sel, el => {
  const r = el.getBoundingClientRect();
  const cs = getComputedStyle(el);
  return {
    w: +r.width.toFixed(1), h: +r.height.toFixed(1),
    x: +r.x.toFixed(1), y: +r.y.toFixed(1),
    radius: cs.borderTopLeftRadius, bg: cs.backgroundColor,
    color: cs.color, font: cs.fontFamily.split(',')[0].replace(/"/g,''),
    size: cs.fontSize, weight: cs.fontWeight,
  };
}).catch(() => null);

const targets = {
  '.login-panel--left':      { fig: 'bg #2e358f', note: 'left promo' },
  '.login-form-card':        { fig: 'w≈464, transparent, no shadow' },
  '.login-form__title':      { fig: 'IBM Plex 32px 700 #201b13' },
  '.login-form__subtitle':   { fig: 'Work Sans 18px #999' },
  '.login-input':            { fig: 'h40 r8 bg #f7f5f2 12px' },
  '.login-required-badge':   { fig: 'bg rgba(252,190,4,.4) 6px' },
  '.login-btn':              { fig: 'h48 r12 #1b1b1b DM Sans 18 400' },
  '.login-social':           { fig: 'w204 gap8' },
  '.login-social__btn':      { fig: 'h56 r12 bg #f7f5f2' },
  '.login-ctrl--lang':       { fig: 'h32 white bg dark text' },
  '.login-link--danger':     { fig: '#f87748 12px' },
};

console.log('=== LOGIN DOM MEASUREMENTS (1440) vs Figma 3:123581 ===\n');
for (const [sel, meta] of Object.entries(targets)) {
  const b = await box(sel);
  console.log(`${sel}\n  Figma: ${meta.fig}`);
  console.log(`  DOM:   ${b ? JSON.stringify(b) : 'NOT FOUND'}\n`);
}

// horizontal scroll guard at each width
for (const w of [1440, 1024, 393]) {
  await page.setViewportSize({ width: w, height: 1000 });
  await page.waitForTimeout(300);
  const sw = await page.evaluate(() => document.documentElement.scrollWidth);
  const cw = await page.evaluate(() => document.documentElement.clientWidth);
  console.log(`hscroll @${w}: scrollW=${sw} clientW=${cw} overflow=${sw - cw}`);
}

await browser.close();
