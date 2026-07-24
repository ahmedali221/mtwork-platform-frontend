// ============================================================
// Enums
// ============================================================

export enum OrderStatus {
  Pending    = 1,
  Approved   = 2,
  Rejected   = 3,
  Canceled   = 4
}

// ============================================================
// HR List  —  GET /HR/GetAll
// Response shape: { total: number, result: HRListDto[] }
// ============================================================

export interface HRListResponse {
  total: number;
  result: HRListDto[];
}

export interface HRListDto {
  id: number;
  contractId: number;
  contractTitle?: string;
  employeeId?: string;
  employeeName: string;
  jobTitle?: string;
  salary?: number;
  currency?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  avatarUrl?: string;
}

// ============================================================
// HR Details  —  GET /HR/GetByIdHRDetails?contractId=
// ============================================================

// GET /HR/GetByIdHRDetails?contractId=
// Backend field names (source of truth):
//   vacationDays   → total allocated vacation days
//   spentVacations → days already used
//   restVacations  → remaining days
//   orderList      → list of OrderRequestHRDto
export interface HRDetails {
  contractId:        number;
  contractTypeId?:   number;
  contractStatusId?: number;
  companyId?:        number;
  contractTitle?:    string;
  employeeId?:       string;
  employeeName:      string;
  jobTitle?:         string;
  salary?:           number;
  currency?:         string;
  startDate?:        string;
  endDate?:          string;
  status?:           string;
  avatarUrl?:        string;

  // Vacation fields — exact backend names
  vacationDays?:    number;   // total allocated
  spentVacations?:  number;   // used
  restVacations?:   number;   // remaining

  // Related lists
  orderList?:       HROrderItem[];
  teamList?:        unknown[];
  contractTasks?:   unknown[];
  projectStages?:   unknown[];
  invoiceList?:     unknown[];
}

// Shape of each item in HRDetails.orderList
export interface HROrderItem {
  id:             number;
  startDate?:     string;
  endDate?:       string;
  orderTypeId?:   number;
  leaveTypeId?:   number;
  orderStatus?:   OrderStatus;
  orderTypeName?: string;
  leaveTypeName?: string;
  leaveType?:     string;
}

// ============================================================
// Leave Requests  —  /OrderRequest/*
// ============================================================

export interface LeaveRequest {
  id: number;
  employeeId?: string;
  employeeName?: string;
  leaveTypeId?: number;
  leaveTypeName?: string;
  orderTypeId?: number;
  orderTypeName?: string;
  startDate: string;
  endDate: string;
  orderStatus: OrderStatus;
  createdAt?: string;
  contractId?: number;
  totalDays?: number;
}

/** Payload for POST /OrderRequest/CreateLeave */
export interface OrderRequestDto {
  leaveTypeId?: number;
  orderTypeId?: number;
  requestTitle?: string;
  requestComments?: string;
  startDate: string;        // ISO: YYYY-MM-DDTHH:mm:ss.sssZ
  endDate: string;          // ISO: YYYY-MM-DDTHH:mm:ss.sssZ
  totalDays?: number;
  requestingEmployeeId?: string;
  contractId?: number;
}

/** Payload for POST /OrderRequest/ChangeStatus */
export interface ChangeStatusRequest {
  orderId: number;
  statusId: number;
}

/** Payload for POST /OrderRequest/Update (data edits only) */
export interface UpdateLeaveRequest {
  id: number;
  startDate?: string;
  endDate?: string;
  orderStatus?: OrderStatus;
}

// ============================================================
// Leave Request Detail — GET /OrderRequest/GetOther?OrderRequestId=
// Nested shape — do NOT use for list views
// ============================================================

export interface OrderTypeDto {
  id: number;
  nameAr?: string;
  nameEn?: string;
  defaultDays?: number;
}

export interface LeaveTypeDto {
  id: number;
  nameAr?: string;
  nameEn?: string;
  defaultDays?: number;
}

export interface EmployeeDto {
  id: string;
  employeeName?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  position?: string;
  profileImagePath?: string;
}

export interface OrderAttachmentDto {
  id: number;
  fileName?: string;
  originalName?: string;
  filePath?: string;
  contentType?: string;
  createDateStr?: string;
}

export interface LeaveRequestDetail {
  id: number;
  readOnly?: boolean;
  startDate: string;
  endDate: string;
  requestingEmployeeId?: string;
  orderTypeId?: number;
  leaveTypeId?: number;
  requestTitle?: string;
  requestComments?: string;
  orderStatus: OrderStatus;
  orderType?: OrderTypeDto;
  leaveType?: LeaveTypeDto;
  employee?: EmployeeDto;
  contractId?: number;
  courseNumberOfHours?: number;
  courseCost?: number;
  totalDays?: number;
  orderAttachments?: OrderAttachmentDto[];
  createDate?: string;
}

// ============================================================
// Specialised request payloads — mirror backend DTOs.
// All extend OrderRequestDto (single-table inheritance on backend).
//   POST /OrderRequest/CreateOverTime              → OverTimeDto
//   POST /OrderRequest/CreateBusinessTrip          → BusinessTripDto
//   POST /OrderRequest/CreateServiceCertificate    → ServiceCertificateRequestDto
//   POST /OrderRequest/CreateCourse                → OrderRequestDto
//   POST /OrderRequest/CreateOther                 → OrderRequestDto
// (See MTWorkHR.Application/Dtos/Attendance/*.cs)
// ============================================================

export interface OverTimeDayDto {
  overTimeDate?: string;     // ISO date
  startTime?: string;
  endTime?: string;
  totalHours?: number;
  overTimeDetail?: string;
  overTimeAttachment?: OrderAttachmentDto;
}

export interface OverTimeDto extends OrderRequestDto {
  overTimeDays?: OverTimeDayDto[];
}

export interface BusinessTripExpensesDto {
  ticketCost?: number;
  transportationCost?: number;
  accommodationCost?: number;
  otherCost?: number;
  totalCost?: number;
  attachments?: OrderAttachmentDto[];
}

export interface BusinessTripDto extends OrderRequestDto {
  businessTripExpenses?: BusinessTripExpensesDto;
}

export interface ServiceCertificateDto {
  toWhom?: string;
  name?: string;
  salary?: string;
  joiningDate?: string;
  toDate?: string;
  position?: string;
}

export interface ServiceCertificateRequestDto extends OrderRequestDto {
  serviceCertificate?: ServiceCertificateDto;
}

// ── OrderType lookup IDs (mirrors backend OrderTypeConfiguration.cs) ──
export enum OrderTypeId {
  Leave              = 1,
  Overtime           = 2,
  BusinessTrip       = 3,
  Course             = 4,
  ServiceCertificate = 5,
  Other              = 6,
}
