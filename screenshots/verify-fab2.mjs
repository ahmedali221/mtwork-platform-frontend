import { chromium } from 'playwright';
const b = await chromium.launch();
for (const dark of [false, true]) {
  for (const w of [1440, 768, 393]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 } });
    if (dark) await p.addInitScript(() => localStorage.setItem('theme','dark'));
    await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
    await p.waitForTimeout(1400);
    const r = await p.evaluate(() => {
      const de = document.documentElement;
      const m = (s) => { const e=document.querySelector(s); if(!e)return null; const b=e.getBoundingClientRect(); const cs=getComputedStyle(e); return {w:+b.width.toFixed(1),h:+b.height.toFixed(1),bg:cs.backgroundColor,pos:cs.position,z:cs.zIndex,vis:cs.visibility,op:cs.opacity,pe:cs.pointerEvents}; };
      const L=document.querySelector('.fab-left')?.getBoundingClientRect();
      const R=document.querySelector('.fab-right')?.getBoundingClientRect();
      const wa=document.querySelector('.fab-btn--whatsapp')?.getBoundingClientRect();
      const ph=document.querySelector('.fab-btn--phone')?.getBoundingClientRect();
      return { hscroll:de.scrollWidth-de.clientWidth,
        leftGap:L?+L.x.toFixed(1):null, rightGap:R?+(window.innerWidth-R.right).toFixed(1):null,
        leftBottomGap:L?+(window.innerHeight-L.bottom).toFixed(1):null,
        btnGap: wa&&ph?+(ph.x-wa.right).toFixed(1):null,
        leftPos: document.querySelector('.fab-left')?getComputedStyle(document.querySelector('.fab-left')).position:null,
        rightPos: document.querySelector('.fab-right')?getComputedStyle(document.querySelector('.fab-right')).position:null,
        wa:m('.fab-btn--whatsapp'), ph:m('.fab-btn--phone'), as:m('.fab-right__button'),
        waI:(()=>{const e=document.querySelector('.fab-btn__icon--whatsapp');return e?{w:+e.getBoundingClientRect().width.toFixed(1),h:+e.getBoundingClientRect().height.toFixed(1)}:null;})(),
        phI:(()=>{const e=document.querySelector('.fab-btn__icon--phone');return e?{w:+e.getBoundingClientRect().width.toFixed(1),h:+e.getBoundingClientRect().height.toFixed(1)}:null;})(),
      };
    });
    console.log(`${dark?'DARK':'LIGHT'} ${w}: hscroll=${r.hscroll} leftGap=${r.leftGap} rightGap=${r.rightGap} bottomGap=${r.leftBottomGap} btnGap=${r.btnGap} leftPos=${r.leftPos} rightPos=${r.rightPos}`);
    console.log(`   WA=${r.wa?.w}x${r.wa?.h} ${r.wa?.bg} z=${r.wa?.z} pe=${r.wa?.pe} | PH=${r.ph?.w}x${r.ph?.h} ${r.ph?.bg} | AS=${r.as?.w}x${r.as?.h} ${r.as?.bg}`);
    console.log(`   icons: wa=${r.waI?.w}x${r.waI?.h} ph=${r.phI?.w}x${r.phI?.h}`);
    await p.close();
  }
}
await b.close();
