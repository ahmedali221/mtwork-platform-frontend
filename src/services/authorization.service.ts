import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TokenService } from './token.service';
import type { CurrentUser } from './auth';
import { UserRole, UserType } from '../models/roles.enum';
import { HRListDto } from '../models/hr-models';
import { ContractStatus } from '../models/contract-models';
import { FeatureKey } from '../models/feature-keys.enum';
import { FEATURE_PERMISSIONS } from '../config/feature-permissions.map';
import { AppFeature, FeatureAccess, isAppFeature } from '../config/authorization.policy';

/**
 * Future-proofing seam.
 *
 * Today: permissions are read from the JWT only.
 * Tomorrow: a backend endpoint may return additional permissions per user.
 * Implement this interface in a separate provider and supply it via DI to
 * swap modes without touching consumers.
 */
export interface PermissionsProvider {
  /** Returns the list of backend permission strings granted to the user. */
  getPermissions(): Observable<string[]>;
}

/**
 * Centralized authorization layer.
 *
 * Single source of truth for "may the current user do X?" in the UI.
 * Components MUST NOT compare userTypeId / role inline — go through here.
 *
 * Sources of truth (in order):
 *   1. JWT `permission` / `permissions` claim  (server-owned, CLAUDE.md §9)
 *   2. Optional server-loaded permissions  (future, no-op today)
 *   3. UserType-based fallback (temporary — see policy below)
 *
 * Policy:
 *   - If the JWT carries ANY permission strings → strict RBAC.
 *   - If it carries NONE                       → fall back to userType:
 *       • A registered FEATURE_FALLBACKS entry decides the answer.
 *       • Otherwise the feature is allowed (fail-open) so the UI does
 *         not disappear while the backend rolls out permission claims.
 *
 * This fail-open fallback is temporary. The day the backend emits
 * permission claims for all users, the fallback path is bypassed
 * automatically — no consumer changes required.
 */
@Injectable({ providedIn: 'root' })
export class AuthorizationService {
  private tokenService = inject(TokenService);

  // ── State (Signals) ──────────────────────────────────────────────

  /** Permissions decoded from the JWT on the last refresh. */
  private readonly _jwtPermissions = signal<string[]>([]);

  /** Permissions fetched from a future backend endpoint. No-op today. */
  private readonly _serverPermissions = signal<string[]>([]);

  /** Cached current-user snapshot (decoded from JWT). */
  private readonly _currentUser = signal<CurrentUser | null>(null);

  /**
   * Effective permission set — union of JWT + server-side permissions.
   * Templates that depend on this re-render automatically when refreshed.
   */
  readonly permissions = computed<string[]>(() => {
    const seen = new Set<string>();
    for (const p of this._jwtPermissions()) seen.add(p);
    for (const p of this._serverPermissions()) seen.add(p);
    return Array.from(seen);
  });

  /** Read-only view of the cached user. */
  readonly currentUser = computed<CurrentUser | null>(() => this._currentUser());

  constructor() {
    // Initialise from whatever is in localStorage at boot.
    this.refreshPermissions();
  }

  // ── Public API ───────────────────────────────────────────────────

  /** Returns the cached user info decoded from the JWT (no API call). */
  getUser(): CurrentUser | null {
    return this._currentUser();
  }

  /** Strict role check. Falls back to `null` if no role claim exists. */
  hasRole(role: UserRole | UserType): boolean {
    const claim = this.tokenService.getUserRole();
    if (!claim) return false;
    if (typeof role === 'string') return claim === role;
    // Numeric UserType → map to canonical UserRole string.
    return claim === USER_TYPE_TO_ROLE[role];
  }

  /**
   * Page-level role gate, backed by `FeatureAccess` (authorization.policy.ts).
   *
   * Used by:
   *   • Sidebar — to hide menu items the role cannot access.
   *   • `roleGuard` via `data: { feature: 'contracts' }`.
   *
   * Resolution order for the active role:
   *   1. JWT `role` claim (preferred — server-owned).
   *   2. localStorage `userTypeId` mapped via UserType → UserRole.
   *
   * Behaviour:
   *   - Unknown feature key  → false (fail-closed; developer typo).
   *   - No active role found → false (no token / unauthenticated).
   *   - Role missing from list → false.
   */
  hasAccess(feature: AppFeature | string): boolean {
    if (!isAppFeature(feature)) return false;
    const allowed = FeatureAccess[feature];

    // Prefer the JWT role claim; fall back to userType from storage.
    let role = this.tokenService.getUserRole() as UserRole | null;
    if (!role) {
      const ut = this.getUserType();
      if (ut != null) role = USER_TYPE_TO_ROLE[ut];
    }
    if (!role) return false;
    return allowed.includes(role);
  }

  /** Does the user hold this exact backend permission string? */
  hasPermission(permission: string): boolean {
    return this.permissions().includes(permission);
  }

  /** Does the user hold ANY of the listed backend permissions? */
  hasAnyPermission(permissions: readonly string[]): boolean {
    if (!permissions.length) return false;
    const owned = this.permissions();
    for (const p of permissions) {
      if (owned.includes(p)) return true;
    }
    return false;
  }

  /**
   * Resolves the FeatureKey to "is this user allowed to use this feature?".
   *
   * Strict RBAC path (preferred): the user's JWT carries permission
   * strings → check the FEATURE_PERMISSIONS map.
   *
   * Fallback path (temporary): no permissions in JWT → use the
   * FEATURE_FALLBACKS map; if there's no registered fallback for the
   * key, return true (fail-open) so missing claims don't blank the UI.
   */
  canAccessFeature(key: FeatureKey): boolean {
    if (this._hasAnyJwtPermissions()) {
      const required = FEATURE_PERMISSIONS[key];
      if (!required || required.length === 0) return false;
      return this.hasAnyPermission(required);
    }
    // ── Fallback mode ──
    const fallback = FEATURE_FALLBACKS[key];
    if (fallback) return fallback(this.getUserType());
    return true;
  }

  /** True iff at least one permission string is currently known. */
  private _hasAnyJwtPermissions(): boolean {
    return this.permissions().length > 0;
  }

  /**
   * Reads the numeric userType from localStorage (set by AuthService on
   * login). Avoids a circular dependency on AuthService.
   * 1 = Employee, 2 = Contractor, 3 = Business.
   */
  private getUserType(): UserType | null {
    try {
      const raw = localStorage.getItem('userTypeId');
      if (raw == null) return null;
      const n = Number(raw);
      if (n === UserType.Employee || n === UserType.Contractor || n === UserType.Business) {
        return n;
      }
      return null;
    } catch {
      return null;
    }
  }

  /**
   * Frontend-owned business rule: a row in the HR list represents an
   * employee with a usable contract iff `contractId > 0` AND, when the
   * field is present, `status` resolves to ContractStatus.Approved.
   *
   * Backend ContractStatusEnum (source of truth):
   *   1=Initiated, 2=Reviewed, 3=Approved, 4=Canceled.
   * Only Approved (id 3) is accepted — Initiated, Reviewed, and Canceled
   * are explicitly disallowed.
   *
   * Pass `undefined` to skip the contract check (used by the header-level
   * "New Request" button where the user submits for themselves).
   */
  validateEmployeeHasContract(employee?: HRListDto): boolean {
    if (!employee) return true;
    if (!employee.contractId || employee.contractId <= 0) return false;
    // `status` is an optional string on HRListDto; check only when present.
    if (employee.status != null && employee.status !== '') {
      const normalised = String(employee.status).toLowerCase();
      const isApproved =
        normalised === 'approved' ||
        normalised === String(ContractStatus.Approved); // numeric id 3
      if (!isApproved) return false;
    }
    return true;
  }

  /**
   * Composite gate for the CreateLeave action.
   * Permission gate + business gate are independent — both must pass.
   *
   * Two call shapes:
   *   canCreateLeave(employee?)
   *   canCreateLeave(user, employee?)   // explicit user — useful for tests
   *
   * Pass `undefined` for the employee in the self-service "new request"
   * flow (the contract check is skipped — the user submits for themselves).
   */
  canCreateLeave(employee?: HRListDto): boolean;
  canCreateLeave(user: AuthUser | null, employee?: HRListDto): boolean;
  canCreateLeave(arg1?: HRListDto | AuthUser | null, arg2?: HRListDto): boolean {
    let userType: UserType | null;
    let employee: HRListDto | undefined;

    if (arg1 !== null && arg1 !== undefined && typeof arg1 === 'object' && 'userType' in arg1) {
      userType = (arg1 as AuthUser).userType ?? null;
      employee = arg2;
    } else {
      userType = this.getUserType();
      employee = arg1 as HRListDto | undefined;
    }

    // Permission gate (RBAC if JWT permissions exist, else userType fallback).
    if (this._hasAnyJwtPermissions()) {
      if (!this.canAccessFeature(FeatureKey.CreateLeave)) return false;
    } else {
      // Spec'd fallback rules:
      //   userType === 3 (Business)   → false
      //   userType === 1 (Employee)   → contract check below
      //   otherwise (Contractor/null) → false
      if (userType !== UserType.Employee) return false;
    }

    return this.validateEmployeeHasContract(employee);
  }

  /**
   * Returns the i18n key for a consistent "blocked action" message.
   * Distinguishes the role/permission gate from the contract gate so
   * the UX can explain *why* an action is unavailable.
   *
   * Order matters: contract gate is checked FIRST for CreateLeave, so an
   * Employee without a contract sees the contract message rather than a
   * generic "forbidden". For other features, fall through to the gate
   * message.
   */
  reasonFor(key: FeatureKey, employee?: HRListDto): string {
    if (key === FeatureKey.CreateLeave && !this.validateEmployeeHasContract(employee)) {
      return 'permissions.requires_active_contract';
    }
    if (!this.canAccessFeature(key)) {
      return 'permissions.forbidden_action';
    }
    return 'permissions.feature_unavailable';
  }

  /**
   * Re-reads JWT-sourced state. Call after login, after a token refresh,
   * and at logout (which clears it).
   */
  refreshPermissions(): void {
    this._jwtPermissions.set(this.tokenService.getPermissions());
    this._currentUser.set({
      userId:    this.tokenService.getUserId(),
      email:     this.tokenService.getEmail(),
      role:      this.tokenService.getUserRole(),
      companyId: this.tokenService.getCompanyId(),
    });
  }

  /** Clears all cached state. Called on logout. */
  clear(): void {
    this._jwtPermissions.set([]);
    this._serverPermissions.set([]);
    this._currentUser.set(null);
  }

  // ── Future hook (inert today) ────────────────────────────────────

  /**
   * Reserved for backend-driven permissions.
   *
   * No endpoint exists in CLAUDE.md §5 today, so this returns an empty
   * stream. When an endpoint ships:
   *   1. Implement a PermissionsProvider that calls it.
   *   2. Provide it via DI and call this method after login.
   *   3. The signal merge will pick it up — no consumer changes needed.
   */
  loadFromServer$(provider?: PermissionsProvider): Observable<string[]> {
    if (!provider) return of([]);
    return new Observable<string[]>(subscriber => {
      const sub = provider.getPermissions().subscribe({
        next: perms => {
          this._serverPermissions.set(perms ?? []);
          subscriber.next(perms ?? []);
        },
        error: err => subscriber.error(err),
        complete: () => subscriber.complete(),
      });
      return () => sub.unsubscribe();
    });
  }
}

// ── Internal types & helpers ──────────────────────────────────────

/**
 * Minimal user shape accepted by the testable `canCreateLeave(user, …)`
 * overload. Anything that exposes `userType` works.
 */
export interface AuthUser {
  userType: UserType | null;
}

const USER_TYPE_TO_ROLE: Record<UserType, UserRole> = {
  [UserType.Employee]:   UserRole.Employee,
  [UserType.Contractor]: UserRole.Contractor,
  [UserType.Business]:   UserRole.Business,
};

/**
 * Fallback decisions used **only** when the JWT carries no permission
 * strings (legacy / pre-RBAC tokens).
 *
 * A registered entry returning false → feature hidden / route blocked.
 * A registered entry returning true  → feature available.
 * No entry                           → fail-open (allow), see canAccessFeature.
 *
 * Keep this map small and intentional. It is a temporary bridge until
 * the backend emits permission claims for all roles.
 */
const FEATURE_FALLBACKS: Partial<Record<FeatureKey, (userType: UserType | null) => boolean>> = {
  // Spec: only Employees may create leave (contract gate is applied separately).
  [FeatureKey.CreateLeave]: (ut) => ut === UserType.Employee,
};
