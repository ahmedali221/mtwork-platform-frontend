/**
 * Stable, frontend-owned feature identifiers used by templates,
 * guards, and the AuthorizationService.
 *
 * The mapping from FeatureKey → backend permission string lives in
 * `src/config/feature-permissions.map.ts`. That is the only place where
 * frontend keys meet backend strings — keep it that way.
 *
 * Adding a feature:
 *   1. Add an entry to this enum.
 *   2. Add the required backend permission(s) in feature-permissions.map.ts.
 *   3. Reference via `FeatureKey.Xyz` in templates / guards / services.
 */
export enum FeatureKey {
  // HR / Leave Requests
  CreateLeave         = 'CreateLeave',
  ViewHRList          = 'ViewHRList',
  ApproveLeave        = 'ApproveLeave',

  // Contracts
  CreateContract      = 'CreateContract',
  UpdateContract      = 'UpdateContract',
  DeleteContract      = 'DeleteContract',
  ChangeContractStatus= 'ChangeContractStatus',

  // Salary
  PaySalary           = 'PaySalary',

  // Withdrawals
  RequestWithdraw     = 'RequestWithdraw',
  ApproveWithdraw     = 'ApproveWithdraw',

  // Reports
  ViewReports         = 'ViewReports',
}
