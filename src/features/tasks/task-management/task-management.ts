import {
  Component, inject, OnInit, OnDestroy, signal, computed,
  ElementRef, HostListener, ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslocoModule } from '@ngneat/transloco';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';

import { ProjectService } from '../../../services/project-service';
import { TaskService } from './task.service';
import {
  TaskManagementStateService, KanbanColumn, ViewMode, KANBAN_COLUMNS_CONFIG
} from './task-management-state.service';
import { Task, ProjectStatus, ProjectPriority, TaskDto } from '../../../models/project';
import { TokenService } from '../../../services/token.service';
import { UserRole } from '../../../models/roles.enum';

@Component({
  selector: 'app-task-management',
  standalone: true,
  providers: [TaskManagementStateService],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    MatProgressSpinnerModule,
    TranslocoModule,
    DragDropModule,
  ],
  templateUrl: './task-management.html',
  styleUrl: './task-management.css',
})
export class TaskManagementComponent implements OnInit, OnDestroy {

  readonly state           = inject(TaskManagementStateService);
  private readonly taskSvc = inject(TaskService);
  private readonly projSvc = inject(ProjectService);
  private readonly route   = inject(ActivatedRoute);
  private readonly tokenService = inject(TokenService);

  /** Employees see only tasks assigned to them; board management (create
   *  tasks/columns, delete columns) is a manager-level action. */
  readonly isEmployee: boolean = this.tokenService.getUserRole() === UserRole.Employee;

  @ViewChild('fileInput') fileInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('tableCreateInput') tableCreateInputRef?: ElementRef<HTMLInputElement>;

  private toastTimer?: ReturnType<typeof setTimeout>;

  // Connected drop-list IDs for CDK drag-drop
  readonly colDropIds = computed(() =>
    KANBAN_COLUMNS_CONFIG.map(c => 'drp-' + c.id)
  );

  // Inline create input value (board / list)
  inlineTitle = signal<string>('');

  // Inline create for table view
  tableCreateTitle = signal<string>('');

  // Status change dropdown in detail panel
  statusDropdownOpen = signal<boolean>(false);

  // Create panel form state
  panelCreateTitle    = signal<string>('');
  panelCreateStatus   = signal<ProjectStatus>('todo');
  panelCreatePriority = signal<ProjectPriority>('medium');

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    clearTimeout(this.toastTimer);
  }

  // ── Data loading ─────────────────────────────────────────────

  private loadData(): void {
    this.state.loading.set(true);
    this.state.error.set(null);

    const projectId = this.route.snapshot.queryParamMap.get('projectId') ?? '';

    this.projSvc.getProjects().subscribe({
      next: projects => {
        if (!projects.length) { this.state.loading.set(false); return; }

        const target = projectId
          ? projects.find(p => p.id === projectId) ?? projects[0]
          : projects[0];

        this.state.setProject(target.id, target.title);

        const assignedUserId = this.isEmployee ? (this.tokenService.getUserId() ?? undefined) : undefined;
        this.taskSvc.getByProject(target.id, assignedUserId).subscribe({
          next: tasks => { this.state.setTasks(tasks); this.state.loading.set(false); },
          error: ()    => { this.state.error.set('tasks.errors.load'); this.state.loading.set(false); },
        });
      },
      error: () => { this.state.error.set('tasks.errors.load'); this.state.loading.set(false); },
    });
  }

  retry(): void { this.loadData(); }

  // ── View switching ───────────────────────────────────────────

  setView(v: ViewMode): void { this.state.setView(v); }

  // ── Search ───────────────────────────────────────────────────

  onSearch(q: string): void { this.state.setSearch(q); }

  // ── Board drag-drop ──────────────────────────────────────────

  onDrop(event: CdkDragDrop<Task[]>, col: KanbanColumn): void {
    if (event.previousContainer === event.container) return;
    const task: Task = event.item.data;
    const targetStatus = col.statuses[0];
    if (task.status === targetStatus) return;

    // Ensure projectId is always valid — GetAll may omit it from individual task objects
    const enriched: Task = {
      ...task,
      projectId: task.projectId || this.state.projectId(),
      status: targetStatus,
    };

    const prev = { ...task };
    this.state.patchTask(task.id, { status: targetStatus });

    this.taskSvc.changeStatus(enriched, targetStatus).subscribe({
      error: () => { this.state.revertTask(task.id, prev); this.showToast('tasks.errors.status'); },
    });
  }

  // ── Column menu ──────────────────────────────────────────────

  toggleColumnMenu(colId: string, event: MouseEvent): void {
    event.stopPropagation();
    const current = this.state.activeColumnMenuId();
    this.state.activeColumnMenuId.set(current === colId ? null : colId);
  }

  onColumnAction(action: string, col: KanbanColumn): void {
    this.state.activeColumnMenuId.set(null);
    if (action === 'copyLink') {
      navigator.clipboard?.writeText(window.location.href + '#' + col.id);
    }
  }

  // ── Inline create (board / list) ─────────────────────────────

  startInlineCreate(colId: string): void {
    if (this.isEmployee) return;
    this.inlineTitle.set('');
    this.state.inlineCreateColId.set(colId);
    this.state.activeColumnMenuId.set(null);
  }

  cancelInlineCreate(): void {
    this.state.inlineCreateColId.set(null);
    this.inlineTitle.set('');
  }

  submitInlineCreate(targetStatus: ProjectStatus): void {
    if (this.isEmployee) { this.cancelInlineCreate(); return; }
    const title = this.inlineTitle().trim();
    if (!title) { this.cancelInlineCreate(); return; }

    const projectId = this.state.projectId();
    const dto: TaskDto = { projectId, title, status: targetStatus, priority: 'medium' };

    this.state.inlineCreateColId.set(null);
    this.inlineTitle.set('');
    this.state.saving.set(true);

    this.taskSvc.create(projectId, dto).subscribe({
      next: task => { this.state.addTask(task); this.state.saving.set(false); },
      error: ()   => { this.state.saving.set(false); this.showToast('tasks.errors.create'); },
    });
  }

  // ── Inline create (table) ────────────────────────────────────

  submitTableCreate(): void {
    if (this.isEmployee) return;
    const title = this.tableCreateTitle().trim();
    if (!title) return;

    const projectId = this.state.projectId();
    const dto: TaskDto = { projectId, title, status: 'todo', priority: 'medium' };

    this.tableCreateTitle.set('');
    this.state.saving.set(true);

    this.taskSvc.create(projectId, dto).subscribe({
      next: task => { this.state.addTask(task); this.state.saving.set(false); },
      error: ()   => { this.state.saving.set(false); this.showToast('tasks.errors.create'); },
    });
  }

  // ── Task detail panel ────────────────────────────────────────

  openDetail(taskId: string): void {
    this.statusDropdownOpen.set(false);
    this.state.openDetail(taskId);
  }

  closeDetail(): void {
    this.statusDropdownOpen.set(false);
    this.state.closeDetail();
  }

  openCreatePanel(): void {
    if (this.isEmployee) return;
    this.panelCreateTitle.set('');
    this.panelCreateStatus.set('todo');
    this.panelCreatePriority.set('medium');
    this.state.openCreatePanel();
  }

  submitCreatePanel(): void {
    if (this.isEmployee) return;
    const title = this.panelCreateTitle().trim();
    if (!title) return;
    const projectId = this.state.projectId();
    const dto: TaskDto = {
      projectId,
      title,
      status:   this.panelCreateStatus(),
      priority: this.panelCreatePriority(),
    };
    this.state.saving.set(true);
    this.taskSvc.create(projectId, dto).subscribe({
      next: task => {
        this.state.addTask(task);
        this.state.saving.set(false);
        this.closeDetail();
      },
      error: () => {
        this.state.saving.set(false);
        this.showToast('tasks.errors.create');
      },
    });
  }

  focusTableCreateInput(): void {
    if (this.isEmployee) return;
    this.tableCreateInputRef?.nativeElement.focus();
  }

  changeTaskStatus(status: ProjectStatus): void {
    const task = this.state.selectedTask();
    if (!task) return;
    this.statusDropdownOpen.set(false);
    const enriched: Task = {
      ...task,
      projectId: task.projectId || this.state.projectId(),
      status,
    };
    const prev = { ...task };
    this.state.patchTask(task.id, { status });
    this.taskSvc.changeStatus(enriched, status).subscribe({
      error: () => { this.state.revertTask(task.id, prev); this.showToast('tasks.errors.status'); },
    });
  }

  // ── Row selection (table) ────────────────────────────────────

  toggleRowSelect(event: Event, id: string): void {
    event.stopPropagation();
    this.state.toggleSelect(id);
  }

  toggleSelectAll(): void {
    if (this.state.allSelected()) this.state.clearSelection();
    else this.state.selectAll();
  }

  // ── Bulk actions ─────────────────────────────────────────────

  deleteSelected(): void {
    if (this.isEmployee) return;
    const ids = [...this.state.selectedIds()];
    // Build per-id snapshot for individual rollback
    const snapshots = new Map<string, Task>(
      this.state.tasks()
        .filter(t => ids.includes(t.id))
        .map(t => [t.id, { ...t }])
    );
    this.state.removeTasks(new Set(ids));
    this.state.clearSelection();

    let anyFailed = false;
    ids.forEach(id => {
      this.taskSvc.delete(id).subscribe({
        error: () => {
          const prev = snapshots.get(id);
          if (prev) this.state.addTask(prev);
          if (!anyFailed) { anyFailed = true; this.showToast('tasks.errors.delete'); }
        },
      });
    });
  }

  copySectionToClipboard(): void {
    const titles = this.state.tasks()
      .filter(t => this.state.selectedIds().has(t.id))
      .map(t => t.title)
      .join('\n');
    navigator.clipboard?.writeText(titles);
  }

  deleteSingleTask(task: Task, event: MouseEvent): void {
    event.stopPropagation();
    if (this.isEmployee) return;
    const prev = { ...task };
    this.state.removeTask(task.id);
    this.taskSvc.delete(task.id).subscribe({
      error: () => { this.state.addTask(prev); this.showToast('tasks.errors.delete'); },
    });
  }

  // ── Import ───────────────────────────────────────────────────

  triggerImport(): void { this.fileInputRef?.nativeElement.click(); }

  // ── List group collapse ──────────────────────────────────────

  toggleGroup(id: string): void { this.state.toggleGroup(id); }

  isGroupCollapsed(id: string): boolean {
    return this.state.collapsedGroups().has(id);
  }

  // ── Toast ────────────────────────────────────────────────────

  private showToast(key: string, type: 'error' | 'success' = 'error'): void {
    clearTimeout(this.toastTimer);
    this.state.showToast(key, type);
    this.toastTimer = setTimeout(() => this.state.clearToast(), 4000);
  }

  dismissToast(): void {
    clearTimeout(this.toastTimer);
    this.state.clearToast();
  }

  // ── Toggle helpers (arrow fns not allowed in templates) ──

  toggleFilterMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.state.filterMenuOpen.update(v => !v);
  }

  toggleSortMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.state.sortMenuOpen.update(v => !v);
  }

  toggleStatusDropdown(): void {
    this.statusDropdownOpen.update(v => !v);
  }

  // ── Helpers ──────────────────────────────────────────────────

  priorityIcon(p: string): string {
    const map: Record<string, string> = {
      urgent: 'keyboard_double_arrow_up',
      high:   'keyboard_arrow_up',
      medium: 'remove',
      low:    'keyboard_arrow_down',
    };
    return map[p] ?? 'remove';
  }

  priorityLabel(p: string): string {
    const map: Record<string, string> = {
      urgent: 'Urgent', high: 'High', medium: 'Medium', low: 'Low',
    };
    return map[p] ?? p;
  }

  statusLabel(s: string): string {
    const map: Record<string, string> = {
      'todo': 'Todo', 'pending': 'Todo', 'in-progress': 'InProgress',
      'on-hold': 'Review', 'done': 'Done', 'completed': 'Done', 'cancelled': 'Cancelled',
    };
    return map[s] ?? s;
  }

  statusIndicatorColor(s: string): string {
    const map: Record<string, string> = {
      'todo': '#F87748', 'pending': '#F87748',
      'in-progress': '#3B82F6',
      'on-hold': '#F59E0B',
      'done': '#22C55E', 'completed': '#22C55E',
      'cancelled': '#f04242',
    };
    return map[s] ?? '#999';
  }

  formatDisplayId(id: string): string {
    const n = parseInt(id, 10);
    return isNaN(n) ? id : 'MDP-' + n;
  }

  isRowSelected(id: string): boolean { return this.state.selectedIds().has(id); }

  // Close menus when clicking outside
  @HostListener('document:click')
  onDocumentClick(): void { this.state.closeAllMenus(); }

  readonly PRIORITY_OPTIONS: { value: ProjectStatus; label: string }[] = [];
  readonly STATUS_OPTIONS: { value: ProjectStatus; label: string }[] = [
    { value: 'todo',        label: 'Todo' },
    { value: 'in-progress', label: 'InProgress' },
    { value: 'on-hold',     label: 'Review' },
    { value: 'done',        label: 'Done' },
    { value: 'cancelled',   label: 'Cancelled' },
  ];
}
