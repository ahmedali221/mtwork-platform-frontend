import { chromium } from 'playwright';
const widths = [768, 820, 900, 1024];
const browser = await chromium.launch();
for (const w of widths) {
  const page = await browser.newPage({ viewport: { width: w, height: 1000 } });
  await page.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  const res = await page.evaluate(() => {
    const de = document.documentElement;
    const out = { pageOverflow: de.scrollWidth - de.clientWidth, offenders: [] };
    // only report meaningful landing blocks that overflow their parent/viewport
    const sels = [
      '.landing-hero__content','.landing-section--dashboard','app-analysis-section',
      '.landing-trusted','.landing-trusted__slider',
      '.impact__grid','.impact__card','.impact-band','.impact-band__header',
      '.compliance','.compliance__intro','.compliance__why','.compliance__services','.compliance__cards',
      '.landing-why','.landing-testimonials','.landing-testimonials__column',
      '.splits','.splits__row','.splits__text','.splits__panel',
      '.blog','.blog__header','.blog__grid',
      '.steps','.steps__container','.steps__visual','.steps__content',
      '.lp-footer__grid','.navbar',
    ];
    for (const s of sels) {
      const el = document.querySelector(s);
      if (!el) continue;
      const cw = el.clientWidth, sw = el.scrollWidth;
      const b = el.getBoundingClientRect();
      const overViewport = Math.round(b.right - window.innerWidth);
      if (sw > cw + 2 || overViewport > 2) {
        out.offenders.push({ s, clientW: cw, scrollW: sw, right: Math.round(b.right), overViewport: overViewport > 2 ? overViewport : 0 });
      }
    }
    return out;
  });
  console.log(`=== ${w}px (page hscroll=${res.pageOverflow}) ===`);
  for (const o of res.offenders) console.log(`  ${o.s}  client=${o.clientW} scroll=${o.scrollW}${o.overViewport?` OVER-VIEWPORT+${o.overViewport}`:''}`);
  if (!res.offenders.length) console.log('  (no inner overflow)');
  await page.close();
}
await browser.close();
