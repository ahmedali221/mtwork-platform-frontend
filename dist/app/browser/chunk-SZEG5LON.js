import {
  ApiService
} from "./chunk-RDBMT5X2.js";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-MQLQGMUZ.js";

// src/services/salary-service.ts
var _SalaryService = class _SalaryService {
  constructor() {
    this.api = inject(ApiService);
  }
  /** POST /Salary/PaySalary */
  paySalary(payload) {
    return this.api.post("Salary/PaySalary", payload);
  }
  /** GET /Salary/GetEmployeeSalary?employeeId= — employeeId is a string GUID */
  getEmployeeSalary(employeeId) {
    return this.api.get("Salary/GetEmployeeSalary", { employeeId });
  }
  /** GET /Salary/GetCompanyBalance?companyId= */
  getCompanyBalance(companyId) {
    return this.api.get("Salary/GetCompanyBalance", { companyId });
  }
  /** PUT /Salary/UpdateCompanyBalance */
  updateCompanyBalance(payload) {
    return this.api.put("Salary/UpdateCompanyBalance", payload);
  }
  /** GET /Salary/GetEmployeeSalaryHistory?employeeId= — employeeId is a string GUID */
  getEmployeeSalaryHistory(employeeId) {
    return this.api.get("Salary/GetEmployeeSalaryHistory", { employeeId }).pipe(map((res) => Array.isArray(res) ? res : []));
  }
  /** GET /Salary/GetCompanySalaryHistory?companyId= */
  getCompanySalaryHistory(companyId) {
    return this.api.get("Salary/GetCompanySalaryHistory", { companyId }).pipe(map((res) => Array.isArray(res) ? res : []));
  }
  /** GET /Salary/GetCompanyPaymentHistory?companyId= */
  getCompanyPaymentHistory(companyId) {
    return this.api.get("Salary/GetCompanyPaymentHistory", { companyId }).pipe(map((res) => Array.isArray(res) ? res : []));
  }
  /** GET /Salary/IsPaymentPaid?contractId=&paymentType= */
  isPaymentPaid(contractId, paymentType) {
    return this.api.get("Salary/IsPaymentPaid", { contractId, paymentType });
  }
};
_SalaryService.\u0275fac = function SalaryService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SalaryService)();
};
_SalaryService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SalaryService, factory: _SalaryService.\u0275fac, providedIn: "root" });
var SalaryService = _SalaryService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalaryService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  SalaryService
};
//# sourceMappingURL=chunk-SZEG5LON.js.map
