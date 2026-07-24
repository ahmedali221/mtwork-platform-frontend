import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamsService } from '../../../../../services/teams';
import { Team } from '../../../../../models/team.model';
import { TeamMember } from '../../../../../models/team-member';

export interface CreateTeamData {
  teamName: string;
  assigners: string[];     // selected member IDs
  sendViaEmail: string;
  teamIcon: string;
}

import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-create-team-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, TranslocoModule],
  templateUrl: './create-team-dialog.html',
  styleUrl: './create-team-dialog.css'
})
export class CreateTeamDialogComponent implements OnInit {
  private dialogRef    = inject(MatDialogRef<CreateTeamDialogComponent>);
  private teamsService = inject(TeamsService);
  dialogData           = inject<{ team?: Team }>(MAT_DIALOG_DATA, { optional: true });

  get isEditMode(): boolean { return !!this.dialogData?.team; }

  saving = false;
  saveError = signal<string | null>(null);

  teamData: CreateTeamData = {
    teamName: '',
    assigners: [],
    sendViaEmail: '',
    teamIcon: ''
  };

  availableAssigners: TeamMember[] = [];
  membersLoading = false;
  availableIcons: string[] = ['work', 'group', 'star', 'settings'];

  ngOnInit(): void {
    this.loadMembers();
  }

  private loadMembers(): void {
    this.membersLoading = true;
    this.teamsService.getAllTeamMembers().subscribe({
      next: (members) => {
        this.availableAssigners = members || [];
        this.membersLoading = false;
        if (this.isEditMode) {
          this.prefillFromTeam();
        }
      },
      error: () => {
        this.availableAssigners = [];
        this.membersLoading = false;
      }
    });
  }

  private prefillFromTeam(): void {
    const team = this.dialogData!.team!;
    this.teamData.teamName = team.name || '';
    this.teamData.assigners = (team.members || []).map(m => String(m.id));
  }

  get membersPlaceholder(): string {
    if (this.membersLoading) return 'Loading members...';
    if (this.availableAssigners.length === 0) return 'No employees found';
    return 'Select members';
  }

  save(): void {
    if (this.isEditMode) {
      this.updateTeam();
    } else {
      this.createTeam();
    }
  }

  private createTeam(): void {
    const name = this.teamData.teamName.trim();
    if (!name) return;

    this.saving = true;
    this.saveError.set(null);

    const createUser = (
      localStorage.getItem('userId') ??
      localStorage.getItem('userName') ??
      localStorage.getItem('email') ??
      ''
    ).trim();

    const teamUserIds: string[] = (this.teamData.assigners || [])
      .filter(id => id != null && String(id).trim() !== '')
      .map(id => String(id));

    const payload: any = {
      id:          0,
      nameAr:      name,
      nameEn:      name,
      desc:        '',
      createUser,
      teamUserIds,
    };

    this.teamsService.createTeam(payload as Team).subscribe({
      next: () => {
        this.saving = false;
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.saving = false;
        this.saveError.set(this.extractError(err));
      }
    });
  }

  private updateTeam(): void {
    const name = this.teamData.teamName.trim();
    if (!name) return;

    this.saving = true;
    this.saveError.set(null);

    const teamId = this.dialogData!.team!.id;
    const teamUserIds: string[] = (this.teamData.assigners || [])
      .filter(id => id != null && String(id).trim() !== '')
      .map(id => String(id));

    const payload: any = {
      id:          teamId,
      nameAr:      name,
      nameEn:      name,
      desc:        '',
      teamUserIds,
    };

    this.teamsService.updateTeam(payload as Team).subscribe({
      next: () => {
        this.saving = false;
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.saving = false;
        this.saveError.set(this.extractError(err));
      }
    });
  }

  private extractError(err: any): string {
    return (
      err?.error?.message ??
      err?.error?.title ??
      err?.error?.errorMsg ??
      (typeof err?.error === 'string' ? err.error.slice(0, 300) : null) ??
      err?.message ??
      ('Server error ' + (err?.status ?? ''))
    );
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
