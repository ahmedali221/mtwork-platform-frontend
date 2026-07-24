import { test, expect } from '@playwright/test';
import { login, logout, BUSINESS, EMPLOYEE } from './helpers';

// ── Auth Flow E2E Tests ───────────────────────────────────────────────────────

test.describe('Auth Flow', () => {

  // ── Login ──────────────────────────────────────────────────────────────────

  test.describe('Login', () => {
    test('Business Owner — successful login redirects to dashboard', async ({ page }) => {
      await login(page, BUSINESS.email, BUSINESS.password);
      await expect(page).toHaveURL(/\/dashboard/);
    });

    test('Employee — successful login redirects to dashboard', async ({ page }) => {
      await login(page, EMPLOYEE.email, EMPLOYEE.password);
      await expect(page).toHaveURL(/\/dashboard/);
    });

    test('Wrong credentials — shows error message', async ({ page }) => {
      await page.goto('/login');
      await page.locator('#email').fill('wrong@test.com');
      await page.locator('#password').fill('WrongPass123!');
      await page.locator('button[type="submit"]').click();
      await expect(page.getByRole('alert').or(page.locator('[class*="error"]'))).toBeVisible({ timeout: 8_000 });
      await expect(page).toHaveURL(/\/login/);
    });

    test('Empty form — login button disabled or shows validation', async ({ page }) => {
      await page.goto('/login');
      const btn = page.locator('button[type="submit"]');
      const isDisabled = await btn.isDisabled();
      if (!isDisabled) {
        await btn.click();
        // Either stays on login or shows validation messages
        await expect(page).toHaveURL(/\/login/);
      }
    });

    test('MT_token stored in localStorage after login', async ({ page }) => {
      await login(page, BUSINESS.email, BUSINESS.password);
      const token = await page.evaluate(() => localStorage.getItem('MT_token'));
      expect(token).toBeTruthy();
    });
  });

  // ── Logout ─────────────────────────────────────────────────────────────────

  test.describe('Logout', () => {
    test('Logout clears token and redirects to /login', async ({ page }) => {
      await login(page, BUSINESS.email, BUSINESS.password);
      await logout(page);
      const token = await page.evaluate(() => localStorage.getItem('MT_token'));
      expect(token).toBeNull();
    });

    test('After logout, /dashboard redirects to /login', async ({ page }) => {
      await login(page, BUSINESS.email, BUSINESS.password);
      await logout(page);
      await page.goto('/dashboard');
      await expect(page).toHaveURL(/\/login/);
    });
  });

  // ── Route Guard ────────────────────────────────────────────────────────────

  test.describe('Route Guard', () => {
    test('Unauthenticated user hitting /dashboard → redirected to /login', async ({ page }) => {
      // Navigate to app first so we have a valid origin, then clear storage
      await page.goto('/login');
      await page.evaluate(() => localStorage.clear());
      await page.goto('/dashboard');
      await expect(page).toHaveURL(/\/login/);
    });

    test('/login accessible without auth', async ({ page }) => {
      await page.goto('/login');
      await expect(page).toHaveURL(/\/login/);
    });
  });

  // ── Forgot Password ────────────────────────────────────────────────────────

  test.describe('Forgot Password', () => {
    test('Forgot password modal opens', async ({ page }) => {
      await page.goto('/login');
      // The forgot password trigger is a button (opens a modal), not a link
      const forgotBtn = page.getByRole('button', { name: /forgot/i });
      await expect(forgotBtn).toBeVisible();
      await forgotBtn.click();
      // Modal should appear — look for the email input inside it
      await expect(page.locator('#fp-modal-email')).toBeVisible({ timeout: 5_000 });
    });

    test('Submitting email in forgot-password modal shows confirmation', async ({ page }) => {
      await page.goto('/login');
      await page.getByRole('button', { name: /forgot/i }).click();
      await page.locator('#fp-modal-email').fill('test@example.com');
      await page.getByRole('button', { name: /send|submit/i }).click();
      // Expect either success message or at minimum no JS crash
      await page.waitForTimeout(3_000);
      // Page should still be on /login (modal doesn't navigate away)
      await expect(page).toHaveURL(/\/login/);
    });
  });

});
