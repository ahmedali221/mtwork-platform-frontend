import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const reqs = [];
page.on('request', r => { if (r.url().includes('forgetPasswordMail')) reqs.push(r.url()); });
const errs = [];
page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
await page.addInitScript(() => localStorage.setItem('theme', 'light'));
await page.goto('http://localhost:4280/login', { waitUntil: 'networkidle' });
await page.waitForTimeout(1200);
await page.click('.login-link--danger');
await page.waitForTimeout(300);
// empty submit should be blocked (button disabled)
const disabledEmpty = await page.evaluate(() => document.querySelector('.modal-btn').disabled);
await page.fill('#fp-modal-email', 'tester@example.com');
await page.waitForTimeout(200);
const enabledFilled = await page.evaluate(() => !document.querySelector('.modal-btn').disabled);
await page.click('.modal-btn');
await page.waitForTimeout(1500);
console.log('empty-disabled:', disabledEmpty, '| filled-enabled:', enabledFilled);
console.log('forgetPasswordMail requests:', reqs.length, reqs[0] || '');
console.log('console errors:', errs.length, errs.slice(0,3));
// close button works
await page.evaluate(() => { const b=document.querySelector('.modal-card__close'); if(b) b.click(); });
await page.waitForTimeout(300);
const closed = await page.evaluate(() => !document.querySelector('.modal-card'));
console.log('closes via X:', closed);
await browser.close();
