import {
  ApiService
} from "./chunk-RDBMT5X2.js";
import {
  Injectable,
  catchError,
  inject,
  map,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-MQLQGMUZ.js";

// src/services/user.service.ts
var _UserService = class _UserService {
  constructor() {
    this.apiService = inject(ApiService);
  }
  /**
   * POST /api/User/GetAll — pagination in body (SuperAdmin)
   * API doc §1.11: method is POST, body contains pagination params.
   */
  getAll(params = {}) {
    return this.apiService.post("User/GetAll", params).pipe(map((res) => Array.isArray(res) ? res : res?.result ?? res?.data ?? res?.item ?? []), catchError((err) => throwError(() => err)));
  }
  /**
   * GET /api/User/GetById?userId={id}
   * API doc §1.11: endpoint is GetById with param userId.
   */
  getById(id) {
    return this.apiService.get("User/GetById", { userId: id }).pipe(catchError((err) => throwError(() => err)));
  }
  /**
   * GET /api/User/GetEmployeeById?userId={id}
   * Returns extended employee info (includes contract/company data).
   * Response shape confirmed against swagger's `EmployeeInfoDto` 2026-07-24.
   */
  getEmployeeById(id) {
    return this.apiService.get("User/GetEmployeeById", { userId: id }).pipe(catchError((err) => throwError(() => err)));
  }
  /**
   * GET /api/User/GetByEmail?userId={email}
   * Note: backend param name is userId despite being an email lookup.
   */
  getByEmail(email) {
    return this.apiService.get("User/GetByEmail", { userId: email }).pipe(catchError((err) => throwError(() => err)));
  }
  /** GET /api/User/Get — returns the currently logged-in user's profile (no params). */
  getMyProfile() {
    return this.apiService.get("User/Get").pipe(catchError((err) => throwError(() => err)));
  }
  /** POST /api/User/ResetPassword — change own password while authenticated. */
  resetPassword(payload) {
    return this.apiService.post("User/ResetPassword", payload).pipe(catchError((err) => throwError(() => err)));
  }
  /**
   * POST /api/User/Create — multipart/form-data
   * Use FormData because the endpoint includes file uploads (CV, passport, etc.)
   */
  create(formData) {
    return this.apiService.postForm("User/Create", formData).pipe(catchError((err) => throwError(() => err)));
  }
  /** POST /api/User/Update */
  update(data) {
    return this.apiService.post("User/Update", data).pipe(catchError((err) => throwError(() => err)));
  }
  /**
   * DELETE /api/User/Delete?id={id} — SuperAdmin only
   */
  delete(id) {
    return this.apiService.delete(`User/Delete?id=${id}`).pipe(catchError((err) => throwError(() => err)));
  }
  /**
   * DELETE /api/User/Suspend?id={id} — SuperAdmin only
   * API doc §1.11: method is DELETE, not POST. Endpoint is Suspend, not StopUser.
   */
  suspend(id) {
    return this.apiService.delete(`User/Suspend?id=${id}`).pipe(catchError((err) => throwError(() => err)));
  }
  /**
   * GET /api/User/GetAllCompanyEmployees
   * Returns all employees belonging to the current user's company.
   * API doc §1.11: exact endpoint name is GetAllCompanyEmployees.
   * Response shape confirmed against swagger's `UserDto` 2026-07-24.
   */
  getAllCompanyEmployees() {
    return this.apiService.get("User/GetAllCompanyEmployees").pipe(map((res) => Array.isArray(res) ? res : res?.result ?? res?.data ?? []), catchError((err) => throwError(() => err)));
  }
  /**
   * POST /api/User/SetUpJobInterview — schedule a job interview for a user.
   */
  setUpJobInterview(payload) {
    return this.apiService.post("User/SetUpJobInterview", payload).pipe(catchError((err) => throwError(() => err)));
  }
};
_UserService.\u0275fac = function UserService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserService)();
};
_UserService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
var UserService = _UserService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  UserService
};
//# sourceMappingURL=chunk-TUIWGNTU.js.map
