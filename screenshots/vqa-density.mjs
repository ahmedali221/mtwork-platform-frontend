import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 393, height: 852 }, deviceScaleFactor: 2 });
await page.goto('http://localhost:4200', { waitUntil: 'networkidle' });
await page.addStyleTag({ content: 'html{scroll-behavior:auto!important}' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(1000);

const data = await page.evaluate(() => {
  const m = (sel) => { const e=document.querySelector(sel); if(!e) return null; const cs=getComputedStyle(e); const r=e.getBoundingClientRect();
    return { fs:cs.fontSize, lh:cs.lineHeight, fw:cs.fontWeight, ff:cs.fontFamily.split(',')[0].replace(/['"]/g,''), w:Math.round(r.width), txt:(e.textContent||'').trim().slice(0,30) }; };
  // section titles, card titles, body, footer, testimonial
  return {
    cardTitle: m('app-hrsection [class*=title], app-hrsection h3, app-hrsection .card-title, app-hrsection h4'),
    cardBody: m('app-hrsection p'),
    complianceTitle: m('app-continouscompliance h2, app-continouscompliance h3, app-continouscompliance [class*=title]'),
    blogTitle: m('app-blog-component h2, app-blog-component [class*=title]'),
    stepsTitle: m('app-steps-component [class*=title], app-steps-component h5'),
    stepsBody: m('app-steps-component p'),
    footerHeading: m('app-footer h3, app-footer [class*=heading], app-footer h4'),
    footerLink: m('app-footer a'),
    whyTitle: m('.landing-why__title, .landing-why h2, .landing-why h3'),
    testimonialBody: m('.landing-testimonials p'),
    rootFontSize: getComputedStyle(document.documentElement).fontSize,
  };
});
console.log(JSON.stringify(data, null, 2));
await browser.close();
