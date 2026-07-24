import {
  ContractStatus
} from "./chunk-5LLUWZOB.js";
import {
  UserRole,
  UserType
} from "./chunk-TXEUWJT3.js";
import {
  TokenService
} from "./chunk-P46WWH45.js";
import {
  ApiService
} from "./chunk-RDBMT5X2.js";
import {
  Router
} from "./chunk-LSMZM5UZ.js";
import {
  BehaviorSubject,
  Injectable,
  Observable,
  computed,
  inject,
  of,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-MQLQGMUZ.js";

// src/models/feature-keys.enum.ts
var FeatureKey;
(function(FeatureKey2) {
  FeatureKey2["CreateLeave"] = "CreateLeave";
  FeatureKey2["ViewHRList"] = "ViewHRList";
  FeatureKey2["ApproveLeave"] = "ApproveLeave";
  FeatureKey2["CreateContract"] = "CreateContract";
  FeatureKey2["UpdateContract"] = "UpdateContract";
  FeatureKey2["DeleteContract"] = "DeleteContract";
  FeatureKey2["ChangeContractStatus"] = "ChangeContractStatus";
  FeatureKey2["PaySalary"] = "PaySalary";
  FeatureKey2["RequestWithdraw"] = "RequestWithdraw";
  FeatureKey2["ApproveWithdraw"] = "ApproveWithdraw";
  FeatureKey2["ViewReports"] = "ViewReports";
})(FeatureKey || (FeatureKey = {}));

// src/config/feature-permissions.map.ts
var FEATURE_PERMISSIONS = Object.freeze({
  // HR / Leave Requests
  [FeatureKey.CreateLeave]: ["OrderRequest.Create"],
  [FeatureKey.ViewHRList]: ["HR"],
  [FeatureKey.ApproveLeave]: ["OrderRequest.Update", "OrderRequest"],
  // Contracts
  [FeatureKey.CreateContract]: ["Contract.Create"],
  [FeatureKey.UpdateContract]: ["Contract.Update"],
  [FeatureKey.DeleteContract]: ["Contract.Delete"],
  [FeatureKey.ChangeContractStatus]: ["Contract.Update", "Contract"],
  // Salary
  [FeatureKey.PaySalary]: ["Salary"],
  // Withdrawals
  [FeatureKey.RequestWithdraw]: ["Withdraw"],
  [FeatureKey.ApproveWithdraw]: ["Withdraw"],
  // Reports
  [FeatureKey.ViewReports]: ["Report"]
});

// src/config/authorization.policy.ts
var FeatureAccess = Object.freeze({
  contracts: [UserRole.Admin, UserRole.Business],
  hr: [UserRole.Admin, UserRole.Business],
  attendance: [UserRole.Admin, UserRole.Business, UserRole.Employee],
  requests: [UserRole.Employee, UserRole.Contractor, UserRole.Business],
  withdrawals: [UserRole.Employee, UserRole.Business],
  salary: [UserRole.Employee, UserRole.Business],
  companyProfile: [UserRole.Admin, UserRole.Business],
  employees: [UserRole.Business]
});
function isAppFeature(value) {
  return typeof value === "string" && value in FeatureAccess;
}

// src/services/authorization.service.ts
var _AuthorizationService = class _AuthorizationService {
  constructor() {
    this.tokenService = inject(TokenService);
    this._jwtPermissions = signal([], ...ngDevMode ? [{ debugName: "_jwtPermissions" }] : []);
    this._serverPermissions = signal([], ...ngDevMode ? [{ debugName: "_serverPermissions" }] : []);
    this._currentUser = signal(null, ...ngDevMode ? [{ debugName: "_currentUser" }] : []);
    this.permissions = computed(() => {
      const seen = /* @__PURE__ */ new Set();
      for (const p of this._jwtPermissions())
        seen.add(p);
      for (const p of this._serverPermissions())
        seen.add(p);
      return Array.from(seen);
    }, ...ngDevMode ? [{ debugName: "permissions" }] : []);
    this.currentUser = computed(() => this._currentUser(), ...ngDevMode ? [{ debugName: "currentUser" }] : []);
    this.refreshPermissions();
  }
  // ── Public API ───────────────────────────────────────────────────
  /** Returns the cached user info decoded from the JWT (no API call). */
  getUser() {
    return this._currentUser();
  }
  /** Strict role check. Falls back to `null` if no role claim exists. */
  hasRole(role) {
    const claim = this.tokenService.getUserRole();
    if (!claim)
      return false;
    if (typeof role === "string")
      return claim === role;
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
  hasAccess(feature) {
    if (!isAppFeature(feature))
      return false;
    const allowed = FeatureAccess[feature];
    let role = this.tokenService.getUserRole();
    if (!role) {
      const ut = this.getUserType();
      if (ut != null)
        role = USER_TYPE_TO_ROLE[ut];
    }
    if (!role)
      return false;
    return allowed.includes(role);
  }
  /** Does the user hold this exact backend permission string? */
  hasPermission(permission) {
    return this.permissions().includes(permission);
  }
  /** Does the user hold ANY of the listed backend permissions? */
  hasAnyPermission(permissions) {
    if (!permissions.length)
      return false;
    const owned = this.permissions();
    for (const p of permissions) {
      if (owned.includes(p))
        return true;
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
  canAccessFeature(key) {
    if (this._hasAnyJwtPermissions()) {
      const required = FEATURE_PERMISSIONS[key];
      if (!required || required.length === 0)
        return false;
      return this.hasAnyPermission(required);
    }
    const fallback = FEATURE_FALLBACKS[key];
    if (fallback)
      return fallback(this.getUserType());
    return true;
  }
  /** True iff at least one permission string is currently known. */
  _hasAnyJwtPermissions() {
    return this.permissions().length > 0;
  }
  /**
   * Reads the numeric userType from localStorage (set by AuthService on
   * login). Avoids a circular dependency on AuthService.
   * 1 = Employee, 2 = Contractor, 3 = Business.
   */
  getUserType() {
    try {
      const raw = localStorage.getItem("userTypeId");
      if (raw == null)
        return null;
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
  validateEmployeeHasContract(employee) {
    if (!employee)
      return true;
    if (!employee.contractId || employee.contractId <= 0)
      return false;
    if (employee.status != null && employee.status !== "") {
      const normalised = String(employee.status).toLowerCase();
      const isApproved = normalised === "approved" || normalised === String(ContractStatus.Approved);
      if (!isApproved)
        return false;
    }
    return true;
  }
  canCreateLeave(arg1, arg2) {
    let userType;
    let employee;
    if (arg1 !== null && arg1 !== void 0 && typeof arg1 === "object" && "userType" in arg1) {
      userType = arg1.userType ?? null;
      employee = arg2;
    } else {
      userType = this.getUserType();
      employee = arg1;
    }
    if (this._hasAnyJwtPermissions()) {
      if (!this.canAccessFeature(FeatureKey.CreateLeave))
        return false;
    } else {
      if (userType !== UserType.Employee)
        return false;
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
  reasonFor(key, employee) {
    if (key === FeatureKey.CreateLeave && !this.validateEmployeeHasContract(employee)) {
      return "permissions.requires_active_contract";
    }
    if (!this.canAccessFeature(key)) {
      return "permissions.forbidden_action";
    }
    return "permissions.feature_unavailable";
  }
  /**
   * Re-reads JWT-sourced state. Call after login, after a token refresh,
   * and at logout (which clears it).
   */
  refreshPermissions() {
    this._jwtPermissions.set(this.tokenService.getPermissions());
    this._currentUser.set({
      userId: this.tokenService.getUserId(),
      email: this.tokenService.getEmail(),
      role: this.tokenService.getUserRole(),
      companyId: this.tokenService.getCompanyId()
    });
  }
  /** Clears all cached state. Called on logout. */
  clear() {
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
  loadFromServer$(provider) {
    if (!provider)
      return of([]);
    return new Observable((subscriber) => {
      const sub = provider.getPermissions().subscribe({
        next: (perms) => {
          this._serverPermissions.set(perms ?? []);
          subscriber.next(perms ?? []);
        },
        error: (err) => subscriber.error(err),
        complete: () => subscriber.complete()
      });
      return () => sub.unsubscribe();
    });
  }
};
_AuthorizationService.\u0275fac = function AuthorizationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthorizationService)();
};
_AuthorizationService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthorizationService, factory: _AuthorizationService.\u0275fac, providedIn: "root" });
var AuthorizationService = _AuthorizationService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthorizationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();
var USER_TYPE_TO_ROLE = {
  [UserType.Employee]: UserRole.Employee,
  [UserType.Contractor]: UserRole.Contractor,
  [UserType.Business]: UserRole.Business
};
var FEATURE_FALLBACKS = {
  // Spec: only Employees may create leave (contract gate is applied separately).
  [FeatureKey.CreateLeave]: (ut) => ut === UserType.Employee
};

// src/services/auth.ts
var _AuthService = class _AuthService {
  constructor() {
    this.TOKEN_KEY = "MT_token";
    this.USER_ID_KEY = "userId";
    this.USER_TYPE_KEY = "userTypeId";
    this.router = inject(Router);
    this.apiService = inject(ApiService);
    this.tokenService = inject(TokenService);
    this.authz = inject(AuthorizationService);
    this._authState$ = new BehaviorSubject(this._checkLoggedIn());
    this.isLoggedIn$ = this._authState$.asObservable();
  }
  // ── Login ────────────────────────────────────────────────────────
  login(email, password) {
    return this.apiService.post("Auth/login", { email, password }).pipe(tap((response) => {
      if (response?.token) {
        localStorage.setItem(this.TOKEN_KEY, response.token);
        const userId = response.userId ?? response.user?.id;
        if (userId)
          localStorage.setItem(this.USER_ID_KEY, String(userId));
        const userType = response.userType ?? response.user?.userType ?? response.userTypeId;
        if (userType != null) {
          localStorage.setItem(this.USER_TYPE_KEY, String(userType));
        }
        const companyId = response.companyId ?? response.user?.companyId;
        if (companyId != null) {
          localStorage.setItem("companyId", String(companyId));
        }
        this.authz.refreshPermissions();
        this._authState$.next(true);
      } else {
        throw new Error(response?.message ?? "Login failed");
      }
    }));
  }
  /**
   * POST /api/Admin/login — Super Admin only.
   * Separate endpoint from Auth/login; same token shape.
   * Stores the token identically so all downstream services work unchanged.
   */
  adminLogin(email, password) {
    return this.apiService.post("Admin/login", { email, password }).pipe(tap((response) => {
      if (response?.token) {
        localStorage.setItem(this.TOKEN_KEY, response.token);
        const userId = response.userId ?? response.user?.id;
        if (userId)
          localStorage.setItem(this.USER_ID_KEY, String(userId));
        const userType = response.userType ?? response.user?.userType ?? response.userTypeId;
        if (userType != null)
          localStorage.setItem(this.USER_TYPE_KEY, String(userType));
        const companyId = response.companyId ?? response.user?.companyId;
        if (companyId != null)
          localStorage.setItem("companyId", String(companyId));
        this.authz.refreshPermissions();
        this._authState$.next(true);
      } else {
        throw new Error(response?.message ?? "Login failed");
      }
    }));
  }
  // ── Register ─────────────────────────────────────────────────────
  register(data) {
    return this.apiService.postForm("Auth/register", data);
  }
  // ── Forget Password ──────────────────────────────────────────────
  forgetPassword(email) {
    return this.apiService.get("Auth/forgetPasswordMail", { email });
  }
  // ── Verify OTP ───────────────────────────────────────────────────
  verifyOTP(data) {
    return this.apiService.post("Auth/VerifyOTP", data);
  }
  // ── Change Password ──────────────────────────────────────────────
  changePassword(data) {
    return this.apiService.post("Auth/forgetPassword", data);
  }
  // ── Get Current User Profile (API call) ─────────────────────────
  getUserProfile() {
    return this.apiService.get("User/Get");
  }
  /**
   * Returns user info decoded from the local JWT — no API call needed.
   * Use getUserProfile() when you need fresh server-side data.
   */
  getCurrentUser() {
    return {
      userId: this.tokenService.getUserId(),
      email: this.tokenService.getEmail(),
      role: this.tokenService.getUserRole(),
      companyId: this.tokenService.getCompanyId()
    };
  }
  // ── Is Logged In ─────────────────────────────────────────────────
  isLoggedIn() {
    return this._checkLoggedIn();
  }
  _checkLoggedIn() {
    return !!localStorage.getItem(this.TOKEN_KEY) && !this.tokenService.isTokenExpired();
  }
  // ── Get Token ────────────────────────────────────────────────────
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  // ── Get User Type (1=Employee, 2=Contractor, 3=Business) ────────
  getUserTypeId() {
    const value = localStorage.getItem(this.USER_TYPE_KEY);
    return value !== null ? Number(value) : null;
  }
  // ── Logout ───────────────────────────────────────────────────────
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_ID_KEY);
    localStorage.removeItem(this.USER_TYPE_KEY);
    localStorage.removeItem("companyId");
    this.authz.clear();
    this._authState$.next(false);
    this.router.navigate(["/login"]);
  }
  // ── Lookup APIs ──────────────────────────────────────────────────
  getJobTitles() {
    return this.apiService.get("Lookup/GetAllJobTitles");
  }
  getQualifications() {
    return this.apiService.get("Lookup/GetAllQualifications");
  }
  getUniversities() {
    return this.apiService.get("Lookup/GetAllUniversities");
  }
  getCountries() {
    return this.apiService.get("Lookup/GetAllCountries");
  }
  getIndustries() {
    return this.apiService.get("Lookup/GetAllIndustries");
  }
  getCities(countryId) {
    return this.apiService.get("Lookup/GetCityByCountry", { CountryId: countryId });
  }
};
_AuthService.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthService)();
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  FeatureKey,
  isAppFeature,
  AuthorizationService,
  AuthService
};
//# sourceMappingURL=chunk-FLGCKBXQ.js.map
