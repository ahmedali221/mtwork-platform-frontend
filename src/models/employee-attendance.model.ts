// Backend CheckOutEnum (MTWorkHR.Core/Global/Enum/CheckOutEnum.cs)
export enum LeaveTypeEnum {
  Leave   = 1,
  Meeting = 2,
  Other   = 3,
}

export interface AttendanceEmployee {
  firstName?: string;
  lastName?:  string;
}

// Mirrors backend MTWorkHR.Application/Dtos/Attendance/AttendanceDto.cs
export interface EmployeeAttendance {
  id?:             number;
  userId?:         string;
  userName?:       string;
  employee?:       AttendanceEmployee;
  checkInTime?:    string;
  checkOutTime?:   string;
  totalHours?:     number;
  attendanceDate?: string;
  weekDay?:        string;
  leaveType?:      LeaveTypeEnum;
  leaveReason?:    string;
}

export interface AttendanceListResponse {
  total:  number;
  result: EmployeeAttendance[];
}
