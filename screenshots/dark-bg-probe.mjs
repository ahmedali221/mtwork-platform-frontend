import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
await page.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1800);
const r = await page.evaluate(() => {
  const get = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return { sel, missing: true };
    const cs = getComputedStyle(el);
    // walk up to find the painted background (first non-transparent ancestor)
    let cur = el, painted = 'transparent', paintedBy = null;
    while (cur) {
      const bg = getComputedStyle(cur).backgroundColor;
      if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') { painted = bg; paintedBy = cur.className?.toString?.().slice(0,40) || cur.tagName; break; }
      cur = cur.parentElement;
    }
    return { sel, ownBg: cs.backgroundColor, painted, paintedBy };
  };
  return [
    '.landing-section--dashboard', 'app-analysis-section', '.analysis-section',
    '.landing-trusted',
    '.landing-why', '.landing-section--choosing',
    '.landing-testimonials',
    '.landing-section--hr','.landing-section--impact','.landing-section--blog','.landing-section--steps',
    '.landing-page',
  ].map(get);
});
console.log('DARK computed backgrounds (own / painted-ancestor):');
for (const x of r) {
  if (x.missing) { console.log(`  ${x.sel}  MISSING`); continue; }
  console.log(`  ${x.sel}\n      own=${x.ownBg}  painted=${x.painted} (by ${x.paintedBy})`);
}
await page.close();
await browser.close();
