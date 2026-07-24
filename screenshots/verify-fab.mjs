import { chromium } from 'playwright';
const b = await chromium.launch();
for (const dark of [false, true]) {
  for (const w of [1440, 768, 393]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 } });
    if (dark) await p.addInitScript(() => localStorage.setItem('theme','dark'));
    await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
    await p.waitForTimeout(1500);
    const r = await p.evaluate(() => {
      const de = document.documentElement;
      const m = (s) => { const e=document.querySelector(s); if(!e)return null; const b=e.getBoundingClientRect(); const cs=getComputedStyle(e); return {x:+b.x.toFixed(1),y:+b.y.toFixed(1),w:+b.width.toFixed(1),h:+b.height.toFixed(1),bg:cs.backgroundColor,pos:cs.position,z:cs.zIndex,vis:cs.visibility,op:cs.opacity,pe:cs.pointerEvents}; };
      const leftRect = document.querySelector('.fab-left')?.getBoundingClientRect();
      const rightRect = document.querySelector('.fab-right')?.getBoundingClientRect();
      return {
        hscroll: de.scrollWidth-de.clientWidth,
        leftGap: leftRect ? +leftRect.x.toFixed(1) : null,
        rightGap: rightRect ? +(window.innerWidth - rightRect.right).toFixed(1) : null,
        bottomGapLeft: leftRect ? +(window.innerHeight - leftRect.bottom).toFixed(1) : null,
        wa: m('.fab--whatsapp'), phone: m('.fab--phone'),
        waIcon: m('.fab__icon--whatsapp'), phoneIcon: m('.fab__icon--phone'),
        gapLeft: (()=>{const a=document.querySelector('.fab--whatsapp')?.getBoundingClientRect();const c=document.querySelector('.fab--phone')?.getBoundingClientRect();return a&&c?+(c.x-a.right).toFixed(1):null;})(),
        assistant: m('.fab-right__button'), assistantIcon: m('.fab-right__icon'),
      };
    });
    console.log(`=== ${dark?'DARK':'LIGHT'} ${w} (hscroll=${r.hscroll}) ===`);
    console.log(`  leftGap=${r.leftGap} rightGap=${r.rightGap} bottomGap=${r.bottomGapLeft} btnGap=${r.gapLeft}`);
    console.log(`  WA   ${JSON.stringify(r.wa)}`);
    console.log(`  PHONE ${JSON.stringify(r.phone)}`);
    console.log(`  ASSIST ${JSON.stringify(r.assistant)}`);
    console.log(`  icons wa=${r.waIcon?.w}x${r.waIcon?.h} phone=${r.phoneIcon?.w}x${r.phoneIcon?.h} chat=${r.assistantIcon?.w}x${r.assistantIcon?.h}`);
    await p.close();
  }
}
await b.close();
