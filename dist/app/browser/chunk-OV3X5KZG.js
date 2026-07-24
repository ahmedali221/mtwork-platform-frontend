import {
  ApiService
} from "./chunk-RDBMT5X2.js";
import {
  Injectable,
  catchError,
  inject,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-MQLQGMUZ.js";

// src/services/company.service.ts
var _CompanyService = class _CompanyService {
  constructor() {
    this.apiService = inject(ApiService);
  }
  /** GET /api/Company/GetAll — SuperAdmin only */
  getAll() {
    return this.apiService.get("Company/GetAll").pipe(catchError((err) => throwError(() => err)));
  }
  /** GET /api/Company/Get — current user's company */
  get() {
    return this.apiService.get("Company/Get").pipe(catchError((err) => throwError(() => err)));
  }
  /** GET /api/Company/GetById?companyId={id} */
  getById(companyId) {
    return this.apiService.get("Company/GetById", { companyId }).pipe(catchError((err) => throwError(() => err)));
  }
  /** POST /api/Company/Create */
  create(dto) {
    return this.apiService.post("Company/Create", dto).pipe(catchError((err) => throwError(() => err)));
  }
  /** POST /api/Company/Update */
  update(dto) {
    return this.apiService.post("Company/Update", dto).pipe(catchError((err) => throwError(() => err)));
  }
  /** DELETE /api/Company/Delete?id={id} — SuperAdmin only */
  delete(id) {
    return this.apiService.delete(`Company/Delete?id=${id}`).pipe(catchError((err) => throwError(() => err)));
  }
  /** DELETE /api/Company/Suspend?id={id} — SuperAdmin only */
  suspend(id) {
    return this.apiService.delete(`Company/Suspend?id=${id}`).pipe(catchError((err) => throwError(() => err)));
  }
};
_CompanyService.\u0275fac = function CompanyService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CompanyService)();
};
_CompanyService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompanyService, factory: _CompanyService.\u0275fac, providedIn: "root" });
var CompanyService = _CompanyService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CompanyService
};
//# sourceMappingURL=chunk-OV3X5KZG.js.map
