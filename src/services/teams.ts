import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Team } from '../models/team.model';
import { TeamMember } from '../models/team-member';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private apiService = inject(ApiService);

  /**
   * Get all teams
   * Backend: GET Team/GetAll - returns { totalRows, item: Team[] }
   */
  getTeams(params?: any): Observable<Team[]> {
    return this.apiService.get<any>('Team/GetAll', params).pipe(
      map(response => {
        let raw: any[] = [];
        if (Array.isArray(response))              raw = response;
        else if (Array.isArray(response?.item))   raw = response.item;
        else if (Array.isArray(response?.result)) raw = response.result;
        else if (Array.isArray(response?.data))   raw = response.data;

        // Normalise every team so members is ALWAYS a safe array.
        return raw.map((t: any) => this.normalizeTeam(t));
      }),
      catchError(() => of([]))
    );
  }

  /**
   * Normalise a raw team payload from the backend.
   * Backend may return members under teamUsers / users / teamMembers,
   * and the name under nameEn / nameAr / teamName / name.
   * This guarantees the shape the UI expects so the template never crashes.
   */
  private normalizeTeam(t: any): Team {
    const rawMembers: any[] =
      (Array.isArray(t?.members)      ? t.members      : null) ||
      (Array.isArray(t?.teamUsers)    ? t.teamUsers    : null) ||
      (Array.isArray(t?.users)        ? t.users        : null) ||
      (Array.isArray(t?.teamMembers)  ? t.teamMembers  : null) ||
      [];

    let members: TeamMember[];

    if (rawMembers.length > 0) {
      // Full member objects returned (Team/Get)
      members = rawMembers.map((u: any) => {
        const fullName = `${u?.firstName || ''} ${u?.lastName || ''}`.trim();
        return {
          id:          u?.assignedUserId || u?.userId || u?.id || '',
          name:        u?.assignedUserName || fullName || u?.fullName || u?.displayName || u?.userName || u?.name || u?.assignedUserEmail || '',
          email:       u?.assignedUserEmail || u?.email || '',
          role:        u?.jobTitle || u?.role || u?.userType || '',
          teamId:      String(u?.teamId || t?.id || ''),
          avatar:      u?.profileImage || u?.avatarUrl || u?.avatar || 'assets/images/Avater.png',
          countryFlag: u?.countryFlag || '',
          designation: u?.jobTitle || u?.designation || u?.title || ''
        } as TeamMember;
      });
    } else if (typeof t?.teamUserCount === 'number' && t.teamUserCount > 0) {
      // Only count returned (Team/GetAll) — create stubs so the count is correct
      members = Array.from({ length: t.teamUserCount }, (_, i) => ({
        id:          `stub-${t.id}-${i}`,
        name:        '',
        email:       '',
        role:        '',
        teamId:      String(t?.id || ''),
        avatar:      'assets/images/Avater.png',
        countryFlag: '',
        designation: ''
      } as TeamMember));
    } else {
      members = [];
    }

    return {
      ...t,
      id:          t?.id ?? '',
      name:        t?.name || t?.nameEn || t?.nameAr || t?.teamName || '',
      description: t?.description || '',
      members,
      createdAt:   t?.createdAt ? new Date(t.createdAt) : new Date()
    } as Team;
  }

  /**
   * Get a single team by ID
   * Backend: GET Team/Get?TeamId=X
   */
  getTeamById(teamId: string | number): Observable<Team> {
    return this.apiService.get<any>('Team/Get', { TeamId: teamId }).pipe(
      map(response => {
        const raw = response?.data ?? response?.item ?? response?.result ?? response;
        return this.normalizeTeam(raw);
      })
    );
  }

  /**
   * Create a new team
   * Backend: POST Team/Create
   */
  createTeam(team: Team): Observable<Team> {
    return this.apiService.post<Team, Team>('Team/Create', team);
  }

  /**
   * Update an existing team
   * Backend: POST Team/Update
   */
  updateTeam(team: Team): Observable<Team> {
    return this.apiService.post<Team, Team>('Team/Update', team);
  }

  /**
   * Delete a team
   * Backend: DELETE Team/Delete?id=X
   */
  deleteTeam(id: string | number): Observable<void> {
    return this.apiService.delete<void>(`Team/Delete?id=${id}`);
  }

  /**
   * Get all company employees (as team members)
   * Backend: GET User/GetAllCompanyEmployees
   */
  getAllTeamMembers(): Observable<TeamMember[]> {
    return this.apiService.get<any>('User/GetAllCompanyEmployees').pipe(
      map(response => {
        const users = Array.isArray(response)
          ? response
          : response?.item || response?.result || response?.data || [];
        return users.map((u: any) => ({
          id: u.id || u.userId,
          name: `${u.firstName || ''} ${u.lastName || ''}`.trim() || u.userName,
          email: u.email,
          role: u.jobTitle || u.userType || '',
          teamId: u.teamId || '',
          avatar: u.profileImage || 'assets/images/Avater.png',
          countryFlag: '',
          designation: u.jobTitle || ''
        } as TeamMember));
      }),
      catchError(() => of([]))
    );
  }

  /**
   * Get members of a specific team
   */
  getTeamMembersByTeamId(teamId: string): Observable<TeamMember[]> {
    return this.getTeamById(teamId).pipe(
      map((team: any) => team?.teamUsers || team?.members || [])
    );
  }

  /**
   * Invite a member by email
   */
  inviteMember(email: string): Observable<{ success: boolean; email: string }> {
    return this.apiService.post<any, any>('Auth/register', { email }).pipe(
      map(() => ({ success: true, email })),
      catchError(() => of({ success: false, email }))
    );
  }
}
