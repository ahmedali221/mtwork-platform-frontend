
import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../../../services/project-service';
import { TeamsService } from '../../../../services/teams';
import { ProjectStatus, ProjectCategory, ProjectPriority, Task,
  ProjectViewMode, TaskDto, BoardColumn } from '../../../../models/project';
import { Subject, takeUntil } from 'rxjs';
import { TeamMember } from './../../../../models/team-member';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-tichpro-project-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSnackBarModule,
    CdkDropList,
    CdkDrag,
  
    TranslocoModule
  ],
  templateUrl: './tichpro-project-component.html',
  styleUrls: ['./tichpro-project-component.css']
})
export class TichproProjectComponent implements OnInit, OnDestroy {

  private projectService = inject(ProjectService);
  private teamsService   = inject(TeamsService);
  private route          = inject(ActivatedRoute);
  private router         = inject(Router);
  private snackBar       = inject(MatSnackBar);
  private cdr            = inject(ChangeDetectorRef);

  private destroy$ = new Subject<void>();

  // -- Data ----------------------------------------------------------
  projectId: string = '';
  projectTitle: string = 'TichPro Project';
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  selectedTasks: Set<string> = new Set();
  categories: ProjectCategory[] = [];
  employees: TeamMember[] = [];

  // -- View state ----------------------------------------------------
  currentView: ProjectViewMode = 'table';
  isLoading = false;
  showCategoryModal = false;
  showColorPicker = false;
  showPriorityDropdown = false;
  showStatusMenu = false;

  // -- Filters & search ----------------------------------------------
  searchQuery = '';
  selectedCategory: string = '';
  selectedPriority: ProjectPriority | '' = '';
  selectedStatus: ProjectStatus | '' = '';

  // -- New-task row --------------------------------------------------
  newTaskName = '';
  newTaskAssigneeId = '';
  newTaskDueDate = '';
  newTaskPriority: ProjectPriority = 'medium';
  showNewTaskInput = false;
  isSavingTask = false;

  // -- Inline edit ---------------------------------------------------
  editingTask: Task | null = null;
  editFormData: Partial<TaskDto> = {};

  // -- Category modal ------------------------------------------------
  editingCategory: ProjectCategory | null = null;
  newCategoryName = '';
  selectedColor = 'var(--brand-primary-500, #4F46E5)';

  // -- Priority & status options -------------------------------------
  priorityOptions: { value: ProjectPriority; label: string; icon: string }[] = [
    { value: 'urgent', label: 'Highest', icon: '⬆⬆' },
    { value: 'high',   label: 'High',    icon: '⬆'  },
    { value: 'medium', label: 'Medium',  icon: '='   },
    { value: 'low',    label: 'Low',     icon: '⬇'  },
  ];

  statusOptions: { value: ProjectStatus; label: string; color: string }[] = [
    { value: 'done',        label: 'Done',       color: 'var(--status-done, #10B981)' },
    { value: 'in-progress', label: 'In Progress', color: 'var(--status-in-progress, #3B82F6)' },
    { value: 'pending',     label: 'Pending',    color: 'var(--status-pending, #F59E0B)' },
    { value: 'todo',        label: 'To Do',      color: 'var(--status-todo, #6B7280)' },
  ];

  colorPalette = [
    ['#F3F4F6', '#E5E7EB', '#D1D5DB', '#9CA3AF', '#6B7280', '#4B5563'],
    ['#FEE2E2', '#FECACA', '#FCA5A5', '#F87171', '#EF4444', '#DC2626'],
    ['#DBEAFE', '#BFDBFE', '#93C5FD', '#60A5FA', '#3B82F6', '#2563EB'],
    ['#D1FAE5', '#A7F3D0', '#6EE7B7', '#34D399', '#10B981', '#059669'],
    ['#FEF3C7', '#FDE68A', '#FCD34D', '#FBBF24', '#F59E0B', '#D97706'],
    ['#FCE7F3', '#FBCFE8', '#F9A8D4', '#F472B6', '#EC4899', '#DB2777'],
  ];

  // -- List sections config ------------------------------------------
  readonly listSections: { status: ProjectStatus; title: string; indicatorClass: string }[] = [
    { status: 'todo',        title: 'Todo',        indicatorClass: 'todo' },
    { status: 'in-progress', title: 'In Progress', indicatorClass: 'in-progress' },
    { status: 'pending',     title: 'Review',      indicatorClass: 'review' },
    { status: 'done',        title: 'Done',        indicatorClass: 'done' },
  ];

  // -- Board ---------------------------------------------------------
  boardColumns: BoardColumn[] = [];

  // -- Context menu --------------------------------------------------
  showContextMenu = false;
  contextMenuX = 0;
  contextMenuY = 0;
  contextMenuTask: Task | null = null;

  // -- Numeric ↔ string maps -----------------------------------------
  private readonly PRIORITY_MAP: Record<number, ProjectPriority> = {
    1: 'low', 2: 'medium', 3: 'high', 4: 'urgent'
  };
  private readonly STATUS_MAP: Record<number, ProjectStatus> = {
    1: 'todo', 2: 'in-progress', 3: 'done',
    4: 'cancelled', 5: 'on-hold', 6: 'pending', 7: 'completed'
  };

  // -- Lifecycle -----------------------------------------------------

  ngOnInit(): void {
    this.loadEmployees();
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.projectId = params['id'];
      if (this.projectId) {
        this.loadProjectDetails();
        this.loadTasks();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // -- Data loading --------------------------------------------------

  loadEmployees(): void {
    this.teamsService.getAllTeamMembers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (members) => (this.employees = members),
        error: () => (this.employees = [])
      });
  }

  loadProjectDetails(): void {
    if (!this.projectId) return;
    this.projectService
      .getProjectById(this.projectId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (project) => {
          this.projectTitle = project.title || this.projectTitle;
          this.cdr.detectChanges();
        },
        error: () => {
          // project details are non-critical — keep default title
          this.cdr.detectChanges();
        },
      });
  }

  loadTasks(): void {
    this.isLoading = true;
    this.cdr.detectChanges();                // show spinner immediately
    this.projectService
      .getTasksByProject(this.projectId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (tasks) => {
          this.tasks = tasks;
          this.applyFilters();
          this.initializeBoardColumns();
          this.isLoading = false;
          this.cdr.detectChanges();          // ← force view update
        },
        error: () => {
          this.isLoading = false;
          this.cdr.detectChanges();          // ← force view update even on error
        },
      });
  }

  // -- Filters -------------------------------------------------------

  applyFilters(): void {
    this.filteredTasks = this.tasks.filter((task) => {
      const matchesSearch =
        !this.searchQuery ||
        task.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        task.summary?.toLowerCase().includes(this.searchQuery.toLowerCase());

      const matchesCategory = !this.selectedCategory || task.categoryId === this.selectedCategory;
      const matchesPriority = !this.selectedPriority || task.priority === this.selectedPriority;
      const matchesStatus   = !this.selectedStatus   || task.status   === this.selectedStatus;

      return matchesSearch && matchesCategory && matchesPriority && matchesStatus;
    });
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  // -- Task selection ------------------------------------------------

  toggleTaskSelection(taskId: string): void {
    if (this.selectedTasks.has(taskId)) {
      this.selectedTasks.delete(taskId);
    } else {
      this.selectedTasks.add(taskId);
    }
  }

  selectAllTasks(): void {
    if (this.selectedTasks.size === this.filteredTasks.length) {
      this.selectedTasks.clear();
    } else {
      this.filteredTasks.forEach((task) => this.selectedTasks.add(task.id));
    }
  }

  // -- Create task ---------------------------------------------------

  createNewTask(): void {
    if (!this.newTaskName.trim() || this.isSavingTask) return;
    this.isSavingTask = true;

    const dto: TaskDto = {
      projectId:  this.projectId,
      title:      this.newTaskName.trim(),
      status:     (this.selectedStatus as ProjectStatus) || 'todo',
      priority:   this.newTaskPriority || 'medium',
      assigneeId: this.newTaskAssigneeId || undefined,
      dueDate:    this.newTaskDueDate   || undefined,
    };

    this.projectService
      .createTask(this.projectId, dto)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (task) => {
          const newTask: Task = task ?? ({ id: Date.now().toString(), ...dto } as any);
          this.tasks.push(newTask);
          this.applyFilters();
          this.initializeBoardColumns();
          this.newTaskName       = '';
          this.newTaskAssigneeId = '';
          this.newTaskDueDate    = '';
          this.newTaskPriority   = 'medium';
          this.showNewTaskInput  = false;
          this.isSavingTask      = false;
          this.cdr.detectChanges();
          this.snackBar.open('Task created', '', { duration: 2000 });
        },
        error: () => {
          this.snackBar.open('Failed to create task', '', { duration: 3000 });
          this.isSavingTask = false;
          this.cdr.detectChanges();
        },
      });
  }

  // -- Inline edit ---------------------------------------------------

  editTaskInline(task: Task): void {
    this.editingTask  = task;
    this.editFormData = {
      title:      task.title,
      status:     this.normaliseStatus(task.status),
      priority:   this.normalisePriority(task.priority),
      assigneeId: task.assigneeId ?? '',
      dueDate:    task.dueDate   ?? '',
    };
  }

  saveEditTask(): void {
    if (!this.editingTask) return;
    const task = this.editingTask;

    // Resolve projectId — parseInt ensures "0" is treated as invalid
    const taskProjId = parseInt(task.projectId, 10);
    const routeProjId = parseInt(this.projectId, 10);
    const resolvedProjectId = (taskProjId > 0 ? taskProjId : routeProjId) || routeProjId;

    // Build full payload — merge current task values with edited values
    const payload = {
      title:       (this.editFormData.title       || task.title       || '').trim(),
      description: (this.editFormData.description || task.description || '').trim(),
      status:      this.editFormData.status   ?? this.normaliseStatus(task.status),
      priority:    this.editFormData.priority  ?? this.normalisePriority(task.priority),
      assigneeId:  this.editFormData.assigneeId ?? task.assigneeId ?? '',
      dueDate:     this.editFormData.dueDate    ?? task.dueDate    ?? '',
      projectId:   String(resolvedProjectId),
    };

    this.projectService
      .updateTask(task.id, payload)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (updated) => {
          const idx = this.tasks.findIndex(t => t.id === this.editingTask!.id);
          if (idx !== -1) {
            this.tasks[idx] = { ...this.tasks[idx], ...updated, ...this.editFormData } as Task;
          }
          this.applyFilters();
          this.initializeBoardColumns();
          this.editingTask  = null;
          this.editFormData = {};
          this.cdr.detectChanges();
          this.snackBar.open('Task updated', '', { duration: 2000 });
        },
        error: () => {
          this.snackBar.open('Failed to update task', '', { duration: 3000 });
          this.cdr.detectChanges();
        },
      });
  }

  cancelEdit(): void {
    this.editingTask  = null;
    this.editFormData = {};
  }

  /** Edit the first selected task from the action bar */
  editSelectedTask(): void {
    const firstId = Array.from(this.selectedTasks)[0];
    if (!firstId) return;
    const task = this.tasks.find(t => t.id === firstId);
    if (task) this.editTaskInline(task);
  }

  // -- Update task (e.g. from drag-drop status change) ---------------

  updateTask(task: Task, updates: Partial<TaskDto>): void {
    // If only status is changing, use the lighter ChangeStatus endpoint
    const keys = Object.keys(updates).filter(k => k !== 'projectId');
    if (keys.length === 1 && keys[0] === 'status' && updates.status) {
      this.projectService
        .changeTaskStatus({ ...task, status: updates.status }, updates.status)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => {
            const index = this.tasks.findIndex((t) => t.id === task.id);
            if (index !== -1) {
              this.tasks[index] = { ...this.tasks[index], status: updates.status! };
              this.applyFilters();
              this.initializeBoardColumns();
              this.cdr.detectChanges();
            }
          },
          error: () => { this.cdr.detectChanges(); }
        });
      return;
    }

    this.projectService
      .updateTask(task.id, { ...updates, projectId: task.projectId || this.projectId })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (updatedTask) => {
          const index = this.tasks.findIndex((t) => t.id === task.id);
          if (index !== -1) {
            this.tasks[index] = { ...this.tasks[index], ...updatedTask };
            this.applyFilters();
            this.initializeBoardColumns();
            this.cdr.detectChanges();
          }
        },
        error: () => { this.cdr.detectChanges(); },
      });
  }

  // -- Delete --------------------------------------------------------

  deleteTask(task: Task): void {
    this.closeContextMenu();
    this.projectService
      .deleteTask(task.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.tasks = this.tasks.filter((t) => t.id !== task.id);
          this.selectedTasks.delete(task.id);
          this.applyFilters();
          this.initializeBoardColumns();
          this.cdr.detectChanges();
          this.snackBar.open('Task deleted', '', { duration: 2000 });
        },
        error: () => {
          this.cdr.detectChanges();
          this.snackBar.open('Failed to delete task', '', { duration: 3000 });
        },
      });
  }

  deleteSelectedTasks(): void {
    const tasksToDelete = Array.from(this.selectedTasks);
    tasksToDelete.forEach((taskId) => {
      this.projectService
        .deleteTask(taskId)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => {
            this.tasks = this.tasks.filter((t) => t.id !== taskId);
            this.selectedTasks.delete(taskId);
            this.applyFilters();
            this.initializeBoardColumns();
            this.snackBar.open('Task deleted', '', { duration: 2000 });
          },
          error: () => {
            this.snackBar.open('Failed to delete task', '', { duration: 3000 });
          },
        });
    });
  }

  // -- Clipboard -----------------------------------------------------

  clipToClipboard(): void {
    const text = this.tasks
      .filter((t) => this.selectedTasks.has(t.id))
      .map((t) => `${t.title} - ${t.status}`)
      .join('\n');
    navigator.clipboard.writeText(text);
  }

  // -- View switching ------------------------------------------------

  changeView(view: ProjectViewMode): void {
    this.currentView = view;
  }

  // -- Board ---------------------------------------------------------

  initializeBoardColumns(): void {
    const statusConfig = [
      { id: 'todo',        title: 'Todo',       status: 'todo'        as ProjectStatus, color: 'var(--status-todo, #F59E0B)' },
      { id: 'in-progress', title: 'In Progress', status: 'in-progress' as ProjectStatus, color: 'var(--status-in-progress, #3B82F6)' },
      { id: 'review',      title: 'Review',     status: 'pending'     as ProjectStatus, color: 'var(--status-pending, #F59E0B)' },
      { id: 'done',        title: 'Done',       status: 'done'        as ProjectStatus, color: 'var(--status-done, #10B981)' },
    ];

    this.boardColumns = statusConfig.map((config) => ({
      id:     config.id,
      title:  config.title,
      status: config.status,
      color:  config.color,
      tasks:  this.tasks.filter((task) => this.normaliseStatus(task.status) === config.status),
    }));
  }

  onTaskDrop(event: CdkDragDrop<Task[], Task[]>, targetColumn: BoardColumn): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      const task = event.container.data[event.currentIndex];
      this.updateTask(task, { status: targetColumn.status });
    }
  }

  getTasksByStatus(status: ProjectStatus): Task[] {
    return this.filteredTasks.filter((task) => this.normaliseStatus(task.status) === status);
  }

  addTaskToColumn(column: BoardColumn): void {
    this.showNewTaskInput = true;
    this.selectedStatus   = column.status;
    this.cdr.detectChanges();
  }

  /** Quick-add from List view — sets status filter then opens input */
  quickAddToStatus(status: ProjectStatus): void {
    this.selectedStatus   = status;
    this.showNewTaskInput = true;
    this.cdr.detectChanges();
  }

  getConnectedDropListIds(): string[] {
    return this.boardColumns.map(c => c.id);
  }

  // -- Context menu --------------------------------------------------

  openContextMenu(event: MouseEvent, task: Task): void {
    event.preventDefault();
    this.contextMenuTask = task;
    this.contextMenuX    = event.clientX;
    this.contextMenuY    = event.clientY;
    this.showContextMenu = true;
  }

  closeContextMenu(): void {
    this.showContextMenu = false;
    this.contextMenuTask = null;
  }

  editTaskDetails(): void {
    if (this.contextMenuTask) {
      this.editTaskInline(this.contextMenuTask);
    }
    this.closeContextMenu();
  }

  moveTaskUp(task: Task): void {
    const index = this.filteredTasks.findIndex((t) => t.id === task.id);
    if (index > 0) {
      [this.filteredTasks[index], this.filteredTasks[index - 1]] = [
        this.filteredTasks[index - 1],
        this.filteredTasks[index],
      ];
    }
    this.closeContextMenu();
  }

  moveTaskDown(task: Task): void {
    const index = this.filteredTasks.findIndex((t) => t.id === task.id);
    if (index < this.filteredTasks.length - 1) {
      [this.filteredTasks[index], this.filteredTasks[index + 1]] = [
        this.filteredTasks[index + 1],
        this.filteredTasks[index],
      ];
    }
    this.closeContextMenu();
  }

  copyTaskLink(task: Task): void {
    const link = `${window.location.origin}/projects/${this.projectId}/tasks/${task.id}`;
    navigator.clipboard.writeText(link);
    this.closeContextMenu();
  }

  // Normalisation helpers

  normalisePriority(raw: ProjectPriority | number | string): ProjectPriority {
    if (typeof raw === 'number') return this.PRIORITY_MAP[raw] ?? 'medium';
    return (raw as ProjectPriority) || 'medium';
  }

  normaliseStatus(raw: ProjectStatus | number | string): ProjectStatus {
    if (typeof raw === 'number') return this.STATUS_MAP[raw] ?? 'todo';
    return (raw as ProjectStatus) || 'todo';
  }

  // Display helpers

  getPriorityIcon(priority: ProjectPriority | number | string): string {
    const p = this.normalisePriority(priority);
    return this.priorityOptions.find((o) => o.value === p)?.icon ?? '=';
  }

  getPriorityDisplay(priority: ProjectPriority | number | string): string {
    const p = this.normalisePriority(priority);
    const labels: Record<ProjectPriority, string> = {
      low: 'Low', medium: 'Medium', high: 'High', urgent: 'Urgent'
    };
    return labels[p] ?? String(priority);
  }

  getPriorityKey(priority: ProjectPriority | number | string): string {
    return this.normalisePriority(priority);
  }

  getTaskStatusDisplay(status: ProjectStatus | number | string): string {
    const s = this.normaliseStatus(status);
    const labels: Record<ProjectStatus, string> = {
      'todo':        'Draft',
      'pending':     'Pending',
      'in-progress': 'Active',
      'done':        'Done',
      'completed':   'Completed',
      'cancelled':   'Cancelled',
      'on-hold':     'On Hold'
    };
    return labels[s] ?? String(status);
  }

  /** Returns a CSS class for status badge — uses CSS variables, no inline hex */
  getStatusClass(status: ProjectStatus | number | string): string {
    const s = this.normaliseStatus(status);
    const map: Record<ProjectStatus, string> = {
      'todo':        'status--todo',
      'pending':     'status--pending',
      'in-progress': 'status--in-progress',
      'done':        'status--done',
      'completed':   'status--done',
      'cancelled':   'status--cancelled',
      'on-hold':     'status--on-hold',
    };
    return map[s] ?? 'status--todo';
  }

  /** Returns CSS variable string — used only in [style.background-color] where class is not enough */
  getStatusColor(status: ProjectStatus | number | string): string {
    const s = this.normaliseStatus(status);
    const map: Record<ProjectStatus, string> = {
      'todo':        'var(--brand-neutral-500)',
      'pending':     'var(--functional-warning-500)',
      'in-progress': 'var(--functional-info-500)',
      'done':        'var(--functional-success-500)',
      'completed':   'var(--functional-success-500)',
      'cancelled':   'var(--functional-danger-500)',
      'on-hold':     'var(--functional-warning-500)',
    };
    return map[s] ?? 'var(--brand-neutral-500)';
  }

  formatDate(date: string | undefined): string {
    if (!date) return '';
    // Filter .NET DateTime.MinValue (0001-01-01)
    if (date.startsWith('0001-') || date.startsWith('1/1/0001')) return '';
    const d = new Date(date);
    if (isNaN(d.getTime()) || d.getFullYear() < 2000) return '';
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  openCategoryModal(): void  { this.showCategoryModal = true; }

  closeCategoryModal(): void {
    this.showCategoryModal = false;
    this.newCategoryName   = '';
    this.editingCategory   = null;
  }

  selectColor(color: string): void { this.selectedColor = color; }
  saveCategory(): void { this.closeCategoryModal(); }

  getTaskCompletionPercentage(task: Task): number { return (task as any).progressPercentage ?? 0; }
  getTaskSubtasksCount(task: Task): { completed: number; total: number } {
    const sub = (task as any).subtasks ?? [];
    return { total: sub.length, completed: sub.filter((s: any) => s.status === 'done').length };
  }
  getTaskCommentsCount(task: Task): number { return (task as any).commentsCount ?? 0; }
}
