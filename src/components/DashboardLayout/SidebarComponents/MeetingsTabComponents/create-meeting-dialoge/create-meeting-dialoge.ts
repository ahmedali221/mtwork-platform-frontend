import { Component, OnInit, inject, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamMember } from '../../../../../models/team-member';
import { TeamsService } from '../../../../../services/teams';
import { MeetingsService } from '../../../../../services/meetings';
import { Meeting, REPEAT_TYPE_TO_ID, REPEAT_ID_TO_TYPE } from '../../../../../models/meeting.model';

import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-create-meeting-dialoge',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, TranslocoModule],
  templateUrl: './create-meeting-dialoge.html',
  styleUrl: './create-meeting-dialoge.css'
})
export class CreateMeetingDialogeComponent implements OnInit {
  members: TeamMember[] = [];
  membersLoading = true;
  isSaving = false;
  membersDropdownOpen = false;

  isEditMode = false;
  editMeetingId: number | null = null;

  form = {
    title: '',
    meetingLink: '',
    meetingDescription: '',
    meetingDate: '',
    startTime: '',
    endTime: '',
    repeatType: 'None',
    assignedMemberIds: [] as string[]
  };

  public dialogRef = inject(MatDialogRef<CreateMeetingDialogeComponent>);
  private dialogData: { meeting?: Meeting } | null = inject(MAT_DIALOG_DATA, { optional: true });
  private teamsService = inject(TeamsService);
  private meetingsService = inject(MeetingsService);
  private elRef = inject(ElementRef);

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elRef.nativeElement.querySelector('.members-dropdown-wrapper')?.contains(event.target)) {
      this.membersDropdownOpen = false;
    }
  }

  get dialogTitle(): string {
    return this.isEditMode ? 'Edit Meeting' : 'Create New Meeting';
  }

  get saveLabel(): string {
    if (this.isSaving) return this.isEditMode ? 'Saving...' : 'Creating...';
    return this.isEditMode ? 'Save Changes' : 'Create';
  }

  get selectedMembersLabel(): string {
    if (this.membersLoading) return 'Loading members...';
    if (this.members.length === 0) return 'No employees found';
    const count = this.form.assignedMemberIds.length;
    if (count === 0) return 'Select members';
    if (count === 1) {
      const m = this.members.find(m => String(m.id) === this.form.assignedMemberIds[0]);
      return m?.name ?? '1 member selected';
    }
    return `${count} members selected`;
  }

  isMemberSelected(id: string | number): boolean {
    return this.form.assignedMemberIds.includes(String(id));
  }

  toggleMember(id: string | number): void {
    const sid = String(id);
    const idx = this.form.assignedMemberIds.indexOf(sid);
    if (idx === -1) {
      this.form.assignedMemberIds = [...this.form.assignedMemberIds, sid];
    } else {
      this.form.assignedMemberIds = this.form.assignedMemberIds.filter(x => x !== sid);
    }
  }

  toggleDropdown(): void {
    if (!this.membersLoading && this.members.length > 0) {
      this.membersDropdownOpen = !this.membersDropdownOpen;
    }
  }

  ngOnInit(): void {
    const existing = this.dialogData?.meeting;
    if (existing) {
      this.isEditMode = true;
      this.editMeetingId = existing.id;

      const dateStr = existing.startTime?.includes('T')
        ? existing.startTime.substring(0, 10)
        : (existing.meetingDate ?? '').substring(0, 10);

      const startStr = existing.startTime?.includes('T')
        ? existing.startTime.substring(11, 16)
        : existing.startTime?.substring(0, 5) ?? '';
      const endStr = existing.endTime?.includes('T')
        ? existing.endTime.substring(11, 16)
        : existing.endTime?.substring(0, 5) ?? '';

      const repeatType = existing.repeatType
        ?? REPEAT_ID_TO_TYPE[existing.repeatId ?? 0]
        ?? 'None';

      const existingIds: string[] = [
        ...(existing.participants?.map(p => String(p.id)) ?? []),
        ...(existing.meetingUsers?.map((u: any) => String(u.assignedUserId ?? u.id ?? '')) ?? []),
        ...(existing.meetingUserIds?.map(id => String(id)) ?? []),
      ].filter((v, i, a) => v && a.indexOf(v) === i);

      this.form = {
        title: existing.title ?? '',
        meetingLink: existing.meetingLink ?? '',
        meetingDescription: existing.description ?? existing.meetingDescription ?? '',
        meetingDate: dateStr,
        startTime: startStr,
        endTime: endStr,
        repeatType,
        assignedMemberIds: existingIds
      };
    }

    this.teamsService.getAllTeamMembers().subscribe({
      next: (members) => { this.members = members || []; this.membersLoading = false; },
      error: () => { this.members = []; this.membersLoading = false; }
    });
  }

  submitted = false;

  get isFormValid(): boolean {
    return !!(this.form.title.trim() && this.form.meetingDate && this.form.startTime && this.form.endTime);
  }

  saveMeeting(): void {
    this.submitted = true;
    if (!this.isFormValid) return;

    this.isSaving = true;

    const participants: TeamMember[] = this.members.filter(m =>
      this.form.assignedMemberIds.includes(String(m.id))
    );

    const startIso = this.form.meetingDate && this.form.startTime
      ? `${this.form.meetingDate}T${this.form.startTime}:00`
      : this.form.startTime;
    const endIso = this.form.meetingDate && this.form.endTime
      ? `${this.form.meetingDate}T${this.form.endTime}:00`
      : this.form.endTime;

    const payload: any = {
      title: this.form.title,
      meetingLink: this.form.meetingLink,
      description: this.form.meetingDescription,
      startTime: startIso,
      endTime: endIso,
      repeatId: REPEAT_TYPE_TO_ID[this.form.repeatType] ?? 0,
      meetingUserIds: participants.map(p => p.id),
    };

    if (this.isEditMode && this.editMeetingId) {
      payload['id'] = this.editMeetingId;
      this.meetingsService.updateMeeting(payload).subscribe({
        next: () => {
          this.isSaving = false;
          this.dialogRef.close({ success: true, updated: payload, participants });
        },
        error: () => { this.isSaving = false; }
      });
    } else {
      this.meetingsService.createMeeting(payload).subscribe({
        next: () => { this.isSaving = false; this.dialogRef.close(true); },
        error: () => { this.isSaving = false; }
      });
    }
  }
}
