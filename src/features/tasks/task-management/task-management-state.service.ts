import { Injectable, signal, computed } from '@angular/core';
import { Task, ProjectStatus } from '../../../models/project';

export type ViewMode = 'board' | 'list' | 'table';

export interface KanbanColumn {
  id: string;
  labelKey: string;
  statuses: ProjectStatus[];
  indicatorColor: string;
  tasks: Task[];
}

export const KANBAN_COLUMNS_CONFIG: Omit<KanbanColumn, 'tasks'>[] = [
  { id: 'todo',       labelKey: 'tasks.status.todo',       statuses: ['todo', 'pending'],   indicatorColor: '#F87748' },
  { id: 'inprogress', labelKey: 'tasks.status.inprogress', statuses: ['in-progress'],        indicatorColor: '#3B82F6' },
  { id: 'review',     labelKey: 'tasks.status.review',     statuses: ['on-hold'],            indicatorColor: '#F59E0B' },
  { id: 'done',       labelKey: 'tasks.status.done',       statuses: ['done', 'completed'], indicatorColor: '#22C55E' },
];

@Injectable()
export class TaskManagementStateService {

  // ── Data ─────────────────────────────────────────────────────
  readonly tasks        = signal<Task[]>([]);
  readonly projectTitle = signal<string>('');
  readonly projectId    = signal<string>('');

  // ── View ─────────────────────────────────────────────────────
  readonly activeView  = signal<ViewMode>('board');
  readonly searchQuery = signal<string>('');

  // ── Selection (table) ────────────────────────────────────────
  readonly selectedIds = signal<Set<string>>(new Set());

  // ── UI state ─────────────────────────────────────────────────
  readonly selectedTaskId     = signal<string | null>(null);
  readonly detailPanelOpen    = signal<boolean>(false);
  readonly createMode         = signal<boolean>(false);
  readonly inlineCreateColId  = signal<string | null>(null);
  readonly activeColumnMenuId = signal<string | null>(null);
  readonly filterMenuOpen     = signal<boolean>(false);
  readonly sortMenuOpen       = signal<boolean>(false);
  readonly collapsedGroups    = signal<Set<string>>(new Set());

  // ── Async ────────────────────────────────────────────────────
  readonly loading = signal<boolean>(false);
  readonly saving  = signal<boolean>(false);
  readonly error   = signal<string | null>(null);

  // ── Toast (transient operation feedback) ─────────────────────
  readonly toast = signal<{ key: string; type: 'error' | 'success' } | null>(null);

  // ── Computed ─────────────────────────────────────────────────
  readonly filteredTasks = computed(() => {
    const q = this.searchQuery().toLowerCase();
    if (!q) return this.tasks();
    return this.tasks().filter(t =>
      t.title.toLowerCase().includes(q) ||
      (t.summary ?? '').toLowerCase().includes(q)
    );
  });

  readonly kanbanColumns = computed<KanbanColumn[]>(() => {
    const tasks = this.filteredTasks();
    return KANBAN_COLUMNS_CONFIG.map(col => ({
      ...col,
      tasks: tasks.filter(t => col.statuses.includes(t.status)),
    }));
  });

  readonly listGroups = computed<KanbanColumn[]>(() => {
    const tasks = this.filteredTasks();
    return KANBAN_COLUMNS_CONFIG.map(col => ({
      ...col,
      tasks: tasks.filter(t => col.statuses.includes(t.status)),
    }));
  });

  readonly selectedTask = computed(() =>
    this.selectedTaskId()
      ? this.tasks().find(t => t.id === this.selectedTaskId()) ?? null
      : null
  );

  readonly hasSelection   = computed(() => this.selectedIds().size > 0);
  readonly selectionCount = computed(() => this.selectedIds().size);
  readonly allSelected    = computed(() => {
    const ft = this.filteredTasks();
    return ft.length > 0 && ft.every(t => this.selectedIds().has(t.id));
  });

  // ── Mutations ────────────────────────────────────────────────

  setTasks(tasks: Task[])              { this.tasks.set(tasks); }
  setProject(id: string, name: string) { this.projectId.set(id); this.projectTitle.set(name); }
  setView(v: ViewMode)                 { this.activeView.set(v); }
  setSearch(q: string)                 { this.searchQuery.set(q); }

  openDetail(id: string) {
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

  toggleSelect(id: string) {
    this.selectedIds.update(s => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id); else n.add(id);
      return n;
    });
  }

  selectAll() {
    this.selectedIds.set(new Set(this.filteredTasks().map(t => t.id)));
  }

  clearSelection() { this.selectedIds.set(new Set()); }

  toggleGroup(id: string) {
    this.collapsedGroups.update(s => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id); else n.add(id);
      return n;
    });
  }

  closeAllMenus() {
    this.activeColumnMenuId.set(null);
    this.filterMenuOpen.set(false);
    this.sortMenuOpen.set(false);
  }

  patchTask(id: string, patch: Partial<Task>) {
    this.tasks.update(list => list.map(t => t.id === id ? { ...t, ...patch } : t));
  }

  revertTask(id: string, prev: Task) {
    this.tasks.update(list => list.map(t => t.id === id ? prev : t));
  }

  addTask(task: Task)          { this.tasks.update(list => [...list, task]); }
  removeTask(id: string)       { this.tasks.update(list => list.filter(t => t.id !== id)); }
  removeTasks(ids: Set<string>){ this.tasks.update(list => list.filter(t => !ids.has(t.id))); }

  showToast(key: string, type: 'error' | 'success' = 'error') {
    this.toast.set({ key, type });
  }
  clearToast() { this.toast.set(null); }
}
