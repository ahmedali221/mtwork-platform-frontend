import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Meeting, REPEAT_ID_TO_TYPE } from '../models/meeting.model';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {

  private readonly apiService = inject(ApiService);

  /**
   * Map raw API meeting object to our Meeting interface.
   * The backend returns `description`, `repeatId`, `meetingUsers`, `meetingUserIds`
   * but our templates/filters use `meetingDescription`, `repeatType`, `participants`.
   */
  private mapMeeting(raw: any): Meeting {
    return {
      ...raw,
      // Compatibility mappings
      meetingDescription: raw.description ?? '',
      repeatType: REPEAT_ID_TO_TYPE[raw.repeatId ?? 0] ?? 'None',
      status: raw.status ?? 'Scheduled',
      participants: Array.isArray(raw.meetingUsers)
        ? raw.meetingUsers.map((u: any) => ({
            id: u.assignedUserId ?? u.id ?? u.userId ?? '',
            name: u.assignedUserName ?? u.name
              ?? (`${u.firstName ?? ''} ${u.lastName ?? ''}`).trim()
              ?? u.userName ?? '',
            email: u.email ?? '',
            role: u.jobTitle ?? u.role ?? u.designation ?? '',
            avatar: u.profileImage ?? u.avatar ?? '',
            designation: u.jobTitle ?? u.designation ?? '',
          }))
        : [],
    } as Meeting;
  }

  /**
   * Get all meetings
   * Backend: GET Meeting/GetAll
   */
  getMeetings(params?: any): Observable<Meeting[]> {
    return this.apiService.get<any>('Meeting/GetAll', params).pipe(
      map(response => {
        const raw: any[] = Array.isArray(response)
          ? response
          : response?.data ?? response?.result ?? response?.items ?? response?.item ?? [];
        return raw.map(m => this.mapMeeting(m));
      }),
      catchError(() => of([]))
    );
  }

  /**
   * Get meeting by ID
   * Backend: GET Meeting/Get?MeetingId=X
   */
  getMeetingById(meetingId: number): Observable<Meeting> {
    return this.apiService.get<any>('Meeting/Get', { MeetingId: meetingId }).pipe(
      map(raw => this.mapMeeting(raw))
    );
  }

  /**
   * Create a new meeting
   * Backend: POST Meeting/Create
   */
  createMeeting(payload: any): Observable<any> {
    return this.apiService.post<any, any>('Meeting/Create', payload);
  }

  /**
   * Update an existing meeting
   * Backend: POST Meeting/Update
   */
  updateMeeting(payload: any): Observable<any> {
    return this.apiService.post<any, any>('Meeting/Update', payload);
  }

  /**
   * Delete a meeting
   * Backend: DELETE Meeting/Delete?id=X
   */
  deleteMeeting(id: number): Observable<void> {
    return this.apiService.delete<void>(`Meeting/Delete?id=${id}`);
  }
}
