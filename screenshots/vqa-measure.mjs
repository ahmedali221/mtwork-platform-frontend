import { chromium } from 'playwright';
import fs from 'fs';

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 393, height: 852 },
  deviceScaleFactor: 2,
});
await page.goto('http://localhost:4200', { waitUntil: 'networkidle' });
await page.addStyleTag({ content: 'html{scroll-behavior:auto!important}' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(1200);

// Find the real component tags + their bounding boxes (in CSS px, full-page coords)
const sections = await page.evaluate(() => {
  const tags = [
    'app-herosection','app-analysis-section','app-hrsection',
    'app-creatingimact','app-continouscompliance',
    'app-blog-component','app-steps-component','app-footer',
  ];
  const out = [];
  for (const t of tags) {
    const el = document.querySelector(t);
    if (!el) { out.push({ tag: t, missing: true }); continue; }
    const r = el.getBoundingClientRect();
    out.push({ tag: t, y: Math.round(r.y + window.scrollY), h: Math.round(r.height), w: Math.round(r.width) });
  }
  // also grab the inline landing-why / landing-testimonials block
  const why = document.querySelector('.landing-why');
  if (why) { const r = why.getBoundingClientRect(); out.push({ tag: '.landing-why', y: Math.round(r.y+window.scrollY), h: Math.round(r.height) }); }
  const tst = document.querySelector('.landing-testimonials');
  if (tst) { const r = tst.getBoundingClientRect(); out.push({ tag: '.landing-testimonials', y: Math.round(r.y+window.scrollY), h: Math.round(r.height) }); }
  // typography samples
  const samp = (sel) => {
    const e = document.querySelector(sel); if (!e) return null;
    const cs = getComputedStyle(e);
    return { fs: cs.fontSize, lh: cs.lineHeight, fw: cs.fontWeight, ff: cs.fontFamily.split(',')[0].replace(/['"]/g,''), txt:(e.textContent||'').trim().slice(0,40) };
  };
  out.push({ typo: {
    heroH1: samp('app-herosection h1, app-herosection .hero-title'),
    heroP: samp('app-herosection p'),
  }});
  return out;
});

fs.writeFileSync('screenshots/vqa/sections.json', JSON.stringify(sections, null, 2));
console.log(JSON.stringify(sections, null, 2));
await browser.close();
