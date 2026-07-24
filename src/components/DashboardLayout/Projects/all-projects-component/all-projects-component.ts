import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Project, ProjectCategory, ProjectStatus, ProjectPriority } from '../../../../models/project';
import { ProjectService } from '../../../../services/project-service';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateProjectDialogeComponent } from '../create-project-dialoge-component/create-project-dialoge-component';
import { TranslocoModule } from '@ngneat/transloco';
import { TokenService } from '../../../../services/token.service';
import { UserRole } from '../../../../models/roles.enum';

@Component({
  selector: 'app-all-projects-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatChipsModule,
    MatTooltipModule,
    MatDividerModule,
    MatSnackBarModule
  ,
    TranslocoModule
  ],
  templateUrl: './all-projects-component.html',
  styleUrl: './all-projects-component.css'
})
export class AllProjectsComponent implements OnInit, OnDestroy {
  private projectService = inject(ProjectService);
  private dialog         = inject(MatDialog);
  private router         = inject(Router);
  private snackBar       = inject(MatSnackBar);
  private cdr            = inject(ChangeDetectorRef);
  private tokenService   = inject(TokenService);

  /** Employees see company projects for visibility but can't create/edit/delete. */
  readonly isEmployee: boolean = this.tokenService.getUserRole() === UserRole.Employee;

  allProjects: Project[] = [];
  filteredProjects: Project[] = [];
  isLoading = true;
  searchQuery = '';

  // ── Toolbar consistency — plain `viewMode` property ──────────────
  viewMode: 'table' | 'cards' = 'table';
  isFullscreen = signal(false);
  setView(mode: 'table' | 'cards'): void {
    this.viewMode = mode;
    this.cdr.markForCheck();
  }
  toggleFullscreen(): void {
    const el = document.querySelector('.projects-page') as HTMLElement | null;
    if (!document.fullscreenElement) el?.requestFullscreen().catch(() => {});
    else                              document.exitFullscreen().catch(() => {});
  }
  private readonly onFsChange = () => {
    this.isFullscreen.set(!!document.fullscreenElement);
    this.cdr.markForCheck();
  };

  currentPage = 1;
  pageSize = 15;
  totalPages = 1;

  statuses: ProjectStatus[] = [
    'todo', 'pending', 'in-progress', 'done', 'completed', 'cancelled', 'on-hold'
  ];

  selectedCategory?: string;
  selectedStatus?: ProjectStatus;
  selectedPriority?: ProjectPriority;

  categories: ProjectCategory[] = [];

  // ── Advanced Filter Panel ──────────────────────────────────
  showFilterPanel = false;
  selectedPriorities: ProjectPriority[] = [];
  selectedProgressRange = '';

  readonly allPriorities: ProjectPriority[] = ['low', 'medium', 'high', 'urgent'];

  readonly progressRanges = [
    { label: '0–25%',   min: 0,  max: 25  },
    { label: '26–50%',  min: 26, max: 50  },
    { label: '51–75%',  min: 51, max: 75  },
    { label: '76–100%', min: 76, max: 100 },
  ];

  ngOnInit(): void {
    this.loadProjects();
    this.loadProjectCategories();
    document.addEventListener('fullscreenchange', this.onFsChange);
  }

  ngOnDestroy(): void {
    document.removeEventListener('fullscreenchange', this.onFsChange);
  }

  loadProjectCategories(): void {
    this.projectService.getAllCategories().subscribe({
      next: (data) => (this.categories = data),
      error: () => {},
    });
  }

  loadProjects(): void {
    this.isLoading = true;
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.allProjects = data;
        this.applyFilters();
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      },
    });
  }

  applyFilters(): void {
    const activeRange = this.progressRanges.find(r => r.label === this.selectedProgressRange);

    this.filteredProjects = this.allProjects.filter((project) => {
      const matchesSearch =
        !this.searchQuery ||
        project.title?.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        (project.summary?.toLowerCase().includes(this.searchQuery.toLowerCase()) ?? false);

      const matchesCategory =
        !this.selectedCategory || project.categoryId === this.selectedCategory;

      const matchesStatus =
        !this.selectedStatus ||
        this.normaliseStatus(project.status) === this.normaliseStatus(this.selectedStatus);

      const matchesPriority =
        !this.selectedPriority || project.priority === this.selectedPriority;

      const matchesAdvancedPriority =
        this.selectedPriorities.length === 0 ||
        (project.priority != null && this.selectedPriorities.includes(project.priority));

      const matchesProgress = !activeRange ||
        ((project.progress ?? 0) >= activeRange.min && (project.progress ?? 0) <= activeRange.max);

      return matchesSearch && matchesCategory && matchesStatus &&
             matchesPriority && matchesAdvancedPriority && matchesProgress;
    });

    this.totalPages = Math.ceil(this.filteredProjects.length / this.pageSize);
    this.currentPage = 1;
  }

  clearAllFilters(): void {
    this.searchQuery = '';
    this.selectedCategory = undefined;
    this.selectedStatus = undefined;
    this.selectedPriority = undefined;
    this.filteredProjects = [...this.allProjects];
  }

  hasActiveFilters(): boolean {
    return (
      !!this.searchQuery ||
      !!this.selectedCategory ||
      !!this.selectedStatus ||
      !!this.selectedPriority
    );
  }

  private normaliseStatus(raw: ProjectStatus | number | string): ProjectStatus {
    const numericMap: Record<number, ProjectStatus> = {
      1: 'todo', 2: 'in-progress', 3: 'done',
      4: 'cancelled', 5: 'on-hold', 6: 'pending', 7: 'completed'
    };
    if (typeof raw === 'number') return numericMap[raw] ?? 'todo';
    return (raw as ProjectStatus) || 'todo';
  }

  formatDate(date: string | undefined): string {
    if (!date) return '—';
    try {
      const d = new Date(date);
      if (isNaN(d.getTime())) return '—';
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch {
      return '—';
    }
  }

  getStatusDisplay(status: ProjectStatus | number | string): string {
    const s = this.normaliseStatus(status as ProjectStatus);
    const statusMap: Record<ProjectStatus, string> = {
      'todo': 'Draft', 'pending': 'Pending', 'in-progress': 'Active',
      'done': 'Done', 'completed': 'Completed', 'cancelled': 'Cancelled', 'on-hold': 'On Hold'
    };
    return statusMap[s] ?? String(status);
  }

  getStatusClass(status: ProjectStatus | number | string): string {
    const s = this.normaliseStatus(status as ProjectStatus);
    const classMap: Record<ProjectStatus, string> = {
      'todo': 'todo', 'pending': 'pending', 'in-progress': 'active',
      'done': 'completed', 'completed': 'completed', 'cancelled': 'cancelled', 'on-hold': 'pending'
    };
    return classMap[s] ?? 'todo';
  }

  getStatusColor(status: ProjectStatus | number | string): string {
    const s = this.normaliseStatus(status as ProjectStatus);
    const colorMap: Record<ProjectStatus, string> = {
      'todo':        'var(--ui-text-muted)',
      'pending':     'var(--brand-warning-500, #F59E0B)',
      'in-progress': 'var(--brand-success-500, #10B981)',
      'done':        'var(--brand-success-500, #10B981)',
      'completed':   'var(--brand-success-500, #10B981)',
      'cancelled':   'var(--brand-danger-500, #EF4444)',
      'on-hold':     'var(--brand-warning-500, #F59E0B)'
    };
    return colorMap[s] ?? 'var(--ui-text-muted)';
  }

  getAssigners(_project: Project): any[] {
    return [
      { name: 'User 1', avatar: 'assets/images/Avater.png' },
      { name: 'User 2', avatar: 'assets/images/Avater.png' },
      { name: 'User 3', avatar: 'assets/images/Avater.png' }
    ].slice(0, 3);
  }

  getAssignersCount(_project: Project): number {
    return 5;
  }

  getManagerName(project: Project): string {
    return project.managerId || '—';
  }

  getManagerAvatar(_project: Project): string {
    return 'assets/images/Avater.png';
  }

  copyProjectUrl(project: Project): void {
    const url = `${window.location.origin}/dashboard/projects/${project.id}`;
    navigator.clipboard.writeText(url).then(() => {
      this.snackBar.open('URL copied to clipboard', '', { duration: 2000 });
    });
  }

  openActionsMenu(event: Event, _project: Project): void {
    event.stopPropagation();
  }

  editProject(project: Project): void {
    if (this.isEmployee) return;
    const ref = this.dialog.open(CreateProjectDialogeComponent, {
      width: '600px',
      height: '90%',
      panelClass: 'custom-dialog-container',
      data: { project }
    });
    ref.afterClosed().subscribe(saved => {
      if (saved) {
        this.snackBar.open('Project updated', '', { duration: 2500 });
        this.loadProjects();
      }
    });
  }

  showProjectDetails(project: Project): void {
    this.router.navigate(['/dashboard/projects', project.id]);
  }

  moveToDraft(project: Project): void {
    if (this.isEmployee) return;
    // Project/Update requires full BackendProjectDto — build from stored originals
    const p = project as any;
    const payload = {
      nameAr:             p._nameAr || project.title || '',
      nameEn:             p._nameEn || project.title || '',
      desc:               project.description || '',
      createUser:         localStorage.getItem('userId') ?? localStorage.getItem('userName') ?? '',
      progressPercentage: 0,
      projectTeamIds:     (p._projectTeams ?? []).map((t: any) => Number(t.teamId)).filter(Boolean),
      projectTeams:       p._projectTeams ?? [],
    };
    this.projectService.updateProject(project.id, payload).subscribe({
      next: () => {
        this.snackBar.open('Moved to Draft', '', { duration: 2500 });
        const idx = this.allProjects.findIndex(p => p.id === project.id);
        if (idx !== -1) {
          this.allProjects[idx] = { ...this.allProjects[idx], status: 'todo' };
          this.applyFilters();
        }
      },
      error: () => this.snackBar.open('Failed to update status', '', { duration: 3000 })
    });
  }

  deleteProject(project: Project): void {
    // Defensive gate — buttons are already hidden for Employee, but guard
    // the action in case it's invoked via keyboard / programmatic trigger.
    if (this.isEmployee) return;
    if (!confirm(`Delete "${project.title}"? This cannot be undone.`)) return;
    this.projectService.deleteProject(project.id).subscribe({
      next: () => {
        this.snackBar.open('Project deleted', '', { duration: 2500 });
        this.allProjects = this.allProjects.filter(p => p.id !== project.id);
        this.applyFilters();
      },
      error: () => this.snackBar.open('Failed to delete project', '', { duration: 3000 })
    });
  }

  AddNewProject(): void {
    if (this.isEmployee) return;
    const ref = this.dialog.open(CreateProjectDialogeComponent, {
      width: '600px',
      height: '90%',
      panelClass: 'custom-dialog-container'
    });
    ref.afterClosed().subscribe(created => {
      if (created) {
        this.snackBar.open('Project created', '', { duration: 2500 });
        this.loadProjects();
      }
    });
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisible = 6;
    if (this.totalPages <= maxVisible) {
      for (let i = 1; i <= this.totalPages; i++) pages.push(i);
    } else {
      pages.push(1, 2, 3, 4, 5, 6);
    }
    return pages;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
  }

  previousPage(): void { if (this.currentPage > 1) this.currentPage--; }
  nextPage(): void     { if (this.currentPage < this.totalPages) this.currentPage++; }

  getProgressPercentage(): number {
    if (this.totalPages === 0) return 0;
    return (this.currentPage / this.totalPages) * 100;
  }

  // ── Refresh ────────────────────────────────────────────────
  refreshProjects(): void {
    this.searchQuery = '';
    this.selectedCategory = undefined;
    this.selectedStatus = undefined;
    this.selectedPriority = undefined;
    this.selectedPriorities = [];
    this.selectedProgressRange = '';
    this.showFilterPanel = false;
    this.loadProjects();
  }

  // ── View As Report ─────────────────────────────────────────
  viewAsReport(): void {
    this.router.navigate(['/dashboard/reports']);
  }

  // ── Advanced Filter Panel ──────────────────────────────────
  toggleFilterPanel(): void {
    this.showFilterPanel = !this.showFilterPanel;
  }

  hasAdvancedFilters(): boolean {
    return this.selectedPriorities.length > 0 || !!this.selectedProgressRange;
  }

  activeFilterCount(): number {
    let count = 0;
    if (this.selectedPriorities.length) count++;
    if (this.selectedProgressRange) count++;
    return count;
  }

  togglePriority(p: ProjectPriority): void {
    const idx = this.selectedPriorities.indexOf(p);
    if (idx === -1) {
      this.selectedPriorities = [...this.selectedPriorities, p];
    } else {
      this.selectedPriorities = this.selectedPriorities.filter(x => x !== p);
    }
  }

  toggleProgressRange(range: { label: string; min: number; max: number }): void {
    this.selectedProgressRange = this.selectedProgressRange === range.label ? '' : range.label;
  }

  getPriorityLabel(p: ProjectPriority): string {
    const map: Record<ProjectPriority, string> = {
      low: 'Low', medium: 'Medium', high: 'High', urgent: 'Urgent'
    };
    return map[p];
  }

  applyAdvancedFilters(): void {
    this.showFilterPanel = false;
    this.applyFilters();
  }

  clearAdvancedFilters(): void {
    this.selectedPriorities = [];
    this.selectedProgressRange = '';
    this.applyFilters();
  }
}
