import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import {
  AdminWithdrawRequestsDto,
  AdminWithdrawRequestsGrouped,
  BackendWithdrawRequestDto,
  EmployeeWithdrawHistoryDto,
  ProcessWithdrawPayload,
  SubmitWithdrawRequest,
  WithdrawEntry,
} from '../models/salary-withdraw-models';

@Injectable({ providedIn: 'root' })
export class WithdrawService {
  private api = inject(ApiService);

  /** POST /Withdraw/SubmitRequest — sends EmployeeId, FullName, IBAN, Amount */
  submitRequest(payload: SubmitWithdrawRequest): Observable<void> {
    return this.api.post<SubmitWithdrawRequest, void>('Withdraw/SubmitRequest', payload);
  }

  /** PUT /Withdraw/ProcessRequest/{requestId} */
  processRequest(requestId: number, payload: ProcessWithdrawPayload): Observable<void> {
    return this.api.put<ProcessWithdrawPayload, void>(`Withdraw/ProcessRequest/${requestId}`, payload);
  }

  /**
   * GET /Withdraw/GetEmployeeHistory?employeeId=
   * Backend returns EmployeeWithdrawHistoryDto (object) — surface both
   * `currentBalance` and the mapped history so callers can validate
   * amounts against the available balance.
   */
  getEmployeeHistory(employeeId: string): Observable<{ balance: number; entries: WithdrawEntry[] }> {
    return this.api
      .get<EmployeeWithdrawHistoryDto>('Withdraw/GetEmployeeHistory', { employeeId })
      .pipe(map(res => ({
        balance: res?.currentBalance ?? 0,
        entries: (res?.withdrawHistory ?? []).map(WithdrawService.mapDto),
      })));
  }

  /**
   * GET /Withdraw/GetAdminRequests
   * Backend returns AdminWithdrawRequestsDto (object); flatten Pending + Processed.
   */
  getAdminRequests(): Observable<WithdrawEntry[]> {
    return this.api
      .get<AdminWithdrawRequestsDto>('Withdraw/GetAdminRequests')
      .pipe(map(res => {
        const pending   = res?.pendingRequests   ?? [];
        const processed = res?.processedRequests ?? [];
        return [...pending, ...processed].map(WithdrawService.mapDto);
      }));
  }

  /**
   * GET /Withdraw/GetAdminRequests — grouped view.
   * Same endpoint as getAdminRequests(), but preserves the pending vs
   * processed split + counts (consumed by the Admin Withdrawals page).
   */
  getAdminRequestsGrouped(): Observable<AdminWithdrawRequestsGrouped> {
    return this.api
      .get<AdminWithdrawRequestsDto>('Withdraw/GetAdminRequests')
      .pipe(map(res => {
        const pending   = (res?.pendingRequests   ?? []).map(WithdrawService.mapDto);
        const processed = (res?.processedRequests ?? []).map(WithdrawService.mapDto);
        return {
          pending,
          processed,
          totalPendingCount:   res?.totalPendingCount   ?? pending.length,
          totalProcessedCount: res?.totalProcessedCount ?? processed.length,
        };
      }));
  }

  /** GET /Withdraw/GetById?id= */
  getById(id: number): Observable<WithdrawEntry> {
    return this.api
      .get<BackendWithdrawRequestDto>('Withdraw/GetById', { id })
      .pipe(map(WithdrawService.mapDto));
  }

  // ── Mapping helper ───────────────────────────────────────────────
  private static mapDto(dto: BackendWithdrawRequestDto): WithdrawEntry {
    return {
      id:           dto.id,
      requestId:    dto.requestId,
      employeeId:   dto.employeeId   ?? '',
      employeeName: dto.employeeName,
      companyName:  dto.companyName,
      fullName:     dto.fullName,
      iban:         dto.iban,
      amount:       dto.amount,
      status:       dto.status,
      createdAt:    dto.createdAt ?? dto.requestDate ?? '',
      processedAt:  dto.processedDate,
      processedBy:  dto.processedBy,
    };
  }
}
