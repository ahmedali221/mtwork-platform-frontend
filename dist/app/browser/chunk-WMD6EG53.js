import {
  ApiService
} from "./chunk-RDBMT5X2.js";
import {
  Injectable,
  catchError,
  inject,
  map,
  of,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-MQLQGMUZ.js";

// src/services/lookup.service.ts
var _LookupService = class _LookupService {
  constructor() {
    this.api = inject(ApiService);
  }
  /**
   * Normalises any backend lookup array shape into LookupItem[].
   * Preserves both nameEn (→ name) and nameAr for bilingual display.
   */
  toItems(res) {
    const arr = Array.isArray(res) ? res : Array.isArray(res?.item) ? res.item : Array.isArray(res?.data) ? res.data : Array.isArray(res?.result) ? res.result : [];
    return arr.map((x) => ({
      id: x.id ?? x.countryId ?? x.universityId ?? x.jobTitleId ?? 0,
      name: x.nameEn ?? x.name ?? x.title ?? "",
      nameAr: x.nameAr ?? void 0
    }));
  }
  /** GET /Lookup/GetAllCountries */
  getCountries() {
    return this.api.get("Lookup/GetAllCountries").pipe(map((r) => this.toItems(r)), catchError(() => of([])));
  }
  /** GET /Lookup/GetAllJobTitles */
  getJobTitles() {
    return this.api.get("Lookup/GetAllJobTitles").pipe(map((r) => this.toItems(r)), catchError(() => of([])));
  }
  /** GET /Lookup/GetAllQualifications */
  getQualifications() {
    return this.api.get("Lookup/GetAllQualifications").pipe(map((r) => this.toItems(r)), catchError(() => of([])));
  }
  /** GET /Lookup/GetAllUniversities */
  getUniversities() {
    return this.api.get("Lookup/GetAllUniversities").pipe(map((r) => this.toItems(r)), catchError(() => of([])));
  }
  /** GET /Lookup/GetAllIndustries */
  getIndustries() {
    return this.api.get("Lookup/GetAllIndustries").pipe(map((r) => this.toItems(r)), catchError(() => of([])));
  }
  /** GET /Lookup/GetCityByCountry?CountryId= */
  getCitiesByCountry(countryId) {
    if (!Number.isFinite(countryId))
      return of([]);
    return this.api.get("Lookup/GetCityByCountry", { CountryId: countryId }).pipe(map((r) => this.toItems(r)), catchError(() => of([])));
  }
  /** GET /Lookup/GetAllProjectTypes */
  getProjectTypes() {
    return this.api.get("Lookup/GetAllProjectTypes").pipe(map((r) => this.toItems(r)), catchError(() => of([])));
  }
  /** GET /Lookup/GetAllLeaveType */
  getLeaveTypes() {
    return this.api.get("Lookup/GetAllLeaveType").pipe(map((r) => this.toItems(r)), catchError(() => of([])));
  }
  /** GET /Lookup/GetAllOrderType */
  getOrderTypes() {
    return this.api.get("Lookup/GetAllOrderType").pipe(map((r) => this.toItems(r)), catchError(() => of([])));
  }
  /**
   * GET /Lookup/GetAllUserTaskStatus
   * API doc §1.15 — used by task management status dropdowns.
   */
  getTaskStatuses() {
    return this.api.get("Lookup/GetAllUserTaskStatus").pipe(map((r) => this.toItems(r)), catchError(() => of([])));
  }
};
_LookupService.\u0275fac = function LookupService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LookupService)();
};
_LookupService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LookupService, factory: _LookupService.\u0275fac, providedIn: "root" });
var LookupService = _LookupService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LookupService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  LookupService
};
//# sourceMappingURL=chunk-WMD6EG53.js.map
