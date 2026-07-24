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

// src/services/teams.ts
var _TeamsService = class _TeamsService {
  constructor() {
    this.apiService = inject(ApiService);
  }
  /**
   * Get all teams
   * Backend: GET Team/GetAll - returns { totalRows, item: Team[] }
   */
  getTeams(params) {
    return this.apiService.get("Team/GetAll", params).pipe(map((response) => {
      let raw = [];
      if (Array.isArray(response))
        raw = response;
      else if (Array.isArray(response?.item))
        raw = response.item;
      else if (Array.isArray(response?.result))
        raw = response.result;
      else if (Array.isArray(response?.data))
        raw = response.data;
      return raw.map((t) => this.normalizeTeam(t));
    }), catchError(() => of([])));
  }
  /**
   * Normalise a raw team payload from the backend.
   * Backend may return members under teamUsers / users / teamMembers,
   * and the name under nameEn / nameAr / teamName / name.
   * This guarantees the shape the UI expects so the template never crashes.
   */
  normalizeTeam(t) {
    const rawMembers = (Array.isArray(t?.members) ? t.members : null) || (Array.isArray(t?.teamUsers) ? t.teamUsers : null) || (Array.isArray(t?.users) ? t.users : null) || (Array.isArray(t?.teamMembers) ? t.teamMembers : null) || [];
    let members;
    if (rawMembers.length > 0) {
      members = rawMembers.map((u) => {
        const fullName = `${u?.firstName || ""} ${u?.lastName || ""}`.trim();
        return {
          id: u?.assignedUserId || u?.userId || u?.id || "",
          name: u?.assignedUserName || fullName || u?.fullName || u?.displayName || u?.userName || u?.name || u?.assignedUserEmail || "",
          email: u?.assignedUserEmail || u?.email || "",
          role: u?.jobTitle || u?.role || u?.userType || "",
          teamId: String(u?.teamId || t?.id || ""),
          avatar: u?.profileImage || u?.avatarUrl || u?.avatar || "assets/images/Avater.png",
          countryFlag: u?.countryFlag || "",
          designation: u?.jobTitle || u?.designation || u?.title || ""
        };
      });
    } else if (typeof t?.teamUserCount === "number" && t.teamUserCount > 0) {
      members = Array.from({ length: t.teamUserCount }, (_, i) => ({
        id: `stub-${t.id}-${i}`,
        name: "",
        email: "",
        role: "",
        teamId: String(t?.id || ""),
        avatar: "assets/images/Avater.png",
        countryFlag: "",
        designation: ""
      }));
    } else {
      members = [];
    }
    return __spreadProps(__spreadValues({}, t), {
      id: t?.id ?? "",
      name: t?.name || t?.nameEn || t?.nameAr || t?.teamName || "",
      description: t?.description || "",
      members,
      createdAt: t?.createdAt ? new Date(t.createdAt) : /* @__PURE__ */ new Date()
    });
  }
  /**
   * Get a single team by ID
   * Backend: GET Team/Get?TeamId=X
   */
  getTeamById(teamId) {
    return this.apiService.get("Team/Get", { TeamId: teamId }).pipe(map((response) => {
      const raw = response?.data ?? response?.item ?? response?.result ?? response;
      return this.normalizeTeam(raw);
    }));
  }
  /**
   * Create a new team
   * Backend: POST Team/Create
   */
  createTeam(team) {
    return this.apiService.post("Team/Create", team);
  }
  /**
   * Update an existing team
   * Backend: POST Team/Update
   */
  updateTeam(team) {
    return this.apiService.post("Team/Update", team);
  }
  /**
   * Delete a team
   * Backend: DELETE Team/Delete?id=X
   */
  deleteTeam(id) {
    return this.apiService.delete(`Team/Delete?id=${id}`);
  }
  /**
   * Get all company employees (as team members)
   * Backend: GET User/GetAllCompanyEmployees
   */
  getAllTeamMembers() {
    return this.apiService.get("User/GetAllCompanyEmployees").pipe(map((response) => {
      const users = Array.isArray(response) ? response : response?.item || response?.result || response?.data || [];
      return users.map((u) => ({
        id: u.id || u.userId,
        name: `${u.firstName || ""} ${u.lastName || ""}`.trim() || u.userName,
        email: u.email,
        role: u.jobTitle || u.userType || "",
        teamId: u.teamId || "",
        avatar: u.profileImage || "assets/images/Avater.png",
        countryFlag: "",
        designation: u.jobTitle || ""
      }));
    }), catchError(() => of([])));
  }
  /**
   * Get members of a specific team
   */
  getTeamMembersByTeamId(teamId) {
    return this.getTeamById(teamId).pipe(map((team) => team?.teamUsers || team?.members || []));
  }
  /**
   * Invite a member by email
   */
  inviteMember(email) {
    return this.apiService.post("Auth/register", { email }).pipe(map(() => ({ success: true, email })), catchError(() => of({ success: false, email })));
  }
};
_TeamsService.\u0275fac = function TeamsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TeamsService)();
};
_TeamsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeamsService, factory: _TeamsService.\u0275fac, providedIn: "root" });
var TeamsService = _TeamsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  TeamsService
};
//# sourceMappingURL=chunk-6LK6CDX3.js.map
