import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TeamsService } from '../../../../../services/teams';
import { Team } from '../../../../../models/team.model';
import { TeamMember } from '../../../../../models/team-member';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InviteMembersDialogComponent } from '../invite-members-dialog/invite-members-dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CreateTeamDialogComponent } from '../create-team-dialog/create-team-dialog';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../../../../../services/token.service';
import { UserRole } from '../../../../../models/roles.enum';

import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-teams-list',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    MatTooltipModule, TranslocoModule],
  templateUrl: './teams-list.html',
  styleUrls: ['./teams-list.css']
})
export class TeamsListComponent implements OnInit, OnDestroy {
  allPeople: TeamMember[] = [];
  teams: Team[] = [];
  filteredTeams: Team[] = [];
  searchQuery = '';
  membersFilter = 'All';

  // ── Drawer + fullscreen state ────────────────────────────────────────
  selectedTeam = signal<Team | null>(null);
  isFullscreen = signal(false);

  // ── Toolbar consistency — plain `viewMode` property ──────────────
  viewMode: 'table' | 'cards' = 'cards';   // page is card-first today
  setView(mode: 'table' | 'cards'): void {
    this.viewMode = mode;
    this.cdr.markForCheck();
  }
  refresh(): void { this.loadTeams(); this.loadAllPeople(); }

  // ── Pagination ──────────────────────────────────────────────────────
  currentPage = 1;
  readonly pageSize = 9;

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredTeams.length / this.pageSize));
  }

  get pages(): number[] {
    return Array.from({ length: Math.min(this.totalPages, 6) }, (_, i) => i + 1);
  }

  get paginatedTeams(): Team[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredTeams.slice(start, start + this.pageSize);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) this.currentPage = page;
  }

  nextPage(): void { this.goToPage(this.currentPage + 1); }
  prevPage(): void { this.goToPage(this.currentPage - 1); }

  // ── Deps ────────────────────────────────────────────────────────────
  private teamService  = inject(TeamsService);
  private cdr          = inject(ChangeDetectorRef);
  dialog                = inject(MatDialog);
  private route        = inject(ActivatedRoute);
  private router       = inject(Router);
  private tokenService = inject(TokenService);
  private routeSub!: Subscription;

  /** Employees can view teams but not create teams or invite members. */
  readonly isEmployee: boolean = this.tokenService.getUserRole() === UserRole.Employee;

  private readonly onFullscreenChange = () => {
    this.isFullscreen.set(!!document.fullscreenElement);
    this.cdr.markForCheck();
  };

  ngOnInit(): void {
    this.loadAllPeople();
    this.loadTeams();
    this.routeSub = this.route.queryParams.subscribe(params => {
      const action = params['action'];
      if (action === 'create-team')   { this.addNewTeam();            this.clearActionParam(); }
      else if (action === 'invite-worker') { this.openInviteMemberDialog(); this.clearActionParam(); }
      if (params['refreshed']) { this.loadTeams(); this.loadAllPeople(); }
    });
    document.addEventListener('fullscreenchange', this.onFullscreenChange);
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
    document.removeEventListener('fullscreenchange', this.onFullscreenChange);
  }

  private clearActionParam(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { action: null },
      queryParamsHandling: 'merge'
    });
  }

  loadAllPeople(): void {
    this.teamService.getAllTeamMembers().subscribe({
      next: data => { this.allPeople = data; this.cdr.markForCheck(); },
      error: () => {}
    });
  }

  loadTeams(): void {
    this.teamService.getTeams().subscribe({
      next: data => {
        const raw = Array.isArray(data) ? data : [];
        this.teams = raw.map((t: any) => ({
          ...t,
          name: t.name || t.nameEn || t.nameAr || t.teamName || '',
          members: Array.isArray(t.members) ? t.members : []
        }));
        this.applyFilters();
        this.cdr.markForCheck();
      },
      error: () => { this.teams = []; this.applyFilters(); this.cdr.markForCheck(); }
    });
  }

  applyFilters(): void {
    this.filteredTeams = this.teams.filter(team => {
      const displayName = this.resolveTeamName(team).toLowerCase();
      const matchesSearch = !this.searchQuery || displayName.includes(this.searchQuery.toLowerCase());
      const count = team.members?.length || 0;
      const matchesMembers =
        this.membersFilter === 'All' ||
        (this.membersFilter === 'HasMembers' && count > 0) ||
        (this.membersFilter === 'NoMembers'  && count === 0);
      return matchesSearch && matchesMembers;
    });
    this.currentPage = 1;
  }

  onSearchChange(): void { this.applyFilters(); }

  openInviteMemberDialog(): void {
    if (this.isEmployee) return;
    this.dialog.open(InviteMembersDialogComponent, {
      width: '560px',
      panelClass: 'teams-modal-panel',
      autoFocus: true
    });
  }

  addNewTeam(): void {
    if (this.isEmployee) return;
    const ref = this.dialog.open(CreateTeamDialogComponent, {
      width: '580px',
      panelClass: 'teams-modal-panel',
      autoFocus: true
    });
    ref.afterClosed().subscribe(saved => { if (saved) this.loadTeams(); });
  }

  editTeam(teamId: string): void {
    if (this.isEmployee) return;
    this.teamService.getTeamById(teamId).subscribe({
      next: fullTeam => {
        const ref = this.dialog.open(CreateTeamDialogComponent, {
          width: '580px',
          panelClass: 'teams-modal-panel',
          data: { team: fullTeam }
        });
        ref.afterClosed().subscribe(saved => { if (saved) this.loadTeams(); });
      },
      error: () => {
        const team = this.teams.find(t => t.id === teamId);
        if (!team) return;
        const ref = this.dialog.open(CreateTeamDialogComponent, {
          width: '580px',
          panelClass: 'teams-modal-panel',
          data: { team }
        });
        ref.afterClosed().subscribe(saved => { if (saved) this.loadTeams(); });
      }
    });
  }

  showTeamDetails(teamId: string): void {
    this.teamService.getTeamById(teamId).subscribe({
      next: fullTeam  => this.selectedTeam.set(fullTeam),
      error: ()       => {
        const team = this.teams.find(t => t.id === teamId);
        if (team) this.selectedTeam.set(team);
      }
    });
  }

  closeDrawer(): void {
    this.selectedTeam.set(null);
  }

  toggleFullscreen(): void {
    const el = document.querySelector('.teams-page') as HTMLElement;
    if (!document.fullscreenElement) {
      el?.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  deleteTeam(teamId: string): void {
    if (this.isEmployee) return;
    if (!confirm('Are you sure you want to delete this team?')) return;
    this.teamService.deleteTeam(teamId).subscribe({
      next: () => this.loadTeams(),
      error: () => {}
    });
  }

  resolveTeamName(team: any): string {
    const lang = localStorage.getItem('lang') || 'en';
    if (lang === 'ar') return team?.nameAr || team?.nameEn || team?.name || team?.teamName || '';
    return team?.nameEn || team?.nameAr || team?.name || team?.teamName || '';
  }

  getInitials(name: string | undefined | null): string {
    if (!name) return '?';
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }

  isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
