import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import {
  ApiResponse,
  ChangeStatusRequest,
  Contract,
  ContractFilters,
  ContractStatus,
  ContractType
} from '../models/contract-models';

// Display-label maps — names mirror backend enum members
// (ContractStatusEnum.cs, ContractTypeEnum.cs). Returned as the
// raw enum name so any consumer can pass it through transloco
// or render directly. Default '' for unknown ids.
const CONTRACT_TYPE_NAMES: Record<number, string> = {
  [ContractType.EmployeeContract]:   'EmployeeContract',
  [ContractType.FixedPayContract]:   'FixedPayContract',
  [ContractType.PerTaskContract]:    'PerTaskContract',
  [ContractType.PerProjectContract]: 'PerProjectContract',
};

const CONTRACT_STATUS_NAMES: Record<number, string> = {
  [ContractStatus.Initiated]: 'Initiated',
  [ContractStatus.Reviewed]:  'Reviewed',
  [ContractStatus.Approved]:  'Approved',
  [ContractStatus.Canceled]:  'Canceled',
};

@Injectable({ providedIn: 'root' })
export class ContractService {

  private apiService = inject(ApiService);

  // ------------------------------------------------------------------
  // GET /Contract/GetAll  (paginated)
  // Backend returns: { totalRows: number, item: Contract[] }
  // ------------------------------------------------------------------
  getContracts(
    page:    number         = 1,
    limit:   number         = 10,
    filters: ContractFilters = {}
  ): Observable<ApiResponse<Contract>> {
    const params: Record<string, string | number> = {
      pageNumber: page,
      pageSize:   limit,
      ...filters
    };

    // Strip empty values so they don't pollute query string
    (Object.keys(params) as (keyof typeof params)[]).forEach(key => {
      if (params[key] === null || params[key] === undefined || params[key] === '') {
        delete params[key];
      }
    });

    return this.apiService.get<any>('Contract/GetAll', params).pipe(
      map(res => {
        const rawItems: any[] = res?.item ?? res?.result ?? res?.data ?? [];
        const totalRows: number = res?.totalRows ?? res?.total ?? rawItems.length ?? 0;

        const items: Contract[] = rawItems.map((raw: any): Contract => ({
          id:            raw.id ?? '',
          workId:        raw.jobNumber ?? raw.id ?? '',
          contractTitle: raw.jobTitleName ?? '',
          contractType:  CONTRACT_TYPE_NAMES[raw.contractTypeId] ?? '',
          status:        CONTRACT_STATUS_NAMES[raw.contractStatusId] ?? '',
          statusId:      raw.contractStatusId,
          empoleeOrContractor: {
            name:   raw.employeeName ?? '',
            role:   raw.jobTitleName ?? '',
            email:  raw.employeeEmail ?? '',
            avatar: ''
          },
          country: {
            name: '',
            flag: ''
          },
          manager: {
            name:   '',
            role:   '',
            avatar: ''
          },
          startDate:   raw.startDate ? raw.startDate.split('T')[0] : '',
          endDate:     raw.endDate   ? raw.endDate.split('T')[0]   : '',
          createdTime: raw.startDate ? raw.startDate.split('T')[0] : '',
          totalAmount: raw.salary ?? raw.firstPatchAmount,
          currency:    raw.currency ?? '',
          description: raw.jobDescription ?? ''
        }));

        return {
          data:       items,
          pagination: {
            currentPage:  page,
            itemsPerPage: limit,
            totalItems:   totalRows,
            totalPages:   Math.ceil(totalRows / limit)
          },
          message: 'OK',
          status:  'success'
        } satisfies ApiResponse<Contract>;
      }),
      catchError(() =>
        of({
          data:       [],
          pagination: { currentPage: page, itemsPerPage: limit, totalItems: 0, totalPages: 0 },
          message:    'Failed to load contracts',
          status:     'error'
        } satisfies ApiResponse<Contract>)
      )
    );
  }

  // ------------------------------------------------------------------
  // GET /Contract/Get?ContractId=X  (full detail)
  // ------------------------------------------------------------------
  getContractById(contractId: string | number): Observable<Contract> {
    return this.apiService.get<any>('Contract/Get', { ContractId: contractId }).pipe(
      map((raw: any): Contract => {
        return {
          id:            String(raw.id ?? ''),
          workId:        raw.jobNumber ?? raw.id ?? '',
          contractTitle: raw.jobTitleName ?? raw.title ?? '',
          contractType:  CONTRACT_TYPE_NAMES[raw.contractTypeId] ?? '',
          status:        CONTRACT_STATUS_NAMES[raw.contractStatusId] ?? '',
          statusId:      raw.contractStatusId,

          empoleeOrContractor: {
            name:                raw.employeeName ?? '',
            role:                raw.jobTitleName ?? '',
            email:               raw.employeeEmail ?? '',
            phone:               raw.employeePhone ?? '',
            avatar:              raw.employeeAvatar ?? '',
            linkedin:            raw.linkedin ?? '',
            github:              raw.github ?? '',
            lastName:            raw.employeeLastName ?? '',
            country:             raw.employeeCountry ?? '',
            postCode:            raw.postCode ?? '',
            taxId:               raw.taxId ?? '',
            authorizedFirstName: raw.authorizedFirstName ?? '',
            authorizedLastName:  raw.authorizedLastName ?? '',
            authorizedId:        raw.authorizedId ?? '',
            city:                raw.city ?? '',
            address:             raw.address ?? '',
            availabilityStatus:  raw.availabilityStatus ?? 'Available For Part time',
          },

          employer: {
            entityName:     raw.entityName ?? raw.companyName ?? '',
            officialNumber: raw.officialNumber ?? '',
            phone:          raw.companyPhone ?? raw.phone ?? '',
            email:          raw.companyEmail ?? '',
            address:        raw.companyAddress ?? '',
          },

          country: {
            name: raw.countryName ?? '',
            flag: raw.countryFlag ?? '',
          },

          manager: {
            name:   raw.managerName ?? '',
            role:   raw.managerRole ?? '',
            email:  raw.managerEmail ?? '',
            avatar: raw.managerAvatar ?? '',
          },

          startDate:   raw.startDate   ? raw.startDate.split('T')[0]   : '',
          endDate:     raw.endDate     ? raw.endDate.split('T')[0]     : '',
          createdTime: raw.createdDate ? raw.createdDate.split('T')[0] : '',

          // Contracting details
          contractDuration:     raw.contractDuration ?? '',
          trialPeriod:          raw.trialPeriod ?? '',
          typeOfWork:           raw.typeOfWork ?? raw.jobTitleName ?? '',
          vacationDays:         raw.vacationDays ?? 0,
          terminateDuringTrial: raw.terminateDuringTrial ?? '',
          terminateContract:    raw.terminateContract ?? '',
          noticePeriod:         raw.noticePeriod ?? '',

          // Working time
          numberOfWorkingHours: raw.numberOfWorkingHours ?? 0,
          workingDays:          raw.workingDays ?? 0,
          workingHours:         raw.workingHours ?? 0,

          // Financial
          salary:           raw.salary ?? raw.firstPatchAmount ?? 0,
          totalAmount:      raw.salary ?? raw.firstPatchAmount ?? 0,
          currency:         raw.currency ?? '',
          billingCycle:     raw.billingCycle ?? '',
          includeAllowances: raw.includeAllowances ?? false,

          description: raw.jobDescription ?? '',

          attachments: Array.isArray(raw.attachments)
            ? raw.attachments.map((a: any) => ({
                name:       a.fileName ?? a.name ?? 'Attachment',
                url:        a.filePath ?? a.url ?? '',
                size:       a.fileSize ? `${Math.round(a.fileSize / 1024)}KB` : '',
                uploadedAt: a.uploadedAt ?? '',
              }))
            : [],
        };
      }),
      catchError(() => of({} as Contract))
    );
  }

  // ------------------------------------------------------------------
  // POST /Contract/Create
  // ------------------------------------------------------------------
  saveContract(contract: Partial<Contract>): Observable<unknown> {
    return this.apiService.post<Partial<Contract>, unknown>('Contract/Create', contract);
  }

  // ------------------------------------------------------------------
  // POST /Contract/Update
  // ------------------------------------------------------------------
  updateContract(contract: Partial<Contract>): Observable<unknown> {
    return this.apiService.post<Partial<Contract>, unknown>('Contract/Update', contract);
  }

  // ------------------------------------------------------------------
  // DELETE /Contract/Delete?id=X
  // ------------------------------------------------------------------
  deleteContract(id: string | number): Observable<void> {
    return this.apiService.delete<void>(`Contract/Delete?id=${id}`);
  }

  // ------------------------------------------------------------------
  // POST /Contract/ChangeStatus  →  { contractId, statusId }
  // ------------------------------------------------------------------
  changeStatus(contractId: number, statusId: ContractStatus): Observable<unknown> {
    const body: ChangeStatusRequest = { contractId, statusId };
    return this.apiService.post<ChangeStatusRequest, unknown>('Contract/ChangeStatus', body);
  }

  // ------------------------------------------------------------------
  // GET /Report/generate-pdf?ContractId=X  →  application/pdf blob
  // ------------------------------------------------------------------
  downloadPdf(contractId: string | number): Observable<Blob> {
    return this.apiService.getBlob('Report/generate-pdf', { ContractId: Number(contractId) });
  }
}
