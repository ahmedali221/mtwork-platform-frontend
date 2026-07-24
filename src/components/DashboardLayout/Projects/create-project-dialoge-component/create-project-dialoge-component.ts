import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProjectService } from '../../../../services/project-service';
import { Project, BackendProjectDto } from './../../../../models/project';
import { TeamsService } from '../../../../services/teams';
import { Team } from '../../../../models/team.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-create-project-dialoge-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule, TranslocoModule],
  templateUrl: './create-project-dialoge-component.html',
  styleUrls: ['./create-project-dialoge-component.css']
})
export class CreateProjectDialogeComponent implements OnInit {
  private readonly dialogRef      = inject(MatDialogRef<CreateProjectDialogeComponent>);
  private readonly projectService = inject(ProjectService);
  private readonly teamsService   = inject(TeamsService);
  private readonly dialogData: { project?: Project } | null = inject(MAT_DIALOG_DATA, { optional: true });

  isEditMode = false;
  private projectId: string | null = null;
  private editProjectIntId = 0; // integer id for update payload

  // ── Form fields ──────────────────────────────────────────────
  nameAr = '';
  nameEn = '';
  desc   = '';
  selectedTeamIds: number[] = [];

  // ── State ────────────────────────────────────────────────────
  isSaving     = false;
  saveError    = signal<string | null>(null);
  teams        = signal<Team[]>([]);
  loadingTeams = signal(false);

  readonly availableIcons: string[] = ['folder', 'work', 'business', 'assignment', 'dashboard'];

  ngOnInit(): void {
    this.loadTeams();

    const project = this.dialogData?.project as any;
    if (project) {
      this.isEditMode       = true;
      this.projectId        = String(project.id);
      this.editProjectIntId = Number(project.id) || 0;

      // Populate form from backend-mapped project (see mapBackendProject in service)
      this.nameEn = project._nameEn ?? project.title ?? '';
      this.nameAr = project._nameAr ?? project.title ?? '';
      this.desc   = project.description ?? '';

      const existingTeams: any[] = project._projectTeams ?? [];
      this.selectedTeamIds = existingTeams.map((t: any) => Number(t.teamId)).filter(Boolean);
    }
  }

  private loadTeams(): void {
    this.loadingTeams.set(true);
    this.teamsService.getTeams().pipe(
      catchError(() => of([] as Team[]))
    ).subscribe(list => {
      this.teams.set(list);
      this.loadingTeams.set(false);
    });
  }

  /** Resolve display title for the dialog — use nameEn as primary */
  get formTitle(): string {
    return this.nameEn || this.nameAr || '';
  }

  /**
   * Resolve team display name.
   * Backend may return nameAr/nameEn (like projects) OR name (string).
   */
  teamDisplayName(team: any): string {
    const lang = localStorage.getItem('lang') || 'en';
    if (lang === 'ar') {
      return team.nameAr || team.nameEn || team.name || team.teamName || String(team.id);
    }
    return team.nameEn || team.nameAr || team.name || team.teamName || String(team.id);
  }

  cancel(): void { this.dialogRef.close(false); }

  save(): void {
    const name = (this.nameEn || this.nameAr || '').trim();
    if (!name || this.isSaving) return;

    this.isSaving = true;
    this.saveError.set(null);

    const createUser = localStorage.getItem('userId') ?? localStorage.getItem('userName') ?? '';

    // Build payload that exactly matches /api/Project/Create & /api/Project/Update schema
    const payload: BackendProjectDto = {
      id:                 this.isEditMode ? this.editProjectIntId : 0,
      nameAr:             this.nameAr.trim() || this.nameEn.trim(),
      nameEn:             this.nameEn.trim() || this.nameAr.trim(),
      desc:               this.desc.trim(),
      createUser,
      progressPercentage: 0,
      projectTeamIds:     this.selectedTeamIds,
      projectTeams:       [],
    };

    const op = this.isEditMode && this.projectId
      ? this.projectService.updateProject(this.projectId, payload)
      : this.projectService.createProject(payload);

    op.subscribe({
      next: () => { this.dialogRef.close(true); },
      error: (err: any) => {
        this.isSaving = false;
        const msg =
          err?.error?.message ??
          err?.error?.title ??
          (typeof err?.error === 'string' ? err.error.slice(0, 300) : null) ??
          err?.message ??
          ('Server error ' + (err?.status ?? ''));
        this.saveError.set(msg);
      }
    });
  }
}
