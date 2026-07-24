import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1086 } });
await page.addInitScript(() => localStorage.setItem('theme','light'));
await page.goto('http://localhost:4280/login', { waitUntil:'networkidle' });
await page.waitForTimeout(1000);

const r = (sel) => page.$eval(sel, e => { const b = e.getBoundingClientRect(); return { top:+b.top.toFixed(1), bottom:+b.bottom.toFixed(1), h:+b.height.toFixed(1) }; }).catch(()=>null);

const title = await r('.login-form__title');
const sub   = await r('.login-form__subtitle');
const fields= await r('.login-form');               // wraps the 2 fields + forgot
const emailF= await r('.login-field:nth-of-type(1)');
const pwdF  = await r('.login-field:nth-of-type(2)');
const forgot= await r('.login-form__forgot');
const btn   = await r('.login-btn');
const foot  = await r('.login-foot');
const social= await r('.login-social');

const gap = (a,b) => (a && b) ? +(b.top - a.bottom).toFixed(1) : 'n/a';
console.log('=== RIGHT FORM VERTICAL RHYTHM (Figma spec in parens) ===');
console.log('title h:', title?.h, '(45)');
console.log('title→subtitle gap:', gap(title, sub), '(≈4, baseline-driven)');
console.log('subtitle→email gap:', gap(sub, emailF), '(header bottom y100 → fields y124 = 24)');
console.log('email h:', emailF?.h, ' pwd h:', pwdF?.h);
console.log('email→pwd gap:', gap(emailF, pwdF), '(16)');
console.log('pwd→forgot gap:', gap(pwdF, forgot), '(label group: fields 192 ends, forgot at y160 within)');
console.log('forgot→Next gap:', gap(forgot, btn), '(fields group ends y192 → Next y224 = 32)');
console.log('Next h:', btn?.h, '(48)');
console.log('Next→foot gap:', gap(btn, foot), '(Next ends y272 → privacy y304 = 32)');
console.log('privacy→social gap (within foot):', social && foot ? +(social.top - foot.top).toFixed(1) : 'n/a', '(privacy 54h + 16)');
console.log('\n=== TOPBAR controls ===');
console.log('lang btn:', await r('.login-ctrl--lang'), '(h32)');
console.log('theme grp:', await r('.login-ctrl--theme-group'), '(h32 w133)');
console.log('active btn:', await r('.login-ctrl__theme-btn--active'), '(h24)');
await browser.close();
