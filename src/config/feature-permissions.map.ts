import { FeatureKey } from '../models/feature-keys.enum';

/**
 * FeatureKey  →  backend permission string(s) (logical OR).
 *
 * Backend permission strings come from CLAUDE.md §9 — the
 * `[AppAuthorize(Permissions = "Module.Action")]` attribute values.
 * Do NOT invent permission strings here; if a feature needs a new one,
 * add it on the backend first and confirm it appears in the JWT.
 *
 * A user is considered to "have" a feature if they hold AT LEAST ONE
 * of the listed permission strings. This matches the backend semantics
 * where a single attribute is satisfied by any one matching claim.
 *
 * Fail-closed: a feature with no entry here is denied to everyone.
 */
export const FEATURE_PERMISSIONS: Readonly<Record<FeatureKey, readonly string[]>> = Object.freeze({
  // HR / Leave Requests
  [FeatureKey.CreateLeave]:          ['OrderRequest.Create'],
  [FeatureKey.ViewHRList]:           ['HR'],
  [FeatureKey.ApproveLeave]:         ['OrderRequest.Update', 'OrderRequest'],

  // Contracts
  [FeatureKey.CreateContract]:       ['Contract.Create'],
  [FeatureKey.UpdateContract]:       ['Contract.Update'],
  [FeatureKey.DeleteContract]:       ['Contract.Delete'],
  [FeatureKey.ChangeContractStatus]: ['Contract.Update', 'Contract'],

  // Salary
  [FeatureKey.PaySalary]:            ['Salary'],

  // Withdrawals
  [FeatureKey.RequestWithdraw]:      ['Withdraw'],
  [FeatureKey.ApproveWithdraw]:      ['Withdraw'],

  // Reports
  [FeatureKey.ViewReports]:          ['Report'],
});
