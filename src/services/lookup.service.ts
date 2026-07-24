import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';

/**
 * Bilingual lookup item.
 * - `name`   → English display name (nameEn from backend)
 * - `nameAr` → Arabic display name (nameAr from backend)
 *
 * Components should use TranslocoService.getActiveLang() to pick
 * the right field: lang==='ar' ? item.nameAr : item.name
 */
export interface LookupItem {
  id:      number;
  name:    string;    // English
  nameAr?: string;    // Arabic — always populated when backend sends it
}

@Injectable({ providedIn: 'root' })
export class LookupService {
  private api = inject(ApiService);

  /**
   * Normalises any backend lookup array shape into LookupItem[].
   * Preserves both nameEn (→ name) and nameAr for bilingual display.
   */
  private toItems(res: unknown): LookupItem[] {
    const arr: unknown[] = Array.isArray(res)        ? res
      : Array.isArray((res as any)?.item)   ? (res as any).item
      : Array.isArray((res as any)?.data)   ? (res as any).data
      : Array.isArray((res as any)?.result) ? (res as any).result
      : [];

    return arr.map((x: any): LookupItem => ({
      id:     x.id ?? x.countryId ?? x.universityId ?? x.jobTitleId ?? 0,
      name:   x.nameEn ?? x.name ?? x.title ?? '',
      nameAr: x.nameAr ?? undefined,
    }));
  }

  /** GET /Lookup/GetAllCountries */
  getCountries(): Observable<LookupItem[]> {
    return this.api.get<unknown>('Lookup/GetAllCountries').pipe(
      map(r => this.toItems(r)), catchError(() => of([]))
    );
  }

  /** GET /Lookup/GetAllJobTitles */
  getJobTitles(): Observable<LookupItem[]> {
    return this.api.get<unknown>('Lookup/GetAllJobTitles').pipe(
      map(r => this.toItems(r)), catchError(() => of([]))
    );
  }

  /** GET /Lookup/GetAllQualifications */
  getQualifications(): Observable<LookupItem[]> {
    return this.api.get<unknown>('Lookup/GetAllQualifications').pipe(
      map(r => this.toItems(r)), catchError(() => of([]))
    );
  }

  /** GET /Lookup/GetAllUniversities */
  getUniversities(): Observable<LookupItem[]> {
    return this.api.get<unknown>('Lookup/GetAllUniversities').pipe(
      map(r => this.toItems(r)), catchError(() => of([]))
    );
  }

  /** GET /Lookup/GetAllIndustries */
  getIndustries(): Observable<LookupItem[]> {
    return this.api.get<unknown>('Lookup/GetAllIndustries').pipe(
      map(r => this.toItems(r)), catchError(() => of([]))
    );
  }

  /** GET /Lookup/GetCityByCountry?CountryId= */
  getCitiesByCountry(countryId: number): Observable<LookupItem[]> {
    if (!Number.isFinite(countryId)) return of([]);
    return this.api.get<unknown>('Lookup/GetCityByCountry', { CountryId: countryId }).pipe(
      map(r => this.toItems(r)), catchError(() => of([]))
    );
  }

  /** GET /Lookup/GetAllProjectTypes */
  getProjectTypes(): Observable<LookupItem[]> {
    return this.api.get<unknown>('Lookup/GetAllProjectTypes').pipe(
      map(r => this.toItems(r)), catchError(() => of([]))
    );
  }

  /** GET /Lookup/GetAllLeaveType */
  getLeaveTypes(): Observable<LookupItem[]> {
    return this.api.get<unknown>('Lookup/GetAllLeaveType').pipe(
      map(r => this.toItems(r)), catchError(() => of([]))
    );
  }

  /** GET /Lookup/GetAllOrderType */
  getOrderTypes(): Observable<LookupItem[]> {
    return this.api.get<unknown>('Lookup/GetAllOrderType').pipe(
      map(r => this.toItems(r)), catchError(() => of([]))
    );
  }

  /**
   * GET /Lookup/GetAllUserTaskStatus
   * API doc §1.15 — used by task management status dropdowns.
   */
  getTaskStatuses(): Observable<LookupItem[]> {
    return this.api.get<unknown>('Lookup/GetAllUserTaskStatus').pipe(
      map(r => this.toItems(r)), catchError(() => of([]))
    );
  }
}
