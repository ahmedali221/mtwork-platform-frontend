import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
await p.addInitScript(() => localStorage.setItem('theme','dark'));
await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
await p.waitForTimeout(1500);
const r = await p.evaluate(() => {
  const info = (s) => { const e=document.querySelector(s); if(!e) return {s,missing:true}; const b=e.getBoundingClientRect(); const cs=getComputedStyle(e); return {s, x:+b.x.toFixed(0), right:+b.right.toFixed(0), w:+b.width.toFixed(0), bg:cs.backgroundColor, parent:e.parentElement?.className?.toString?.().slice(0,30)}; };
  return {
    page: info('.landing-page'),
    why: info('.landing-why'),
    testim: info('.landing-testimonials'),
    choosing: info('.landing-section--choosing'),
    // what's the why's parent and its bg
    whyParentBg: (()=>{const e=document.querySelector('.landing-why'); return e?getComputedStyle(e.parentElement).backgroundColor:'--';})(),
  };
});
console.log(JSON.stringify(r,null,1));
await p.close(); await b.close();
