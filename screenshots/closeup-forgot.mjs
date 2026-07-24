import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.addInitScript(() => localStorage.setItem('theme', 'light'));
await page.goto('http://localhost:4280/login', { waitUntil: 'networkidle' });
await page.waitForTimeout(1400);
await page.click('.login-link--danger');
await page.waitForTimeout(400);
// fill email so the CTA shows its enabled (Figma default) navy state
await page.fill('#fp-modal-email', 'user@example.com');
await page.waitForTimeout(200);
const card = await page.$('.modal-card');
await card.screenshot({ path: 'screenshots/forgot/forgot-modal-closeup.png' });
console.log('closeup captured');
await browser.close();
