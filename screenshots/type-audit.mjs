import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440, 393]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(2000);
  const r = await p.evaluate(async () => {
    // which fonts actually loaded?
    const loaded = {};
    for (const fam of ['IBM Plex Sans','DM Sans','Work Sans','Inter']) {
      loaded[fam] = document.fonts.check(`700 36px "${fam}"`) || document.fonts.check(`400 18px "${fam}"`);
    }
    const rootFS = getComputedStyle(document.documentElement).fontSize;
    const tsa = getComputedStyle(document.documentElement).webkitTextSizeAdjust || getComputedStyle(document.documentElement).textSizeAdjust || 'n/a';
    const probe = (sel) => { const e=document.querySelector(sel); if(!e)return null; const cs=getComputedStyle(e); return {fs:cs.fontSize,fw:cs.fontWeight,lh:cs.lineHeight,ls:cs.letterSpacing,ff:cs.fontFamily.split(',')[0].replace(/["']/g,'')}; };
    return { rootFS, tsa, loaded,
      heroTitle: probe('.landing-hero__title'),
      sectionTitle: probe('.impact-band__title') || probe('.compliance__title'),
      cardTitle: probe('.blog__card-title') || probe('.compliance__card-title'),
      body: probe('.landing-hero__description'),
      footerHeading: probe('.lp-footer__heading'),
      footerLink: probe('.lp-footer__links a'),
      testimonialQuote: probe('.landing-testimonials__quote'),
      btnPrimary: probe('.landing-hero__button--primary'),
      stepsTitle: probe('.steps__item h3'),
      stepsDesc: probe('.steps__item p'),
    };
  });
  console.log(`=== ${w} ===`);
  console.log('rootFS', r.rootFS, '| text-size-adjust', r.tsa, '| fonts loaded', JSON.stringify(r.loaded));
  for (const [k,v] of Object.entries(r)) { if (v && typeof v==='object' && v.fs) console.log(`  ${k}: ${v.fs} / w${v.fw} / lh ${v.lh} / ls ${v.ls} / ${v.ff}`); }
  await p.close();
}
await b.close();
