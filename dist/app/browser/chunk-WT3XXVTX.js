import {
  ApiService
} from "./chunk-RDBMT5X2.js";
import {
  BehaviorSubject,
  Injectable,
  Observable,
  __spreadValues,
  catchError,
  inject,
  map,
  of,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-MQLQGMUZ.js";

// src/services/project-service.ts
function mapBackendProject(raw) {
  const lang = localStorage.getItem("lang") || "en";
  return {
    id: String(raw.id),
    title: lang === "ar" ? raw.nameAr || raw.nameEn || "" : raw.nameEn || raw.nameAr || "",
    description: raw.desc || "",
    status: "todo",
    createdAt: "",
    progress: raw.progressPercentage ?? 0,
    // preserve originals for edit mode
    _nameAr: raw.nameAr,
    _nameEn: raw.nameEn,
    _projectTeams: raw.projectTeams ?? []
  };
}
var _ProjectService = class _ProjectService {
  constructor() {
    this.apiService = inject(ApiService);
    this.projectsSubject = new BehaviorSubject([]);
    this.projects$ = this.projectsSubject.asObservable();
  }
  /** ================================
   *  PROJECT CRUD OPERATIONS
   *  ================================ */
  /**
   * Get all projects
   * Backend: GET /api/Project/GetAll → { totalRows, item: BackendProjectResponse[] }
   */
  getProjects(params) {
    return this.apiService.get("Project/GetAll", params).pipe(map((response) => {
      let raw = [];
      if (Array.isArray(response))
        raw = response;
      else if (Array.isArray(response?.item))
        raw = response.item;
      else if (Array.isArray(response?.result))
        raw = response.result;
      else if (Array.isArray(response?.data))
        raw = response.data;
      return raw.map(mapBackendProject);
    }), tap((projects) => this.projectsSubject.next(projects)), catchError(() => of([])));
  }
  /**
   * Get project by ID
   * Backend: GET /api/Project/Get?ProjectId=X
   */
  getProjectById(id) {
    return this.apiService.get("Project/Get", { ProjectId: id }).pipe(map((raw) => mapBackendProject(raw)), catchError((err) => {
      throw err;
    }));
  }
  /**
   * Create a new project
   * Backend: POST /api/Project/Create
   * Payload MUST use nameAr / nameEn / desc / createUser / progressPercentage / projectTeamIds
   */
  createProject(dto) {
    return this.apiService.post("Project/Create", dto).pipe(map((raw) => mapBackendProject(raw)), tap((created) => {
      const current = this.projectsSubject.value;
      this.projectsSubject.next([...current, created]);
    }));
  }
  // NOTE: createProjectForm / updateProjectForm removed — backend uses JSON, not multipart.
  /**
   * Update a project
   * Backend: POST /api/Project/Update
   * Payload MUST include id (integer) + same fields as Create
   */
  updateProject(id, dto) {
    const payload = __spreadValues({ id: Number(id) }, dto);
    return this.apiService.post("Project/Update", payload).pipe(map((raw) => mapBackendProject(raw)), tap((updated) => {
      const current = this.projectsSubject.value;
      const index = current.findIndex((p) => p.id === id);
      if (index !== -1) {
        current[index] = updated;
        this.projectsSubject.next([...current]);
      }
    }));
  }
  updateProjectStatus(id, status) {
    return this.updateProject(id, { status });
  }
  /**
   * Delete a project
   * Backend: DELETE Project/Delete?id=X
   */
  deleteProject(id) {
    return this.apiService.delete(`Project/Delete?id=${id}`).pipe(tap(() => {
      const current = this.projectsSubject.value;
      this.projectsSubject.next(current.filter((p) => p.id !== id.toString()));
    }));
  }
  deleteProjects(ids) {
    const deleteObs = ids.map((id) => this.deleteProject(id));
    return new Observable((observer) => {
      Promise.all(deleteObs.map((o) => o.toPromise())).then(() => {
        observer.next();
        observer.complete();
      }).catch((err) => observer.error(err));
    });
  }
  /**
   * Maps a raw backend task object to the frontend Task model.
   * Swagger response fields: id, title, description, priority (int),
   * statusId (int), projectId, assignedUserId, assignedUserName, dueDate, createUser
   */
  mapBackendTask(raw) {
    const statusRaw = raw.statusId ?? raw.status ?? 1;
    const priorityRaw = raw.priority ?? raw.priorityId ?? 2;
    const status = typeof statusRaw === "number" ? _ProjectService.TASK_STATUS_STR[statusRaw] ?? "todo" : statusRaw || "todo";
    const priority = typeof priorityRaw === "number" ? _ProjectService.TASK_PRIORITY_STR[priorityRaw] ?? "medium" : priorityRaw || "medium";
    const sanitiseDate = (d) => {
      if (!d)
        return void 0;
      const s = String(d);
      if (s.startsWith("0001-") || s.startsWith("1/1/0001") || s === "")
        return void 0;
      return s;
    };
    return {
      id: String(raw.id ?? ""),
      projectId: String(raw.projectId ?? ""),
      title: raw.title ?? raw.summary ?? raw.name ?? "(no title)",
      summary: raw.title ?? raw.summary ?? "",
      description: raw.description ?? "",
      status,
      priority,
      assigneeId: raw.assignedUserId ? String(raw.assignedUserId) : void 0,
      reporterId: raw.reporterId ? String(raw.reporterId) : void 0,
      dueDate: sanitiseDate(raw.dueDate),
      createdAt: sanitiseDate(raw.createDate ?? raw.createdAt) ?? "",
      updatedAt: raw.updateDate ?? raw.updatedAt ?? void 0
    };
  }
  /**
   * `assignedUserId` scopes results to a single user's own tasks — used for
   * the Employee role, which should only see tasks assigned to them
   * (swagger: UserTask/GetAll supports `AssignedUserId`).
   */
  getTasksByProject(projectId, assignedUserId) {
    const params = { ProjectId: projectId };
    if (assignedUserId)
      params["AssignedUserId"] = assignedUserId;
    return this.apiService.get("UserTask/GetAll", params).pipe(map((response) => {
      let raw = [];
      if (Array.isArray(response))
        raw = response;
      else if (Array.isArray(response?.item))
        raw = response.item;
      else if (Array.isArray(response?.data))
        raw = response.data;
      else if (Array.isArray(response?.result))
        raw = response.result;
      return raw.map((t) => this.mapBackendTask(t));
    }), catchError(() => of([])));
  }
  /**
   * Create a task.
   * Swagger schema: { id:0, title, description, priority(int), projectId(int),
   *   statusId(int), assignedUserId, dueDate(ISO), createUser,
   *   taskAttachments:[], taskHistories:[] }
   */
  createTask(projectId, dto) {
    const titleVal = (dto.title || dto.summary || dto.name || "").trim();
    const statusIdVal = _ProjectService.TASK_STATUS_ID[dto.status] ?? 1;
    const priorityVal = _ProjectService.TASK_PRIORITY_ID[dto.priority] ?? 2;
    const projNum = parseInt(projectId, 10);
    const createUser = (localStorage.getItem("userId") ?? localStorage.getItem("userName") ?? localStorage.getItem("email") ?? "").trim();
    const assignedUserId = dto.assigneeId && String(dto.assigneeId).trim() ? String(dto.assigneeId).trim() : createUser;
    const payload = {
      id: 0,
      readOnly: false,
      title: titleVal,
      description: dto.description || "",
      // send empty string, not null
      priority: priorityVal,
      projectId: isNaN(projNum) ? 0 : projNum,
      statusId: statusIdVal,
      assignedUserId,
      assignedUserName: "",
      profileImage: "",
      createUser,
      taskAttachments: [],
      taskHistories: []
    };
    if (dto.dueDate && String(dto.dueDate).trim()) {
      try {
        payload.dueDate = new Date(dto.dueDate).toISOString();
      } catch {
      }
    }
    return this.apiService.post("UserTask/Create", payload).pipe(map((raw) => this.mapBackendTask(raw?.data ?? raw ?? {})), catchError((err) => {
      throw err;
    }));
  }
  /**
   * Update a task.
   * Backend schema (UserTask/Update — same shape as Create):
   *   { id(int), title, description, priority(int), projectId(int),
   *     statusId(int), assignedUserId, dueDate(ISO|null), createUser,
   *     taskAttachments:[], taskHistories:[] }
   */
  updateTask(taskId, dto) {
    const idNum = parseInt(taskId, 10);
    const projNum = parseInt(String(dto.projectId ?? "0"), 10);
    const createUser = (localStorage.getItem("userId") ?? localStorage.getItem("userName") ?? localStorage.getItem("email") ?? "").trim();
    const rawAssignee = dto.assigneeId ? String(dto.assigneeId).trim() : "";
    const assignedUserId = rawAssignee || createUser || "";
    const statusId = _ProjectService.TASK_STATUS_ID[dto.status] ?? 1;
    const priority = _ProjectService.TASK_PRIORITY_ID[dto.priority] ?? 2;
    const payload = {
      id: isNaN(idNum) ? 0 : idNum,
      readOnly: false,
      title: (dto.title || dto.summary || dto.name || "").trim(),
      description: dto.description ?? "",
      priority,
      projectId: isNaN(projNum) ? 0 : projNum,
      statusId,
      assignedUserId,
      assignedUserName: "",
      profileImage: "",
      createUser,
      taskAttachments: [],
      taskHistories: []
    };
    if (dto.dueDate) {
      const dateStr = String(dto.dueDate).trim();
      if (dateStr && !dateStr.startsWith("0001-") && !dateStr.startsWith("1/1/0001")) {
        payload.dueDate = /[Zz]|[+-]\d{2}:\d{2}$/.test(dateStr) ? dateStr : dateStr + "Z";
      }
    }
    return this.apiService.post("UserTask/Update", payload).pipe(map((raw) => this.mapBackendTask(raw?.data ?? raw ?? __spreadValues({}, payload))), catchError((err) => {
      throw err;
    }));
  }
  /** Change task status via dedicated ChangeStatus endpoint: { taskId, statusId } */
  changeTaskStatus(task, newStatus) {
    const taskId = parseInt(task.id, 10);
    const statusId = _ProjectService.TASK_STATUS_ID[newStatus] ?? 1;
    return this.apiService.post("UserTask/ChangeStatus", { taskId, statusId }).pipe(map(() => void 0), catchError((err) => {
      console.error("[UserTask/ChangeStatus] error:", err?.error ?? err);
      throw err;
    }));
  }
  deleteTask(taskId) {
    return this.apiService.delete(`UserTask/Delete?id=${taskId}`);
  }
  /** ================================
   *  PROJECT CATEGORIES
   *  ================================ */
  getAllCategories() {
    return this.apiService.get("Lookup/GetAllProjectTypes").pipe(map((response) => response?.item || response || []), catchError(() => of([])));
  }
  getCategoryById(id) {
    return this.apiService.get("Lookup/GetAllProjectTypes", { id });
  }
  /** ================================
   *  FILTERING & SORTING (client-side)
   *  ================================ */
  searchProjects(query) {
    return this.projects$.pipe(map((projects) => projects.filter((p) => p.title?.toLowerCase().includes(query.toLowerCase()) || p.description?.toLowerCase().includes(query.toLowerCase()))));
  }
  sortProjects(projects, field, direction) {
    return [...projects].sort((a, b) => {
      const valA = a[field];
      const valB = b[field];
      if (typeof valA === "string" && typeof valB === "string") {
        const cmp = valA.localeCompare(valB);
        return direction === "asc" ? cmp : -cmp;
      }
      if (field === "dueDate" || field === "createdAt" || field === "updatedAt") {
        const cmp = new Date(a[field] || 0).getTime() - new Date(b[field] || 0).getTime();
        return direction === "asc" ? cmp : -cmp;
      }
      return 0;
    });
  }
};
_ProjectService.TASK_STATUS_ID = {
  "todo": 1,
  "pending": 1,
  "in-progress": 2,
  "on-hold": 3,
  "done": 4,
  "completed": 4,
  "cancelled": 4
};
_ProjectService.TASK_STATUS_STR = {
  1: "todo",
  2: "in-progress",
  3: "on-hold",
  4: "done"
};
_ProjectService.TASK_PRIORITY_ID = {
  "low": 1,
  "medium": 2,
  "high": 3,
  "urgent": 4
};
_ProjectService.TASK_PRIORITY_STR = {
  1: "low",
  2: "medium",
  3: "high",
  4: "urgent"
};
_ProjectService.\u0275fac = function ProjectService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProjectService)();
};
_ProjectService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectService, factory: _ProjectService.\u0275fac, providedIn: "root" });
var ProjectService = _ProjectService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ProjectService
};
//# sourceMappingURL=chunk-WT3XXVTX.js.map
