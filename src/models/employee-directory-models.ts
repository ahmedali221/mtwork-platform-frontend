import { UserTypeId } from './user.model';

// ============================================================
// Employee Directory  —  GET /User/GetAllCompanyEmployees
// Backend returns the full UserDto shape (Swagger-confirmed 2026-07-24);
// only the fields the directory list/detail views actually render are
// declared here — deliberately narrower than the backend DTO.
// ============================================================

export interface EmployeeAddressInfo {
  countryId?: number;
  cityId?: number;
  countryName?: string;
  cityName?: string;
}

export interface CompanyEmployeeDto {
  id: string;
  firstName: string;
  lastName?: string;
  email: string;
  phoneNumber?: string;
  favoriteName?: string;
  position?: string;
  userType: UserTypeId;
  jobTitleName?: string;
  qualificationName?: string;
  universityName?: string;
  industryName?: string;
  companyId?: number;
  profileImagePath?: string;
  userAddress?: EmployeeAddressInfo;
}

// ============================================================
// Employee Detail  —  GET /User/GetEmployeeById?userId=
// ============================================================

export interface CompanyEmployeeDetailDto extends CompanyEmployeeDto {
  dateOfBirth?: string;
}
