import {
  ContractStatus,
  ContractType
} from "./chunk-5LLUWZOB.js";
import {
  ApiService
} from "./chunk-RDBMT5X2.js";
import {
  Injectable,
  __spreadValues,
  catchError,
  inject,
  map,
  of,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-MQLQGMUZ.js";

// src/services/contract-service.ts
var CONTRACT_TYPE_NAMES = {
  [ContractType.EmployeeContract]: "EmployeeContract",
  [ContractType.FixedPayContract]: "FixedPayContract",
  [ContractType.PerTaskContract]: "PerTaskContract",
  [ContractType.PerProjectContract]: "PerProjectContract"
};
var CONTRACT_STATUS_NAMES = {
  [ContractStatus.Initiated]: "Initiated",
  [ContractStatus.Reviewed]: "Reviewed",
  [ContractStatus.Approved]: "Approved",
  [ContractStatus.Canceled]: "Canceled"
};
var _ContractService = class _ContractService {
  constructor() {
    this.apiService = inject(ApiService);
  }
  // ------------------------------------------------------------------
  // GET /Contract/GetAll  (paginated)
  // Backend returns: { totalRows: number, item: Contract[] }
  // ------------------------------------------------------------------
  getContracts(page = 1, limit = 10, filters = {}) {
    const params = __spreadValues({
      pageNumber: page,
      pageSize: limit
    }, filters);
    Object.keys(params).forEach((key) => {
      if (params[key] === null || params[key] === void 0 || params[key] === "") {
        delete params[key];
      }
    });
    return this.apiService.get("Contract/GetAll", params).pipe(map((res) => {
      const rawItems = res?.item ?? res?.result ?? res?.data ?? [];
      const totalRows = res?.totalRows ?? res?.total ?? rawItems.length ?? 0;
      const items = rawItems.map((raw) => ({
        id: raw.id ?? "",
        workId: raw.jobNumber ?? raw.id ?? "",
        contractTitle: raw.jobTitleName ?? "",
        contractType: CONTRACT_TYPE_NAMES[raw.contractTypeId] ?? "",
        status: CONTRACT_STATUS_NAMES[raw.contractStatusId] ?? "",
        statusId: raw.contractStatusId,
        empoleeOrContractor: {
          name: raw.employeeName ?? "",
          role: raw.jobTitleName ?? "",
          email: raw.employeeEmail ?? "",
          avatar: ""
        },
        country: {
          name: "",
          flag: ""
        },
        manager: {
          name: "",
          role: "",
          avatar: ""
        },
        startDate: raw.startDate ? raw.startDate.split("T")[0] : "",
        endDate: raw.endDate ? raw.endDate.split("T")[0] : "",
        createdTime: raw.startDate ? raw.startDate.split("T")[0] : "",
        totalAmount: raw.salary ?? raw.firstPatchAmount,
        currency: raw.currency ?? "",
        description: raw.jobDescription ?? ""
      }));
      return {
        data: items,
        pagination: {
          currentPage: page,
          itemsPerPage: limit,
          totalItems: totalRows,
          totalPages: Math.ceil(totalRows / limit)
        },
        message: "OK",
        status: "success"
      };
    }), catchError(() => of({
      data: [],
      pagination: { currentPage: page, itemsPerPage: limit, totalItems: 0, totalPages: 0 },
      message: "Failed to load contracts",
      status: "error"
    })));
  }
  // ------------------------------------------------------------------
  // GET /Contract/Get?ContractId=X  (full detail)
  // ------------------------------------------------------------------
  getContractById(contractId) {
    return this.apiService.get("Contract/Get", { ContractId: contractId }).pipe(map((raw) => {
      return {
        id: String(raw.id ?? ""),
        workId: raw.jobNumber ?? raw.id ?? "",
        contractTitle: raw.jobTitleName ?? raw.title ?? "",
        contractType: CONTRACT_TYPE_NAMES[raw.contractTypeId] ?? "",
        status: CONTRACT_STATUS_NAMES[raw.contractStatusId] ?? "",
        statusId: raw.contractStatusId,
        empoleeOrContractor: {
          name: raw.employeeName ?? "",
          role: raw.jobTitleName ?? "",
          email: raw.employeeEmail ?? "",
          phone: raw.employeePhone ?? "",
          avatar: raw.employeeAvatar ?? "",
          linkedin: raw.linkedin ?? "",
          github: raw.github ?? "",
          lastName: raw.employeeLastName ?? "",
          country: raw.employeeCountry ?? "",
          postCode: raw.postCode ?? "",
          taxId: raw.taxId ?? "",
          authorizedFirstName: raw.authorizedFirstName ?? "",
          authorizedLastName: raw.authorizedLastName ?? "",
          authorizedId: raw.authorizedId ?? "",
          city: raw.city ?? "",
          address: raw.address ?? "",
          availabilityStatus: raw.availabilityStatus ?? "Available For Part time"
        },
        employer: {
          entityName: raw.entityName ?? raw.companyName ?? "",
          officialNumber: raw.officialNumber ?? "",
          phone: raw.companyPhone ?? raw.phone ?? "",
          email: raw.companyEmail ?? "",
          address: raw.companyAddress ?? ""
        },
        country: {
          name: raw.countryName ?? "",
          flag: raw.countryFlag ?? ""
        },
        manager: {
          name: raw.managerName ?? "",
          role: raw.managerRole ?? "",
          email: raw.managerEmail ?? "",
          avatar: raw.managerAvatar ?? ""
        },
        startDate: raw.startDate ? raw.startDate.split("T")[0] : "",
        endDate: raw.endDate ? raw.endDate.split("T")[0] : "",
        createdTime: raw.createdDate ? raw.createdDate.split("T")[0] : "",
        // Contracting details
        contractDuration: raw.contractDuration ?? "",
        trialPeriod: raw.trialPeriod ?? "",
        typeOfWork: raw.typeOfWork ?? raw.jobTitleName ?? "",
        vacationDays: raw.vacationDays ?? 0,
        terminateDuringTrial: raw.terminateDuringTrial ?? "",
        terminateContract: raw.terminateContract ?? "",
        noticePeriod: raw.noticePeriod ?? "",
        // Working time
        numberOfWorkingHours: raw.numberOfWorkingHours ?? 0,
        workingDays: raw.workingDays ?? 0,
        workingHours: raw.workingHours ?? 0,
        // Financial
        salary: raw.salary ?? raw.firstPatchAmount ?? 0,
        totalAmount: raw.salary ?? raw.firstPatchAmount ?? 0,
        currency: raw.currency ?? "",
        billingCycle: raw.billingCycle ?? "",
        includeAllowances: raw.includeAllowances ?? false,
        description: raw.jobDescription ?? "",
        attachments: Array.isArray(raw.attachments) ? raw.attachments.map((a) => ({
          name: a.fileName ?? a.name ?? "Attachment",
          url: a.filePath ?? a.url ?? "",
          size: a.fileSize ? `${Math.round(a.fileSize / 1024)}KB` : "",
          uploadedAt: a.uploadedAt ?? ""
        })) : []
      };
    }), catchError(() => of({})));
  }
  // ------------------------------------------------------------------
  // POST /Contract/Create
  // ------------------------------------------------------------------
  saveContract(contract) {
    return this.apiService.post("Contract/Create", contract);
  }
  // ------------------------------------------------------------------
  // POST /Contract/Update
  // ------------------------------------------------------------------
  updateContract(contract) {
    return this.apiService.post("Contract/Update", contract);
  }
  // ------------------------------------------------------------------
  // DELETE /Contract/Delete?id=X
  // ------------------------------------------------------------------
  deleteContract(id) {
    return this.apiService.delete(`Contract/Delete?id=${id}`);
  }
  // ------------------------------------------------------------------
  // POST /Contract/ChangeStatus  →  { contractId, statusId }
  // ------------------------------------------------------------------
  changeStatus(contractId, statusId) {
    const body = { contractId, statusId };
    return this.apiService.post("Contract/ChangeStatus", body);
  }
  // ------------------------------------------------------------------
  // GET /Report/generate-pdf?ContractId=X  →  application/pdf blob
  // ------------------------------------------------------------------
  downloadPdf(contractId) {
    return this.apiService.getBlob("Report/generate-pdf", { ContractId: Number(contractId) });
  }
};
_ContractService.\u0275fac = function ContractService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContractService)();
};
_ContractService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContractService, factory: _ContractService.\u0275fac, providedIn: "root" });
var ContractService = _ContractService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContractService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ContractService
};
//# sourceMappingURL=chunk-LWI6AAJD.js.map
