import {
  Component, OnInit, OnDestroy, inject, ChangeDetectorRef, signal,
  ElementRef, HostListener, ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { Meeting, REPEAT_ID_TO_TYPE, REPEAT_TYPE_TO_ID } from '../../../../../models/meeting.model';
import { TeamMember } from '../../../../../models/team-member';
import { MeetingsService } from '../../../../../services/meetings';
import { TeamsService } from '../../../../../services/teams';
import { CreateMeetingDialogeComponent } from '../create-meeting-dialoge/create-meeting-dialoge';
import { TokenService } from '../../../../../services/token.service';
import { UserRole } from '../../../../../models/roles.enum';

import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-meetings-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatMenuModule, TranslocoModule],
  templateUrl: './meetings-list.html',
  styleUrls: ['./meetings-list.css']
})
export class MeetingsListComponent implements OnInit, OnDestroy {

  // ── Data ─────────────────────────────────────────────────────
  meetings: Meeting[] = [];
  filteredMeetings: Meeting[] = [];

  // ── Filter state ─────────────────────────────────────────────
  searchQuery = '';
  statusFilter = 'All';
  repeatFilter = 'All';

  // ── UI signals ───────────────────────────────────────────────
  selectedMeeting = signal<Meeting | null>(null);
  drawerFullscreen = signal(false);
  showFilters = signal(false);
  isFullscreen = signal(false);
  isLoading = signal(false);
  loadError = signal<string | null>(null);

  // ── Toolbar consistency — plain `viewMode` property ──────────────
  viewMode: 'table' | 'cards' = 'cards';   // page is card-first today
  setView(mode: 'table' | 'cards'): void {
    this.viewMode = mode;
    this.cdr.markForCheck();
  }
  refresh(): void { this.loadMeetings(); }

  // ── Delete confirmation ───────────────────────────────────────
  pendingDeleteId: number | null = null;
  isDeleting = false;

  // ── Drawer: add-member state ──────────────────────────────────
  showMemberPicker = false;
  allMembers: TeamMember[] = [];
  membersLoading = false;
  selectedNewMemberId = '';
  isAddingMember = false;
  linkCopied = false;

  // ── Filter popover click-outside ─────────────────────────────
  @ViewChild('filterWrap') filterWrapRef!: ElementRef;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (
      this.showFilters() &&
      this.filterWrapRef &&
      !this.filterWrapRef.nativeElement.contains(event.target as Node)
    ) {
      this.showFilters.set(false);
    }
  }

  // ── Deps ─────────────────────────────────────────────────────
  private meetingService = inject(MeetingsService);
  private teamsService   = inject(TeamsService);
  private dialog         = inject(MatDialog);
  private cdr            = inject(ChangeDetectorRef);
  private tokenService   = inject(TokenService);

  /** Employees can view/join meetings but not create, edit, or delete them. */
  readonly isEmployee: boolean = this.tokenService.getUserRole() === UserRole.Employee;

  private readonly onFsChange = () => {
    this.isFullscreen.set(!!document.fullscreenElement);
    this.cdr.markForCheck();
  };

  // ── Lifecycle ─────────────────────────────────────────────────
  ngOnInit(): void {
    this.loadMeetings();
    document.addEventListener('fullscreenchange', this.onFsChange);
  }

  ngOnDestroy(): void {
    document.removeEventListener('fullscreenchange', this.onFsChange);
  }

  // ── Data loading ─────────────────────────────────────────────
  loadMeetings(): void {
    this.isLoading.set(true);
    this.loadError.set(null);
    this.meetingService.getMeetings().subscribe({
      next: data => {
        this.meetings = data;
        this.applyFilters();
        this.isLoading.set(false);
        this.cdr.markForCheck();
      },
      error: () => {
        this.loadError.set('Failed to load meetings. Please try again.');
        this.isLoading.set(false);
        this.cdr.markForCheck();
      }
    });
  }

  // ── Filtering ─────────────────────────────────────────────────
  applyFilters(): void {
    const q = this.searchQuery.toLowerCase();
    this.filteredMeetings = this.meetings.filter(m => {
      const matchTitle  = (m.title ?? '').toLowerCase().includes(q);
      const matchMember = m.participants?.some(p => (p.name ?? '').toLowerCase().includes(q)) ?? false;
      const matchStatus = this.statusFilter === 'All'
        || (m.status ?? '').toLowerCase() === this.statusFilter.toLowerCase();
      const matchRepeat = this.repeatFilter === 'All'
        || (m.repeatType ?? '').toLowerCase() === this.repeatFilter.toLowerCase();
      return (matchTitle || matchMember) && matchStatus && matchRepeat;
    });
  }

  onSearchChange():       void { this.applyFilters(); this.cdr.markForCheck(); }
  onStatusFilterChange(): void { this.applyFilters(); this.cdr.markForCheck(); }
  onRepeatFilterChange(): void { this.applyFilters(); this.cdr.markForCheck(); }

  hasActiveFilters(): boolean {
    return this.statusFilter !== 'All' || this.repeatFilter !== 'All';
  }

  clearFilters(): void {
    this.statusFilter = 'All';
    this.repeatFilter = 'All';
    this.applyFilters();
    this.cdr.markForCheck();
  }

  toggleFilters(): void { this.showFilters.update(v => !v); }

  // ── Fullscreen ────────────────────────────────────────────────
  toggleFullscreen(): void {
    const el = document.querySelector('.meetings-page') as HTMLElement;
    if (!document.fullscreenElement) {
      el?.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  // ── Create / Edit ─────────────────────────────────────────────
  addNewMeeting(): void {
    if (this.isEmployee) return;
    const ref = this.dialog.open(CreateMeetingDialogeComponent, {
      width: '600px',
      panelClass: 'custom-dialog-container'
    });
    ref.afterClosed().subscribe(result => {
      if (result === true) this.loadMeetings();
    });
  }

  openEditMeeting(meeting: Meeting): void {
    if (this.isEmployee) return;
    const ref = this.dialog.open(CreateMeetingDialogeComponent, {
      width: '600px',
      panelClass: 'custom-dialog-container',
      data: { meeting }
    });
    ref.afterClosed().subscribe(saved => {
      if (saved?.success && saved.updated) {
        const idx = this.meetings.findIndex(m => m.id === saved.updated.id);
        if (idx !== -1) {
          this.meetings[idx] = {
            ...this.meetings[idx],
            title:               saved.updated.title,
            meetingLink:         saved.updated.meetingLink,
            meetingDescription:  saved.updated.description,
            description:         saved.updated.description,
            startTime:           saved.updated.startTime,
            endTime:             saved.updated.endTime,
            repeatId:            saved.updated.repeatId,
            repeatType:          REPEAT_ID_TO_TYPE[saved.updated.repeatId] ?? 'None',
            participants:        saved.participants ?? this.meetings[idx].participants,
          };
          this.meetings = [...this.meetings];
        }
        // Refresh drawer if it's showing the edited meeting
        if (this.selectedMeeting()?.id === saved.updated.id) {
          this.selectedMeeting.set(this.meetings.find(m => m.id === saved.updated.id) ?? null);
        }
        this.applyFilters();
        this.cdr.markForCheck();
      } else if (saved === true) {
        this.loadMeetings();
      }
    });
  }

  // ── Drawer ────────────────────────────────────────────────────
  showMeetingDetails(meeting: Meeting): void {
    this.selectedMeeting.set(meeting);
    this.showMemberPicker = false;
    this.linkCopied = false;
    this.drawerFullscreen.set(false);
  }

  closeDrawer(): void {
    this.selectedMeeting.set(null);
    this.showMemberPicker = false;
    this.drawerFullscreen.set(false);
  }

  toggleDrawerFullscreen(): void { this.drawerFullscreen.update(v => !v); }

  editFromDrawer(): void {
    const m = this.selectedMeeting();
    if (!m) return;
    this.closeDrawer();
    this.openEditMeeting(m);
  }

  // ── Delete ────────────────────────────────────────────────────
  requestDelete(id: number): void {
    if (this.isEmployee) return;
    this.pendingDeleteId = id;
  }
  cancelDelete():            void { this.pendingDeleteId = null; }

  confirmDelete(): void {
    if (this.pendingDeleteId === null || this.isDeleting) return;
    const id = this.pendingDeleteId;
    this.isDeleting = true;
    this.meetingService.deleteMeeting(id).subscribe({
      next: () => {
        this.meetings = this.meetings.filter(m => m.id !== id);
        this.applyFilters();
        if (this.selectedMeeting()?.id === id) this.closeDrawer();
        this.pendingDeleteId = null;
        this.isDeleting = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.pendingDeleteId = null;
        this.isDeleting = false;
        this.cdr.markForCheck();
      }
    });
  }

  // ── Copy link ─────────────────────────────────────────────────
  copyLink(): void {
    const link = this.selectedMeeting()?.meetingLink;
    if (!link) return;
    const done = () => {
      this.linkCopied = true;
      this.cdr.markForCheck();
      setTimeout(() => { this.linkCopied = false; this.cdr.markForCheck(); }, 2000);
    };
    navigator.clipboard.writeText(link).then(done).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = link;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      done();
    });
  }

  // ── Drawer: add member ────────────────────────────────────────
  toggleMemberPicker(): void {
    this.showMemberPicker = !this.showMemberPicker;
    if (this.showMemberPicker && this.allMembers.length === 0) {
      this.membersLoading = true;
      this.teamsService.getAllTeamMembers().subscribe({
        next: m  => { this.allMembers = m || []; this.membersLoading = false; this.cdr.markForCheck(); },
        error: () => { this.allMembers = [];      this.membersLoading = false; this.cdr.markForCheck(); }
      });
    }
  }

  get availableMembers(): TeamMember[] {
    const existing = (this.selectedMeeting()?.participants ?? []).map(p => String(p.id));
    return this.allMembers.filter(m => !existing.includes(String(m.id)));
  }

  confirmAddMember(): void {
    const meeting = this.selectedMeeting();
    if (!this.selectedNewMemberId || !meeting) return;
    const member = this.allMembers.find(m => String(m.id) === String(this.selectedNewMemberId));
    if (!member) return;

    this.isAddingMember = true;
    const updatedParticipants = [...(meeting.participants ?? []), member];

    const dateStr = meeting.startTime?.includes('T')
      ? meeting.startTime.substring(0, 10)
      : (meeting.meetingDate ?? '').substring(0, 10);
    const toIso = (t: string) =>
      t && !t.includes('T') && dateStr ? `${dateStr}T${t}:00` : t;

    const repeatId = meeting.repeatId
      ?? REPEAT_TYPE_TO_ID[meeting.repeatType ?? 'None']
      ?? 0;

    const payload: any = {
      id:             meeting.id,
      title:          meeting.title,
      meetingLink:    meeting.meetingLink,
      description:    meeting.description ?? meeting.meetingDescription ?? '',
      startTime:      toIso(meeting.startTime),
      endTime:        toIso(meeting.endTime),
      repeatId,
      meetingUserIds: updatedParticipants.map(p => p.id),
    };

    this.meetingService.updateMeeting(payload).subscribe({
      next: () => {
        meeting.participants    = updatedParticipants;
        meeting.meetingUsers    = updatedParticipants;
        meeting.meetingUserIds  = updatedParticipants.map(p => p.id);
        this.selectedNewMemberId = '';
        this.showMemberPicker    = false;
        this.isAddingMember      = false;
        this.cdr.markForCheck();
      },
      error: () => { this.isAddingMember = false; this.cdr.markForCheck(); }
    });
  }

  cancelAddMember(): void {
    this.showMemberPicker    = false;
    this.selectedNewMemberId = '';
  }

  // ── Helpers ───────────────────────────────────────────────────
  getInitials(name: string): string {
    if (!name) return '?';
    const parts = name.trim().split(/\s+/);
    return parts.length >= 2
      ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
      : parts[0].substring(0, 2).toUpperCase();
  }

  getAvatarClass(name: string): string {
    const classes = [
      'av-1', 'av-2', 'av-3', 'av-4', 'av-5', 'av-6'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return classes[Math.abs(hash) % classes.length];
  }

  formatTime(val: string): string {
    if (!val) return '—';
    try {
      const d = new Date(val);
      if (isNaN(d.getTime())) return val.substring(0, 5);
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch { return val; }
  }

  formatDateTime(val: string): string {
    if (!val) return '—';
    try {
      const d = new Date(val);
      if (isNaN(d.getTime())) return val;
      return d.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' })
           + '  '
           + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch { return val; }
  }

  getParticipantNames(meeting: Meeting): string {
    const list = meeting.participants ?? meeting.meetingUsers ?? [];
    return list.map(p => p.name).filter(Boolean).join(', ');
  }
}
