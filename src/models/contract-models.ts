// =====================================================================
// Enums — mirror backend MTWorkHR.Core/Global/Enum/ContractStatusEnum.cs
// and ContractTypeEnum.cs (source of truth).
// =====================================================================

export enum ContractStatus {
  Initiated = 1,
  Reviewed  = 2,
  Approved  = 3,
  Canceled  = 4
}

export const CONTRACT_STATUS_LABELS: Record<ContractStatus, string> = {
  [ContractStatus.Initiated]: 'contracts.status.initiated',
  [ContractStatus.Reviewed]:  'contracts.status.reviewed',
  [ContractStatus.Approved]:  'contracts.status.approved',
  [ContractStatus.Canceled]:  'contracts.status.canceled'
};

export enum ContractType {
  EmployeeContract  = 1,
  FixedPayContract  = 2,
  PerTaskContract   = 3,
  PerProjectContract = 4
}

export const CONTRACT_TYPE_LABELS: Record<ContractType, string> = {
  [ContractType.EmployeeContract]:   'contracts.types.employeeContract',
  [ContractType.FixedPayContract]:   'contracts.types.fixedPayContract',
  [ContractType.PerTaskContract]:    'contracts.types.perTaskContract',
  [ContractType.PerProjectContract]: 'contracts.types.perProjectContract'
};

// =====================================================================
// Request shapes
// =====================================================================

export interface ChangeStatusRequest {
  contractId: number;
  statusId:   ContractStatus;
}

export interface ContractFilters {
  country?:      string;
  contractType?: string;
  status?:       string;
  personType?:   string;
  search?:       string;
}

// =====================================================================
// Core contract entity (used by list, detail, create, update flows)
// =====================================================================

export interface Contract {
  // Identifiers
  id:     string;
  workId: string;

  // Main fields
  contractTitle: string;
  contractType:  string;
  status:        string;
  statusId?:     ContractStatus;

  // Person involved (employee or contractor)
  empoleeOrContractor?: {
    name:         string;
    role:         string;
    email:        string;
    phone?:       string;
    avatar:       string;
    linkedin?:    string;
    github?:      string;
    // Basic information fields
    lastName?:    string;
    country?:     string;
    postCode?:    string;
    taxId?:       string;
    // Authorized person fields
    authorizedFirstName?: string;
    authorizedLastName?:  string;
    authorizedId?:        string;
    city?:                string;
    address?:             string;
    availabilityStatus?:  string;
  } | null;

  // Employer information
  employer?: {
    entityName?:    string;
    officialNumber?: string;
    phone?:         string;
    email?:         string;
    address?:       string;
  } | null;

  // Country
  country?: {
    name:  string;
    code?: string;
    flag:  string;
  } | null;

  // Responsible manager
  manager?: {
    name:   string;
    role:   string;
    email?: string;
    avatar: string;
  } | null;

  // Dates
  startDate:    string;
  endDate:      string;
  createdTime:  string;
  lastUpdated?: string;

  // Contracting details
  contractDuration?:       string;
  trialPeriod?:            string;
  typeOfWork?:             string;
  vacationDays?:           number;
  terminateDuringTrial?:   string;
  terminateContract?:      string;
  noticePeriod?:           string;

  // Working time
  numberOfWorkingHours?:   number;
  workingDays?:            number;
  workingHours?:           number;

  // Financial
  paymentType?:            string;
  totalAmount?:            number;
  salary?:                 number;
  currency?:               string;
  billingCycle?:           string;
  hourlyRate?:             number;
  includeAllowances?:      boolean;

  // Content
  description?: string;
  terms?:       string;

  // Extras
  attachments?: { name: string; url?: string; size?: string; uploadedAt?: string }[];
  category?:    string;
  tags?:        string[];

  // UI helper
  isSelected?: boolean;
}

// =====================================================================
// Pagination
// =====================================================================

export interface PaginationInfo {
  currentPage:  number;
  itemsPerPage: number;
  totalItems:   number;
  totalPages:   number;
}

// =====================================================================
// Generic paginated API response
// =====================================================================

export interface ApiResponse<T> {
  data:       T[];
  pagination: PaginationInfo;
  message?:   string;
  status?:    string;
}
