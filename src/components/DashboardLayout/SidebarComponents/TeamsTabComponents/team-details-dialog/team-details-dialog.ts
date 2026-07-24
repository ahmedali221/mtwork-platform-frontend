import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Team } from '../../../../../models/team.model';

import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-team-details-dialog',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './team-details-dialog.html',
  styleUrl: './team-details-dialog.css'
})
export class TeamDetailsDialogComponent {
  private dialogRef = inject(MatDialogRef<TeamDetailsDialogComponent>);
  team              = inject<Team>(MAT_DIALOG_DATA);

  getInitials(name: string | undefined | null): string {
    if (!name) return '?';
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }

  close(): void {
    this.dialogRef.close();
  }
}
