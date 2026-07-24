import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1086 } });
const errors = [];
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));

let loginCalled = null;
await page.route('**/Auth/login', async (route) => {
  loginCalled = route.request().postDataJSON();
  await route.fulfill({ status: 200, contentType: 'application/json',
    body: JSON.stringify({ token: 'fake.jwt.token', userType: 3, companyId: 1, userId: 'u1' }) });
});

await page.goto('http://localhost:4280/login', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);

// Submit empty → should NOT call API (required validators)
await page.click('.login-btn');
await page.waitForTimeout(300);
console.log('empty submit called API:', loginCalled !== null, '(expected false)');

// Fill + submit
await page.fill('#email', 'ebrahimnour186@gmail.com');
await page.fill('#password', 'Ii@123456');
await page.click('.login-btn');
await page.waitForTimeout(600);
console.log('filled submit payload:', JSON.stringify(loginCalled));
console.log('forgot link present:', await page.$('.login-link--danger') !== null);
console.log('social buttons disabled:', await page.$eval('.login-social__btn', b => b.disabled));
console.log('console errors:', errors.length ? errors : 'none');

await browser.close();
