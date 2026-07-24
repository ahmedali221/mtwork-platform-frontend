import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 393, height: 900 } });
await p.goto('http://localhost:4280/', { waitUntil: 'networkidle' });
await p.waitForTimeout(2000);
const r = await p.evaluate(async () => {
  await document.fonts.ready;
  const el = document.querySelector('.landing-hero__title');
  // measure rendered width of a fixed string in the element's computed font vs forced IBM Plex vs Inter
  const txt = 'Your Premier Platform';
  const cs = getComputedStyle(el);
  const mk = (family) => { const c=document.createElement('canvas').getContext('2d'); c.font = `700 36px ${family}`; return c.measureText(txt).width; };
  return {
    computedFamily: cs.fontFamily,
    computedFS: cs.fontSize, computedFW: cs.fontWeight,
    widthComputed: mk(cs.fontFamily),
    widthIBM: mk('"IBM Plex Sans"'),
    widthInter: mk('"Inter"'),
    widthSerif: mk('serif'),
    ibmLoaded700: document.fonts.check('700 36px "IBM Plex Sans"'),
    dmLoaded400: document.fonts.check('400 18px "DM Sans"'),
    // list loaded font faces
    faces: [...document.fonts].map(f=>`${f.family} ${f.weight} ${f.status}`),
  };
});
console.log(JSON.stringify(r,null,1));
await p.close(); await b.close();
