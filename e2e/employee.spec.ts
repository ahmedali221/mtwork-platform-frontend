import { test, expect } from '@playwright/test';
import { login, logout, EMPLOYEE } from './helpers';

// ── Employee Full Flow ────────────────────────────────────────────────────────

test.describe('Employee', () => {

  test.beforeEach(async ({ page }) => {
    await login(page, EMPLOYEE.email, EMPLOYEE.password);
  });

  test.afterEach(async ({ page }) => {
    await page.evaluate(() => localStorage.clear());
  });

  // ── Dashboard ──────────────────────────────────────────────────────────────

  test.describe('Dashboard', () => {
    test('Lands on employee dashboard after login', async ({ page }) => {
      await expect(page).toHaveURL(/\/dashboard/);
    });

    test('Header shows role badge "Employee"', async ({ page }) => {
      // Role badge lives inside @if(userMenuOpen()) — must open menu first
      await page.getByRole('button', { name: /user menu/i }).click();
      await expect(page.locator('[class*="role-badge"]')).toContainText(/employee|موظف/i);
      await page.keyboard.press('Escape');
    });

    test('No business-only sections visible (pay salary button absent)', async ({ page }) => {
      const payBtn = page.getByRole('button', { name: /pay salary|دفع الراتب/i });
      await expect(payBtn).toHaveCount(0);
    });

    test('Dashboard loads stats within 5 seconds', async ({ page }) => {
      await page.waitForTimeout(5_000);
      const spinners = page.locator('[class*="spinner"], mat-progress-spinner');
      await expect(spinners).toHaveCount(0);
    });
  });

  // ── Leave Request ──────────────────────────────────────────────────────────
  //
  // IMPORTANT: /dashboard/hr is Business/Admin-only (FeatureAccess.hr).
  // Employees are blocked by roleGuard → redirect loop → 31s timeout.
  // The correct employee route for leave requests is /dashboard/requests
  // (FeatureAccess.requests = [Employee, Contractor, Business]).

  test.describe('Leave Request', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/dashboard/requests');
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(2_000);
    });

    test('Leave request page loads', async ({ page }) => {
      // Employee is redirected from /hr → /dashboard by roleGuard.
      // /requests is the correct accessible route.
      await expect(page).toHaveURL(/requests/);
    });

    test('New leave request button is visible', async ({ page }) => {
      // "New Request" button (requests.newRequest) — shown when canCreateLeave()
      const newBtn = page.getByRole('button', { name: /new request/i });
      await expect(newBtn.first()).toBeVisible({ timeout: 8_000 });
    });

    test('Leave request dialog opens on button click', async ({ page }) => {
      const newBtn = page.getByRole('button', { name: /new request/i }).first();
      await newBtn.click();
      const dialog = page.locator('mat-dialog-container, [role="dialog"]');
      await expect(dialog).toBeVisible({ timeout: 5_000 });
    });

    test('Page title is visible', async ({ page }) => {
      // requests.title = "My Requests" — always visible, no permission gate
      const title = page.locator('h1.page-title');
      await expect(title).toBeVisible({ timeout: 8_000 });
    });

    test('Leave request list shows entries or empty state', async ({ page }) => {
      // requests page uses table.requests-table or .ui-empty for empty state
      const table = page.locator('table.requests-table');
      const empty = page.locator('.ui-empty, [class*="empty"]');
      const hasContent = await table.isVisible().catch(() => false)
                      || await empty.isVisible().catch(() => false);
      expect(hasContent).toBeTruthy();
    });
  });

  // ── Profile / Personal Info ────────────────────────────────────────────────

  test.describe('Profile', () => {
    test('Profile page accessible', async ({ page }) => {
      await page.goto('/dashboard/profile');
      await expect(page).not.toHaveURL(/404|not-found/);
    });
  });

});
