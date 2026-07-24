import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from './api.service';

export interface RegistrationFeeDto {
  fee?: number;
  amount?: number;
  [key: string]: any;
}

export interface ContractFeesDto {
  feePercentage?: number;
  fixedFee?: number;
  [key: string]: any;
}

export interface EmployeePercentageDto {
  percentage?: number;
  [key: string]: any;
}

/**
 * All settings endpoints are public — no auth required.
 * The interceptor still attaches the token if present (no harm).
 */
@Injectable({ providedIn: 'root' })
export class SettingsService {
  private readonly apiService = inject(ApiService);

  /** GET /api/Settings/GetFirstRegistrationFee */
  getFirstRegistrationFee(): Observable<RegistrationFeeDto> {
    return this.apiService.get<RegistrationFeeDto>('Settings/GetFirstRegistrationFee').pipe(
      catchError(err => throwError(() => err))
    );
  }

  /** GET /api/Settings/GetContractFees */
  getContractFees(): Observable<ContractFeesDto> {
    return this.apiService.get<ContractFeesDto>('Settings/GetContractFees').pipe(
      catchError(err => throwError(() => err))
    );
  }

  /** GET /api/Settings/GetOrdinaryEmployeePercentage */
  getOrdinaryEmployeePercentage(): Observable<EmployeePercentageDto> {
    return this.apiService.get<EmployeePercentageDto>('Settings/GetOrdinaryEmployeePercentage').pipe(
      catchError(err => throwError(() => err))
    );
  }
}
