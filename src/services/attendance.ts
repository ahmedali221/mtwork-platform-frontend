import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { AttendanceListResponse, EmployeeAttendance } from '../models/employee-attendance.model';

@Injectable({ providedIn: 'root' })
export class AttendanceService {
  private readonly apiService = inject(ApiService);

  /** GET /Attendance/GetAll?userId=X — response: { total, result } */
  getEmployeeAttendance(employeeId: string): Observable<EmployeeAttendance[]> {
    return this.apiService.get<AttendanceListResponse>('Attendance/GetAll', { userId: employeeId }).pipe(
      map(response => response?.result ?? [])
    );
  }

  /** GET /Attendance/GetAll — response: { total, result } */
  getAllEmployeesAttendance(): Observable<EmployeeAttendance[]> {
    return this.apiService.get<AttendanceListResponse>('Attendance/GetAll').pipe(
      map(response => response?.result ?? [])
    );
  }

  /** GET /Attendance/Get?AttendanceId=X */
  getAttendanceById(attendanceId: number): Observable<EmployeeAttendance> {
    return this.apiService.get<EmployeeAttendance>('Attendance/Get', { AttendanceId: attendanceId });
  }

  /** POST /Attendance/Create */
  createAttendance(payload: EmployeeAttendance): Observable<EmployeeAttendance> {
    return this.apiService.post<EmployeeAttendance, EmployeeAttendance>('Attendance/Create', payload);
  }

  /** POST /Attendance/Update */
  updateAttendance(payload: EmployeeAttendance): Observable<EmployeeAttendance> {
    return this.apiService.post<EmployeeAttendance, EmployeeAttendance>('Attendance/Update', payload);
  }

  /** DELETE /Attendance/Delete?id=X */
  deleteAttendance(id: number): Observable<void> {
    return this.apiService.delete<void>(`Attendance/Delete?id=${id}`);
  }
}
