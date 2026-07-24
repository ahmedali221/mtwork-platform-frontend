import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-MQLQGMUZ.js";

// src/services/token.service.ts
var TOKEN_KEY = "MT_token";
var _TokenService = class _TokenService {
  getDecodedToken() {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token)
      return null;
    try {
      const payload = token.split(".")[1];
      const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
      const jsonString = decodeURIComponent(atob(base64).split("").map((c) => "%" + c.charCodeAt(0).toString(16).padStart(2, "0")).join(""));
      return JSON.parse(jsonString);
    } catch {
      return null;
    }
  }
  getUserRole() {
    const payload = this.getDecodedToken();
    if (!payload)
      return null;
    const MSFT_ROLE_CLAIM = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
    const role = payload["role"] ?? payload[MSFT_ROLE_CLAIM];
    if (Array.isArray(role)) {
      if (role.includes("Admin"))
        return "Admin";
      return role[0] ?? null;
    }
    return role ?? null;
  }
  isTokenExpired() {
    const payload = this.getDecodedToken();
    if (!payload || !payload["exp"])
      return true;
    const nowInSeconds = Math.floor(Date.now() / 1e3);
    return payload["exp"] < nowInSeconds;
  }
  /**
   * Returns the user ID from the JWT.
   * ASP.NET Identity may use 'uid', 'nameid', 'sub', or the full
   * ClaimTypes.NameIdentifier URI depending on backend configuration.
   */
  getUserId() {
    const p = this.getDecodedToken();
    if (!p)
      return null;
    return p["uid"] ?? p["nameid"] ?? p["sub"] ?? p["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"] ?? null;
  }
  getCompanyId() {
    return this.getDecodedToken()?.["companyId"] ?? null;
  }
  getEmail() {
    return this.getDecodedToken()?.["email"] ?? null;
  }
  /**
   * Returns the list of backend-issued permission strings from the JWT.
   *
   * Backend reference (CLAUDE.md §9):
   *   `[AppAuthorize(Permissions = "Module.Action")]`
   * The strings (`Contract`, `Contract.Create`, `OrderRequest.Create`, …) are
   * encoded into the token. Claim name is normally `permission` (singular)
   * for ASP.NET Identity, but some backends emit `permissions`. We accept
   * either, and merge if both are present.
   *
   * Handles three shapes per claim:
   *   - array:           ["Contract.Create", "HR"]
   *   - single string:   "Contract.Create"
   *   - csv string:      "Contract.Create,HR"
   *
   * Fail-closed: missing / unparseable claim → empty array → no access.
   */
  getPermissions() {
    const payload = this.getDecodedToken();
    if (!payload)
      return [];
    const collected = [];
    for (const key of ["permission", "permissions"]) {
      const raw = payload[key];
      if (raw == null)
        continue;
      if (Array.isArray(raw)) {
        for (const v of raw) {
          const s = String(v).trim();
          if (s)
            collected.push(s);
        }
      } else if (typeof raw === "string") {
        for (const v of raw.split(",")) {
          const s = v.trim();
          if (s)
            collected.push(s);
        }
      }
    }
    return Array.from(new Set(collected));
  }
};
_TokenService.\u0275fac = function TokenService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TokenService)();
};
_TokenService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TokenService, factory: _TokenService.\u0275fac, providedIn: "root" });
var TokenService = _TokenService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TokenService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  TokenService
};
//# sourceMappingURL=chunk-P46WWH45.js.map
