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

// src/services/withdraw-service.ts
var _WithdrawService = class _WithdrawService {
  constructor() {
    this.api = inject(ApiService);
  }
  /** POST /Withdraw/SubmitRequest — sends EmployeeId, FullName, IBAN, Amount */
  submitRequest(payload) {
    return this.api.post("Withdraw/SubmitRequest", payload);
  }
  /** PUT /Withdraw/ProcessRequest/{requestId} */
  processRequest(requestId, payload) {
    return this.api.put(`Withdraw/ProcessRequest/${requestId}`, payload);
  }
  /**
   * GET /Withdraw/GetEmployeeHistory?employeeId=
   * Backend returns EmployeeWithdrawHistoryDto (object) — surface both
   * `currentBalance` and the mapped history so callers can validate
   * amounts against the available balance.
   */
  getEmployeeHistory(employeeId) {
    return this.api.get("Withdraw/GetEmployeeHistory", { employeeId }).pipe(map((res) => ({
      balance: res?.currentBalance ?? 0,
      entries: (res?.withdrawHistory ?? []).map(_WithdrawService.mapDto)
    })));
  }
  /**
   * GET /Withdraw/GetAdminRequests
   * Backend returns AdminWithdrawRequestsDto (object); flatten Pending + Processed.
   */
  getAdminRequests() {
    return this.api.get("Withdraw/GetAdminRequests").pipe(map((res) => {
      const pending = res?.pendingRequests ?? [];
      const processed = res?.processedRequests ?? [];
      return [...pending, ...processed].map(_WithdrawService.mapDto);
    }));
  }
  /**
   * GET /Withdraw/GetAdminRequests — grouped view.
   * Same endpoint as getAdminRequests(), but preserves the pending vs
   * processed split + counts (consumed by the Admin Withdrawals page).
   */
  getAdminRequestsGrouped() {
    return this.api.get("Withdraw/GetAdminRequests").pipe(map((res) => {
      const pending = (res?.pendingRequests ?? []).map(_WithdrawService.mapDto);
      const processed = (res?.processedRequests ?? []).map(_WithdrawService.mapDto);
      return {
        pending,
        processed,
        totalPendingCount: res?.totalPendingCount ?? pending.length,
        totalProcessedCount: res?.totalProcessedCount ?? processed.length
      };
    }));
  }
  /** GET /Withdraw/GetById?id= */
  getById(id) {
    return this.api.get("Withdraw/GetById", { id }).pipe(map(_WithdrawService.mapDto));
  }
  // ── Mapping helper ───────────────────────────────────────────────
  static mapDto(dto) {
    return {
      id: dto.id,
      requestId: dto.requestId,
      employeeId: dto.employeeId ?? "",
      employeeName: dto.employeeName,
      companyName: dto.companyName,
      fullName: dto.fullName,
      iban: dto.iban,
      amount: dto.amount,
      status: dto.status,
      createdAt: dto.createdAt ?? dto.requestDate ?? "",
      processedAt: dto.processedDate,
      processedBy: dto.processedBy
    };
  }
};
_WithdrawService.\u0275fac = function WithdrawService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WithdrawService)();
};
_WithdrawService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WithdrawService, factory: _WithdrawService.\u0275fac, providedIn: "root" });
var WithdrawService = _WithdrawService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WithdrawService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  WithdrawService
};
//# sourceMappingURL=chunk-VXEZP5JU.js.map
