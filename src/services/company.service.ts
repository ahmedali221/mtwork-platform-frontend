import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from './api.service';

export interface CompanyDto {
  id?: number;
  name?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  countryId?: number;
  cityId?: number;
  industryId?: number;
  logoPath?: string;
  websiteUrl?: string;
  description?: string;
  registrationNumber?: string;
  isActive?: boolean;
  [key: string]: unknown;
}

@Injectable({ providedIn: 'root' })
export class CompanyService {
  private readonly apiService = inject(ApiService);

  /** GET /api/Company/GetAll — SuperAdmin only */
  getAll(): Observable<CompanyDto[]> {
    return this.apiService.get<CompanyDto[]>('Company/GetAll').pipe(
      catchError(err => throwError(() => err))
    );
  }

  /** GET /api/Company/Get — current user's company */
  get(): Observable<CompanyDto> {
    return this.apiService.get<CompanyDto>('Company/Get').pipe(
      catchError(err => throwError(() => err))
    );
  }

  /** GET /api/Company/GetById?companyId={id} */
  getById(companyId: number): Observable<CompanyDto> {
    return this.apiService.get<CompanyDto>('Company/GetById', { companyId }).pipe(
      catchError(err => throwError(() => err))
    );
  }

  /** POST /api/Company/Create */
  create(dto: CompanyDto): Observable<unknown> {
    return this.apiService.post<CompanyDto, unknown>('Company/Create', dto).pipe(
      catchError(err => throwError(() => err))
    );
  }

  /** POST /api/Company/Update */
  update(dto: CompanyDto): Observable<unknown> {
    return this.apiService.post<CompanyDto, unknown>('Company/Update', dto).pipe(
      catchError(err => throwError(() => err))
    );
  }

  /** DELETE /api/Company/Delete?id={id} — SuperAdmin only */
  delete(id: number): Observable<unknown> {
    return this.apiService.delete<unknown>(`Company/Delete?id=${id}`).pipe(
      catchError(err => throwError(() => err))
    );
  }

  /** DELETE /api/Company/Suspend?id={id} — SuperAdmin only */
  suspend(id: number): Observable<unknown> {
    return this.apiService.delete<unknown>(`Company/Suspend?id=${id}`).pipe(
      catchError(err => throwError(() => err))
    );
  }
}
