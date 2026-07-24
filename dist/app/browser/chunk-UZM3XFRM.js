import {
  CdkDrag,
  CdkDragPlaceholder,
  CdkDropList,
  CdkDropListGroup,
  DragDropModule
} from "./chunk-WZL4VOEZ.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-MORGA2YM.js";
import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-RILOBYFO.js";
import {
  ProjectService
} from "./chunk-WT3XXVTX.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-43IMQJR4.js";
import {
  UserRole
} from "./chunk-TXEUWJT3.js";
import "./chunk-PF3YSKFV.js";
import "./chunk-7QGN332D.js";
import "./chunk-AIQ4E4TV.js";
import {
  TokenService
} from "./chunk-P46WWH45.js";
import "./chunk-APK5HPN3.js";
import "./chunk-RDBMT5X2.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-D5YQFVLR.js";
import {
  ActivatedRoute,
  RouterModule
} from "./chunk-LSMZM5UZ.js";
import "./chunk-BHGUJP3X.js";
import "./chunk-ABR2YXBL.js";
import {
  CommonModule,
  DatePipe
} from "./chunk-Z3ORTAM2.js";
import {
  Component,
  HostListener,
  Injectable,
  ViewChild,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-MQLQGMUZ.js";

// src/features/tasks/task-management/task.service.ts
var _TaskService = class _TaskService {
  constructor() {
    this.svc = inject(ProjectService);
  }
  getByProject(projectId, assignedUserId) {
    return this.svc.getTasksByProject(projectId, assignedUserId);
  }
  create(projectId, dto) {
    return this.svc.createTask(projectId, dto);
  }
  update(taskId, dto) {
    return this.svc.updateTask(taskId, dto);
  }
  changeStatus(task, status) {
    return this.svc.changeTaskStatus(task, status);
  }
  delete(taskId) {
    return this.svc.deleteTask(taskId);
  }
};
_TaskService.\u0275fac = function TaskService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TaskService)();
};
_TaskService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TaskService, factory: _TaskService.\u0275fac, providedIn: "root" });
var TaskService = _TaskService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/features/tasks/task-management/task-management-state.service.ts
var KANBAN_COLUMNS_CONFIG = [
  { id: "todo", labelKey: "tasks.status.todo", statuses: ["todo", "pending"], indicatorColor: "#F87748" },
  { id: "inprogress", labelKey: "tasks.status.inprogress", statuses: ["in-progress"], indicatorColor: "#3B82F6" },
  { id: "review", labelKey: "tasks.status.review", statuses: ["on-hold"], indicatorColor: "#F59E0B" },
  { id: "done", labelKey: "tasks.status.done", statuses: ["done", "completed"], indicatorColor: "#22C55E" }
];
var _TaskManagementStateService = class _TaskManagementStateService {
  constructor() {
    this.tasks = signal([], ...ngDevMode ? [{ debugName: "tasks" }] : []);
    this.projectTitle = signal("", ...ngDevMode ? [{ debugName: "projectTitle" }] : []);
    this.projectId = signal("", ...ngDevMode ? [{ debugName: "projectId" }] : []);
    this.activeView = signal("board", ...ngDevMode ? [{ debugName: "activeView" }] : []);
    this.searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
    this.selectedIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "selectedIds" }] : []);
    this.selectedTaskId = signal(null, ...ngDevMode ? [{ debugName: "selectedTaskId" }] : []);
    this.detailPanelOpen = signal(false, ...ngDevMode ? [{ debugName: "detailPanelOpen" }] : []);
    this.createMode = signal(false, ...ngDevMode ? [{ debugName: "createMode" }] : []);
    this.inlineCreateColId = signal(null, ...ngDevMode ? [{ debugName: "inlineCreateColId" }] : []);
    this.activeColumnMenuId = signal(null, ...ngDevMode ? [{ debugName: "activeColumnMenuId" }] : []);
    this.filterMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "filterMenuOpen" }] : []);
    this.sortMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "sortMenuOpen" }] : []);
    this.collapsedGroups = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "collapsedGroups" }] : []);
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
    this.error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
    this.toast = signal(null, ...ngDevMode ? [{ debugName: "toast" }] : []);
    this.filteredTasks = computed(() => {
      const q = this.searchQuery().toLowerCase();
      if (!q)
        return this.tasks();
      return this.tasks().filter((t) => t.title.toLowerCase().includes(q) || (t.summary ?? "").toLowerCase().includes(q));
    }, ...ngDevMode ? [{ debugName: "filteredTasks" }] : []);
    this.kanbanColumns = computed(() => {
      const tasks = this.filteredTasks();
      return KANBAN_COLUMNS_CONFIG.map((col) => __spreadProps(__spreadValues({}, col), {
        tasks: tasks.filter((t) => col.statuses.includes(t.status))
      }));
    }, ...ngDevMode ? [{ debugName: "kanbanColumns" }] : []);
    this.listGroups = computed(() => {
      const tasks = this.filteredTasks();
      return KANBAN_COLUMNS_CONFIG.map((col) => __spreadProps(__spreadValues({}, col), {
        tasks: tasks.filter((t) => col.statuses.includes(t.status))
      }));
    }, ...ngDevMode ? [{ debugName: "listGroups" }] : []);
    this.selectedTask = computed(() => this.selectedTaskId() ? this.tasks().find((t) => t.id === this.selectedTaskId()) ?? null : null, ...ngDevMode ? [{ debugName: "selectedTask" }] : []);
    this.hasSelection = computed(() => this.selectedIds().size > 0, ...ngDevMode ? [{ debugName: "hasSelection" }] : []);
    this.selectionCount = computed(() => this.selectedIds().size, ...ngDevMode ? [{ debugName: "selectionCount" }] : []);
    this.allSelected = computed(() => {
      const ft = this.filteredTasks();
      return ft.length > 0 && ft.every((t) => this.selectedIds().has(t.id));
    }, ...ngDevMode ? [{ debugName: "allSelected" }] : []);
  }
  // ── Mutations ────────────────────────────────────────────────
  setTasks(tasks) {
    this.tasks.set(tasks);
  }
  setProject(id, name) {
    this.projectId.set(id);
    this.projectTitle.set(name);
  }
  setView(v) {
    this.activeView.set(v);
  }
  setSearch(q) {
    this.searchQuery.set(q);
  }
  openDetail(id) {
    this.selectedTaskId.set(id);
    this.createMode.set(false);
    this.detailPanelOpen.set(true);
  }
  openCreatePanel() {
    this.selectedTaskId.set(null);
    this.createMode.set(true);
    this.detailPanelOpen.set(true);
  }
  closeDetail() {
    this.selectedTaskId.set(null);
    this.createMode.set(false);
    this.detailPanelOpen.set(false);
  }
  toggleSelect(id) {
    this.selectedIds.update((s) => {
      const n = new Set(s);
      if (n.has(id))
        n.delete(id);
      else
        n.add(id);
      return n;
    });
  }
  selectAll() {
    this.selectedIds.set(new Set(this.filteredTasks().map((t) => t.id)));
  }
  clearSelection() {
    this.selectedIds.set(/* @__PURE__ */ new Set());
  }
  toggleGroup(id) {
    this.collapsedGroups.update((s) => {
      const n = new Set(s);
      if (n.has(id))
        n.delete(id);
      else
        n.add(id);
      return n;
    });
  }
  closeAllMenus() {
    this.activeColumnMenuId.set(null);
    this.filterMenuOpen.set(false);
    this.sortMenuOpen.set(false);
  }
  patchTask(id, patch) {
    this.tasks.update((list) => list.map((t) => t.id === id ? __spreadValues(__spreadValues({}, t), patch) : t));
  }
  revertTask(id, prev) {
    this.tasks.update((list) => list.map((t) => t.id === id ? prev : t));
  }
  addTask(task) {
    this.tasks.update((list) => [...list, task]);
  }
  removeTask(id) {
    this.tasks.update((list) => list.filter((t) => t.id !== id));
  }
  removeTasks(ids) {
    this.tasks.update((list) => list.filter((t) => !ids.has(t.id)));
  }
  showToast(key, type = "error") {
    this.toast.set({ key, type });
  }
  clearToast() {
    this.toast.set(null);
  }
};
_TaskManagementStateService.\u0275fac = function TaskManagementStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TaskManagementStateService)();
};
_TaskManagementStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TaskManagementStateService, factory: _TaskManagementStateService.\u0275fac });
var TaskManagementStateService = _TaskManagementStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskManagementStateService, [{
    type: Injectable
  }], null, null);
})();

// src/features/tasks/task-management/task-management.ts
var _c0 = ["fileInput"];
var _c1 = ["tableCreateInput"];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
function TaskManagementComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 32);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dismissToast());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(\u0275\u0275interpolate1("tm-toast tm-toast--", ctx_r2.state.toast().type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.state.toast().type === "error" ? "error_outline" : "check_circle_outline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, ctx_r2.state.toast().key));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 8, "common.closeDialog"));
  }
}
function TaskManagementComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 9);
    \u0275\u0275text(1, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.state.projectTitle());
  }
}
function TaskManagementComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_65_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.openCreatePanel();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "add_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "tasks.newTask"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "tasks.newTask"));
  }
}
function TaskManagementComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "mat-spinner", 35);
    \u0275\u0275elementEnd();
  }
}
function TaskManagementComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 36);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_69_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.retry());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, ctx_r2.state.error()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "common.retry"));
  }
}
function TaskManagementComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "img", 37);
    \u0275\u0275elementStart(2, "p", 38);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementStart(5, "span", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 40);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "tasks.emptyProject"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.state.projectTitle());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 6, "tasks.emptyProjectSuffix"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, "tasks.emptyDesc"));
  }
}
function TaskManagementComponent_Conditional_71_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_71_For_2_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const col_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startInlineCreate(col_r8.id));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "tasks.addNew"));
  }
}
function TaskManagementComponent_Conditional_71_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 57);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 58);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_71_For_2_Conditional_16_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const col_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onColumnAction("edit", col_r8));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 58);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_71_For_2_Conditional_16_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const col_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onColumnAction("details", col_r8));
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "info_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 58);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_71_For_2_Conditional_16_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r9);
      const col_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onColumnAction("moveDown", col_r8));
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "arrow_downward");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 58);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_71_For_2_Conditional_16_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r9);
      const col_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onColumnAction("moveUp", col_r8));
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "arrow_upward");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 58);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_71_For_2_Conditional_16_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r9);
      const col_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onColumnAction("copyLink", col_r8));
    });
    \u0275\u0275elementStart(25, "mat-icon");
    \u0275\u0275text(26, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 59);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_71_For_2_Conditional_16_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r9);
      const col_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onColumnAction("delete", col_r8));
    });
    \u0275\u0275elementStart(30, "mat-icon");
    \u0275\u0275text(31, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "tasks.actions.title"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(8, 9, "common.edit"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 11, "tasks.actions.showDetails"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(18, 13, "tasks.actions.moveDown"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(23, 15, "tasks.actions.moveUp"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(28, 17, "tasks.actions.copyLink"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(33, 19, "common.delete"), " ");
  }
}
function TaskManagementComponent_Conditional_71_For_2_For_19_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "mat-icon");
    \u0275\u0275text(2, "open_with");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "tasks.dragHint"));
  }
}
function TaskManagementComponent_Conditional_71_For_2_For_19_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", task_r11.assigneeId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r11.assigneeId.substring(0, 2).toUpperCase(), " ");
  }
}
function TaskManagementComponent_Conditional_71_For_2_For_19_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "mat-icon");
    \u0275\u0275text(2, "person_outline");
    \u0275\u0275elementEnd()();
  }
}
function TaskManagementComponent_Conditional_71_For_2_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_71_For_2_For_19_Template_div_click_0_listener() {
      const task_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openDetail(task_r11.id));
    })("keyup.enter", function TaskManagementComponent_Conditional_71_For_2_For_19_Template_div_keyup_enter_0_listener() {
      const task_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openDetail(task_r11.id));
    });
    \u0275\u0275template(1, TaskManagementComponent_Conditional_71_For_2_For_19_ng_template_1_Template, 6, 3, "ng-template", 61);
    \u0275\u0275elementStart(2, "p", 62);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 63)(5, "span")(6, "mat-icon", 64);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 65)(10, "div", 66);
    \u0275\u0275conditionalCreate(11, TaskManagementComponent_Conditional_71_For_2_For_19_Conditional_11_Template, 2, 2, "div", 67)(12, TaskManagementComponent_Conditional_71_For_2_For_19_Conditional_12_Template, 3, 0, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 69)(14, "span", 70)(15, "mat-icon");
    \u0275\u0275text(16, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "0 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 70)(19, "mat-icon");
    \u0275\u0275text(20, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "0 ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("cdkDragData", task_r11);
    \u0275\u0275attribute("aria-label", task_r11.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r11.title);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("tm-tag tm-tag--prio-", task_r11.priority));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.priorityIcon(task_r11.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.priorityLabel(task_r11.priority), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(task_r11.assigneeId ? 11 : 12);
  }
}
function TaskManagementComponent_Conditional_71_For_2_ForEmpty_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "tasks.colEmpty"));
  }
}
function TaskManagementComponent_Conditional_71_For_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_71_For_2_Conditional_21_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "input", 73, 1);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("input", function TaskManagementComponent_Conditional_71_For_2_Conditional_21_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.inlineTitle.set($event.target.value));
    })("keyup.enter", function TaskManagementComponent_Conditional_71_For_2_Conditional_21_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r12);
      const col_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitInlineCreate(col_r8.statuses[0]));
    })("keyup.escape", function TaskManagementComponent_Conditional_71_For_2_Conditional_21_Template_input_keyup_escape_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.cancelInlineCreate());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 74)(5, "button", 75);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_71_For_2_Conditional_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const col_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitInlineCreate(col_r8.statuses[0]));
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 76);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_71_For_2_Conditional_21_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.cancelInlineCreate());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 5, "tasks.taskNamePlaceholder"))("value", ctx_r2.inlineTitle());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.state.saving() || !ctx_r2.inlineTitle().trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "common.add"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "common.cancel"), " ");
  }
}
function TaskManagementComponent_Conditional_71_For_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_71_For_2_Conditional_22_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const col_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.startInlineCreate(col_r8.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "add_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "tasks.addNew"), " ");
  }
}
function TaskManagementComponent_Conditional_71_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "div", 43);
    \u0275\u0275element(3, "span", 44);
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 46);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 47);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_71_For_2_Template_div_click_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275conditionalCreate(10, TaskManagementComponent_Conditional_71_For_2_Conditional_10_Template, 4, 3, "button", 48);
    \u0275\u0275elementStart(11, "div", 49)(12, "button", 50);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_71_For_2_Template_button_click_12_listener($event) {
      const col_r8 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleColumnMenu(col_r8.id, $event));
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, TaskManagementComponent_Conditional_71_For_2_Conditional_16_Template, 34, 21, "div", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 52);
    \u0275\u0275listener("cdkDropListDropped", function TaskManagementComponent_Conditional_71_For_2_Template_div_cdkDropListDropped_17_listener($event) {
      const col_r8 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDrop($event, col_r8));
    });
    \u0275\u0275repeaterCreate(18, TaskManagementComponent_Conditional_71_For_2_For_19_Template, 22, 9, "div", 53, _forTrack0, false, TaskManagementComponent_Conditional_71_For_2_ForEmpty_20_Template, 3, 3, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, TaskManagementComponent_Conditional_71_For_2_Conditional_21_Template, 11, 11, "div", 55);
    \u0275\u0275conditionalCreate(22, TaskManagementComponent_Conditional_71_For_2_Conditional_22_Template, 5, 3, "button", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", col_r8.indicatorColor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 13, col_r8.labelKey));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(col_r8.tasks.length);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.isEmployee ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 15, "tasks.colActions"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.state.activeColumnMenuId() === col_r8.id ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("id", "drp-" + col_r8.id)("cdkDropListData", col_r8.tasks)("cdkDropListConnectedTo", ctx_r2.colDropIds());
    \u0275\u0275advance();
    \u0275\u0275repeater(col_r8.tasks);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.state.inlineCreateColId() === col_r8.id ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isEmployee ? 22 : -1);
  }
}
function TaskManagementComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275repeaterCreate(1, TaskManagementComponent_Conditional_71_For_2_Template, 23, 17, "div", 41, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.state.kanbanColumns());
  }
}
function TaskManagementComponent_Conditional_72_For_2_Conditional_10_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92)(1, "mat-icon");
    \u0275\u0275text(2, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, task_r17.dueDate, "MMM d"), " ");
  }
}
function TaskManagementComponent_Conditional_72_For_2_Conditional_10_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 93);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("title", task_r17.assigneeId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r17.assigneeId.substring(0, 2).toUpperCase(), " ");
  }
}
function TaskManagementComponent_Conditional_72_For_2_Conditional_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_72_For_2_Conditional_10_For_1_Template_div_click_0_listener() {
      const task_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openDetail(task_r17.id));
    })("keyup.enter", function TaskManagementComponent_Conditional_72_For_2_Conditional_10_For_1_Template_div_keyup_enter_0_listener() {
      const task_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openDetail(task_r17.id));
    });
    \u0275\u0275element(1, "span", 89);
    \u0275\u0275elementStart(2, "span", 90);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 91);
    \u0275\u0275conditionalCreate(5, TaskManagementComponent_Conditional_72_For_2_Conditional_10_For_1_Conditional_5_Template, 5, 4, "span", 92);
    \u0275\u0275conditionalCreate(6, TaskManagementComponent_Conditional_72_For_2_Conditional_10_For_1_Conditional_6_Template, 3, 2, "div", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("tm-list-row--active", ctx_r2.state.selectedTaskId() === task_r17.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r17.title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(task_r17.dueDate ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r17.assigneeId ? 6 : -1);
  }
}
function TaskManagementComponent_Conditional_72_For_2_Conditional_10_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "tasks.colEmpty"));
  }
}
function TaskManagementComponent_Conditional_72_For_2_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_72_For_2_Conditional_10_Conditional_3_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "input", 73);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275listener("input", function TaskManagementComponent_Conditional_72_For_2_Conditional_10_Conditional_3_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.inlineTitle.set($event.target.value));
    })("keyup.enter", function TaskManagementComponent_Conditional_72_For_2_Conditional_10_Conditional_3_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r18);
      const group_r15 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitInlineCreate(group_r15.statuses[0]));
    })("keyup.escape", function TaskManagementComponent_Conditional_72_For_2_Conditional_10_Conditional_3_Template_input_keyup_escape_1_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.cancelInlineCreate());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 74)(4, "button", 75);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_72_For_2_Conditional_10_Conditional_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r18);
      const group_r15 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitInlineCreate(group_r15.statuses[0]));
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 76);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_72_For_2_Conditional_10_Conditional_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.cancelInlineCreate());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 5, "tasks.taskNamePlaceholder"))("value", ctx_r2.inlineTitle());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.state.saving() || !ctx_r2.inlineTitle().trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, "common.add"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 9, "common.cancel"), " ");
  }
}
function TaskManagementComponent_Conditional_72_For_2_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 95);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_72_For_2_Conditional_10_Conditional_4_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const group_r15 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.startInlineCreate(group_r15.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "add_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "tasks.addTask"), " ");
  }
}
function TaskManagementComponent_Conditional_72_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, TaskManagementComponent_Conditional_72_For_2_Conditional_10_For_1_Template, 7, 5, "div", 84, _forTrack0, false, TaskManagementComponent_Conditional_72_For_2_Conditional_10_ForEmpty_2_Template, 3, 3, "div", 85);
    \u0275\u0275conditionalCreate(3, TaskManagementComponent_Conditional_72_For_2_Conditional_10_Conditional_3_Template, 10, 11, "div", 86)(4, TaskManagementComponent_Conditional_72_For_2_Conditional_10_Conditional_4_Template, 5, 3, "button", 87);
  }
  if (rf & 2) {
    const group_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(group_r15.tasks);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.state.inlineCreateColId() === group_r15.id ? 3 : !ctx_r2.isEmployee ? 4 : -1);
  }
}
function TaskManagementComponent_Conditional_72_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "button", 79);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_72_For_2_Template_button_click_1_listener() {
      const group_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleGroup(group_r15.id));
    });
    \u0275\u0275element(2, "span", 80);
    \u0275\u0275elementStart(3, "span", 81);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 82);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-icon", 83);
    \u0275\u0275text(9, " expand_more ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, TaskManagementComponent_Conditional_72_For_2_Conditional_10_Template, 5, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", !ctx_r2.isGroupCollapsed(group_r15.id));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", group_r15.indicatorColor);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 8, group_r15.labelKey));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r15.tasks.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("tm-group-chevron--collapsed", ctx_r2.isGroupCollapsed(group_r15.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.isGroupCollapsed(group_r15.id) ? 10 : -1);
  }
}
function TaskManagementComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275repeaterCreate(1, TaskManagementComponent_Conditional_72_For_2_Template, 11, 10, "div", 78, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.state.listGroups());
  }
}
function TaskManagementComponent_Conditional_73_For_36_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 114);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r22.assigneeId.substring(0, 2).toUpperCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r22.assigneeId);
  }
}
function TaskManagementComponent_Conditional_73_For_36_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function TaskManagementComponent_Conditional_73_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 102);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_73_For_36_Template_tr_click_0_listener() {
      const task_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDetail(task_r22.id));
    });
    \u0275\u0275elementStart(1, "td", 103);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_73_For_36_Template_td_click_1_listener($event) {
      const task_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleRowSelect($event, task_r22.id));
    });
    \u0275\u0275elementStart(2, "input", 98);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("change", function TaskManagementComponent_Conditional_73_For_36_Template_input_change_2_listener($event) {
      const task_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleRowSelect($event, task_r22.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 104);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 105);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 106)(9, "span", 107);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 106);
    \u0275\u0275conditionalCreate(12, TaskManagementComponent_Conditional_73_For_36_Conditional_12_Template, 5, 2, "div", 108)(13, TaskManagementComponent_Conditional_73_For_36_Conditional_13_Template, 2, 0, "span", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 110);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 106)(18, "span")(19, "mat-icon", 111);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 110);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 110);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td", 106)(29, "span", 112)(30, "mat-icon", 113);
    \u0275\u0275text(31, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r22 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("tm-tr--selected", ctx_r2.isRowSelected(task_r22.id))("tm-tr--active", ctx_r2.state.selectedTaskId() === task_r22.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.isRowSelected(task_r22.id));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 23, "tasks.selectRow"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatDisplayId(task_r22.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r22.summary || task_r22.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r22.categoryId || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(task_r22.assigneeId ? 12 : 13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", task_r22.dueDate ? \u0275\u0275pipeBind2(16, 25, task_r22.dueDate, "MMM d, yyyy") : "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("tm-prio-chip tm-prio-chip--", task_r22.priority));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.priorityIcon(task_r22.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.priorityLabel(task_r22.priority), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r22.createdAt ? \u0275\u0275pipeBind2(24, 28, task_r22.createdAt, "MMM d, yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r22.updatedAt ? \u0275\u0275pipeBind2(27, 31, task_r22.updatedAt, "MMM d, yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("border-color", ctx_r2.statusIndicatorColor(task_r22.status))("color", ctx_r2.statusIndicatorColor(task_r22.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.statusLabel(task_r22.status), " ");
  }
}
function TaskManagementComponent_Conditional_73_ForEmpty_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 115);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "tasks.noResults"));
  }
}
function TaskManagementComponent_Conditional_73_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 116);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_73_Conditional_38_Template_tr_click_0_listener($event) {
      \u0275\u0275restoreView(_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "td", 117)(2, "button", 118);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_73_Conditional_38_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.focusTableCreateInput());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 119)(8, "div", 120)(9, "input", 121, 2);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275listener("input", function TaskManagementComponent_Conditional_73_Conditional_38_Template_input_input_9_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.tableCreateTitle.set($event.target.value));
    })("keyup.enter", function TaskManagementComponent_Conditional_73_Conditional_38_Template_input_keyup_enter_9_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitTableCreate());
    })("keyup.escape", function TaskManagementComponent_Conditional_73_Conditional_38_Template_input_keyup_escape_9_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.tableCreateTitle.set(""));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 122)(13, "mat-icon", 123);
    \u0275\u0275text(14, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-icon", 123);
    \u0275\u0275text(16, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 75);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_73_Conditional_38_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitTableCreate());
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "tasks.addNew"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(11, 7, "tasks.taskNamePlaceholder"))("value", ctx_r2.tableCreateTitle());
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r2.state.saving() || !ctx_r2.tableCreateTitle().trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 9, "tasks.create"), " ");
  }
}
function TaskManagementComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "table", 96)(2, "thead")(3, "tr")(4, "th", 97)(5, "input", 98);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("change", function TaskManagementComponent_Conditional_73_Template_input_change_5_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSelectAll());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "th", 99);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 99);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 99);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 99);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 99);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 99);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 99);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 99);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th", 99);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "tbody");
    \u0275\u0275repeaterCreate(35, TaskManagementComponent_Conditional_73_For_36_Template, 33, 34, "tr", 100, _forTrack0, false, TaskManagementComponent_Conditional_73_ForEmpty_37_Template, 4, 3, "tr");
    \u0275\u0275conditionalCreate(38, TaskManagementComponent_Conditional_73_Conditional_38_Template, 20, 11, "tr", 101);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r2.state.allSelected());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 13, "tasks.selectAll"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 15, "tasks.table.id"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 17, "tasks.table.summary"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 19, "tasks.table.category"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 21, "tasks.table.assignee"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 23, "tasks.table.dueDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 25, "tasks.table.priority"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 27, "tasks.table.createdAt"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 29, "tasks.table.updatedAt"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 31, "tasks.table.status"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.state.filteredTasks());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r2.isEmployee ? 38 : -1);
  }
}
function TaskManagementComponent_Conditional_74_Conditional_2_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r26 = ctx.$implicit;
    \u0275\u0275property("value", opt_r26.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r26.label);
  }
}
function TaskManagementComponent_Conditional_74_Conditional_2_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 144);
  }
}
function TaskManagementComponent_Conditional_74_Conditional_2_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "add");
    \u0275\u0275elementEnd();
  }
}
function TaskManagementComponent_Conditional_74_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125)(1, "span", 126);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 127);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_74_Conditional_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 128)(9, "p", 129);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 130)(13, "label", 131);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 132);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275listener("input", function TaskManagementComponent_Conditional_74_Conditional_2_Template_input_input_16_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.panelCreateTitle.set($event.target.value));
    })("keyup.enter", function TaskManagementComponent_Conditional_74_Conditional_2_Template_input_keyup_enter_16_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitCreatePanel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label", 133);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 134);
    \u0275\u0275listener("change", function TaskManagementComponent_Conditional_74_Conditional_2_Template_select_change_21_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.panelCreateStatus.set($event.target.value));
    });
    \u0275\u0275repeaterCreate(22, TaskManagementComponent_Conditional_74_Conditional_2_For_23_Template, 2, 2, "option", 135, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "label", 136);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 137);
    \u0275\u0275listener("change", function TaskManagementComponent_Conditional_74_Conditional_2_Template_select_change_27_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.panelCreatePriority.set($event.target.value));
    });
    \u0275\u0275elementStart(28, "option", 138);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 139);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 140);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 141);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 142)(41, "button", 143);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_74_Conditional_2_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitCreatePanel());
    });
    \u0275\u0275conditionalCreate(42, TaskManagementComponent_Conditional_74_Conditional_2_Conditional_42_Template, 1, 0, "mat-spinner", 144)(43, TaskManagementComponent_Conditional_74_Conditional_2_Conditional_43_Template, 2, 0, "mat-icon");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 76);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_74_Conditional_2_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 18, "tasks.newTask"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 20, "common.close"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 22, "tasks.createHint"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 24, "tasks.table.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(17, 26, "tasks.taskNamePlaceholder"))("value", ctx_r2.panelCreateTitle());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 28, "tasks.table.status"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.panelCreateStatus());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.STATUS_OPTIONS);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 30, "tasks.table.priority"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.panelCreatePriority());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 32, "tasks.priority.urgent"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 34, "tasks.priority.high"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 36, "tasks.priority.medium"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 38, "tasks.priority.low"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.state.saving() || !ctx_r2.panelCreateTitle().trim());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.state.saving() ? 42 : 43);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 40, "tasks.create"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 42, "common.cancel"), " ");
  }
}
function TaskManagementComponent_Conditional_74_Conditional_3_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 164);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_74_Conditional_3_Conditional_24_For_2_Template_button_click_0_listener() {
      const opt_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.changeTaskStatus(opt_r29.value));
    });
    \u0275\u0275element(1, "span", 165);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r29 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("tm-status-option--active", ctx_r2.state.selectedTask().status === opt_r29.value);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r2.statusIndicatorColor(opt_r29.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r29.label, " ");
  }
}
function TaskManagementComponent_Conditional_74_Conditional_3_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152);
    \u0275\u0275repeaterCreate(1, TaskManagementComponent_Conditional_74_Conditional_3_Conditional_24_For_2_Template, 3, 5, "button", 163, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.STATUS_OPTIONS);
  }
}
function TaskManagementComponent_Conditional_74_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125)(1, "div", 145)(2, "span", 126);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-icon", 146);
    \u0275\u0275text(5, "link");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 147)(7, "button", 148);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 18);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_74_Conditional_3_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 128)(16, "h2", 149);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 150);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_74_Conditional_3_Template_div_click_18_listener($event) {
      \u0275\u0275restoreView(_r27);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(19, "button", 151);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_74_Conditional_3_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleStatusDropdown());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementStart(22, "mat-icon");
    \u0275\u0275text(23, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(24, TaskManagementComponent_Conditional_74_Conditional_3_Conditional_24_Template, 3, 0, "div", 152);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "section", 153)(26, "h3", 154);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 155);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "section", 153)(33, "h3", 154);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 156)(37, "span", 157);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 158);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 157);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 158);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 157);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 158);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 157);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 158);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 157);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 158)(62, "span")(63, "mat-icon", 111);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd();
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "span", 157);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 158);
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span", 157);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span", 158);
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "section", 153)(79, "div", 159)(80, "button", 160);
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "button", 161);
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "button", 161);
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "button", 161);
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 162)(93, "mat-icon");
    \u0275\u0275text(94, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "p");
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatDisplayId(ctx_r2.state.selectedTask().id));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 40, "tasks.moreActions"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 42, "common.close"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.state.selectedTask().title);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r2.statusIndicatorColor(ctx_r2.state.selectedTask().status) + "22")("color", ctx_r2.statusIndicatorColor(ctx_r2.state.selectedTask().status))("border-color", ctx_r2.statusIndicatorColor(ctx_r2.state.selectedTask().status));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(20, 44, "tasks.changeStatus"))("aria-expanded", ctx_r2.statusDropdownOpen());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.statusLabel(ctx_r2.state.selectedTask().status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.statusDropdownOpen() ? 24 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 46, "tasks.description"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.state.selectedTask().description || \u0275\u0275pipeBind1(31, 48, "tasks.noDescription"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 50, "tasks.details"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 52, "tasks.table.id"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatDisplayId(ctx_r2.state.selectedTask().id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 54, "tasks.table.summary"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.state.selectedTask().summary || ctx_r2.state.selectedTask().title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 56, "tasks.table.assignee"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.state.selectedTask().assigneeId || "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 58, "tasks.table.dueDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.state.selectedTask().dueDate ? \u0275\u0275pipeBind2(57, 60, ctx_r2.state.selectedTask().dueDate, "MMM d, yyyy") : "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 63, "tasks.table.priority"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("tm-prio-chip tm-prio-chip--", ctx_r2.state.selectedTask().priority));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.priorityIcon(ctx_r2.state.selectedTask().priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.priorityLabel(ctx_r2.state.selectedTask().priority), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 65, "tasks.table.createdAt"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.state.selectedTask().createdAt ? \u0275\u0275pipeBind2(71, 67, ctx_r2.state.selectedTask().createdAt, "MMM d, yyyy") : "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(74, 70, "tasks.table.updatedAt"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.state.selectedTask().updatedAt ? \u0275\u0275pipeBind2(77, 72, ctx_r2.state.selectedTask().updatedAt, "MMM d, yyyy") : "\u2014", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(82, 75, "tasks.tabs.all"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 77, "tasks.tabs.comments"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(88, 79, "tasks.tabs.history"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(91, 81, "tasks.tabs.attachments"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(97, 83, "tasks.noActivity"));
  }
}
function TaskManagementComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 124);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_74_Template_aside_click_0_listener($event) {
      \u0275\u0275restoreView(_r24);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275conditionalCreate(2, TaskManagementComponent_Conditional_74_Conditional_2_Template, 49, 44);
    \u0275\u0275conditionalCreate(3, TaskManagementComponent_Conditional_74_Conditional_3_Template, 98, 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 3, "tasks.detailPanel"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.state.createMode() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.state.createMode() && ctx_r2.state.selectedTask() ? 3 : -1);
  }
}
function TaskManagementComponent_Conditional_75_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 171);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_75_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteSelected());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "common.delete"), " ");
  }
}
function TaskManagementComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275pipe(1, "transloco");
    \u0275\u0275elementStart(2, "button", 166);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_75_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.state.clearSelection());
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 167);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 168)(10, "button", 169);
    \u0275\u0275listener("click", function TaskManagementComponent_Conditional_75_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copySectionToClipboard());
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "content_copy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, TaskManagementComponent_Conditional_75_Conditional_15_Template, 5, 3, "button", 170);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 6, "tasks.selectionBar"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 8, "tasks.clearSelection"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r2.state.selectionCount(), " ", \u0275\u0275pipeBind1(8, 10, "tasks.itemsSelected"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 12, "tasks.clipToClipboard"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.isEmployee ? 15 : -1);
  }
}
var _TaskManagementComponent = class _TaskManagementComponent {
  constructor() {
    this.state = inject(TaskManagementStateService);
    this.taskSvc = inject(TaskService);
    this.projSvc = inject(ProjectService);
    this.route = inject(ActivatedRoute);
    this.tokenService = inject(TokenService);
    this.isEmployee = this.tokenService.getUserRole() === UserRole.Employee;
    this.colDropIds = computed(() => KANBAN_COLUMNS_CONFIG.map((c) => "drp-" + c.id), ...ngDevMode ? [{ debugName: "colDropIds" }] : []);
    this.inlineTitle = signal("", ...ngDevMode ? [{ debugName: "inlineTitle" }] : []);
    this.tableCreateTitle = signal("", ...ngDevMode ? [{ debugName: "tableCreateTitle" }] : []);
    this.statusDropdownOpen = signal(false, ...ngDevMode ? [{ debugName: "statusDropdownOpen" }] : []);
    this.panelCreateTitle = signal("", ...ngDevMode ? [{ debugName: "panelCreateTitle" }] : []);
    this.panelCreateStatus = signal("todo", ...ngDevMode ? [{ debugName: "panelCreateStatus" }] : []);
    this.panelCreatePriority = signal("medium", ...ngDevMode ? [{ debugName: "panelCreatePriority" }] : []);
    this.PRIORITY_OPTIONS = [];
    this.STATUS_OPTIONS = [
      { value: "todo", label: "Todo" },
      { value: "in-progress", label: "InProgress" },
      { value: "on-hold", label: "Review" },
      { value: "done", label: "Done" },
      { value: "cancelled", label: "Cancelled" }
    ];
  }
  ngOnInit() {
    this.loadData();
  }
  ngOnDestroy() {
    clearTimeout(this.toastTimer);
  }
  // ── Data loading ─────────────────────────────────────────────
  loadData() {
    this.state.loading.set(true);
    this.state.error.set(null);
    const projectId = this.route.snapshot.queryParamMap.get("projectId") ?? "";
    this.projSvc.getProjects().subscribe({
      next: (projects) => {
        if (!projects.length) {
          this.state.loading.set(false);
          return;
        }
        const target = projectId ? projects.find((p) => p.id === projectId) ?? projects[0] : projects[0];
        this.state.setProject(target.id, target.title);
        const assignedUserId = this.isEmployee ? this.tokenService.getUserId() ?? void 0 : void 0;
        this.taskSvc.getByProject(target.id, assignedUserId).subscribe({
          next: (tasks) => {
            this.state.setTasks(tasks);
            this.state.loading.set(false);
          },
          error: () => {
            this.state.error.set("tasks.errors.load");
            this.state.loading.set(false);
          }
        });
      },
      error: () => {
        this.state.error.set("tasks.errors.load");
        this.state.loading.set(false);
      }
    });
  }
  retry() {
    this.loadData();
  }
  // ── View switching ───────────────────────────────────────────
  setView(v) {
    this.state.setView(v);
  }
  // ── Search ───────────────────────────────────────────────────
  onSearch(q) {
    this.state.setSearch(q);
  }
  // ── Board drag-drop ──────────────────────────────────────────
  onDrop(event, col) {
    if (event.previousContainer === event.container)
      return;
    const task = event.item.data;
    const targetStatus = col.statuses[0];
    if (task.status === targetStatus)
      return;
    const enriched = __spreadProps(__spreadValues({}, task), {
      projectId: task.projectId || this.state.projectId(),
      status: targetStatus
    });
    const prev = __spreadValues({}, task);
    this.state.patchTask(task.id, { status: targetStatus });
    this.taskSvc.changeStatus(enriched, targetStatus).subscribe({
      error: () => {
        this.state.revertTask(task.id, prev);
        this.showToast("tasks.errors.status");
      }
    });
  }
  // ── Column menu ──────────────────────────────────────────────
  toggleColumnMenu(colId, event) {
    event.stopPropagation();
    const current = this.state.activeColumnMenuId();
    this.state.activeColumnMenuId.set(current === colId ? null : colId);
  }
  onColumnAction(action, col) {
    this.state.activeColumnMenuId.set(null);
    if (action === "copyLink") {
      navigator.clipboard?.writeText(window.location.href + "#" + col.id);
    }
  }
  // ── Inline create (board / list) ─────────────────────────────
  startInlineCreate(colId) {
    if (this.isEmployee)
      return;
    this.inlineTitle.set("");
    this.state.inlineCreateColId.set(colId);
    this.state.activeColumnMenuId.set(null);
  }
  cancelInlineCreate() {
    this.state.inlineCreateColId.set(null);
    this.inlineTitle.set("");
  }
  submitInlineCreate(targetStatus) {
    if (this.isEmployee) {
      this.cancelInlineCreate();
      return;
    }
    const title = this.inlineTitle().trim();
    if (!title) {
      this.cancelInlineCreate();
      return;
    }
    const projectId = this.state.projectId();
    const dto = { projectId, title, status: targetStatus, priority: "medium" };
    this.state.inlineCreateColId.set(null);
    this.inlineTitle.set("");
    this.state.saving.set(true);
    this.taskSvc.create(projectId, dto).subscribe({
      next: (task) => {
        this.state.addTask(task);
        this.state.saving.set(false);
      },
      error: () => {
        this.state.saving.set(false);
        this.showToast("tasks.errors.create");
      }
    });
  }
  // ── Inline create (table) ────────────────────────────────────
  submitTableCreate() {
    if (this.isEmployee)
      return;
    const title = this.tableCreateTitle().trim();
    if (!title)
      return;
    const projectId = this.state.projectId();
    const dto = { projectId, title, status: "todo", priority: "medium" };
    this.tableCreateTitle.set("");
    this.state.saving.set(true);
    this.taskSvc.create(projectId, dto).subscribe({
      next: (task) => {
        this.state.addTask(task);
        this.state.saving.set(false);
      },
      error: () => {
        this.state.saving.set(false);
        this.showToast("tasks.errors.create");
      }
    });
  }
  // ── Task detail panel ────────────────────────────────────────
  openDetail(taskId) {
    this.statusDropdownOpen.set(false);
    this.state.openDetail(taskId);
  }
  closeDetail() {
    this.statusDropdownOpen.set(false);
    this.state.closeDetail();
  }
  openCreatePanel() {
    if (this.isEmployee)
      return;
    this.panelCreateTitle.set("");
    this.panelCreateStatus.set("todo");
    this.panelCreatePriority.set("medium");
    this.state.openCreatePanel();
  }
  submitCreatePanel() {
    if (this.isEmployee)
      return;
    const title = this.panelCreateTitle().trim();
    if (!title)
      return;
    const projectId = this.state.projectId();
    const dto = {
      projectId,
      title,
      status: this.panelCreateStatus(),
      priority: this.panelCreatePriority()
    };
    this.state.saving.set(true);
    this.taskSvc.create(projectId, dto).subscribe({
      next: (task) => {
        this.state.addTask(task);
        this.state.saving.set(false);
        this.closeDetail();
      },
      error: () => {
        this.state.saving.set(false);
        this.showToast("tasks.errors.create");
      }
    });
  }
  focusTableCreateInput() {
    if (this.isEmployee)
      return;
    this.tableCreateInputRef?.nativeElement.focus();
  }
  changeTaskStatus(status) {
    const task = this.state.selectedTask();
    if (!task)
      return;
    this.statusDropdownOpen.set(false);
    const enriched = __spreadProps(__spreadValues({}, task), {
      projectId: task.projectId || this.state.projectId(),
      status
    });
    const prev = __spreadValues({}, task);
    this.state.patchTask(task.id, { status });
    this.taskSvc.changeStatus(enriched, status).subscribe({
      error: () => {
        this.state.revertTask(task.id, prev);
        this.showToast("tasks.errors.status");
      }
    });
  }
  // ── Row selection (table) ────────────────────────────────────
  toggleRowSelect(event, id) {
    event.stopPropagation();
    this.state.toggleSelect(id);
  }
  toggleSelectAll() {
    if (this.state.allSelected())
      this.state.clearSelection();
    else
      this.state.selectAll();
  }
  // ── Bulk actions ─────────────────────────────────────────────
  deleteSelected() {
    if (this.isEmployee)
      return;
    const ids = [...this.state.selectedIds()];
    const snapshots = new Map(this.state.tasks().filter((t) => ids.includes(t.id)).map((t) => [t.id, __spreadValues({}, t)]));
    this.state.removeTasks(new Set(ids));
    this.state.clearSelection();
    let anyFailed = false;
    ids.forEach((id) => {
      this.taskSvc.delete(id).subscribe({
        error: () => {
          const prev = snapshots.get(id);
          if (prev)
            this.state.addTask(prev);
          if (!anyFailed) {
            anyFailed = true;
            this.showToast("tasks.errors.delete");
          }
        }
      });
    });
  }
  copySectionToClipboard() {
    const titles = this.state.tasks().filter((t) => this.state.selectedIds().has(t.id)).map((t) => t.title).join("\n");
    navigator.clipboard?.writeText(titles);
  }
  deleteSingleTask(task, event) {
    event.stopPropagation();
    if (this.isEmployee)
      return;
    const prev = __spreadValues({}, task);
    this.state.removeTask(task.id);
    this.taskSvc.delete(task.id).subscribe({
      error: () => {
        this.state.addTask(prev);
        this.showToast("tasks.errors.delete");
      }
    });
  }
  // ── Import ───────────────────────────────────────────────────
  triggerImport() {
    this.fileInputRef?.nativeElement.click();
  }
  // ── List group collapse ──────────────────────────────────────
  toggleGroup(id) {
    this.state.toggleGroup(id);
  }
  isGroupCollapsed(id) {
    return this.state.collapsedGroups().has(id);
  }
  // ── Toast ────────────────────────────────────────────────────
  showToast(key, type = "error") {
    clearTimeout(this.toastTimer);
    this.state.showToast(key, type);
    this.toastTimer = setTimeout(() => this.state.clearToast(), 4e3);
  }
  dismissToast() {
    clearTimeout(this.toastTimer);
    this.state.clearToast();
  }
  // ── Toggle helpers (arrow fns not allowed in templates) ──
  toggleFilterMenu(event) {
    event.stopPropagation();
    this.state.filterMenuOpen.update((v) => !v);
  }
  toggleSortMenu(event) {
    event.stopPropagation();
    this.state.sortMenuOpen.update((v) => !v);
  }
  toggleStatusDropdown() {
    this.statusDropdownOpen.update((v) => !v);
  }
  // ── Helpers ──────────────────────────────────────────────────
  priorityIcon(p) {
    const map = {
      urgent: "keyboard_double_arrow_up",
      high: "keyboard_arrow_up",
      medium: "remove",
      low: "keyboard_arrow_down"
    };
    return map[p] ?? "remove";
  }
  priorityLabel(p) {
    const map = {
      urgent: "Urgent",
      high: "High",
      medium: "Medium",
      low: "Low"
    };
    return map[p] ?? p;
  }
  statusLabel(s) {
    const map = {
      "todo": "Todo",
      "pending": "Todo",
      "in-progress": "InProgress",
      "on-hold": "Review",
      "done": "Done",
      "completed": "Done",
      "cancelled": "Cancelled"
    };
    return map[s] ?? s;
  }
  statusIndicatorColor(s) {
    const map = {
      "todo": "#F87748",
      "pending": "#F87748",
      "in-progress": "#3B82F6",
      "on-hold": "#F59E0B",
      "done": "#22C55E",
      "completed": "#22C55E",
      "cancelled": "#f04242"
    };
    return map[s] ?? "#999";
  }
  formatDisplayId(id) {
    const n = parseInt(id, 10);
    return isNaN(n) ? id : "MDP-" + n;
  }
  isRowSelected(id) {
    return this.state.selectedIds().has(id);
  }
  // Close menus when clicking outside
  onDocumentClick() {
    this.state.closeAllMenus();
  }
};
_TaskManagementComponent.\u0275fac = function TaskManagementComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TaskManagementComponent)();
};
_TaskManagementComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskManagementComponent, selectors: [["app-task-management"]], viewQuery: function TaskManagementComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
    \u0275\u0275viewQuery(_c1, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInputRef = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tableCreateInputRef = _t.first);
  }
}, hostBindings: function TaskManagementComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function TaskManagementComponent_click_HostBindingHandler() {
      return ctx.onDocumentClick();
    }, \u0275\u0275resolveDocument);
  }
}, features: [\u0275\u0275ProvidersFeature([TaskManagementStateService])], decls: 76, vars: 70, consts: [["fileInput", ""], ["inlineInput", ""], ["tableCreateInput", ""], [1, "tm-page", 3, "click"], ["type", "file", "accept", ".csv,.xlsx,.json", "aria-hidden", "true", 1, "tm-hidden-input"], ["role", "alert", 3, "class"], [1, "tm-page-top"], [1, "tm-breadcrumb"], [1, "tm-bc-item", "tm-bc-item--link"], [1, "tm-bc-sep"], [1, "tm-page-title"], [1, "tm-controls"], ["role", "group", 1, "tm-view-switcher"], [1, "tm-view-btn", 3, "click"], [1, "tm-controls-right"], [1, "tm-search-box"], [1, "tm-search-icon"], ["type", "text", 1, "tm-search-input", 3, "input", "placeholder", "value"], [1, "tm-icon-btn", 3, "click"], [1, "tm-btn", "tm-btn--dark", 3, "click"], [1, "tm-btn", "tm-btn--primary"], [1, "tm-content"], [1, "tm-main"], [1, "tm-state-center"], [1, "tm-state-center", "tm-state--error"], [1, "tm-empty"], ["cdkDropListGroup", "", 1, "tm-board"], [1, "tm-list"], [1, "tm-table-wrap"], ["role", "complementary", 1, "tm-detail-panel"], ["role", "toolbar", 1, "tm-selection-bar"], ["role", "alert"], [1, "tm-toast-close", 3, "click"], [1, "tm-bc-item", "tm-bc-item--active"], [1, "tm-btn", "tm-btn--primary", 3, "click"], ["diameter", "40"], [1, "tm-btn", "tm-btn--outline", 3, "click"], ["src", "assets/images/ResultNotFound.png", "alt", "", 1, "tm-empty-img"], [1, "tm-empty-title"], [1, "tm-empty-project"], [1, "tm-empty-desc"], [1, "tm-col"], [1, "tm-col-head"], [1, "tm-col-left"], [1, "tm-col-bar"], [1, "tm-col-label"], [1, "tm-col-badge"], [1, "tm-col-actions", 3, "click"], [1, "tm-col-btn"], [1, "tm-col-menu-wrap"], [1, "tm-col-btn", 3, "click"], ["role", "menu", 1, "tm-dropdown"], ["cdkDropList", "", 1, "tm-cards", 3, "cdkDropListDropped", "id", "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", "", "role", "button", "tabindex", "0", 1, "tm-card", 3, "cdkDragData"], [1, "tm-col-empty"], [1, "tm-inline-create"], [1, "tm-add-new"], [1, "tm-dropdown-head"], ["role", "menuitem", 1, "tm-dropdown-item", 3, "click"], ["role", "menuitem", 1, "tm-dropdown-item", "tm-dropdown-item--danger", 3, "click"], ["cdkDrag", "", "role", "button", "tabindex", "0", 1, "tm-card", 3, "click", "keyup.enter", "cdkDragData"], ["cdkDragPlaceholder", ""], [1, "tm-card-title"], [1, "tm-card-tags"], [1, "tm-tag-icon"], [1, "tm-card-footer"], [1, "tm-avatars"], [1, "tm-avatar", 3, "title"], [1, "tm-avatar", "tm-avatar--empty"], [1, "tm-card-meta"], [1, "tm-card-meta-item"], [1, "tm-card-ghost"], [1, "tm-inline-create", 3, "click"], ["type", "text", "autofocus", "", 1, "tm-inline-input", 3, "input", "keyup.enter", "keyup.escape", "placeholder", "value"], [1, "tm-inline-btns"], [1, "tm-btn", "tm-btn--primary-sm", 3, "click", "disabled"], [1, "tm-btn", "tm-btn--ghost-sm", 3, "click"], [1, "tm-add-new", 3, "click"], [1, "tm-group"], [1, "tm-group-head", 3, "click"], [1, "tm-group-bar"], [1, "tm-group-label"], [1, "tm-group-badge"], [1, "tm-group-chevron"], ["role", "button", "tabindex", "0", 1, "tm-list-row", 3, "tm-list-row--active"], [1, "tm-list-empty"], [1, "tm-list-create"], [1, "tm-list-add-task"], ["role", "button", "tabindex", "0", 1, "tm-list-row", 3, "click", "keyup.enter"], ["aria-hidden", "true", 1, "tm-list-circle"], [1, "tm-list-title"], [1, "tm-list-meta"], [1, "tm-list-date"], [1, "tm-avatar", "tm-avatar--sm", 3, "title"], [1, "tm-list-create", 3, "click"], [1, "tm-list-add-task", 3, "click"], ["role", "grid", 1, "tm-table"], ["scope", "col", 1, "tm-th", "tm-th--check"], ["type", "checkbox", 1, "tm-checkbox", 3, "change", "checked"], ["scope", "col", 1, "tm-th"], ["role", "row", 1, "tm-tr", 3, "tm-tr--selected", "tm-tr--active"], [1, "tm-tr-create"], ["role", "row", 1, "tm-tr", 3, "click"], [1, "tm-td", "tm-td--check", 3, "click"], [1, "tm-td", "tm-td--id"], [1, "tm-td", "tm-td--summary"], [1, "tm-td"], [1, "tm-cat-chip"], [1, "tm-inline-avatar"], [1, "tm-muted"], [1, "tm-td", "tm-td--date"], [1, "tm-prio-icon"], [1, "tm-status-chip"], [1, "tm-status-icon"], [1, "tm-avatar", "tm-avatar--sm"], ["colspan", "10", 1, "tm-td-empty"], [1, "tm-tr-create", 3, "click"], ["colspan", "2", 1, "tm-td"], [1, "tm-create-trigger", 3, "click"], ["colspan", "8", 1, "tm-td"], [1, "tm-table-create-row"], ["type", "text", 1, "tm-table-create-input", 3, "input", "keyup.enter", "keyup.escape", "placeholder", "value"], [1, "tm-table-create-actions"], [1, "tm-muted-icon"], ["role", "complementary", 1, "tm-detail-panel", 3, "click"], [1, "tm-panel-head"], [1, "tm-panel-id"], [1, "tm-panel-close", 3, "click"], [1, "tm-panel-body"], [1, "tm-panel-subtitle"], [1, "tm-create-form"], ["for", "panel-task-title", 1, "tm-create-form-label"], ["id", "panel-task-title", "type", "text", "autofocus", "", 1, "tm-create-field", 3, "input", "keyup.enter", "placeholder", "value"], ["for", "panel-task-status", 1, "tm-create-form-label"], ["id", "panel-task-status", 1, "tm-create-select", 3, "change", "value"], [3, "value"], ["for", "panel-task-priority", 1, "tm-create-form-label"], ["id", "panel-task-priority", 1, "tm-create-select", 3, "change", "value"], ["value", "urgent"], ["value", "high"], ["value", "medium"], ["value", "low"], [1, "tm-create-form-actions"], [1, "tm-btn", "tm-btn--primary", 3, "click", "disabled"], ["diameter", "16"], [1, "tm-panel-head-left"], [1, "tm-panel-link-icon"], [1, "tm-panel-head-right"], [1, "tm-icon-btn"], [1, "tm-panel-title"], [1, "tm-panel-status-wrap", 3, "click"], [1, "tm-status-badge", 3, "click"], ["role", "listbox", 1, "tm-status-dropdown"], [1, "tm-panel-section"], [1, "tm-panel-section-title"], [1, "tm-panel-desc"], [1, "tm-details-grid"], [1, "tm-detail-label"], [1, "tm-detail-value"], ["role", "tablist", 1, "tm-tabs"], ["role", "tab", 1, "tm-tab", "tm-tab--active"], ["role", "tab", 1, "tm-tab"], [1, "tm-activity-empty"], ["role", "option", 1, "tm-status-option", 3, "tm-status-option--active"], ["role", "option", 1, "tm-status-option", 3, "click"], [1, "tm-status-dot"], [1, "tm-sel-clear", 3, "click"], [1, "tm-sel-count"], [1, "tm-sel-actions"], [1, "tm-sel-btn", 3, "click"], [1, "tm-sel-btn", "tm-sel-btn--danger"], [1, "tm-sel-btn", "tm-sel-btn--danger", 3, "click"]], template: function TaskManagementComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275listener("click", function TaskManagementComponent_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.state.closeAllMenus());
    });
    \u0275\u0275element(1, "input", 4, 0);
    \u0275\u0275conditionalCreate(3, TaskManagementComponent_Conditional_3_Template, 10, 10, "div", 5);
    \u0275\u0275elementStart(4, "div", 6)(5, "nav", 7);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-icon", 9);
    \u0275\u0275text(11, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 8);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, TaskManagementComponent_Conditional_15_Template, 4, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h1", 10);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 11)(20, "div", 12);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementStart(22, "button", 13);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275listener("click", function TaskManagementComponent_Template_button_click_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      ctx.setView("table");
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(24, "mat-icon");
    \u0275\u0275text(25, "table_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 13);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275listener("click", function TaskManagementComponent_Template_button_click_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      ctx.setView("list");
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(31, "mat-icon");
    \u0275\u0275text(32, "view_list");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "button", 13);
    \u0275\u0275pipe(37, "transloco");
    \u0275\u0275listener("click", function TaskManagementComponent_Template_button_click_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      ctx.setView("board");
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(38, "mat-icon");
    \u0275\u0275text(39, "view_kanban");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 14)(44, "div", 15)(45, "mat-icon", 16);
    \u0275\u0275text(46, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 17);
    \u0275\u0275pipe(48, "transloco");
    \u0275\u0275pipe(49, "transloco");
    \u0275\u0275listener("input", function TaskManagementComponent_Template_input_input_47_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSearch($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "button", 18);
    \u0275\u0275pipe(51, "transloco");
    \u0275\u0275listener("click", function TaskManagementComponent_Template_button_click_50_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggleFilterMenu($event));
    });
    \u0275\u0275elementStart(52, "mat-icon");
    \u0275\u0275text(53, "tune");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "button", 18);
    \u0275\u0275pipe(55, "transloco");
    \u0275\u0275listener("click", function TaskManagementComponent_Template_button_click_54_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggleSortMenu($event));
    });
    \u0275\u0275elementStart(56, "mat-icon");
    \u0275\u0275text(57, "swap_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "button", 19);
    \u0275\u0275pipe(59, "transloco");
    \u0275\u0275listener("click", function TaskManagementComponent_Template_button_click_58_listener($event) {
      \u0275\u0275restoreView(_r1);
      ctx.triggerImport();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(60, "mat-icon");
    \u0275\u0275text(61, "upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span");
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(65, TaskManagementComponent_Conditional_65_Template, 7, 6, "button", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 21)(67, "div", 22);
    \u0275\u0275conditionalCreate(68, TaskManagementComponent_Conditional_68_Template, 2, 0, "div", 23)(69, TaskManagementComponent_Conditional_69_Template, 9, 6, "div", 24)(70, TaskManagementComponent_Conditional_70_Template, 12, 10, "div", 25)(71, TaskManagementComponent_Conditional_71_Template, 3, 0, "div", 26)(72, TaskManagementComponent_Conditional_72_Template, 3, 0, "div", 27)(73, TaskManagementComponent_Conditional_73_Template, 39, 33, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(74, TaskManagementComponent_Conditional_74_Template, 4, 5, "aside", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(75, TaskManagementComponent_Conditional_75_Template, 16, 14, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.state.toast() ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 36, "common.breadcrumb"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 38, "nav.projects"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 40, "tasks.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.state.projectTitle() ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.state.projectTitle() || \u0275\u0275pipeBind1(18, 42, "tasks.title"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(21, 44, "tasks.viewMode"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("tm-view-btn--active", ctx.state.activeView() === "table");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(23, 46, "tasks.view.table"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 48, "tasks.view.table"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("tm-view-btn--active", ctx.state.activeView() === "list");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(30, 50, "tasks.view.list"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 52, "tasks.view.list"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("tm-view-btn--active", ctx.state.activeView() === "board");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(37, 54, "tasks.view.board"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 56, "tasks.view.board"));
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(48, 58, "tasks.searchPlaceholder"))("value", ctx.state.searchQuery());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(49, 60, "tasks.searchPlaceholder"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("tm-icon-btn--active", ctx.state.filterMenuOpen());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(51, 62, "tasks.filter"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("tm-icon-btn--active", ctx.state.sortMenuOpen());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(55, 64, "tasks.sort"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(59, 66, "tasks.import"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 68, "tasks.import"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.isEmployee ? 65 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("tm-content--panel-open", ctx.state.detailPanelOpen());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.state.loading() ? 68 : ctx.state.error() ? 69 : ctx.state.tasks().length === 0 ? 70 : ctx.state.activeView() === "board" ? 71 : ctx.state.activeView() === "list" ? 72 : 73);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.state.detailPanelOpen() ? 74 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.state.hasSelection() ? 75 : -1);
  }
}, dependencies: [
  CommonModule,
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  RouterModule,
  MatIconModule,
  MatIcon,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  TranslocoModule,
  DragDropModule,
  CdkDropList,
  CdkDropListGroup,
  CdkDrag,
  CdkDragPlaceholder,
  DatePipe,
  TranslocoPipe
], styles: ['\n\n.tm-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  background: var(--ui-bg-surface);\n  position: relative;\n}\n.tm-hidden-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.tm-page-top[_ngcontent-%COMP%] {\n  padding: 24px 24px 0;\n  background: var(--ui-surface);\n  border-block-end: 1px solid var(--ui-border);\n  flex-shrink: 0;\n}\n.tm-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-block-end: 8px;\n}\n.tm-bc-sep[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--ui-text-muted);\n}\n.tm-bc-item[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 500;\n  color: var(--ui-text-primary);\n  white-space: nowrap;\n}\n.tm-bc-item--link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tm-bc-item--link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.tm-bc-item--active[_ngcontent-%COMP%] {\n  color: var(--brand-primary-500);\n}\n.tm-page-title[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans", sans-serif;\n  font-size: var(--h6-size, 26px);\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0 0 20px;\n  line-height: 1.4;\n}\n.tm-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding-block-end: 16px;\n  flex-wrap: wrap;\n}\n.tm-view-switcher[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: var(--ui-bg-subtle);\n  border-radius: var(--radius-8);\n  padding: 6px 12px;\n  flex-shrink: 0;\n}\n.tm-view-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 8px;\n  border: none;\n  border-radius: var(--radius-8);\n  background: transparent;\n  color: var(--ui-text-primary);\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s;\n  white-space: nowrap;\n}\n.tm-view-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.tm-view-btn--active[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, .1);\n}\n.tm-view-btn[_ngcontent-%COMP%]:hover:not(.tm-view-btn--active) {\n  background: var(--ui-bg-hover);\n}\n.tm-controls-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.tm-search-box[_ngcontent-%COMP%] {\n  position: relative;\n  width: 314px;\n  flex-shrink: 0;\n}\n.tm-search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-start: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--ui-text-muted);\n  pointer-events: none;\n}\n.tm-search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 42px;\n  padding-inline: 36px 12px;\n  border: 0.5px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  font-size: var(--subtitle-size, 16px);\n  outline: none;\n  box-sizing: border-box;\n  box-shadow: 0 0 1px rgba(204, 204, 204, .2);\n  transition: border-color 0.2s;\n}\n.tm-search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-primary-400);\n}\n.tm-search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--ui-text-muted);\n}\n.tm-icon-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border: none;\n  border-radius: var(--radius-12);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  cursor: pointer;\n  box-shadow: 0 0 1px rgba(204, 204, 204, .2), inset 0 -2px 2px rgba(204, 204, 204, .2);\n  transition: background 0.15s;\n}\n.tm-icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-hover);\n}\n.tm-icon-btn--active[_ngcontent-%COMP%] {\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-500);\n}\n.tm-icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.tm-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 48px;\n  padding-inline: 16px;\n  border-radius: var(--radius-12);\n  border: none;\n  font-size: var(--body-size, 18px);\n  font-weight: 400;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: 0 0 1px rgba(204, 204, 204, .2), inset 0 -2px 2px rgba(204, 204, 204, .2);\n  transition: opacity 0.15s;\n}\n.tm-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.tm-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.tm-btn--primary[_ngcontent-%COMP%] {\n  width: 152px;\n  justify-content: center;\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n  border: 1px solid var(--brand-primary-500);\n  box-shadow:\n    0 0 1px rgba(46, 53, 143, .2),\n    inset 0 -2px 2px var(--brand-primary-800),\n    inset 0 0 0 var(--brand-primary-700);\n}\n.tm-btn--dark[_ngcontent-%COMP%] {\n  width: 152px;\n  justify-content: center;\n  background: var(--brand-neutral-950);\n  color: var(--brand-neutral-0, #fff);\n}\n.tm-btn--outline[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  border: 1px solid var(--ui-border);\n}\n.tm-btn--primary-sm[_ngcontent-%COMP%] {\n  height: 32px;\n  padding-inline: 12px;\n  font-size: var(--caption-2-size, 14px);\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n  border-radius: var(--radius-8);\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  box-shadow: none;\n}\n.tm-btn--ghost-sm[_ngcontent-%COMP%] {\n  height: 32px;\n  padding-inline: 12px;\n  font-size: var(--caption-2-size, 14px);\n  background: transparent;\n  color: var(--ui-text-muted);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  box-shadow: none;\n}\n.tm-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n  transition: none;\n}\n.tm-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 24px;\n}\n.tm-content--panel-open[_ngcontent-%COMP%]   .tm-main[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.tm-state-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  min-height: 400px;\n  color: var(--ui-text-muted);\n  text-align: center;\n}\n.tm-state--error[_ngcontent-%COMP%] {\n  color: var(--functional-danger-600);\n}\n.tm-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  min-height: 500px;\n  text-align: center;\n}\n.tm-empty-img[_ngcontent-%COMP%] {\n  width: 244px;\n  height: auto;\n  object-fit: contain;\n}\n.tm-empty-title[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans", sans-serif;\n  font-size: var(--title-size, 22px);\n  font-weight: 700;\n  color: var(--brand-neutral-950);\n  margin: 0;\n  line-height: 1.4;\n}\n.tm-empty-project[_ngcontent-%COMP%] {\n  color: var(--brand-tertiary-500);\n}\n.tm-empty-desc[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  margin: 0;\n  max-width: 480px;\n}\n.tm-board[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 32px;\n  align-items: start;\n  min-width: 900px;\n}\n.tm-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  overflow: visible;\n  position: relative;\n}\n.tm-col-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n  border-block-end: 1px solid var(--ui-border);\n  min-height: 47px;\n}\n.tm-col-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.tm-col-bar[_ngcontent-%COMP%] {\n  display: block;\n  width: 4.6px;\n  height: 18px;\n  border-radius: 2px;\n  flex-shrink: 0;\n}\n.tm-col-label[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 600;\n  color: var(--ui-text-primary);\n}\n.tm-col-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 21px;\n  height: 25px;\n  padding-inline: 6px;\n  border-radius: var(--radius-8);\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n  font-size: 11px;\n  font-weight: 700;\n}\n.tm-col-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.tm-col-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 24px;\n  border: none;\n  border-radius: var(--radius-8);\n  background: transparent;\n  color: var(--ui-text-muted);\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.tm-col-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-hover);\n  color: var(--ui-text-primary);\n}\n.tm-col-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.tm-col-menu-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.tm-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-end: 0;\n  top: calc(100% + 4px);\n  z-index: 100;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, .12);\n  min-width: 152px;\n  padding: 6px 0;\n}\n.tm-dropdown-head[_ngcontent-%COMP%] {\n  padding: 6px 12px 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--ui-text-muted);\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  border-block-end: 1px solid var(--ui-border);\n  margin-block-end: 4px;\n}\n.tm-dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 8px 12px;\n  border: none;\n  background: transparent;\n  color: var(--ui-text-primary);\n  font-size: var(--caption-2-size, 14px);\n  cursor: pointer;\n  text-align: start;\n  transition: background 0.12s;\n}\n.tm-dropdown-item[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-hover);\n}\n.tm-dropdown-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--ui-text-muted);\n}\n.tm-dropdown-item--danger[_ngcontent-%COMP%] {\n  color: var(--functional-danger-600);\n}\n.tm-dropdown-item--danger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--functional-danger-400);\n}\n.tm-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 12px;\n  min-height: 80px;\n}\n.tm-cards.cdk-drop-list-dragging[_ngcontent-%COMP%]   .tm-card[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.tm-card[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  padding: 12px;\n  cursor: pointer;\n  transition: box-shadow 0.15s, transform 0.15s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.tm-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, .08);\n}\n.tm-card[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, .15);\n  border-radius: var(--radius-8);\n  background: var(--ui-surface);\n  border: 1px solid var(--brand-primary-300);\n  opacity: .95;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, .2, 1);\n}\n.tm-card-ghost[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  height: 80px;\n  border: 1.5px dashed var(--ui-border);\n  border-radius: var(--radius-8);\n  color: var(--ui-text-muted);\n  font-size: var(--caption-2-size, 14px);\n  background: var(--ui-bg-subtle);\n}\n.tm-card-ghost[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.tm-card-title[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 500;\n  color: var(--ui-text-primary);\n  margin: 0 0 8px;\n  line-height: 1.4;\n}\n.tm-card-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-block-end: 10px;\n}\n.tm-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.tm-tag-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 12px;\n  height: 12px;\n}\n.tm-tag--prio-urgent[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.tm-tag--prio-high[_ngcontent-%COMP%] {\n  background: var(--functional-warning-100);\n  color: var(--brand-accent-600);\n}\n.tm-tag--prio-medium[_ngcontent-%COMP%] {\n  background: var(--functional-info-100);\n  color: var(--functional-info-700);\n}\n.tm-tag--prio-low[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-100);\n  color: var(--brand-neutral-600);\n}\n.tm-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.tm-card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.tm-card-meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 11px;\n  color: var(--ui-text-muted);\n}\n.tm-card-meta-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.tm-avatars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.tm-avatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: var(--brand-primary-100);\n  color: var(--brand-primary-700);\n  font-size: 11px;\n  font-weight: 700;\n  border: 2px solid var(--ui-surface);\n  margin-inline-end: -6px;\n  flex-shrink: 0;\n}\n.tm-avatar--sm[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  font-size: 10px;\n}\n.tm-avatar--empty[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-100);\n  color: var(--ui-text-muted);\n}\n.tm-avatar--empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.tm-inline-create[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-block-start: 1px solid var(--ui-border);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.tm-list-create[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-block-start: 1px solid var(--ui-border);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.tm-inline-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 36px;\n  padding-inline: 10px;\n  border: 1px solid var(--brand-primary-300);\n  border-radius: var(--radius-8);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  font-size: var(--caption-2-size, 14px);\n  outline: none;\n  box-sizing: border-box;\n}\n.tm-inline-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-primary-500);\n}\n.tm-inline-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.tm-add-new[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  padding: 10px 12px;\n  border: none;\n  border-block-start: 1px solid var(--ui-border);\n  background: transparent;\n  color: var(--ui-text-muted);\n  font-size: var(--caption-2-size, 14px);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  border-radius: 0 0 var(--radius-12) var(--radius-12);\n}\n.tm-add-new[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-hover);\n  color: var(--ui-text-primary);\n}\n.tm-add-new[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.tm-col-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--ui-text-muted);\n  font-size: var(--caption-size, 12px);\n  padding: 16px 0;\n}\n.tm-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.tm-group[_ngcontent-%COMP%] {\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  background: var(--ui-surface);\n  overflow: hidden;\n  margin-block-end: 16px;\n}\n.tm-group-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 16px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  text-align: start;\n  border-block-end: 1px solid var(--ui-border);\n}\n.tm-group-head[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-hover);\n}\n.tm-group-bar[_ngcontent-%COMP%] {\n  display: block;\n  width: 4.6px;\n  height: 18px;\n  border-radius: 2px;\n  flex-shrink: 0;\n}\n.tm-group-label[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 600;\n  color: var(--ui-text-primary);\n  flex: 1;\n}\n.tm-group-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 21px;\n  height: 21px;\n  padding-inline: 6px;\n  border-radius: 20px;\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n  font-size: 11px;\n  font-weight: 700;\n}\n.tm-group-chevron[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--ui-text-muted);\n  transition: transform 0.2s;\n}\n.tm-group-chevron--collapsed[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n.tm-list-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border-block-end: 1px solid var(--ui-border);\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.tm-list-row[_ngcontent-%COMP%]:last-of-type {\n  border-block-end: none;\n}\n.tm-list-row[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-hover);\n}\n.tm-list-row--active[_ngcontent-%COMP%] {\n  background: var(--brand-primary-50);\n}\n.tm-list-row[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--brand-primary-500) inset;\n}\n.tm-list-circle[_ngcontent-%COMP%] {\n  display: block;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 1.5px solid var(--ui-border);\n  flex-shrink: 0;\n}\n.tm-list-title[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 400;\n  color: var(--ui-text-primary);\n}\n.tm-list-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.tm-list-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: var(--caption-size, 12px);\n  color: var(--ui-text-muted);\n}\n.tm-list-date[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.tm-list-empty[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  color: var(--ui-text-muted);\n  font-size: var(--caption-size, 12px);\n}\n.tm-list-add-task[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  padding: 10px 16px;\n  border: none;\n  background: transparent;\n  color: var(--ui-text-muted);\n  font-size: var(--caption-2-size, 14px);\n  cursor: pointer;\n  transition: background 0.12s;\n  text-align: start;\n}\n.tm-list-add-task[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-hover);\n  color: var(--ui-text-primary);\n}\n.tm-list-add-task[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.tm-table-wrap[_ngcontent-%COMP%] {\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  overflow-x: auto;\n  background: var(--ui-surface);\n}\n.tm-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--caption-2-size, 14px);\n  white-space: nowrap;\n}\n.tm-th[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  text-align: start;\n  font-weight: 600;\n  font-size: var(--caption-size, 12px);\n  color: var(--ui-text-muted);\n  background: var(--ui-bg-subtle);\n  border-block-end: 1px solid var(--ui-border);\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.tm-th--check[_ngcontent-%COMP%] {\n  width: 40px;\n  text-align: center;\n}\n.tm-tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.tm-tr[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-hover);\n}\n.tm-tr--selected[_ngcontent-%COMP%] {\n  background: var(--brand-primary-50);\n}\n.tm-tr--active[_ngcontent-%COMP%] {\n  background: var(--brand-primary-50);\n}\n.tm-td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-block-end: 1px solid var(--ui-border);\n  color: var(--ui-text-primary);\n  vertical-align: middle;\n}\n.tm-td--check[_ngcontent-%COMP%] {\n  width: 40px;\n  text-align: center;\n}\n.tm-td--id[_ngcontent-%COMP%] {\n  font-size: var(--caption-size, 12px);\n  color: var(--ui-text-muted);\n  font-weight: 600;\n}\n.tm-td--summary[_ngcontent-%COMP%] {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tm-td--date[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n  font-size: var(--caption-size, 12px);\n}\n.tm-checkbox[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: var(--brand-primary-500);\n}\n.tm-muted[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n}\n.tm-muted-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--ui-text-muted);\n}\n.tm-td-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n  color: var(--ui-text-muted);\n}\n.tm-cat-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 2px 10px;\n  border-radius: 20px;\n  background: var(--functional-info-100);\n  color: var(--functional-info-700);\n  font-size: var(--caption-size, 12px);\n  font-weight: 500;\n}\n.tm-inline-avatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--caption-2-size, 14px);\n}\n.tm-prio-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: var(--caption-size, 12px);\n  font-weight: 600;\n}\n.tm-prio-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.tm-prio-chip--urgent[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.tm-prio-chip--high[_ngcontent-%COMP%] {\n  background: var(--functional-warning-100);\n  color: var(--brand-accent-600);\n}\n.tm-prio-chip--medium[_ngcontent-%COMP%] {\n  background: var(--functional-info-100);\n  color: var(--functional-info-700);\n}\n.tm-prio-chip--low[_ngcontent-%COMP%] {\n  background: var(--brand-neutral-100);\n  color: var(--brand-neutral-600);\n}\n.tm-status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 10px;\n  border-radius: 20px;\n  border: 1px solid currentColor;\n  font-size: var(--caption-size, 12px);\n  font-weight: 600;\n  background: transparent;\n}\n.tm-status-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.tm-tr-create[_ngcontent-%COMP%] {\n  background: var(--ui-surface);\n}\n.tm-tr-create[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-subtle);\n}\n.tm-create-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  background: transparent;\n  color: var(--ui-text-muted);\n  font-size: var(--caption-2-size, 14px);\n  cursor: pointer;\n  padding: 0;\n}\n.tm-create-trigger[_ngcontent-%COMP%]:hover {\n  color: var(--ui-text-primary);\n}\n.tm-create-trigger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.tm-table-create-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.tm-table-create-input[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 32px;\n  padding-inline: 10px;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  font-size: var(--caption-2-size, 14px);\n  outline: none;\n}\n.tm-table-create-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-primary-500);\n}\n.tm-table-create-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.tm-detail-panel[_ngcontent-%COMP%] {\n  width: 420px;\n  min-width: 420px;\n  max-width: 420px;\n  height: 100%;\n  background: var(--ui-surface);\n  border-inline-start: 1px solid var(--ui-border);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: -4px 0 16px rgba(0, 0, 0, .06);\n}\n.tm-panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-block-end: 1px solid var(--ui-border);\n  flex-shrink: 0;\n}\n.tm-panel-head-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.tm-panel-head-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.tm-panel-id[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 600;\n  color: var(--brand-primary-500);\n}\n.tm-panel-link-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--ui-text-muted);\n  cursor: pointer;\n}\n.tm-panel-close[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: var(--radius-8);\n  background: transparent;\n  cursor: pointer;\n  color: var(--ui-text-muted);\n  transition: background 0.15s;\n}\n.tm-panel-close[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-hover);\n  color: var(--ui-text-primary);\n}\n.tm-panel-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.tm-panel-title[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans", sans-serif;\n  font-size: var(--subtitle-size, 16px);\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0 0 16px;\n  line-height: 1.4;\n}\n.tm-panel-subtitle[_ngcontent-%COMP%] {\n  color: var(--ui-text-muted);\n  font-size: var(--caption-2-size, 14px);\n}\n.tm-panel-status-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  margin-block-end: 20px;\n}\n.tm-status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  border: 1px solid;\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 600;\n  cursor: pointer;\n  background: transparent;\n  transition: opacity 0.15s;\n}\n.tm-status-badge[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.tm-status-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.tm-status-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-start: 0;\n  top: calc(100% + 4px);\n  z-index: 200;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, .12);\n  min-width: 160px;\n  overflow: hidden;\n}\n.tm-status-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 10px 14px;\n  border: none;\n  background: transparent;\n  color: var(--ui-text-primary);\n  font-size: var(--caption-2-size, 14px);\n  cursor: pointer;\n  text-align: start;\n  transition: background 0.12s;\n}\n.tm-status-option[_ngcontent-%COMP%]:hover {\n  background: var(--ui-bg-hover);\n}\n.tm-status-option--active[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background: var(--brand-primary-50);\n}\n.tm-status-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.tm-panel-section[_ngcontent-%COMP%] {\n  padding-block: 16px;\n  border-block-end: 1px solid var(--ui-border);\n}\n.tm-panel-section[_ngcontent-%COMP%]:last-child {\n  border-block-end: none;\n}\n.tm-panel-section-title[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0 0 12px;\n}\n.tm-panel-desc[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size, 14px);\n  color: var(--ui-text-muted);\n  margin: 0;\n  line-height: 1.6;\n}\n.tm-details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 120px 1fr;\n  gap: 10px 16px;\n  align-items: center;\n}\n.tm-detail-label[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size, 14px);\n  color: var(--ui-text-muted);\n  font-weight: 500;\n}\n.tm-detail-value[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size, 14px);\n  color: var(--ui-text-primary);\n  font-weight: 400;\n}\n.tm-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-block-end: 1px solid var(--ui-border);\n  margin-block-end: 16px;\n}\n.tm-tab[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border: none;\n  border-block-end: 2px solid transparent;\n  background: transparent;\n  color: var(--ui-text-muted);\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 500;\n  cursor: pointer;\n  margin-block-end: -1px;\n  transition: color 0.15s, border-color 0.15s;\n}\n.tm-tab[_ngcontent-%COMP%]:hover {\n  color: var(--ui-text-primary);\n}\n.tm-tab--active[_ngcontent-%COMP%] {\n  color: var(--brand-primary-500);\n  border-block-end-color: var(--brand-primary-500);\n  font-weight: 600;\n}\n.tm-activity-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 24px;\n  color: var(--ui-text-muted);\n  font-size: var(--caption-2-size, 14px);\n  text-align: center;\n}\n.tm-activity-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: .5;\n}\n.tm-selection-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  inset-inline-start: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 20px;\n  background: var(--brand-neutral-950);\n  color: var(--brand-neutral-0, #fff);\n  border-radius: var(--radius-12);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, .25);\n  z-index: 300;\n  white-space: nowrap;\n  animation: _ngcontent-%COMP%_tm-bar-in 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_tm-bar-in {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n}\n.tm-sel-clear[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .15);\n  color: var(--brand-neutral-0, #fff);\n  cursor: pointer;\n}\n.tm-sel-clear[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .25);\n}\n.tm-sel-count[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 500;\n  flex: 1;\n}\n.tm-sel-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.tm-sel-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border: none;\n  border-radius: var(--radius-8);\n  background: rgba(255, 255, 255, .12);\n  color: var(--brand-neutral-0, #fff);\n  font-size: var(--caption-2-size, 14px);\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.tm-sel-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .22);\n}\n.tm-sel-btn--danger[_ngcontent-%COMP%] {\n  background: rgba(240, 61, 61, .35);\n}\n.tm-sel-btn--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(240, 61, 61, .55);\n}\n.tm-sel-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n@media (max-width: 900px) {\n  .tm-board[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 16px;\n  }\n  .tm-search-box[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n  .tm-btn--primary[_ngcontent-%COMP%], \n   .tm-btn--dark[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .tm-detail-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: unset;\n    max-width: unset;\n  }\n  .tm-content--panel-open[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media (max-width: 600px) {\n  .tm-page-top[_ngcontent-%COMP%] {\n    padding: 16px 16px 0;\n  }\n  .tm-main[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .tm-board[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .tm-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .tm-controls-right[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .tm-search-box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.tm-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  inset-inline-end: 24px;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: var(--radius-12);\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 500;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, .18);\n  animation: _ngcontent-%COMP%_tm-toast-in 0.2s ease;\n  max-width: 380px;\n}\n@keyframes _ngcontent-%COMP%_tm-toast-in {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.tm-toast--error[_ngcontent-%COMP%] {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n  border: 1px solid var(--functional-danger-200);\n}\n.tm-toast--success[_ngcontent-%COMP%] {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n  border: 1px solid var(--functional-success-200);\n}\n.tm-toast[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.tm-toast[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.tm-toast-close[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: inherit;\n  opacity: .7;\n  border-radius: var(--radius-8);\n  flex-shrink: 0;\n}\n.tm-toast-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.tm-toast-close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.tm-create-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-block-start: 16px;\n}\n.tm-create-form-label[_ngcontent-%COMP%] {\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 600;\n  color: var(--ui-text-primary);\n  margin-block-start: 10px;\n}\n.tm-create-form-label[_ngcontent-%COMP%]:first-child {\n  margin-block-start: 0;\n}\n.tm-create-field[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  font-size: var(--caption-2-size, 14px);\n  outline: none;\n  transition: border-color 0.15s;\n  box-sizing: border-box;\n}\n.tm-create-field[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-primary-500);\n}\n.tm-create-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  font-size: var(--caption-2-size, 14px);\n  outline: none;\n  cursor: pointer;\n  transition: border-color 0.15s;\n  box-sizing: border-box;\n}\n.tm-create-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--brand-primary-500);\n}\n.tm-create-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-block-start: 16px;\n}\n/*# sourceMappingURL=task-management.css.map */'] });
var TaskManagementComponent = _TaskManagementComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskManagementComponent, [{
    type: Component,
    args: [{ selector: "app-task-management", standalone: true, providers: [TaskManagementStateService], imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MatIconModule,
      MatProgressSpinnerModule,
      TranslocoModule,
      DragDropModule
    ], template: `<div class="tm-page" (click)="state.closeAllMenus()">

  <!-- \u2500\u2500 Hidden file input for Import \u2500\u2500 -->
  <input #fileInput type="file" accept=".csv,.xlsx,.json" class="tm-hidden-input" aria-hidden="true" />

  <!-- \u2500\u2500 Toast notification \u2500\u2500 -->
  @if (state.toast()) {
    <div class="tm-toast tm-toast--{{ state.toast()!.type }}" role="alert">
      <mat-icon>{{ state.toast()!.type === 'error' ? 'error_outline' : 'check_circle_outline' }}</mat-icon>
      <span>{{ state.toast()!.key | transloco }}</span>
      <button class="tm-toast-close" (click)="dismissToast()" [attr.aria-label]="'common.closeDialog' | transloco">
        <mat-icon>close</mat-icon>
      </button>
    </div>
  }

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       BREADCRUMB + PAGE TITLE
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="tm-page-top">
    <nav class="tm-breadcrumb" [attr.aria-label]="'common.breadcrumb' | transloco">
      <span class="tm-bc-item tm-bc-item--link">{{ 'nav.projects' | transloco }}</span>
      <mat-icon class="tm-bc-sep">chevron_right</mat-icon>
      <span class="tm-bc-item tm-bc-item--link">{{ 'tasks.title' | transloco }}</span>
      @if (state.projectTitle()) {
        <mat-icon class="tm-bc-sep">chevron_right</mat-icon>
        <span class="tm-bc-item tm-bc-item--active">{{ state.projectTitle() }}</span>
      }
    </nav>
    <h1 class="tm-page-title">{{ state.projectTitle() || ('tasks.title' | transloco) }}</h1>

    <!-- \u2500\u2500 Controls bar \u2500\u2500 -->
    <div class="tm-controls">

      <!-- View switcher: Table | List | Board -->
      <div class="tm-view-switcher" role="group" [attr.aria-label]="'tasks.viewMode' | transloco">
        <button class="tm-view-btn" [class.tm-view-btn--active]="state.activeView() === 'table'"
          (click)="setView('table'); $event.stopPropagation()"
          [attr.aria-label]="'tasks.view.table' | transloco">
          <mat-icon>table_chart</mat-icon>
          <span>{{ 'tasks.view.table' | transloco }}</span>
        </button>
        <button class="tm-view-btn" [class.tm-view-btn--active]="state.activeView() === 'list'"
          (click)="setView('list'); $event.stopPropagation()"
          [attr.aria-label]="'tasks.view.list' | transloco">
          <mat-icon>view_list</mat-icon>
          <span>{{ 'tasks.view.list' | transloco }}</span>
        </button>
        <button class="tm-view-btn" [class.tm-view-btn--active]="state.activeView() === 'board'"
          (click)="setView('board'); $event.stopPropagation()"
          [attr.aria-label]="'tasks.view.board' | transloco">
          <mat-icon>view_kanban</mat-icon>
          <span>{{ 'tasks.view.board' | transloco }}</span>
        </button>
      </div>

      <!-- Right-side controls -->
      <div class="tm-controls-right">
        <!-- Search -->
        <div class="tm-search-box">
          <mat-icon class="tm-search-icon">search</mat-icon>
          <input
            class="tm-search-input"
            type="text"
            [placeholder]="'tasks.searchPlaceholder' | transloco"
            [value]="state.searchQuery()"
            (input)="onSearch($any($event.target).value)"
            [attr.aria-label]="'tasks.searchPlaceholder' | transloco" />
        </div>

        <!-- Filter button -->
        <button class="tm-icon-btn" (click)="toggleFilterMenu($event)"
          [attr.aria-label]="'tasks.filter' | transloco"
          [class.tm-icon-btn--active]="state.filterMenuOpen()">
          <mat-icon>tune</mat-icon>
        </button>

        <!-- Sort button -->
        <button class="tm-icon-btn" (click)="toggleSortMenu($event)"
          [attr.aria-label]="'tasks.sort' | transloco"
          [class.tm-icon-btn--active]="state.sortMenuOpen()">
          <mat-icon>swap_vert</mat-icon>
        </button>

        <!-- Import button -->
        <button class="tm-btn tm-btn--dark" (click)="triggerImport(); $event.stopPropagation()"
          [attr.aria-label]="'tasks.import' | transloco">
          <mat-icon>upload</mat-icon>
          <span>{{ 'tasks.import' | transloco }}</span>
        </button>

        <!-- New Task button \u2014 Business/Admin manage the board, Employee works their own tasks -->
        @if (!isEmployee) {
          <button class="tm-btn tm-btn--primary" (click)="openCreatePanel(); $event.stopPropagation()"
            [attr.aria-label]="'tasks.newTask' | transloco">
            <mat-icon>add_circle_outline</mat-icon>
            <span>{{ 'tasks.newTask' | transloco }}</span>
          </button>
        }
      </div>
    </div>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       CONTENT AREA  (main + optional detail panel)
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="tm-content" [class.tm-content--panel-open]="state.detailPanelOpen()">

    <!-- \u2500\u2500 MAIN VIEW \u2500\u2500 -->
    <div class="tm-main">

      <!-- Loading -->
      @if (state.loading()) {
        <div class="tm-state-center">
          <mat-spinner diameter="40"></mat-spinner>
        </div>
      }

      <!-- Error -->
      @else if (state.error()) {
        <div class="tm-state-center tm-state--error">
          <mat-icon>error_outline</mat-icon>
          <p>{{ state.error()! | transloco }}</p>
          <button class="tm-btn tm-btn--outline" (click)="retry()">{{ 'common.retry' | transloco }}</button>
        </div>
      }

      <!-- Empty state -->
      @else if (state.tasks().length === 0) {
        <div class="tm-empty">
          <img src="assets/images/ResultNotFound.png" alt="" class="tm-empty-img" />
          <p class="tm-empty-title">
            {{ 'tasks.emptyProject' | transloco }}
            <span class="tm-empty-project">{{ state.projectTitle() }}</span>
            {{ 'tasks.emptyProjectSuffix' | transloco }}
          </p>
          <p class="tm-empty-desc">{{ 'tasks.emptyDesc' | transloco }}</p>
        </div>
      }

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
           BOARD VIEW
      \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      @else if (state.activeView() === 'board') {
        <div class="tm-board" cdkDropListGroup>
          @for (col of state.kanbanColumns(); track col.id) {
            <div class="tm-col">

              <!-- Column header -->
              <div class="tm-col-head">
                <div class="tm-col-left">
                  <span class="tm-col-bar" [style.background-color]="col.indicatorColor"></span>
                  <span class="tm-col-label">{{ col.labelKey | transloco }}</span>
                  <span class="tm-col-badge">{{ col.tasks.length }}</span>
                </div>
                <div class="tm-col-actions" (click)="$event.stopPropagation()">
                  @if (!isEmployee) {
                    <button class="tm-col-btn" (click)="startInlineCreate(col.id)"
                      [attr.aria-label]="'tasks.addNew' | transloco">
                      <mat-icon>add</mat-icon>
                    </button>
                  }
                  <div class="tm-col-menu-wrap">
                    <button class="tm-col-btn" (click)="toggleColumnMenu(col.id, $event)"
                      [attr.aria-label]="'tasks.colActions' | transloco">
                      <mat-icon>more_horiz</mat-icon>
                    </button>
                    @if (state.activeColumnMenuId() === col.id) {
                      <div class="tm-dropdown" role="menu">
                        <div class="tm-dropdown-head">{{ 'tasks.actions.title' | transloco }}</div>
                        <button class="tm-dropdown-item" role="menuitem" (click)="onColumnAction('edit', col)">
                          <mat-icon>edit</mat-icon>{{ 'common.edit' | transloco }}
                        </button>
                        <button class="tm-dropdown-item" role="menuitem" (click)="onColumnAction('details', col)">
                          <mat-icon>info_outline</mat-icon>{{ 'tasks.actions.showDetails' | transloco }}
                        </button>
                        <button class="tm-dropdown-item" role="menuitem" (click)="onColumnAction('moveDown', col)">
                          <mat-icon>arrow_downward</mat-icon>{{ 'tasks.actions.moveDown' | transloco }}
                        </button>
                        <button class="tm-dropdown-item" role="menuitem" (click)="onColumnAction('moveUp', col)">
                          <mat-icon>arrow_upward</mat-icon>{{ 'tasks.actions.moveUp' | transloco }}
                        </button>
                        <button class="tm-dropdown-item" role="menuitem" (click)="onColumnAction('copyLink', col)">
                          <mat-icon>link</mat-icon>{{ 'tasks.actions.copyLink' | transloco }}
                        </button>
                        <button class="tm-dropdown-item tm-dropdown-item--danger" role="menuitem"
                          (click)="onColumnAction('delete', col)">
                          <mat-icon>delete</mat-icon>{{ 'common.delete' | transloco }}
                        </button>
                      </div>
                    }
                  </div>
                </div>
              </div>

              <!-- Drop zone -->
              <div class="tm-cards"
                cdkDropList
                [id]="'drp-' + col.id"
                [cdkDropListData]="col.tasks"
                [cdkDropListConnectedTo]="colDropIds()"
                (cdkDropListDropped)="onDrop($event, col)">

                @for (task of col.tasks; track task.id) {
                  <div class="tm-card" cdkDrag [cdkDragData]="task"
                    (click)="openDetail(task.id)" role="button"
                    [attr.aria-label]="task.title" tabindex="0"
                    (keyup.enter)="openDetail(task.id)">

                    <!-- Drag placeholder -->
                    <ng-template cdkDragPlaceholder>
                      <div class="tm-card-ghost">
                        <mat-icon>open_with</mat-icon>
                        <span>{{ 'tasks.dragHint' | transloco }}</span>
                      </div>
                    </ng-template>

                    <!-- Card body -->
                    <p class="tm-card-title">{{ task.title }}</p>

                    <!-- Tags row (priority chip as tag) -->
                    <div class="tm-card-tags">
                      <span class="tm-tag tm-tag--prio-{{ task.priority }}">
                        <mat-icon class="tm-tag-icon">{{ priorityIcon(task.priority) }}</mat-icon>
                        {{ priorityLabel(task.priority) }}
                      </span>
                    </div>

                    <!-- Footer: avatar + date + meta icons -->
                    <div class="tm-card-footer">
                      <div class="tm-avatars">
                        @if (task.assigneeId) {
                          <div class="tm-avatar" [title]="task.assigneeId">
                            {{ task.assigneeId.substring(0,2).toUpperCase() }}
                          </div>
                        } @else {
                          <div class="tm-avatar tm-avatar--empty">
                            <mat-icon>person_outline</mat-icon>
                          </div>
                        }
                      </div>
                      <div class="tm-card-meta">
                        <span class="tm-card-meta-item">
                          <mat-icon>chat_bubble_outline</mat-icon>0
                        </span>
                        <span class="tm-card-meta-item">
                          <mat-icon>link</mat-icon>0
                        </span>
                      </div>
                    </div>
                  </div>
                } @empty {
                  <div class="tm-col-empty">{{ 'tasks.colEmpty' | transloco }}</div>
                }
              </div>

              <!-- Inline create input -->
              @if (state.inlineCreateColId() === col.id) {
                <div class="tm-inline-create" (click)="$event.stopPropagation()">
                  <input class="tm-inline-input" type="text" #inlineInput
                    [placeholder]="'tasks.taskNamePlaceholder' | transloco"
                    [value]="inlineTitle()"
                    (input)="inlineTitle.set($any($event.target).value)"
                    (keyup.enter)="submitInlineCreate(col.statuses[0])"
                    (keyup.escape)="cancelInlineCreate()" autofocus />
                  <div class="tm-inline-btns">
                    <button class="tm-btn tm-btn--primary-sm"
                      [disabled]="state.saving() || !inlineTitle().trim()"
                      (click)="submitInlineCreate(col.statuses[0])">
                      {{ 'common.add' | transloco }}
                    </button>
                    <button class="tm-btn tm-btn--ghost-sm" (click)="cancelInlineCreate()">
                      {{ 'common.cancel' | transloco }}
                    </button>
                  </div>
                </div>
              }

              <!-- Add New button -->
              @if (!isEmployee) {
                <button class="tm-add-new" (click)="startInlineCreate(col.id); $event.stopPropagation()">
                  <mat-icon>add_circle_outline</mat-icon>
                  {{ 'tasks.addNew' | transloco }}
                </button>
              }
            </div>
          }
        </div>
      }

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
           LIST VIEW
      \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      @else if (state.activeView() === 'list') {
        <div class="tm-list">
          @for (group of state.listGroups(); track group.id) {
            <div class="tm-group">

              <!-- Group header -->
              <button class="tm-group-head" (click)="toggleGroup(group.id)"
                [attr.aria-expanded]="!isGroupCollapsed(group.id)">
                <span class="tm-group-bar" [style.background-color]="group.indicatorColor"></span>
                <span class="tm-group-label">{{ group.labelKey | transloco }}</span>
                <span class="tm-group-badge">{{ group.tasks.length }}</span>
                <mat-icon class="tm-group-chevron"
                  [class.tm-group-chevron--collapsed]="isGroupCollapsed(group.id)">
                  expand_more
                </mat-icon>
              </button>

              <!-- Group rows -->
              @if (!isGroupCollapsed(group.id)) {
                @for (task of group.tasks; track task.id) {
                  <div class="tm-list-row" (click)="openDetail(task.id)" role="button"
                    tabindex="0" (keyup.enter)="openDetail(task.id)"
                    [class.tm-list-row--active]="state.selectedTaskId() === task.id">
                    <span class="tm-list-circle" aria-hidden="true"></span>
                    <span class="tm-list-title">{{ task.title }}</span>
                    <div class="tm-list-meta">
                      @if (task.dueDate) {
                        <span class="tm-list-date">
                          <mat-icon>calendar_today</mat-icon>
                          {{ task.dueDate | date:'MMM d' }}
                        </span>
                      }
                      @if (task.assigneeId) {
                        <div class="tm-avatars">
                          <div class="tm-avatar tm-avatar--sm" [title]="task.assigneeId">
                            {{ task.assigneeId.substring(0,2).toUpperCase() }}
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                } @empty {
                  <div class="tm-list-empty">{{ 'tasks.colEmpty' | transloco }}</div>
                }

                <!-- Add Task row -->
                @if (state.inlineCreateColId() === group.id) {
                  <div class="tm-list-create" (click)="$event.stopPropagation()">
                    <input class="tm-inline-input" type="text"
                      [placeholder]="'tasks.taskNamePlaceholder' | transloco"
                      [value]="inlineTitle()"
                      (input)="inlineTitle.set($any($event.target).value)"
                      (keyup.enter)="submitInlineCreate(group.statuses[0])"
                      (keyup.escape)="cancelInlineCreate()" autofocus />
                    <div class="tm-inline-btns">
                      <button class="tm-btn tm-btn--primary-sm"
                        [disabled]="state.saving() || !inlineTitle().trim()"
                        (click)="submitInlineCreate(group.statuses[0])">
                        {{ 'common.add' | transloco }}
                      </button>
                      <button class="tm-btn tm-btn--ghost-sm" (click)="cancelInlineCreate()">
                        {{ 'common.cancel' | transloco }}
                      </button>
                    </div>
                  </div>
                } @else if (!isEmployee) {
                  <button class="tm-list-add-task" (click)="startInlineCreate(group.id); $event.stopPropagation()">
                    <mat-icon>add_circle_outline</mat-icon>
                    {{ 'tasks.addTask' | transloco }}
                  </button>
                }
              }
            </div>
          }
        </div>
      }

      <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
           TABLE VIEW
      \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
      @else {
        <div class="tm-table-wrap">
          <table class="tm-table" role="grid">
            <thead>
              <tr>
                <th class="tm-th tm-th--check" scope="col">
                  <input type="checkbox" class="tm-checkbox"
                    [checked]="state.allSelected()"
                    (change)="toggleSelectAll()"
                    [attr.aria-label]="'tasks.selectAll' | transloco" />
                </th>
                <th class="tm-th" scope="col">{{ 'tasks.table.id' | transloco }}</th>
                <th class="tm-th" scope="col">{{ 'tasks.table.summary' | transloco }}</th>
                <th class="tm-th" scope="col">{{ 'tasks.table.category' | transloco }}</th>
                <th class="tm-th" scope="col">{{ 'tasks.table.assignee' | transloco }}</th>
                <th class="tm-th" scope="col">{{ 'tasks.table.dueDate' | transloco }}</th>
                <th class="tm-th" scope="col">{{ 'tasks.table.priority' | transloco }}</th>
                <th class="tm-th" scope="col">{{ 'tasks.table.createdAt' | transloco }}</th>
                <th class="tm-th" scope="col">{{ 'tasks.table.updatedAt' | transloco }}</th>
                <th class="tm-th" scope="col">{{ 'tasks.table.status' | transloco }}</th>
              </tr>
            </thead>
            <tbody>
              @for (task of state.filteredTasks(); track task.id) {
                <tr class="tm-tr"
                  [class.tm-tr--selected]="isRowSelected(task.id)"
                  [class.tm-tr--active]="state.selectedTaskId() === task.id"
                  (click)="openDetail(task.id)" role="row">

                  <td class="tm-td tm-td--check" (click)="toggleRowSelect($event, task.id)">
                    <input type="checkbox" class="tm-checkbox"
                      [checked]="isRowSelected(task.id)"
                      (change)="toggleRowSelect($event, task.id)"
                      [attr.aria-label]="'tasks.selectRow' | transloco" />
                  </td>
                  <td class="tm-td tm-td--id">{{ formatDisplayId(task.id) }}</td>
                  <td class="tm-td tm-td--summary">{{ task.summary || task.title }}</td>
                  <td class="tm-td">
                    <span class="tm-cat-chip">{{ task.categoryId || '\u2014' }}</span>
                  </td>
                  <td class="tm-td">
                    @if (task.assigneeId) {
                      <div class="tm-inline-avatar">
                        <div class="tm-avatar tm-avatar--sm">{{ task.assigneeId.substring(0,2).toUpperCase() }}</div>
                        <span>{{ task.assigneeId }}</span>
                      </div>
                    } @else { <span class="tm-muted">\u2014</span> }
                  </td>
                  <td class="tm-td tm-td--date">
                    {{ task.dueDate ? (task.dueDate | date:'MMM d, yyyy') : '\u2014' }}
                  </td>
                  <td class="tm-td">
                    <span class="tm-prio-chip tm-prio-chip--{{ task.priority }}">
                      <mat-icon class="tm-prio-icon">{{ priorityIcon(task.priority) }}</mat-icon>
                      {{ priorityLabel(task.priority) }}
                    </span>
                  </td>
                  <td class="tm-td tm-td--date">{{ task.createdAt ? (task.createdAt | date:'MMM d, yyyy') : '\u2014' }}</td>
                  <td class="tm-td tm-td--date">{{ task.updatedAt ? (task.updatedAt | date:'MMM d, yyyy') : '\u2014' }}</td>
                  <td class="tm-td">
                    <span class="tm-status-chip" [style.border-color]="statusIndicatorColor(task.status)"
                      [style.color]="statusIndicatorColor(task.status)">
                      <mat-icon class="tm-status-icon">check_circle</mat-icon>
                      {{ statusLabel(task.status) }}
                    </span>
                  </td>
                </tr>
              } @empty {
                <tr>
                  <td colspan="10" class="tm-td-empty">{{ 'tasks.noResults' | transloco }}</td>
                </tr>
              }

              <!-- Inline create row -->
              @if (!isEmployee) {
              <tr class="tm-tr-create" (click)="$event.stopPropagation()">
                <td class="tm-td" colspan="2">
                  <button class="tm-create-trigger" (click)="focusTableCreateInput()">
                    <mat-icon>add</mat-icon>
                    {{ 'tasks.addNew' | transloco }}
                  </button>
                </td>
                <td class="tm-td" colspan="8">
                  <div class="tm-table-create-row">
                    <input #tableCreateInput class="tm-table-create-input"
                      type="text"
                      [placeholder]="'tasks.taskNamePlaceholder' | transloco"
                      [value]="tableCreateTitle()"
                      (input)="tableCreateTitle.set($any($event.target).value)"
                      (keyup.enter)="submitTableCreate()"
                      (keyup.escape)="tableCreateTitle.set('')" />
                    <div class="tm-table-create-actions">
                      <mat-icon class="tm-muted-icon">calendar_today</mat-icon>
                      <mat-icon class="tm-muted-icon">group</mat-icon>
                      <button class="tm-btn tm-btn--primary-sm"
                        [disabled]="state.saving() || !tableCreateTitle().trim()"
                        (click)="submitTableCreate()">
                        {{ 'tasks.create' | transloco }}
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              }
            </tbody>
          </table>
        </div>
      }

    </div><!-- /.tm-main -->

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
         TASK DETAIL PANEL (right drawer)
    \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    @if (state.detailPanelOpen()) {
      <aside class="tm-detail-panel" role="complementary"
        [attr.aria-label]="'tasks.detailPanel' | transloco"
        (click)="$event.stopPropagation()">

        <!-- Create mode -->
        @if (state.createMode()) {
          <div class="tm-panel-head">
            <span class="tm-panel-id">{{ 'tasks.newTask' | transloco }}</span>
            <button class="tm-panel-close" (click)="closeDetail()"
              [attr.aria-label]="'common.close' | transloco">
              <mat-icon>close</mat-icon>
            </button>
          </div>
          <div class="tm-panel-body">
            <p class="tm-panel-subtitle">{{ 'tasks.createHint' | transloco }}</p>

            <div class="tm-create-form">
              <!-- Title -->
              <label class="tm-create-form-label" for="panel-task-title">
                {{ 'tasks.table.title' | transloco }}
              </label>
              <input id="panel-task-title" class="tm-create-field"
                type="text"
                [placeholder]="'tasks.taskNamePlaceholder' | transloco"
                [value]="panelCreateTitle()"
                (input)="panelCreateTitle.set($any($event.target).value)"
                (keyup.enter)="submitCreatePanel()"
                autofocus />

              <!-- Status -->
              <label class="tm-create-form-label" for="panel-task-status">
                {{ 'tasks.table.status' | transloco }}
              </label>
              <select id="panel-task-status" class="tm-create-select"
                [value]="panelCreateStatus()"
                (change)="panelCreateStatus.set($any($event.target).value)">
                @for (opt of STATUS_OPTIONS; track opt.value) {
                  <option [value]="opt.value">{{ opt.label }}</option>
                }
              </select>

              <!-- Priority -->
              <label class="tm-create-form-label" for="panel-task-priority">
                {{ 'tasks.table.priority' | transloco }}
              </label>
              <select id="panel-task-priority" class="tm-create-select"
                [value]="panelCreatePriority()"
                (change)="panelCreatePriority.set($any($event.target).value)">
                <option value="urgent">{{ 'tasks.priority.urgent' | transloco }}</option>
                <option value="high">{{ 'tasks.priority.high' | transloco }}</option>
                <option value="medium">{{ 'tasks.priority.medium' | transloco }}</option>
                <option value="low">{{ 'tasks.priority.low' | transloco }}</option>
              </select>

              <div class="tm-create-form-actions">
                <button class="tm-btn tm-btn--primary" (click)="submitCreatePanel()"
                  [disabled]="state.saving() || !panelCreateTitle().trim()">
                  @if (state.saving()) {
                    <mat-spinner diameter="16"></mat-spinner>
                  } @else {
                    <mat-icon>add</mat-icon>
                  }
                  {{ 'tasks.create' | transloco }}
                </button>
                <button class="tm-btn tm-btn--ghost-sm" (click)="closeDetail()">
                  {{ 'common.cancel' | transloco }}
                </button>
              </div>
            </div>
          </div>
        }

        <!-- Detail mode -->
        @if (!state.createMode() && state.selectedTask()) {
          <div class="tm-panel-head">
            <div class="tm-panel-head-left">
              <span class="tm-panel-id">{{ formatDisplayId(state.selectedTask()!.id) }}</span>
              <mat-icon class="tm-panel-link-icon">link</mat-icon>
            </div>
            <div class="tm-panel-head-right">
              <button class="tm-icon-btn" [attr.aria-label]="'tasks.moreActions' | transloco">
                <mat-icon>more_horiz</mat-icon>
              </button>
              <button class="tm-icon-btn" (click)="closeDetail()"
                [attr.aria-label]="'common.close' | transloco">
                <mat-icon>close</mat-icon>
              </button>
            </div>
          </div>

          <div class="tm-panel-body">
            <!-- Title -->
            <h2 class="tm-panel-title">{{ state.selectedTask()!.title }}</h2>

            <!-- Status inline dropdown -->
            <div class="tm-panel-status-wrap" (click)="$event.stopPropagation()">
              <button class="tm-status-badge"
                [style.background-color]="statusIndicatorColor(state.selectedTask()!.status) + '22'"
                [style.color]="statusIndicatorColor(state.selectedTask()!.status)"
                [style.border-color]="statusIndicatorColor(state.selectedTask()!.status)"
                (click)="toggleStatusDropdown()"
                [attr.aria-label]="'tasks.changeStatus' | transloco"
                [attr.aria-expanded]="statusDropdownOpen()">
                {{ statusLabel(state.selectedTask()!.status) }}
                <mat-icon>expand_more</mat-icon>
              </button>
              @if (statusDropdownOpen()) {
                <div class="tm-status-dropdown" role="listbox">
                  @for (opt of STATUS_OPTIONS; track opt.value) {
                    <button class="tm-status-option" role="option"
                      [class.tm-status-option--active]="state.selectedTask()!.status === opt.value"
                      (click)="changeTaskStatus(opt.value)">
                      <span class="tm-status-dot" [style.background-color]="statusIndicatorColor(opt.value)"></span>
                      {{ opt.label }}
                    </button>
                  }
                </div>
              }
            </div>

            <!-- Description -->
            <section class="tm-panel-section">
              <h3 class="tm-panel-section-title">{{ 'tasks.description' | transloco }}</h3>
              <p class="tm-panel-desc">
                {{ state.selectedTask()!.description || ('tasks.noDescription' | transloco) }}
              </p>
            </section>

            <!-- Details grid -->
            <section class="tm-panel-section">
              <h3 class="tm-panel-section-title">{{ 'tasks.details' | transloco }}</h3>
              <div class="tm-details-grid">
                <span class="tm-detail-label">{{ 'tasks.table.id' | transloco }}</span>
                <span class="tm-detail-value">{{ formatDisplayId(state.selectedTask()!.id) }}</span>

                <span class="tm-detail-label">{{ 'tasks.table.summary' | transloco }}</span>
                <span class="tm-detail-value">{{ state.selectedTask()!.summary || state.selectedTask()!.title }}</span>

                <span class="tm-detail-label">{{ 'tasks.table.assignee' | transloco }}</span>
                <span class="tm-detail-value">
                  {{ state.selectedTask()!.assigneeId || '\u2014' }}
                </span>

                <span class="tm-detail-label">{{ 'tasks.table.dueDate' | transloco }}</span>
                <span class="tm-detail-value">
                  {{ state.selectedTask()!.dueDate ? (state.selectedTask()!.dueDate | date:'MMM d, yyyy') : '\u2014' }}
                </span>

                <span class="tm-detail-label">{{ 'tasks.table.priority' | transloco }}</span>
                <span class="tm-detail-value">
                  <span class="tm-prio-chip tm-prio-chip--{{ state.selectedTask()!.priority }}">
                    <mat-icon class="tm-prio-icon">{{ priorityIcon(state.selectedTask()!.priority) }}</mat-icon>
                    {{ priorityLabel(state.selectedTask()!.priority) }}
                  </span>
                </span>

                <span class="tm-detail-label">{{ 'tasks.table.createdAt' | transloco }}</span>
                <span class="tm-detail-value">
                  {{ state.selectedTask()!.createdAt ? (state.selectedTask()!.createdAt | date:'MMM d, yyyy') : '\u2014' }}
                </span>

                <span class="tm-detail-label">{{ 'tasks.table.updatedAt' | transloco }}</span>
                <span class="tm-detail-value">
                  {{ state.selectedTask()!.updatedAt ? (state.selectedTask()!.updatedAt | date:'MMM d, yyyy') : '\u2014' }}
                </span>
              </div>
            </section>

            <!-- Activity tabs -->
            <section class="tm-panel-section">
              <div class="tm-tabs" role="tablist">
                <button class="tm-tab tm-tab--active" role="tab">{{ 'tasks.tabs.all' | transloco }}</button>
                <button class="tm-tab" role="tab">{{ 'tasks.tabs.comments' | transloco }}</button>
                <button class="tm-tab" role="tab">{{ 'tasks.tabs.history' | transloco }}</button>
                <button class="tm-tab" role="tab">{{ 'tasks.tabs.attachments' | transloco }}</button>
              </div>
              <div class="tm-activity-empty">
                <mat-icon>history</mat-icon>
                <p>{{ 'tasks.noActivity' | transloco }}</p>
              </div>
            </section>
          </div>
        }

      </aside>
    }

  </div><!-- /.tm-content -->

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
       SELECTION ACTION BAR (fixed bottom)
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (state.hasSelection()) {
    <div class="tm-selection-bar" role="toolbar"
      [attr.aria-label]="'tasks.selectionBar' | transloco">
      <button class="tm-sel-clear" (click)="state.clearSelection()"
        [attr.aria-label]="'tasks.clearSelection' | transloco">
        <mat-icon>close</mat-icon>
      </button>
      <span class="tm-sel-count">
        {{ state.selectionCount() }} {{ 'tasks.itemsSelected' | transloco }}
      </span>
      <div class="tm-sel-actions">
        <button class="tm-sel-btn" (click)="copySectionToClipboard()">
          <mat-icon>content_copy</mat-icon>
          {{ 'tasks.clipToClipboard' | transloco }}
        </button>
        @if (!isEmployee) {
          <button class="tm-sel-btn tm-sel-btn--danger" (click)="deleteSelected()">
            <mat-icon>delete</mat-icon>
            {{ 'common.delete' | transloco }}
          </button>
        }
      </div>
    </div>
  }

</div><!-- /.tm-page -->
`, styles: ['/* src/features/tasks/task-management/task-management.css */\n.tm-page {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  background: var(--ui-bg-surface);\n  position: relative;\n}\n.tm-hidden-input {\n  display: none;\n}\n.tm-page-top {\n  padding: 24px 24px 0;\n  background: var(--ui-surface);\n  border-block-end: 1px solid var(--ui-border);\n  flex-shrink: 0;\n}\n.tm-breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-block-end: 8px;\n}\n.tm-bc-sep {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--ui-text-muted);\n}\n.tm-bc-item {\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 500;\n  color: var(--ui-text-primary);\n  white-space: nowrap;\n}\n.tm-bc-item--link {\n  cursor: pointer;\n}\n.tm-bc-item--link:hover {\n  text-decoration: underline;\n}\n.tm-bc-item--active {\n  color: var(--brand-primary-500);\n}\n.tm-page-title {\n  font-family: "IBM Plex Sans", sans-serif;\n  font-size: var(--h6-size, 26px);\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0 0 20px;\n  line-height: 1.4;\n}\n.tm-controls {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding-block-end: 16px;\n  flex-wrap: wrap;\n}\n.tm-view-switcher {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: var(--ui-bg-subtle);\n  border-radius: var(--radius-8);\n  padding: 6px 12px;\n  flex-shrink: 0;\n}\n.tm-view-btn {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 8px;\n  border: none;\n  border-radius: var(--radius-8);\n  background: transparent;\n  color: var(--ui-text-primary);\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s;\n  white-space: nowrap;\n}\n.tm-view-btn mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.tm-view-btn--active {\n  background: var(--ui-surface);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, .1);\n}\n.tm-view-btn:hover:not(.tm-view-btn--active) {\n  background: var(--ui-bg-hover);\n}\n.tm-controls-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.tm-search-box {\n  position: relative;\n  width: 314px;\n  flex-shrink: 0;\n}\n.tm-search-icon {\n  position: absolute;\n  inset-inline-start: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--ui-text-muted);\n  pointer-events: none;\n}\n.tm-search-input {\n  width: 100%;\n  height: 42px;\n  padding-inline: 36px 12px;\n  border: 0.5px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  font-size: var(--subtitle-size, 16px);\n  outline: none;\n  box-sizing: border-box;\n  box-shadow: 0 0 1px rgba(204, 204, 204, .2);\n  transition: border-color 0.2s;\n}\n.tm-search-input:focus {\n  border-color: var(--brand-primary-400);\n}\n.tm-search-input::placeholder {\n  color: var(--ui-text-muted);\n}\n.tm-icon-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border: none;\n  border-radius: var(--radius-12);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  cursor: pointer;\n  box-shadow: 0 0 1px rgba(204, 204, 204, .2), inset 0 -2px 2px rgba(204, 204, 204, .2);\n  transition: background 0.15s;\n}\n.tm-icon-btn:hover {\n  background: var(--ui-bg-hover);\n}\n.tm-icon-btn--active {\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-500);\n}\n.tm-icon-btn mat-icon {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.tm-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  height: 48px;\n  padding-inline: 16px;\n  border-radius: var(--radius-12);\n  border: none;\n  font-size: var(--body-size, 18px);\n  font-weight: 400;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: 0 0 1px rgba(204, 204, 204, .2), inset 0 -2px 2px rgba(204, 204, 204, .2);\n  transition: opacity 0.15s;\n}\n.tm-btn:hover {\n  opacity: 0.9;\n}\n.tm-btn mat-icon {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.tm-btn--primary {\n  width: 152px;\n  justify-content: center;\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n  border: 1px solid var(--brand-primary-500);\n  box-shadow:\n    0 0 1px rgba(46, 53, 143, .2),\n    inset 0 -2px 2px var(--brand-primary-800),\n    inset 0 0 0 var(--brand-primary-700);\n}\n.tm-btn--dark {\n  width: 152px;\n  justify-content: center;\n  background: var(--brand-neutral-950);\n  color: var(--brand-neutral-0, #fff);\n}\n.tm-btn--outline {\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  border: 1px solid var(--ui-border);\n}\n.tm-btn--primary-sm {\n  height: 32px;\n  padding-inline: 12px;\n  font-size: var(--caption-2-size, 14px);\n  background: var(--brand-primary-500);\n  color: var(--brand-neutral-0, #fff);\n  border-radius: var(--radius-8);\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  box-shadow: none;\n}\n.tm-btn--ghost-sm {\n  height: 32px;\n  padding-inline: 12px;\n  font-size: var(--caption-2-size, 14px);\n  background: transparent;\n  color: var(--ui-text-muted);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  box-shadow: none;\n}\n.tm-content {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n  transition: none;\n}\n.tm-main {\n  flex: 1;\n  min-width: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 24px;\n}\n.tm-content--panel-open .tm-main {\n  overflow-x: auto;\n}\n.tm-state-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  min-height: 400px;\n  color: var(--ui-text-muted);\n  text-align: center;\n}\n.tm-state--error {\n  color: var(--functional-danger-600);\n}\n.tm-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  min-height: 500px;\n  text-align: center;\n}\n.tm-empty-img {\n  width: 244px;\n  height: auto;\n  object-fit: contain;\n}\n.tm-empty-title {\n  font-family: "IBM Plex Sans", sans-serif;\n  font-size: var(--title-size, 22px);\n  font-weight: 700;\n  color: var(--brand-neutral-950);\n  margin: 0;\n  line-height: 1.4;\n}\n.tm-empty-project {\n  color: var(--brand-tertiary-500);\n}\n.tm-empty-desc {\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 500;\n  color: var(--ui-text-muted);\n  margin: 0;\n  max-width: 480px;\n}\n.tm-board {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 32px;\n  align-items: start;\n  min-width: 900px;\n}\n.tm-col {\n  display: flex;\n  flex-direction: column;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  overflow: visible;\n  position: relative;\n}\n.tm-col-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n  border-block-end: 1px solid var(--ui-border);\n  min-height: 47px;\n}\n.tm-col-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.tm-col-bar {\n  display: block;\n  width: 4.6px;\n  height: 18px;\n  border-radius: 2px;\n  flex-shrink: 0;\n}\n.tm-col-label {\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 600;\n  color: var(--ui-text-primary);\n}\n.tm-col-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 21px;\n  height: 25px;\n  padding-inline: 6px;\n  border-radius: var(--radius-8);\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n  font-size: 11px;\n  font-weight: 700;\n}\n.tm-col-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.tm-col-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 24px;\n  border: none;\n  border-radius: var(--radius-8);\n  background: transparent;\n  color: var(--ui-text-muted);\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.tm-col-btn:hover {\n  background: var(--ui-bg-hover);\n  color: var(--ui-text-primary);\n}\n.tm-col-btn mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.tm-col-menu-wrap {\n  position: relative;\n}\n.tm-dropdown {\n  position: absolute;\n  inset-inline-end: 0;\n  top: calc(100% + 4px);\n  z-index: 100;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, .12);\n  min-width: 152px;\n  padding: 6px 0;\n}\n.tm-dropdown-head {\n  padding: 6px 12px 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--ui-text-muted);\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  border-block-end: 1px solid var(--ui-border);\n  margin-block-end: 4px;\n}\n.tm-dropdown-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 8px 12px;\n  border: none;\n  background: transparent;\n  color: var(--ui-text-primary);\n  font-size: var(--caption-2-size, 14px);\n  cursor: pointer;\n  text-align: start;\n  transition: background 0.12s;\n}\n.tm-dropdown-item:hover {\n  background: var(--ui-bg-hover);\n}\n.tm-dropdown-item mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--ui-text-muted);\n}\n.tm-dropdown-item--danger {\n  color: var(--functional-danger-600);\n}\n.tm-dropdown-item--danger mat-icon {\n  color: var(--functional-danger-400);\n}\n.tm-cards {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 12px;\n  min-height: 80px;\n}\n.tm-cards.cdk-drop-list-dragging .tm-card:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.tm-card {\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  padding: 12px;\n  cursor: pointer;\n  transition: box-shadow 0.15s, transform 0.15s;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.tm-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, .08);\n}\n.tm-card:focus-visible {\n  outline: 2px solid var(--brand-primary-500);\n  outline-offset: 2px;\n}\n.cdk-drag-preview {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, .15);\n  border-radius: var(--radius-8);\n  background: var(--ui-surface);\n  border: 1px solid var(--brand-primary-300);\n  opacity: .95;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, .2, 1);\n}\n.tm-card-ghost {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  height: 80px;\n  border: 1.5px dashed var(--ui-border);\n  border-radius: var(--radius-8);\n  color: var(--ui-text-muted);\n  font-size: var(--caption-2-size, 14px);\n  background: var(--ui-bg-subtle);\n}\n.tm-card-ghost mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.tm-card-title {\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 500;\n  color: var(--ui-text-primary);\n  margin: 0 0 8px;\n  line-height: 1.4;\n}\n.tm-card-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-block-end: 10px;\n}\n.tm-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.tm-tag-icon {\n  font-size: 12px;\n  width: 12px;\n  height: 12px;\n}\n.tm-tag--prio-urgent {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.tm-tag--prio-high {\n  background: var(--functional-warning-100);\n  color: var(--brand-accent-600);\n}\n.tm-tag--prio-medium {\n  background: var(--functional-info-100);\n  color: var(--functional-info-700);\n}\n.tm-tag--prio-low {\n  background: var(--brand-neutral-100);\n  color: var(--brand-neutral-600);\n}\n.tm-card-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.tm-card-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.tm-card-meta-item {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 11px;\n  color: var(--ui-text-muted);\n}\n.tm-card-meta-item mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.tm-avatars {\n  display: flex;\n  align-items: center;\n}\n.tm-avatar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: var(--brand-primary-100);\n  color: var(--brand-primary-700);\n  font-size: 11px;\n  font-weight: 700;\n  border: 2px solid var(--ui-surface);\n  margin-inline-end: -6px;\n  flex-shrink: 0;\n}\n.tm-avatar--sm {\n  width: 22px;\n  height: 22px;\n  font-size: 10px;\n}\n.tm-avatar--empty {\n  background: var(--brand-neutral-100);\n  color: var(--ui-text-muted);\n}\n.tm-avatar--empty mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.tm-inline-create {\n  padding: 8px 12px;\n  border-block-start: 1px solid var(--ui-border);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.tm-list-create {\n  padding: 8px 16px;\n  border-block-start: 1px solid var(--ui-border);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.tm-inline-input {\n  width: 100%;\n  height: 36px;\n  padding-inline: 10px;\n  border: 1px solid var(--brand-primary-300);\n  border-radius: var(--radius-8);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  font-size: var(--caption-2-size, 14px);\n  outline: none;\n  box-sizing: border-box;\n}\n.tm-inline-input:focus {\n  border-color: var(--brand-primary-500);\n}\n.tm-inline-btns {\n  display: flex;\n  gap: 6px;\n}\n.tm-add-new {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  padding: 10px 12px;\n  border: none;\n  border-block-start: 1px solid var(--ui-border);\n  background: transparent;\n  color: var(--ui-text-muted);\n  font-size: var(--caption-2-size, 14px);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  border-radius: 0 0 var(--radius-12) var(--radius-12);\n}\n.tm-add-new:hover {\n  background: var(--ui-bg-hover);\n  color: var(--ui-text-primary);\n}\n.tm-add-new mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.tm-col-empty {\n  text-align: center;\n  color: var(--ui-text-muted);\n  font-size: var(--caption-size, 12px);\n  padding: 16px 0;\n}\n.tm-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.tm-group {\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  background: var(--ui-surface);\n  overflow: hidden;\n  margin-block-end: 16px;\n}\n.tm-group-head {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  padding: 10px 16px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  text-align: start;\n  border-block-end: 1px solid var(--ui-border);\n}\n.tm-group-head:hover {\n  background: var(--ui-bg-hover);\n}\n.tm-group-bar {\n  display: block;\n  width: 4.6px;\n  height: 18px;\n  border-radius: 2px;\n  flex-shrink: 0;\n}\n.tm-group-label {\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 600;\n  color: var(--ui-text-primary);\n  flex: 1;\n}\n.tm-group-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 21px;\n  height: 21px;\n  padding-inline: 6px;\n  border-radius: 20px;\n  background: var(--brand-primary-50);\n  color: var(--brand-primary-600);\n  font-size: 11px;\n  font-weight: 700;\n}\n.tm-group-chevron {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--ui-text-muted);\n  transition: transform 0.2s;\n}\n.tm-group-chevron--collapsed {\n  transform: rotate(-90deg);\n}\n.tm-list-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border-block-end: 1px solid var(--ui-border);\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.tm-list-row:last-of-type {\n  border-block-end: none;\n}\n.tm-list-row:hover {\n  background: var(--ui-bg-hover);\n}\n.tm-list-row--active {\n  background: var(--brand-primary-50);\n}\n.tm-list-row:focus-visible {\n  outline: 2px solid var(--brand-primary-500) inset;\n}\n.tm-list-circle {\n  display: block;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 1.5px solid var(--ui-border);\n  flex-shrink: 0;\n}\n.tm-list-title {\n  flex: 1;\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 400;\n  color: var(--ui-text-primary);\n}\n.tm-list-meta {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.tm-list-date {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: var(--caption-size, 12px);\n  color: var(--ui-text-muted);\n}\n.tm-list-date mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.tm-list-empty {\n  padding: 12px 16px;\n  color: var(--ui-text-muted);\n  font-size: var(--caption-size, 12px);\n}\n.tm-list-add-task {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  padding: 10px 16px;\n  border: none;\n  background: transparent;\n  color: var(--ui-text-muted);\n  font-size: var(--caption-2-size, 14px);\n  cursor: pointer;\n  transition: background 0.12s;\n  text-align: start;\n}\n.tm-list-add-task:hover {\n  background: var(--ui-bg-hover);\n  color: var(--ui-text-primary);\n}\n.tm-list-add-task mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.tm-table-wrap {\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  overflow-x: auto;\n  background: var(--ui-surface);\n}\n.tm-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--caption-2-size, 14px);\n  white-space: nowrap;\n}\n.tm-th {\n  padding: 10px 16px;\n  text-align: start;\n  font-weight: 600;\n  font-size: var(--caption-size, 12px);\n  color: var(--ui-text-muted);\n  background: var(--ui-bg-subtle);\n  border-block-end: 1px solid var(--ui-border);\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.tm-th--check {\n  width: 40px;\n  text-align: center;\n}\n.tm-tr {\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.tm-tr:hover {\n  background: var(--ui-bg-hover);\n}\n.tm-tr--selected {\n  background: var(--brand-primary-50);\n}\n.tm-tr--active {\n  background: var(--brand-primary-50);\n}\n.tm-td {\n  padding: 12px 16px;\n  border-block-end: 1px solid var(--ui-border);\n  color: var(--ui-text-primary);\n  vertical-align: middle;\n}\n.tm-td--check {\n  width: 40px;\n  text-align: center;\n}\n.tm-td--id {\n  font-size: var(--caption-size, 12px);\n  color: var(--ui-text-muted);\n  font-weight: 600;\n}\n.tm-td--summary {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tm-td--date {\n  color: var(--ui-text-muted);\n  font-size: var(--caption-size, 12px);\n}\n.tm-checkbox {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n  accent-color: var(--brand-primary-500);\n}\n.tm-muted {\n  color: var(--ui-text-muted);\n}\n.tm-muted-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--ui-text-muted);\n}\n.tm-td-empty {\n  text-align: center;\n  padding: 32px;\n  color: var(--ui-text-muted);\n}\n.tm-cat-chip {\n  display: inline-flex;\n  padding: 2px 10px;\n  border-radius: 20px;\n  background: var(--functional-info-100);\n  color: var(--functional-info-700);\n  font-size: var(--caption-size, 12px);\n  font-weight: 500;\n}\n.tm-inline-avatar {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: var(--caption-2-size, 14px);\n}\n.tm-prio-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: var(--caption-size, 12px);\n  font-weight: 600;\n}\n.tm-prio-icon {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.tm-prio-chip--urgent {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-600);\n}\n.tm-prio-chip--high {\n  background: var(--functional-warning-100);\n  color: var(--brand-accent-600);\n}\n.tm-prio-chip--medium {\n  background: var(--functional-info-100);\n  color: var(--functional-info-700);\n}\n.tm-prio-chip--low {\n  background: var(--brand-neutral-100);\n  color: var(--brand-neutral-600);\n}\n.tm-status-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 10px;\n  border-radius: 20px;\n  border: 1px solid currentColor;\n  font-size: var(--caption-size, 12px);\n  font-weight: 600;\n  background: transparent;\n}\n.tm-status-icon {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.tm-tr-create {\n  background: var(--ui-surface);\n}\n.tm-tr-create:hover {\n  background: var(--ui-bg-subtle);\n}\n.tm-create-trigger {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  border: none;\n  background: transparent;\n  color: var(--ui-text-muted);\n  font-size: var(--caption-2-size, 14px);\n  cursor: pointer;\n  padding: 0;\n}\n.tm-create-trigger:hover {\n  color: var(--ui-text-primary);\n}\n.tm-create-trigger mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.tm-table-create-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.tm-table-create-input {\n  flex: 1;\n  height: 32px;\n  padding-inline: 10px;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  font-size: var(--caption-2-size, 14px);\n  outline: none;\n}\n.tm-table-create-input:focus {\n  border-color: var(--brand-primary-500);\n}\n.tm-table-create-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.tm-detail-panel {\n  width: 420px;\n  min-width: 420px;\n  max-width: 420px;\n  height: 100%;\n  background: var(--ui-surface);\n  border-inline-start: 1px solid var(--ui-border);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: -4px 0 16px rgba(0, 0, 0, .06);\n}\n.tm-panel-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-block-end: 1px solid var(--ui-border);\n  flex-shrink: 0;\n}\n.tm-panel-head-left {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.tm-panel-head-right {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.tm-panel-id {\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 600;\n  color: var(--brand-primary-500);\n}\n.tm-panel-link-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--ui-text-muted);\n  cursor: pointer;\n}\n.tm-panel-close {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: var(--radius-8);\n  background: transparent;\n  cursor: pointer;\n  color: var(--ui-text-muted);\n  transition: background 0.15s;\n}\n.tm-panel-close:hover {\n  background: var(--ui-bg-hover);\n  color: var(--ui-text-primary);\n}\n.tm-panel-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.tm-panel-title {\n  font-family: "IBM Plex Sans", sans-serif;\n  font-size: var(--subtitle-size, 16px);\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0 0 16px;\n  line-height: 1.4;\n}\n.tm-panel-subtitle {\n  color: var(--ui-text-muted);\n  font-size: var(--caption-2-size, 14px);\n}\n.tm-panel-status-wrap {\n  position: relative;\n  margin-block-end: 20px;\n}\n.tm-status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  border: 1px solid;\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 600;\n  cursor: pointer;\n  background: transparent;\n  transition: opacity 0.15s;\n}\n.tm-status-badge:hover {\n  opacity: 0.8;\n}\n.tm-status-badge mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.tm-status-dropdown {\n  position: absolute;\n  inset-inline-start: 0;\n  top: calc(100% + 4px);\n  z-index: 200;\n  background: var(--ui-surface);\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-12);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, .12);\n  min-width: 160px;\n  overflow: hidden;\n}\n.tm-status-option {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  padding: 10px 14px;\n  border: none;\n  background: transparent;\n  color: var(--ui-text-primary);\n  font-size: var(--caption-2-size, 14px);\n  cursor: pointer;\n  text-align: start;\n  transition: background 0.12s;\n}\n.tm-status-option:hover {\n  background: var(--ui-bg-hover);\n}\n.tm-status-option--active {\n  font-weight: 600;\n  background: var(--brand-primary-50);\n}\n.tm-status-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.tm-panel-section {\n  padding-block: 16px;\n  border-block-end: 1px solid var(--ui-border);\n}\n.tm-panel-section:last-child {\n  border-block-end: none;\n}\n.tm-panel-section-title {\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 700;\n  color: var(--ui-text-primary);\n  margin: 0 0 12px;\n}\n.tm-panel-desc {\n  font-size: var(--caption-2-size, 14px);\n  color: var(--ui-text-muted);\n  margin: 0;\n  line-height: 1.6;\n}\n.tm-details-grid {\n  display: grid;\n  grid-template-columns: 120px 1fr;\n  gap: 10px 16px;\n  align-items: center;\n}\n.tm-detail-label {\n  font-size: var(--caption-2-size, 14px);\n  color: var(--ui-text-muted);\n  font-weight: 500;\n}\n.tm-detail-value {\n  font-size: var(--caption-2-size, 14px);\n  color: var(--ui-text-primary);\n  font-weight: 400;\n}\n.tm-tabs {\n  display: flex;\n  gap: 0;\n  border-block-end: 1px solid var(--ui-border);\n  margin-block-end: 16px;\n}\n.tm-tab {\n  padding: 8px 14px;\n  border: none;\n  border-block-end: 2px solid transparent;\n  background: transparent;\n  color: var(--ui-text-muted);\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 500;\n  cursor: pointer;\n  margin-block-end: -1px;\n  transition: color 0.15s, border-color 0.15s;\n}\n.tm-tab:hover {\n  color: var(--ui-text-primary);\n}\n.tm-tab--active {\n  color: var(--brand-primary-500);\n  border-block-end-color: var(--brand-primary-500);\n  font-weight: 600;\n}\n.tm-activity-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 24px;\n  color: var(--ui-text-muted);\n  font-size: var(--caption-2-size, 14px);\n  text-align: center;\n}\n.tm-activity-empty mat-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: .5;\n}\n.tm-selection-bar {\n  position: fixed;\n  bottom: 24px;\n  inset-inline-start: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 20px;\n  background: var(--brand-neutral-950);\n  color: var(--brand-neutral-0, #fff);\n  border-radius: var(--radius-12);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, .25);\n  z-index: 300;\n  white-space: nowrap;\n  animation: tm-bar-in 0.2s ease;\n}\n@keyframes tm-bar-in {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n}\n.tm-sel-clear {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .15);\n  color: var(--brand-neutral-0, #fff);\n  cursor: pointer;\n}\n.tm-sel-clear:hover {\n  background: rgba(255, 255, 255, .25);\n}\n.tm-sel-count {\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 500;\n  flex: 1;\n}\n.tm-sel-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.tm-sel-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border: none;\n  border-radius: var(--radius-8);\n  background: rgba(255, 255, 255, .12);\n  color: var(--brand-neutral-0, #fff);\n  font-size: var(--caption-2-size, 14px);\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.tm-sel-btn:hover {\n  background: rgba(255, 255, 255, .22);\n}\n.tm-sel-btn--danger {\n  background: rgba(240, 61, 61, .35);\n}\n.tm-sel-btn--danger:hover {\n  background: rgba(240, 61, 61, .55);\n}\n.tm-sel-btn mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n@media (max-width: 900px) {\n  .tm-board {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 16px;\n  }\n  .tm-search-box {\n    width: 200px;\n  }\n  .tm-btn--primary,\n  .tm-btn--dark {\n    width: auto;\n  }\n  .tm-detail-panel {\n    width: 100%;\n    min-width: unset;\n    max-width: unset;\n  }\n  .tm-content--panel-open {\n    flex-direction: column;\n  }\n}\n@media (max-width: 600px) {\n  .tm-page-top {\n    padding: 16px 16px 0;\n  }\n  .tm-main {\n    padding: 16px;\n  }\n  .tm-board {\n    grid-template-columns: 1fr;\n  }\n  .tm-controls {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .tm-controls-right {\n    flex-wrap: wrap;\n  }\n  .tm-search-box {\n    width: 100%;\n  }\n}\n.tm-toast {\n  position: fixed;\n  top: 20px;\n  inset-inline-end: 24px;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: var(--radius-12);\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 500;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, .18);\n  animation: tm-toast-in 0.2s ease;\n  max-width: 380px;\n}\n@keyframes tm-toast-in {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.tm-toast--error {\n  background: var(--functional-danger-50);\n  color: var(--functional-danger-700);\n  border: 1px solid var(--functional-danger-200);\n}\n.tm-toast--success {\n  background: var(--functional-success-50);\n  color: var(--functional-success-700);\n  border: 1px solid var(--functional-success-200);\n}\n.tm-toast mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.tm-toast span {\n  flex: 1;\n}\n.tm-toast-close {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: inherit;\n  opacity: .7;\n  border-radius: var(--radius-8);\n  flex-shrink: 0;\n}\n.tm-toast-close:hover {\n  opacity: 1;\n}\n.tm-toast-close mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.tm-create-form {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-block-start: 16px;\n}\n.tm-create-form-label {\n  font-size: var(--caption-2-size, 14px);\n  font-weight: 600;\n  color: var(--ui-text-primary);\n  margin-block-start: 10px;\n}\n.tm-create-form-label:first-child {\n  margin-block-start: 0;\n}\n.tm-create-field {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  font-size: var(--caption-2-size, 14px);\n  outline: none;\n  transition: border-color 0.15s;\n  box-sizing: border-box;\n}\n.tm-create-field:focus {\n  border-color: var(--brand-primary-500);\n}\n.tm-create-select {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--ui-border);\n  border-radius: var(--radius-8);\n  background: var(--ui-surface);\n  color: var(--ui-text-primary);\n  font-size: var(--caption-2-size, 14px);\n  outline: none;\n  cursor: pointer;\n  transition: border-color 0.15s;\n  box-sizing: border-box;\n}\n.tm-create-select:focus {\n  border-color: var(--brand-primary-500);\n}\n.tm-create-form-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-block-start: 16px;\n}\n/*# sourceMappingURL=task-management.css.map */\n'] }]
  }], null, { fileInputRef: [{
    type: ViewChild,
    args: ["fileInput"]
  }], tableCreateInputRef: [{
    type: ViewChild,
    args: ["tableCreateInput"]
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskManagementComponent, { className: "TaskManagementComponent", filePath: "src/features/tasks/task-management/task-management.ts", lineNumber: 38 });
})();
export {
  TaskManagementComponent
};
//# sourceMappingURL=chunk-UZM3XFRM.js.map
