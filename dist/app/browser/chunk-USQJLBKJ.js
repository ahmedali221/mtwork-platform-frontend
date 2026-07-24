import {
  ApiService
} from "./chunk-RDBMT5X2.js";
import {
  Injectable,
  __spreadProps,
  __spreadValues,
  catchError,
  inject,
  map,
  of,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-MQLQGMUZ.js";

// src/models/meeting.model.ts
var REPEAT_ID_TO_TYPE = {
  0: "None",
  1: "Daily",
  2: "Weekly",
  3: "Monthly"
};
var REPEAT_TYPE_TO_ID = {
  "None": 0,
  "Daily": 1,
  "Weekly": 2,
  "Monthly": 3
};

// src/services/meetings.ts
var _MeetingsService = class _MeetingsService {
  constructor() {
    this.apiService = inject(ApiService);
  }
  /**
   * Map raw API meeting object to our Meeting interface.
   * The backend returns `description`, `repeatId`, `meetingUsers`, `meetingUserIds`
   * but our templates/filters use `meetingDescription`, `repeatType`, `participants`.
   */
  mapMeeting(raw) {
    return __spreadProps(__spreadValues({}, raw), {
      // Compatibility mappings
      meetingDescription: raw.description ?? "",
      repeatType: REPEAT_ID_TO_TYPE[raw.repeatId ?? 0] ?? "None",
      status: raw.status ?? "Scheduled",
      participants: Array.isArray(raw.meetingUsers) ? raw.meetingUsers.map((u) => ({
        id: u.assignedUserId ?? u.id ?? u.userId ?? "",
        name: u.assignedUserName ?? u.name ?? `${u.firstName ?? ""} ${u.lastName ?? ""}`.trim() ?? u.userName ?? "",
        email: u.email ?? "",
        role: u.jobTitle ?? u.role ?? u.designation ?? "",
        avatar: u.profileImage ?? u.avatar ?? "",
        designation: u.jobTitle ?? u.designation ?? ""
      })) : []
    });
  }
  /**
   * Get all meetings
   * Backend: GET Meeting/GetAll
   */
  getMeetings(params) {
    return this.apiService.get("Meeting/GetAll", params).pipe(map((response) => {
      const raw = Array.isArray(response) ? response : response?.data ?? response?.result ?? response?.items ?? response?.item ?? [];
      return raw.map((m) => this.mapMeeting(m));
    }), catchError(() => of([])));
  }
  /**
   * Get meeting by ID
   * Backend: GET Meeting/Get?MeetingId=X
   */
  getMeetingById(meetingId) {
    return this.apiService.get("Meeting/Get", { MeetingId: meetingId }).pipe(map((raw) => this.mapMeeting(raw)));
  }
  /**
   * Create a new meeting
   * Backend: POST Meeting/Create
   */
  createMeeting(payload) {
    return this.apiService.post("Meeting/Create", payload);
  }
  /**
   * Update an existing meeting
   * Backend: POST Meeting/Update
   */
  updateMeeting(payload) {
    return this.apiService.post("Meeting/Update", payload);
  }
  /**
   * Delete a meeting
   * Backend: DELETE Meeting/Delete?id=X
   */
  deleteMeeting(id) {
    return this.apiService.delete(`Meeting/Delete?id=${id}`);
  }
};
_MeetingsService.\u0275fac = function MeetingsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MeetingsService)();
};
_MeetingsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MeetingsService, factory: _MeetingsService.\u0275fac, providedIn: "root" });
var MeetingsService = _MeetingsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  REPEAT_ID_TO_TYPE,
  REPEAT_TYPE_TO_ID,
  MeetingsService
};
//# sourceMappingURL=chunk-USQJLBKJ.js.map
