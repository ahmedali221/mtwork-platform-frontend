import { Component, computed, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { TranslocoModule } from '@ngneat/transloco';
import { SidebarService } from '../../../services/sidebar';
import { AuthService } from '../../../services/auth';
import { AuthorizationService } from '../../../services/authorization.service';
import { TokenService } from '../../../services/token.service';
import { UserRole } from '../../../models/roles.enum';
import { AppFeature } from '../../../config/authorization.policy';
import { InviteMembersDialogComponent } from '../SidebarComponents/TeamsTabComponents/invite-members-dialog/invite-members-dialog';
import { CreateTeamDialogComponent } from '../SidebarComponents/TeamsTabComponents/create-team-dialog/create-team-dialog';

interface NavItem {
  icon:      string;
  labelKey:  string;
  route:     string;
  /** Centralised role gate via FeatureAccess. Undefined → no gate. */
  feature?:  AppFeature;
  hasAdd?:   boolean;
  /** When true, item is shown ONLY to the Admin JWT role. */
  adminOnly?: boolean;
  /**
   * Sidebar-only visibility override, independent of `feature`/route guards.
   * Use when a role's Figma frame omits an item the route/FeatureAccess
   * policy still permits (e.g. Employee's frame has no Reports/Salary/
   * Withdrawals/Payments tab, but those routes stay reachable for Employee
   * via other entry points — this only hides the sidebar link).
   */
  hideForRoles?: UserRole[];
  /** Per-role label override, keyed by JWT role. Falls back to `labelKey`. */
  labelKeyByRole?: Partial<Record<UserRole, string>>;
}

/**
 * SINGLE source of truth for sidebar items.
 * Items with `feature` are gated through AuthorizationService.hasAccess().
 * Items with `adminOnly: true` are shown only to JWT role === 'Admin'.
 * Items with no gate are visible to all authenticated users.
 */
// Order follows the Figma dashboard sidebar (node 3:121335):
//   Dashboard → Projects → Reports → Teams → Meetings → Contracts →
//   Task Mangment → HR → Attendance → Requests
// The extra items below the Figma set (Salary/Withdrawals/Payments/
// CompanyProfile/Admin) are all backend-supported for their roles — verified
// against the live API 2026-07-11 (every endpoint returns 200 for the Business
// token, no 403). They are kept and appended after the Figma-ordered items;
// visibility is still driven by FeatureAccess / adminOnly, order only changed.
const SIDEBAR_ITEMS: NavItem[] = [
  // ── Figma-ordered items ────────────────────────────────────────────
  { icon: 'dashboard',    labelKey: 'nav.dashboard',      route: '/dashboard' },
  { icon: 'folder',       labelKey: 'nav.projects',       route: '/dashboard/projects' },
  // Employee's Figma frame has no Reports tab — sidebar-only hide, route stays reachable.
  { icon: 'assessment',   labelKey: 'nav.reports',        route: '/dashboard/reports',          hideForRoles: [UserRole.Employee] },
  { icon: 'groups',       labelKey: 'nav.teams',          route: '/dashboard/teams',            hasAdd: true },
  { icon: 'event',        labelKey: 'nav.meetings',       route: '/dashboard/meetings' },
  { icon: 'description',  labelKey: 'nav.contracts',      route: '/dashboard/contracts',        feature: 'contracts' },
  { icon: 'task',         labelKey: 'nav.taskManagement', route: '/dashboard/task-management' },
  { icon: 'badge',        labelKey: 'nav.hr',             route: '/dashboard/hr',               feature: 'hr' },
  { icon: 'how_to_reg',   labelKey: 'nav.attendance',     route: '/dashboard/genralattendance', feature: 'attendance' },
  // Employee's Figma frame labels this "My Requests".
  { icon: 'request_page', labelKey: 'nav.requests',       route: '/dashboard/requests',         feature: 'requests', labelKeyByRole: { [UserRole.Employee]: 'nav.myRequests' } },

  // ── Backend-supported extras (not in the Figma sidebar frame) ──────
  // Employee's Figma frame omits Salary/Withdrawals/Payments — sidebar-only
  // hide; the routes stay reachable (Employee has real salary/withdrawal
  // data per FeatureAccess) for whatever other entry point surfaces them.
  { icon: 'payments',     labelKey: 'nav.salary',         route: '/dashboard/salary',           feature: 'salary', hideForRoles: [UserRole.Employee] },
  { icon: 'account_balance_wallet', labelKey: 'nav.withdrawals', route: '/dashboard/withdrawals', feature: 'withdrawals', hideForRoles: [UserRole.Employee] },
  { icon: 'account_balance_wallet', labelKey: 'nav.payments', route: '/dashboard/payments', hideForRoles: [UserRole.Employee] },
  { icon: 'business',     labelKey: 'nav.companyProfile', route: '/dashboard/company-profile',  feature: 'companyProfile' },
  // Added 2026-07-24: AUTH_DASHBOARD_MAP.md §3/§4 lists "Employees" as a Business-owner
  // dashboard module (Figma nodes 3:124367/3:125105/3:125185); no page existed for it.
  { icon: 'people_alt',   labelKey: 'nav.employees',      route: '/dashboard/employees',        feature: 'employees' },

  // ── Admin-only items ───────────────────────────────────────────────
  { icon: 'people',       labelKey: 'nav.admin.users',     route: '/dashboard/users',     adminOnly: true },
  { icon: 'domain',       labelKey: 'nav.admin.companies', route: '/dashboard/companies', adminOnly: true },
  { icon: 'settings',     labelKey: 'nav.admin.settings',  route: '/dashboard/settings',  adminOnly: true },
];

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    TranslocoModule
  ],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {
  protected sidebarService = inject(SidebarService);
  private   authService    = inject(AuthService);
  private   authorization  = inject(AuthorizationService);
  private   tokenService   = inject(TokenService);
  private   dialog         = inject(MatDialog);
  private   router         = inject(Router);

  isOpen = this.sidebarService.isOpen;

  /**
   * Items rendered in the sidebar. Filter rule:
   *   - No `feature`         → always shown.
   *   - Declares a `feature` → shown only when `hasAccess(feature)` is true.
   *   - `hideForRoles`       → hidden for the current role regardless of the above.
   *
   * `labelKeyByRole` resolves a per-role label override (falls back to `labelKey`).
   *
   * This eliminates the per-role hardcoded NAV arrays — all visibility is
   * driven by the centralised FeatureAccess policy (authorization.policy.ts).
   */
  navigationItems = computed<NavItem[]>(() => {
    const role    = this.tokenService.getUserRole() as UserRole | null;
    const isAdmin = role === UserRole.Admin;
    return SIDEBAR_ITEMS
      .filter(item => {
        if (role && item.hideForRoles?.includes(role)) return false;
        if (item.adminOnly) return isAdmin;
        if (item.feature)   return this.authorization.hasAccess(item.feature);
        return true;
      })
      .map(item => {
        const override = role && item.labelKeyByRole?.[role];
        // Employees can view teams but not create teams or invite members
        // via the sidebar's "+" menu — Business/Admin/manager action only.
        const suppressAdd = item.hasAdd && role === UserRole.Employee;
        if (!override && !suppressAdd) return item;
        return { ...item, labelKey: override ?? item.labelKey, hasAdd: suppressAdd ? false : item.hasAdd };
      });
  });

  toggleSidebar(): void {
    this.sidebarService.toggle();
  }

  openInviteMembersDialog(): void {
    const ref = this.dialog.open(InviteMembersDialogComponent, {
      width: '520px',
      panelClass: 'invite-dialog-panel',
      disableClose: false,
    });
    ref.afterClosed().subscribe(saved => {
      if (saved && this.router.url.includes('/teams')) {
        // Nudge the teams-list page to reload its data
        this.router.navigate(['/dashboard/teams'], { queryParams: { refreshed: Date.now() } });
      }
    });
  }

  openCreateTeamDialog(): void {
    const ref = this.dialog.open(CreateTeamDialogComponent, {
      width: '600px',
      panelClass: 'custom-dialog-container',
      disableClose: false,
    });
    ref.afterClosed().subscribe(saved => {
      if (saved) {
        // If already on the teams page, nudge a reload; otherwise just navigate there.
        this.router.navigate(['/dashboard/teams'], { queryParams: { refreshed: Date.now() } });
      }
    });
  }
}
