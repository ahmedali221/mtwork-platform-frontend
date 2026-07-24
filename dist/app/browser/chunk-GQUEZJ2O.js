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

// src/services/attendance.ts
var _AttendanceService = class _AttendanceService {
  constructor() {
    this.apiService = inject(ApiService);
  }
  /** GET /Attendance/GetAll?userId=X — response: { total, result } */
  getEmployeeAttendance(employeeId) {
    return this.apiService.get("Attendance/GetAll", { userId: employeeId }).pipe(map((response) => response?.result ?? []));
  }
  /** GET /Attendance/GetAll — response: { total, result } */
  getAllEmployeesAttendance() {
    return this.apiService.get("Attendance/GetAll").pipe(map((response) => response?.result ?? []));
  }
  /** GET /Attendance/Get?AttendanceId=X */
  getAttendanceById(attendanceId) {
    return this.apiService.get("Attendance/Get", { AttendanceId: attendanceId });
  }
  /** POST /Attendance/Create */
  createAttendance(payload) {
    return this.apiService.post("Attendance/Create", payload);
  }
  /** POST /Attendance/Update */
  updateAttendance(payload) {
    return this.apiService.post("Attendance/Update", payload);
  }
  /** DELETE /Attendance/Delete?id=X */
  deleteAttendance(id) {
    return this.apiService.delete(`Attendance/Delete?id=${id}`);
  }
};
_AttendanceService.\u0275fac = function AttendanceService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AttendanceService)();
};
_AttendanceService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AttendanceService, factory: _AttendanceService.\u0275fac, providedIn: "root" });
var AttendanceService = _AttendanceService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AttendanceService
};
//# sourceMappingURL=chunk-GQUEZJ2O.js.map
