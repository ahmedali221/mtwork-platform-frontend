import { UserRole } from '../models/roles.enum';

/**
 * Page-level feature keys.
 *
 * These are coarse navigation gates (one per top-level page) consumed by:
 *   • `AuthorizationService.hasAccess(feature)`
 *   • `roleGuard` via route `data: { feature: 'contracts' }`
 *   • Sidebar config to render/hide items
 *
 * NOTE: This is the role-based policy. The fine-grained, permission-string
 * based map (`FEATURE_PERMISSIONS` / `FeatureKey`) lives separately and is
 * used for action-level gates (CreateContract, ApproveLeave, etc.).
 */
export type AppFeature =
  | 'contracts'
  | 'hr'
  | 'attendance'
  | 'requests'
  | 'withdrawals'
  | 'salary'
  | 'companyProfile'
  | 'employees';

/**
 * AppFeature  →  list of UserRoles permitted to access the page.
 *
 * A user passes the gate iff their `role` claim is in the list.
 * Admin is included where the spec calls for it explicitly.
 *
 * Policy spec (locked in by the RBAC task):
 *   contracts    → Admin, Business
 *   hr           → Admin, Business
 *   attendance   → Admin, Business, Employee
 *   requests     → Employee, Contractor, Business
 *   withdrawals  → Employee, Business
 *   salary       → Employee, Business
 *   employees    → Business
 *     Added 2026-07-24: AUTH_DASHBOARD_MAP.md §4 lists "Employees" as a
 *     Business-owner-only module (Figma nodes 3:124367/3:125105/3:125185).
 *     `User/GetAllCompanyEmployees` scopes results to the caller's own
 *     companyId claim — Admin has no companyId, so Admin is deliberately
 *     excluded here (unlike hr/contracts/companyProfile).
 */
export const FeatureAccess: Readonly<Record<AppFeature, readonly UserRole[]>> = Object.freeze({
  contracts:      [UserRole.Admin, UserRole.Business],
  hr:             [UserRole.Admin, UserRole.Business],
  attendance:     [UserRole.Admin, UserRole.Business, UserRole.Employee],
  requests:       [UserRole.Employee, UserRole.Contractor, UserRole.Business],
  withdrawals:    [UserRole.Employee, UserRole.Business],
  salary:         [UserRole.Employee, UserRole.Business],
  companyProfile: [UserRole.Admin, UserRole.Business],
  employees:      [UserRole.Business],
});

/** Type guard — narrows an arbitrary string to AppFeature. */
export function isAppFeature(value: unknown): value is AppFeature {
  return typeof value === 'string' && value in FeatureAccess;
}
