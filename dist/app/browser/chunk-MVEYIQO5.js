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

// src/services/hr-service.ts
var _HrService = class _HrService {
  constructor() {
    this.api = inject(ApiService);
  }
  // ── HR ──────────────────────────────────────────────────────
  /** GET /HR/GetAll  →  { total, result: HRListDto[] } */
  getHRList() {
    return this.api.get("HR/GetAll").pipe(map((res) => ({
      total: res?.total ?? 0,
      result: res?.result ?? []
    })));
  }
  /**
   * GET /HR/GetByIdHRDetails?contractId=
   * Maps backend field names to the HRDetails interface.
   * Backend returns: vacationDays, spentVacations, restVacations, orderList
   */
  getHRDetails(contractId) {
    return this.api.get("HR/GetByIdHRDetails", { contractId }).pipe(map((raw) => ({
      contractId: raw?.contractId ?? contractId,
      contractTypeId: raw?.contractTypeId,
      contractStatusId: raw?.contractStatusId,
      companyId: raw?.companyId,
      contractTitle: raw?.contractTitle ?? raw?.jobTitleName ?? "",
      employeeId: raw?.userId ?? raw?.employeeId,
      employeeName: raw?.employeeName ?? "",
      jobTitle: raw?.jobTitleName ?? raw?.jobTitle,
      salary: raw?.salary,
      currency: raw?.currency,
      startDate: raw?.startDate,
      endDate: raw?.endDate,
      status: raw?.status,
      avatarUrl: raw?.avatarUrl ?? raw?.profileImagePath,
      // Vacation — exact backend field names
      vacationDays: raw?.vacationDays,
      spentVacations: raw?.spentVacations,
      restVacations: raw?.restVacations,
      // Related lists
      orderList: Array.isArray(raw?.orderList) ? raw.orderList : [],
      teamList: Array.isArray(raw?.teamList) ? raw.teamList : [],
      contractTasks: Array.isArray(raw?.contractTasks) ? raw.contractTasks : [],
      projectStages: Array.isArray(raw?.projectStages) ? raw.projectStages : [],
      invoiceList: Array.isArray(raw?.invoiceList) ? raw.invoiceList : []
    })));
  }
  // ── Leave Requests (OrderRequest) ────────────────────────────
  /**
   * GET /OrderRequest/GetAll
   * Backend returns `{ total, result: OrderRequestDto[] }` (NOT a flat array).
   * Each item has nested `employee`, `orderType`, `leaveType` objects which we
   * flatten into the LeaveRequest shape consumed by the list/dialog.
   */
  getAllLeaveRequests() {
    return this.api.get("OrderRequest/GetAll").pipe(map((res) => {
      const arr = Array.isArray(res) ? res : res?.result ?? [];
      return arr.map(_HrService.mapOrderRequest);
    }));
  }
  /** Alias for getAllLeaveRequests — used in employee dashboard */
  getLeaveRequests() {
    return this.getAllLeaveRequests();
  }
  /** Map backend OrderRequestDto → flat LeaveRequest used by list views. */
  static mapOrderRequest(dto) {
    const employee = dto?.employee ?? null;
    const employeeName = employee?.employeeName ?? [employee?.firstName, employee?.lastName].filter(Boolean).join(" ") ?? "";
    return {
      id: dto?.id,
      employeeId: dto?.requestingEmployeeId ?? employee?.id,
      employeeName,
      leaveTypeId: dto?.leaveTypeId ?? void 0,
      leaveTypeName: dto?.leaveType?.nameEn ?? void 0,
      orderTypeId: dto?.orderTypeId ?? void 0,
      orderTypeName: dto?.orderType?.nameEn ?? void 0,
      startDate: dto?.startDate ?? "",
      endDate: dto?.endDate ?? "",
      orderStatus: dto?.orderStatus,
      createdAt: dto?.createDate,
      // backend field is `createDate`
      contractId: dto?.contractId,
      totalDays: dto?.totalDays != null ? Number(dto.totalDays) : void 0
    };
  }
  /** GET /OrderRequest/Get?id= */
  getLeaveRequest(id) {
    return this.api.get("OrderRequest/Get", { id });
  }
  /** GET /OrderRequest/GetOther?OrderRequestId= — nested detail shape */
  getLeaveRequestDetail(id) {
    return this.api.get("OrderRequest/GetOther", { OrderRequestId: id });
  }
  /** POST /OrderRequest/CreateLeave */
  createLeaveRequest(payload) {
    return this.api.post("OrderRequest/CreateLeave", payload);
  }
  /** POST /OrderRequest/CreateOverTime — accepts OverTimeDto (extends OrderRequestDto) */
  createOverTime(payload) {
    return this.api.post("OrderRequest/CreateOverTime", payload);
  }
  /** POST /OrderRequest/CreateBusinessTrip — accepts BusinessTripDto */
  createBusinessTrip(payload) {
    return this.api.post("OrderRequest/CreateBusinessTrip", payload);
  }
  /** POST /OrderRequest/CreateCourse — accepts OrderRequestDto */
  createCourse(payload) {
    return this.api.post("OrderRequest/CreateCourse", payload);
  }
  /** POST /OrderRequest/CreateServiceCertificate — accepts ServiceCertificateRequestDto */
  createServiceCertificate(payload) {
    return this.api.post("OrderRequest/CreateServiceCertificate", payload);
  }
  /** POST /OrderRequest/CreateOther — accepts OrderRequestDto */
  createOther(payload) {
    return this.api.post("OrderRequest/CreateOther", payload);
  }
  /** POST /OrderRequest/ChangeStatus  — approve / reject */
  changeOrderStatus(payload) {
    return this.api.post("OrderRequest/ChangeStatus", payload);
  }
  /** POST /OrderRequest/Update  — data edits only */
  updateLeaveRequest(payload) {
    return this.api.post("OrderRequest/Update", payload);
  }
  /** DELETE /OrderRequest/Delete?id= */
  deleteLeaveRequest(id) {
    return this.api.delete(`OrderRequest/Delete?id=${id}`);
  }
};
_HrService.\u0275fac = function HrService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HrService)();
};
_HrService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HrService, factory: _HrService.\u0275fac, providedIn: "root" });
var HrService = _HrService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  HrService
};
//# sourceMappingURL=chunk-MVEYIQO5.js.map
