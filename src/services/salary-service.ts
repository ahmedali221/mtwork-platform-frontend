import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import {
  CompanyBalance,
  EmployeeSalary,
  PaySalaryRequest,
  PaymentType,
  SalaryHistoryEntry,
  UpdateBalanceRequest
} from '../models/salary-withdraw-models';

@Injectable({ providedIn: 'root' })
export class SalaryService {
  private api = inject(ApiService);

  /** POST /Salary/PaySalary */
  paySalary(payload: PaySalaryRequest): Observable<void> {
    return this.api.post<PaySalaryRequest, void>('Salary/PaySalary', payload);
  }

  /** GET /Salary/GetEmployeeSalary?employeeId= — employeeId is a string GUID */
  getEmployeeSalary(employeeId: string): Observable<EmployeeSalary> {
    return this.api.get<EmployeeSalary>('Salary/GetEmployeeSalary', { employeeId });
  }

  /** GET /Salary/GetCompanyBalance?companyId= */
  getCompanyBalance(companyId: number): Observable<CompanyBalance> {
    return this.api.get<CompanyBalance>('Salary/GetCompanyBalance', { companyId });
  }

  /** PUT /Salary/UpdateCompanyBalance */
  updateCompanyBalance(payload: UpdateBalanceRequest): Observable<void> {
    return this.api.put<UpdateBalanceRequest, void>('Salary/UpdateCompanyBalance', payload);
  }

  /** GET /Salary/GetEmployeeSalaryHistory?employeeId= — employeeId is a string GUID */
  getEmployeeSalaryHistory(employeeId: string): Observable<SalaryHistoryEntry[]> {
    return this.api.get<SalaryHistoryEntry[]>('Salary/GetEmployeeSalaryHistory', { employeeId }).pipe(
      map(res => (Array.isArray(res) ? res : []))
    );
  }

  /** GET /Salary/GetCompanySalaryHistory?companyId= */
  getCompanySalaryHistory(companyId: number): Observable<SalaryHistoryEntry[]> {
    return this.api.get<SalaryHistoryEntry[]>('Salary/GetCompanySalaryHistory', { companyId }).pipe(
      map(res => (Array.isArray(res) ? res : []))
    );
  }

  /** GET /Salary/GetCompanyPaymentHistory?companyId= */
  getCompanyPaymentHistory(companyId: number): Observable<SalaryHistoryEntry[]> {
    return this.api.get<SalaryHistoryEntry[]>('Salary/GetCompanyPaymentHistory', { companyId }).pipe(
      map(res => (Array.isArray(res) ? res : []))
    );
  }

  /** GET /Salary/IsPaymentPaid?contractId=&paymentType= */
  isPaymentPaid(contractId: number, paymentType: PaymentType): Observable<boolean> {
    return this.api.get<boolean>('Salary/IsPaymentPaid', { contractId, paymentType });
  }
}
