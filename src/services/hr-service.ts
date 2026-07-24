import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import {
  HRListDto,
  HRListResponse,
  HRDetails,
  HROrderItem,
  LeaveRequest,
  LeaveRequestDetail,
  OrderRequestDto,
  OverTimeDto,
  BusinessTripDto,
  ServiceCertificateRequestDto,
  ChangeStatusRequest,
  UpdateLeaveRequest
} from '../models/hr-models';

@Injectable({ providedIn: 'root' })
export class HrService {
  private api = inject(ApiService);

  // ── HR ──────────────────────────────────────────────────────

  /** GET /HR/GetAll  →  { total, result: HRListDto[] } */
  getHRList(): Observable<{ total: number; result: HRListDto[] }> {
    return this.api.get<HRListResponse>('HR/GetAll').pipe(
      map(res => ({
        total:  res?.total  ?? 0,
        result: res?.result ?? []
      }))
    );
  }

  /**
   * GET /HR/GetByIdHRDetails?contractId=
   * Maps backend field names to the HRDetails interface.
   * Backend returns: vacationDays, spentVacations, restVacations, orderList
   */
  getHRDetails(contractId: number): Observable<HRDetails> {
    return this.api.get<any>('HR/GetByIdHRDetails', { contractId }).pipe(
      map((raw: any): HRDetails => ({
        contractId:        raw?.contractId        ?? contractId,
        contractTypeId:    raw?.contractTypeId,
        contractStatusId:  raw?.contractStatusId,
        companyId:         raw?.companyId,
        contractTitle:     raw?.contractTitle     ?? raw?.jobTitleName ?? '',
        employeeId:        raw?.userId            ?? raw?.employeeId,
        employeeName:      raw?.employeeName      ?? '',
        jobTitle:          raw?.jobTitleName      ?? raw?.jobTitle,
        salary:            raw?.salary,
        currency:          raw?.currency,
        startDate:         raw?.startDate,
        endDate:           raw?.endDate,
        status:            raw?.status,
        avatarUrl:         raw?.avatarUrl         ?? raw?.profileImagePath,
        // Vacation — exact backend field names
        vacationDays:      raw?.vacationDays,
        spentVacations:    raw?.spentVacations,
        restVacations:     raw?.restVacations,
        // Related lists
        orderList:         Array.isArray(raw?.orderList)      ? raw.orderList      : [],
        teamList:          Array.isArray(raw?.teamList)       ? raw.teamList       : [],
        contractTasks:     Array.isArray(raw?.contractTasks)  ? raw.contractTasks  : [],
        projectStages:     Array.isArray(raw?.projectStages)  ? raw.projectStages  : [],
        invoiceList:       Array.isArray(raw?.invoiceList)    ? raw.invoiceList    : [],
      }))
    );
  }

  // ── Leave Requests (OrderRequest) ────────────────────────────

  /**
   * GET /OrderRequest/GetAll
   * Backend returns `{ total, result: OrderRequestDto[] }` (NOT a flat array).
   * Each item has nested `employee`, `orderType`, `leaveType` objects which we
   * flatten into the LeaveRequest shape consumed by the list/dialog.
   */
  getAllLeaveRequests(): Observable<LeaveRequest[]> {
    return this.api.get<{ total?: number; result?: any[] } | any[]>('OrderRequest/GetAll').pipe(
      map(res => {
        const arr: any[] = Array.isArray(res) ? res : (res?.result ?? []);
        return arr.map(HrService.mapOrderRequest);
      })
    );
  }

  /** Alias for getAllLeaveRequests — used in employee dashboard */
  getLeaveRequests(): Observable<LeaveRequest[]> {
    return this.getAllLeaveRequests();
  }

  /** Map backend OrderRequestDto → flat LeaveRequest used by list views. */
  private static mapOrderRequest(dto: any): LeaveRequest {
    const employee = dto?.employee ?? null;
    const employeeName: string =
      employee?.employeeName ??
      [employee?.firstName, employee?.lastName].filter(Boolean).join(' ') ??
      '';
    return {
      id:            dto?.id,
      employeeId:    dto?.requestingEmployeeId ?? employee?.id,
      employeeName,
      leaveTypeId:   dto?.leaveTypeId ?? undefined,
      leaveTypeName: dto?.leaveType?.nameEn ?? undefined,
      orderTypeId:   dto?.orderTypeId ?? undefined,
      orderTypeName: dto?.orderType?.nameEn ?? undefined,
      startDate:     dto?.startDate ?? '',
      endDate:       dto?.endDate ?? '',
      orderStatus:   dto?.orderStatus,
      createdAt:     dto?.createDate,           // backend field is `createDate`
      contractId:    dto?.contractId,
      totalDays:     dto?.totalDays != null ? Number(dto.totalDays) : undefined,
    };
  }

  /** GET /OrderRequest/Get?id= */
  getLeaveRequest(id: number): Observable<LeaveRequest> {
    return this.api.get<LeaveRequest>('OrderRequest/Get', { id });
  }

  /** GET /OrderRequest/GetOther?OrderRequestId= — nested detail shape */
  getLeaveRequestDetail(id: number): Observable<LeaveRequestDetail> {
    return this.api.get<LeaveRequestDetail>('OrderRequest/GetOther', { OrderRequestId: id });
  }

  /** POST /OrderRequest/CreateLeave */
  createLeaveRequest(payload: OrderRequestDto): Observable<void> {
    return this.api.post<OrderRequestDto, void>('OrderRequest/CreateLeave', payload);
  }

  /** POST /OrderRequest/CreateOverTime — accepts OverTimeDto (extends OrderRequestDto) */
  createOverTime(payload: OverTimeDto): Observable<void> {
    return this.api.post<OverTimeDto, void>('OrderRequest/CreateOverTime', payload);
  }

  /** POST /OrderRequest/CreateBusinessTrip — accepts BusinessTripDto */
  createBusinessTrip(payload: BusinessTripDto): Observable<void> {
    return this.api.post<BusinessTripDto, void>('OrderRequest/CreateBusinessTrip', payload);
  }

  /** POST /OrderRequest/CreateCourse — accepts OrderRequestDto */
  createCourse(payload: OrderRequestDto): Observable<void> {
    return this.api.post<OrderRequestDto, void>('OrderRequest/CreateCourse', payload);
  }

  /** POST /OrderRequest/CreateServiceCertificate — accepts ServiceCertificateRequestDto */
  createServiceCertificate(payload: ServiceCertificateRequestDto): Observable<void> {
    return this.api.post<ServiceCertificateRequestDto, void>('OrderRequest/CreateServiceCertificate', payload);
  }

  /** POST /OrderRequest/CreateOther — accepts OrderRequestDto */
  createOther(payload: OrderRequestDto): Observable<void> {
    return this.api.post<OrderRequestDto, void>('OrderRequest/CreateOther', payload);
  }

  /** POST /OrderRequest/ChangeStatus  — approve / reject */
  changeOrderStatus(payload: ChangeStatusRequest): Observable<void> {
    return this.api.post<ChangeStatusRequest, void>('OrderRequest/ChangeStatus', payload);
  }

  /** POST /OrderRequest/Update  — data edits only */
  updateLeaveRequest(payload: UpdateLeaveRequest): Observable<void> {
    return this.api.post<UpdateLeaveRequest, void>('OrderRequest/Update', payload);
  }

  /** DELETE /OrderRequest/Delete?id= */
  deleteLeaveRequest(id: number): Observable<void> {
    return this.api.delete<void>(`OrderRequest/Delete?id=${id}`);
  }
}
