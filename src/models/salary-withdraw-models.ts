// ── String literal types (CLAUDE.md §7) ──────────────────────
export type WithdrawStatus  = 'pending' | 'approved' | 'rejected';
export type PaymentStatus   = 'pending' | 'paid';
export type PaymentType     =
  | 'balance_recharge' | 'subscription' | 'registration'
  | 'salary' | 'firstPatch' | 'lastPatch' | 'task' | 'stage';
export type TransactionType = 'credit' | 'debit';

// ── Company Balance ───────────────────────────────────────────
export interface CompanyBalance {
  companyId:       number;
  currentBalance:  number;
  currency?:       string;
}

export interface UpdateBalanceRequest {
  companyId:       number;
  amount:          number;
  transactionType: TransactionType;
}

// ── Employee Salary ───────────────────────────────────────────
export interface EmployeeSalary {
  employeeId:   number;
  employeeName: string;
  contractId:   number;
  salary:       number;
  currency?:    string;
  contractType?: string;
}

// ── Pay Salary ────────────────────────────────────────────────
// POST /Salary/PaySalary — mirrors backend PaySalaryDto
// Required by API: contractId, employeeId, amount, currency, paymentType
export interface PaySalaryRequest {
  contractId:   number;
  employeeId:   string;   // GUID — ApplicationUser.Id
  amount:       number;
  currency:     string;   // e.g. "SAR"
  paymentType:  PaymentType;
  description?: string;
}

// ── Salary History ────────────────────────────────────────────
export interface SalaryHistoryEntry {
  id:            number;
  contractId?:   number;
  employeeName?: string;
  amount:        number;
  paymentType:   PaymentType;
  paymentStatus: PaymentStatus;
  paidAt?:       string;
  createdAt:     string;
}

// ── Withdraw ──────────────────────────────────────────────────
// Frontend-facing flat shape used by table/list components.
// Mapped from backend WithdrawRequestDto in withdraw-service.ts.
export interface WithdrawEntry {
  id:            number;
  requestId?:    string;
  employeeId:    string;
  employeeName?: string;
  companyName?:  string;          // mapped from backend CompanyName (admin views)
  fullName?:     string;
  iban?:         string;
  amount:        number;
  status:        WithdrawStatus;
  reason?:       string;          // not in backend DTO; reserved for client-only use
  note?:         string;          // not in backend DTO; reserved for client-only use
  createdAt:     string;          // mapped from CreatedAt / RequestDate
  processedAt?:  string;          // mapped from ProcessedDate
  processedBy?:  string;
}

// Payload for POST /Withdraw/SubmitRequest — must match backend
// CreateWithdrawRequestDto (WithdrawRequestDto.cs:26-42). All four fields [Required].
export interface SubmitWithdrawRequest {
  employeeId: string;
  fullName:   string;
  iban:       string;
  amount:     number;
}

// Payload for PUT /Withdraw/ProcessRequest/{requestId} — must match backend
// ProcessWithdrawRequestDto (WithdrawRequestDto.cs:44-56). RequestId + ProcessedBy
// are filled server-side from the route param + GlobalInfo (WithdrawController.cs:54-55).
export interface ProcessWithdrawPayload {
  status:           WithdrawStatus;
  rejectionReason?: string;
}

// ── Backend response shapes (mirrors WithdrawRequestDto.cs) ──────
export interface BackendWithdrawRequestDto {
  id:             number;
  requestId?:     string;
  employeeId?:    string;
  companyId?:     number;
  fullName?:      string;
  iban?:          string;
  amount:         number;
  status:         WithdrawStatus;
  requestDate?:   string;
  processedDate?: string;
  processedBy?:   string;
  createdAt?:     string;
  updatedAt?:     string;
  employeeName?:  string;
  companyName?:   string;
}

// GET /Withdraw/GetEmployeeHistory — EmployeeWithdrawHistoryDto
export interface EmployeeWithdrawHistoryDto {
  employeeId:      string;
  employeeName?:   string;
  currentBalance:  number;
  withdrawHistory: BackendWithdrawRequestDto[];
}

// GET /Withdraw/GetAdminRequests — AdminWithdrawRequestsDto
export interface AdminWithdrawRequestsDto {
  pendingRequests:      BackendWithdrawRequestDto[];
  processedRequests:    BackendWithdrawRequestDto[];
  totalPendingCount:    number;
  totalProcessedCount:  number;
}

// Mapped, front-end-facing grouped view of GetAdminRequests.
// Preserves the pending/processed split + counts for the Admin Withdrawals page.
export interface AdminWithdrawRequestsGrouped {
  pending:             WithdrawEntry[];
  processed:           WithdrawEntry[];
  totalPendingCount:   number;
  totalProcessedCount: number;
}
