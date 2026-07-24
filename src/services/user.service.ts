import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { UserDto } from '../models/user.model';
import { CompanyEmployeeDto, CompanyEmployeeDetailDto } from '../models/employee-directory-models';

export interface ResetPasswordPayload {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface UserListRequest {
  pageNumber?: number;
  pageSize?:   number;
  search?:     string;
}

export interface SetUpJobInterviewRequest {
  userId:          string;
  email:           string;
  interviewDate:   string;
  interviewTime?:  string;
  interviewLink?:  string;
  sendByMail?:     boolean;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly apiService = inject(ApiService);

  /**
   * POST /api/User/GetAll — pagination in body (SuperAdmin)
   * API doc §1.11: method is POST, body contains pagination params.
   */
  getAll(params: UserListRequest = {}): Observable<UserDto[]> {
    return this.apiService.post<UserListRequest, any>('User/GetAll', params).pipe(
      map(res => Array.isArray(res) ? res : (res?.result ?? res?.data ?? res?.item ?? [])),
      catchError(err => throwError(() => err))
    );
  }

  /**
   * GET /api/User/GetById?userId={id}
   * API doc §1.11: endpoint is GetById with param userId.
   */
  getById(id: string): Observable<UserDto> {
    return this.apiService.get<UserDto>('User/GetById', { userId: id }).pipe(
      catchError(err => throwError(() => err))
    );
  }

  /**
   * GET /api/User/GetEmployeeById?userId={id}
   * Returns extended employee info (includes contract/company data).
   * Response shape confirmed against swagger's `EmployeeInfoDto` 2026-07-24.
   */
  getEmployeeById(id: string): Observable<CompanyEmployeeDetailDto> {
    return this.apiService.get<CompanyEmployeeDetailDto>('User/GetEmployeeById', { userId: id }).pipe(
      catchError(err => throwError(() => err))
    );
  }

  /**
   * GET /api/User/GetByEmail?userId={email}
   * Note: backend param name is userId despite being an email lookup.
   */
  getByEmail(email: string): Observable<UserDto> {
    return this.apiService.get<UserDto>('User/GetByEmail', { userId: email }).pipe(
      catchError(err => throwError(() => err))
    );
  }

  /** GET /api/User/Get — returns the currently logged-in user's profile (no params). */
  getMyProfile(): Observable<UserDto> {
    return this.apiService.get<UserDto>('User/Get').pipe(
      catchError(err => throwError(() => err))
    );
  }

  /** POST /api/User/ResetPassword — change own password while authenticated. */
  resetPassword(payload: ResetPasswordPayload): Observable<unknown> {
    return this.apiService.post<ResetPasswordPayload, unknown>('User/ResetPassword', payload).pipe(
      catchError(err => throwError(() => err))
    );
  }

  /**
   * POST /api/User/Create — multipart/form-data
   * Use FormData because the endpoint includes file uploads (CV, passport, etc.)
   */
  create(formData: FormData): Observable<unknown> {
    return this.apiService.postForm<unknown>('User/Create', formData).pipe(
      catchError(err => throwError(() => err))
    );
  }

  /** POST /api/User/Update */
  update(data: Partial<UserDto>): Observable<unknown> {
    return this.apiService.post<Partial<UserDto>, unknown>('User/Update', data).pipe(
      catchError(err => throwError(() => err))
    );
  }

  /**
   * DELETE /api/User/Delete?id={id} — SuperAdmin only
   */
  delete(id: string): Observable<unknown> {
    return this.apiService.delete<unknown>(`User/Delete?id=${id}`).pipe(
      catchError(err => throwError(() => err))
    );
  }

  /**
   * DELETE /api/User/Suspend?id={id} — SuperAdmin only
   * API doc §1.11: method is DELETE, not POST. Endpoint is Suspend, not StopUser.
   */
  suspend(id: string): Observable<unknown> {
    return this.apiService.delete<unknown>(`User/Suspend?id=${id}`).pipe(
      catchError(err => throwError(() => err))
    );
  }

  /**
   * GET /api/User/GetAllCompanyEmployees
   * Returns all employees belonging to the current user's company.
   * API doc §1.11: exact endpoint name is GetAllCompanyEmployees.
   * Response shape confirmed against swagger's `UserDto` 2026-07-24.
   */
  getAllCompanyEmployees(): Observable<CompanyEmployeeDto[]> {
    return this.apiService.get<any>('User/GetAllCompanyEmployees').pipe(
      map(res => Array.isArray(res) ? res : (res?.result ?? res?.data ?? [])),
      catchError(err => throwError(() => err))
    );
  }

  /**
   * POST /api/User/SetUpJobInterview — schedule a job interview for a user.
   */
  setUpJobInterview(payload: SetUpJobInterviewRequest): Observable<unknown> {
    return this.apiService.post<SetUpJobInterviewRequest, unknown>('User/SetUpJobInterview', payload).pipe(
      catchError(err => throwError(() => err))
    );
  }
}
