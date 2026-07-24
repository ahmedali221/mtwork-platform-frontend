import { test, expect } from '@playwright/test';

// ── Admin credentials (separate endpoint: POST /api/Admin/login) ──────────────
const ADMIN = {
  email:    'admin@mtwork.com',   // replace with real admin credentials
  password: 'AdminPass@123',
};

async function adminLogin(page: import('@playwright/test').Page): Promise<void> {
  await page.goto('/admin/login');
  await page.getByLabel(/email/i).fill(ADMIN.email);
  await page.getByLabel(/password/i).fill(ADMIN.password);
  await page.getByRole('button', { name: /login|sign in/i }).click();
  await expect(page).not.toHaveURL(/\/login/, { timeout: 10_000 });
}

// ── Admin Flow ────────────────────────────────────────────────────────────────

// ⚠️  Admin credentials not configured — provide real values before enabling
test.describe.skip('Admin', () => {

  test.beforeEach(async ({ page }) => {
    await adminLogin(page);
  });

  test.afterEach(async ({ page }) => {
    await page.evaluate(() => localStorage.clear());
  });

  // ── Admin Dashboard ────────────────────────────────────────────────────────

  test.describe('Admin Dashboard', () => {
    test('Admin lands on admin dashboard after login', async ({ page }) => {
      await expect(page).toHaveURL(/admin|dashboard/);
    });

    test('Admin panel loads without errors', async ({ page }) => {
      const error = page.locator('[class*="error-state"], [class*="alert--danger"]');
      await expect(error).toHaveCount(0);
    });
  });

  // ── User Management ────────────────────────────────────────────────────────

  test.describe('User Management', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/dashboard/admin/companies');
      await page.waitForLoadState('networkidle');
    });

    test('Companies list loads', async ({ page }) => {
      const list  = page.locator('table, [class*="company-list"]');
      const empty = page.locator('[class*="empty"], [class*="no-data"]');
      const hasContent = await list.isVisible().catch(() => false)
                      || await empty.isVisible().catch(() => false);
      expect(hasContent).toBeTruthy();
    });

    test('Suspend company button visible', async ({ page }) => {
      const suspendBtn = page.getByRole('button', { name: /suspend|تعليق/i });
      // Only assert visible if any companies exist
      const hasCompanies = await page.locator('table tbody tr').count() > 0;
      if (hasCompanies) {
        await expect(suspendBtn.first()).toBeVisible();
      }
    });
  });

  // ── Permissions ────────────────────────────────────────────────────────────

  test.describe('Permissions', () => {
    test('Permissions page loads', async ({ page }) => {
      await page.goto('/dashboard/admin/permissions');
      await expect(page).not.toHaveURL(/404|not-found/);
    });
  });

});
