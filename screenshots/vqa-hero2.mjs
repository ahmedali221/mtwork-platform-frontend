import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 393, height: 852 }, deviceScaleFactor: 2 });
await page.goto('http://localhost:4200', { waitUntil: 'networkidle' });
await page.addStyleTag({ content: 'html{scroll-behavior:auto!important}' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(1000);

const data = await page.evaluate(() => {
  const m = (sel) => { const e=document.querySelector(sel); if(!e) return null; const r=e.getBoundingClientRect(); const cs=getComputedStyle(e);
    return { sel, x:Math.round(r.x), y:Math.round(r.y), w:Math.round(r.width), h:Math.round(r.height),
      fs:cs.fontSize, lh:cs.lineHeight, fw:cs.fontWeight, ff:cs.fontFamily.split(',')[0].replace(/['"]/g,''),
      mt:cs.marginTop, mb:cs.marginBottom, txt:(e.textContent||'').trim().slice(0,40) }; };
  // hero container
  const candidates = ['.landing-hero__content','.landing-hero','.landing-hero__pill','.landing-hero__badge',
    '.landing-hero__title-frame','.landing-hero__title','.landing-hero__title-frame h1','.landing-hero__title-frame span',
    '.landing-hero__highlight','.landing-hero__description','.landing-hero__buttons','.landing-hero__button'];
  const res = {};
  for (const c of candidates) res[c] = m(c);
  // actual heading element inside title frame
  const tf = document.querySelector('.landing-hero__title-frame');
  if (tf) {
    res['__titleFrameChildren'] = [...tf.children].map(ch => { const r=ch.getBoundingClientRect(); const cs=getComputedStyle(ch);
      return { tag:ch.tagName, cls:ch.className?.toString?.(), fs:cs.fontSize, lh:cs.lineHeight, fw:cs.fontWeight, ff:cs.fontFamily.split(',')[0].replace(/['"]/g,''), h:Math.round(r.height), txt:(ch.textContent||'').trim().slice(0,30) }; });
    const cs = getComputedStyle(tf);
    res['__titleFrameSelf'] = { fs:cs.fontSize, lh:cs.lineHeight, fw:cs.fontWeight, ff:cs.fontFamily.split(',')[0] };
  }
  return res;
});
console.log(JSON.stringify(data, null, 2));
await browser.close();
