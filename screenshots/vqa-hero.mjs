import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 393, height: 852 }, deviceScaleFactor: 2 });
await page.goto('http://localhost:4200', { waitUntil: 'networkidle' });
await page.addStyleTag({ content: 'html{scroll-behavior:auto!important}' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(1000);

const data = await page.evaluate(() => {
  // discover the hero component tag
  const main = document.querySelector('main');
  const firstComp = main ? main.querySelector('router-outlet + *') : null;
  // find the pill, title, subtitle, buttons by text
  const all = [...document.querySelectorAll('body *')];
  const find = (re) => all.find(e => re.test((e.textContent||'').trim()) && e.children.length <= 2);
  const pill = all.find(e => /^Payroll/i.test((e.textContent||'').trim()));
  const title = all.find(e => /Your Premier Platform/i.test((e.textContent||'').trim()) && e.tagName.match(/H[1-6]|SPAN|DIV|P/) && (e.textContent||'').trim().length < 120);
  const sub = all.find(e => /forefront of digital/i.test((e.textContent||'').trim()) && (e.textContent||'').trim().length < 200);
  const learn = all.find(e => /^Learn More$/i.test((e.textContent||'').trim()));
  const m = (e) => { if(!e) return null; const r=e.getBoundingClientRect(); const cs=getComputedStyle(e);
    return { tag:e.tagName, cls:e.className?.toString?.().slice(0,40), x:Math.round(r.x), y:Math.round(r.y), w:Math.round(r.width), h:Math.round(r.height),
      fs:cs.fontSize, lh:cs.lineHeight, fw:cs.fontWeight, ff:cs.fontFamily.split(',')[0].replace(/['"]/g,''), txt:(e.textContent||'').trim().slice(0,50) }; };
  // content block = bounding box from pill top to buttons bottom
  let block = null;
  if (pill && learn) {
    const pr = pill.getBoundingClientRect(); const lr = learn.getBoundingClientRect();
    block = { top: Math.round(pr.top), bottom: Math.round(lr.bottom), height: Math.round(lr.bottom - pr.top), pillX: Math.round(pr.x), pillW: Math.round(pr.width) };
  }
  return { firstComp: firstComp?.tagName, pill: m(pill), title: m(title), sub: m(sub), learn: m(learn), block };
});
console.log(JSON.stringify(data, null, 2));
await browser.close();
