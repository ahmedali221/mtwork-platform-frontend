import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Meeting, REPEAT_TYPE_TO_ID } from '../../../../../models/meeting.model';
import { TeamMember } from '../../../../../models/team-member';
import { MeetingsService } from '../../../../../services/meetings';
import { TeamsService } from '../../../../../services/teams';

import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-meeting-details-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule, TranslocoModule],
  templateUrl: './meeting-details.html',
  styleUrl: './meeting-details.css'
})
export class MeetingDetailsDialogeComponent implements OnInit {
  selectedMeeting: Meeting | undefined;
  linkCopied = false;
  isDeleting = false;

  // Add-member state
  showMemberPicker = false;
  allMembers: TeamMember[] = [];
  membersLoading = false;
  selectedNewMemberId = '';
  isAddingMember = false;

  public dialogRef = inject(MatDialogRef<MeetingDetailsDialogeComponent>);
  private data: { meeting: Meeting } = inject(MAT_DIALOG_DATA);
  private meetingsService = inject(MeetingsService);
  private teamsService = inject(TeamsService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.selectedMeeting = this.data.meeting;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  // ── Copy Link ───────────────────────────────────────────────────────────────

  copyLink(): void {
    if (!this.selectedMeeting?.meetingLink) return;
    navigator.clipboard.writeText(this.selectedMeeting.meetingLink).then(() => {
      this.linkCopied = true;
      setTimeout(() => (this.linkCopied = false), 2000);
    }).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = this.selectedMeeting!.meetingLink;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      this.linkCopied = true;
      setTimeout(() => (this.linkCopied = false), 2000);
    });
  }

  // ── Edit ────────────────────────────────────────────────────────────────────

  editMeeting(): void {
    this.dialogRef.close({ action: 'edit', meeting: this.selectedMeeting });
  }

  // ── Delete ──────────────────────────────────────────────────────────────────

  deleteMeeting(): void {
    if (!this.selectedMeeting?.id || this.isDeleting) return;
    this.isDeleting = true;
    this.meetingsService.deleteMeeting(this.selectedMeeting.id).subscribe({
      next: () => {
        this.isDeleting = false;
        this.dialogRef.close({ action: 'deleted', id: this.selectedMeeting!.id });
      },
      error: () => {
        this.isDeleting = false;
      }
    });
  }

  // ── Add Member ──────────────────────────────────────────────────────────────

  addMember(): void {
    this.showMemberPicker = !this.showMemberPicker;
    if (this.showMemberPicker && this.allMembers.length === 0) {
      this.membersLoading = true;
      this.teamsService.getAllTeamMembers().subscribe({
        next: (members) => { this.allMembers = members || []; this.membersLoading = false; this.cdr.detectChanges(); },
        error: () => { this.allMembers = []; this.membersLoading = false; this.cdr.detectChanges(); }
      });
    }
  }

  /** Members not yet in this meeting */
  get availableMembers(): TeamMember[] {
    const existing = (this.selectedMeeting?.participants ?? []).map(p => String(p.id));
    return this.allMembers.filter(m => !existing.includes(String(m.id)));
  }

  confirmAddMember(): void {
    if (!this.selectedNewMemberId || !this.selectedMeeting) return;
    const member = this.allMembers.find(m => String(m.id) === String(this.selectedNewMemberId));
    if (!member) return;

    this.isAddingMember = true;
    const updatedParticipants = [...(this.selectedMeeting.participants ?? []), member];

    // Build ISO strings for startTime / endTime
    const meetingDate = this.selectedMeeting.startTime?.includes('T')
      ? this.selectedMeeting.startTime.substring(0, 10)
      : (this.selectedMeeting.meetingDate ?? '').substring(0, 10);

    const toIso = (t: string) =>
      t && !t.includes('T') && meetingDate ? `${meetingDate}T${t}:00` : t;

    // Resolve repeatId: prefer raw repeatId, fall back to mapping from repeatType string
    const repeatId = this.selectedMeeting.repeatId
      ?? REPEAT_TYPE_TO_ID[this.selectedMeeting.repeatType ?? 'None']
      ?? 0;

    // Payload uses actual backend field names
    const payload: any = {
      id: this.selectedMeeting.id,
      title: this.selectedMeeting.title,
      meetingLink: this.selectedMeeting.meetingLink,
      description: this.selectedMeeting.description ?? this.selectedMeeting.meetingDescription ?? '',
      startTime: toIso(this.selectedMeeting.startTime),
      endTime: toIso(this.selectedMeeting.endTime),
      repeatId,
      meetingUserIds: updatedParticipants.map(p => p.id),
    };

    this.meetingsService.updateMeeting(payload).subscribe({
      next: () => {
        // Update local view immediately
        this.selectedMeeting!.participants = updatedParticipants;
        this.selectedMeeting!.meetingUsers = updatedParticipants;
        this.selectedMeeting!.meetingUserIds = updatedParticipants.map(p => p.id);
        this.selectedNewMemberId = '';
        this.showMemberPicker = false;
        this.isAddingMember = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.isAddingMember = false;
      }
    });
  }

  cancelAddMember(): void {
    this.showMemberPicker = false;
    this.selectedNewMemberId = '';
  }

  // ── Avatar helpers ──────────────────────────────────────────────────────────

  getInitials(name: string): string {
    if (!name) return '';
    const parts = name.trim().split(' ');
    return parts.length >= 2
      ? (parts[0][0] + parts[1][0]).toUpperCase()
      : name.substring(0, 2).toUpperCase();
  }

  getAvatarColor(name: string): string {
    const colors = ['var(--chart-1,#FFB74D)', 'var(--chart-2,#4FC3F7)', 'var(--chart-3,#81C784)', 'var(--chart-4,#E57373)', 'var(--chart-5,#9575CD)', 'var(--chart-6,#F06292)'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  }
}
