import { chromium } from 'playwright';
import fs from 'fs';

const OUT = 'screenshots/vqa';
fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 393, height: 852 },
  deviceScaleFactor: 2,
});
await page.goto('http://localhost:4200', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
// kill smooth scroll
await page.addStyleTag({ content: 'html{scroll-behavior:auto!important}' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(500);

// Full page screenshot
await page.screenshot({ path: `${OUT}/mobile-full.png`, fullPage: true });

// Measure key sections: position + density metrics
const metrics = await page.evaluate(() => {
  const out = {};
  const pick = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return {
      x: Math.round(r.x), y: Math.round(r.y),
      w: Math.round(r.width), h: Math.round(r.height),
      fontSize: cs.fontSize, lineHeight: cs.lineHeight, fontWeight: cs.fontWeight,
      fontFamily: cs.fontFamily.split(',')[0],
      padTop: cs.paddingTop, padBottom: cs.paddingBottom,
      padLeft: cs.paddingInlineStart, padRight: cs.paddingInlineEnd,
      marginTop: cs.marginTop, marginBottom: cs.marginBottom,
      text: (el.textContent || '').trim().slice(0, 60),
    };
  };
  // Hero
  out.heroTitle = pick('app-herosection h1, app-herosection .hero-title, app-herosection [class*=title]');
  out.heroSubtitle = pick('app-herosection p, app-herosection [class*=subtitle], app-herosection [class*=desc]');
  return out;
});

fs.writeFileSync(`${OUT}/metrics.json`, JSON.stringify(metrics, null, 2));
console.log('done');
console.log(JSON.stringify(metrics, null, 2));

await browser.close();
