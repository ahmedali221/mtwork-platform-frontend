import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttendanceService } from '../../../../services/attendance';
import { EmployeeAttendance, LeaveTypeEnum } from '../../../../models/employee-attendance.model';
import { AuthService } from '../../../../services/auth';
import { TokenService } from '../../../../services/token.service';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-general-attendance',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule, TranslocoModule],
  templateUrl: './general-attendance.html',
  styleUrls: ['./general-attendance.css']
})
export class GeneralAttendanceComponent implements OnInit, OnDestroy {
  private attendanceService = inject(AttendanceService);
  private authService       = inject(AuthService);
  private tokenService      = inject(TokenService);
  private cdr               = inject(ChangeDetectorRef);

  // For Employee/Contractor/Admin every row is the same person (own history,
  // loaded via Attendance/GetAll?userId=self — see loadAttendanceRecords()),
  // so the Employee column is dropped — otherwise the page looks like
  // "all employees" when it's really one user's history.
  readonly isBusiness: boolean = (this.authService.getUserTypeId() ?? 0) === 3;

  // Columns mirror real backend AttendanceDto fields. The fake `shiftType`
  // is replaced by `leaveType` (CheckOutEnum). `date` shows attendanceDate.
  displayedColumns: string[] = this.isBusiness
    ? ['employee', 'date', 'leaveType', 'checkIn', 'checkOut', 'actions']
    : ['date', 'leaveType', 'checkIn', 'checkOut', 'actions'];
  dataSource       = new MatTableDataSource<EmployeeAttendance>([]);

  private allRecords: EmployeeAttendance[] = [];

  searchQuery    = '';
  selectedDate:    Date | null = null;
  shiftFilter    = '';
  dateInputValue = '';

  isLoading = false;
  loadError = false;

  // ── Self check-in/out (Employee/Contractor only — Business manages, doesn't punch in) ──
  checkInOutLoading = signal(false);
  checkInOutError   = signal<string | null>(null);

  /** Today's own attendance record, if one exists (created by checkIn()). */
  get todayRecord(): EmployeeAttendance | null {
    const today = this.normalizeDate(new Date()).getTime();
    return this.allRecords.find(r => {
      if (!r.attendanceDate) return false;
      const d = new Date(r.attendanceDate);
      return !isNaN(d.getTime()) && this.normalizeDate(d).getTime() === today;
    }) ?? null;
  }

  get isCheckedInToday(): boolean  { return !!this.todayRecord?.checkInTime; }
  get isCheckedOutToday(): boolean { return !!this.todayRecord?.checkOutTime; }

  // ── Toolbar consistency — plain `viewMode` property ──────────────
  viewMode: 'table' | 'cards' = 'table';
  isFullscreen = signal(false);
  setView(mode: 'table' | 'cards'): void {
    this.viewMode = mode;
    this.cdr.markForCheck();
  }
  toggleFullscreen(): void {
    const el = document.querySelector('.attendance-page') as HTMLElement | null;
    if (!document.fullscreenElement) el?.requestFullscreen().catch(() => {});
    else                              document.exitFullscreen().catch(() => {});
  }
  private readonly onFsChange = () => {
    this.isFullscreen.set(!!document.fullscreenElement);
    this.cdr.markForCheck();
  };

  get hasActiveFilters(): boolean {
    return !!(this.searchQuery || this.selectedDate || this.shiftFilter);
  }

  resetFilters(): void {
    this.searchQuery    = '';
    this.selectedDate   = null;
    this.shiftFilter    = '';
    this.dateInputValue = '';
    this.applyFilters();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.loadAttendanceRecords();
    document.addEventListener('fullscreenchange', this.onFsChange);
  }

  ngOnDestroy(): void {
    document.removeEventListener('fullscreenchange', this.onFsChange);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  get filteredRecords(): EmployeeAttendance[] {
    return this.dataSource.data;
  }

  loadAttendanceRecords(): void {
    this.isLoading = true;
    this.loadError = false;
    this.cdr.markForCheck();

    // Business sees the whole-company roster (Attendance/GetAll with no
    // params). For Employee/Contractor that same call returns one summary
    // row per company employee, NOT the caller's own history — confirmed
    // live (a fresh check-in never appeared in it). Their real personal
    // history is Attendance/GetAll?userId=<self>, which was already wired
    // up in AttendanceService but never called from here until now.
    const userId = this.tokenService.getUserId();
    const source$ = (!this.isBusiness && userId)
      ? this.attendanceService.getEmployeeAttendance(userId)
      : this.attendanceService.getAllEmployeesAttendance();

    source$.subscribe({
      next: (records) => {
        this.allRecords       = records ?? [];
        this.dataSource.data  = this.allRecords;
        this.isLoading        = false;
        this.applyFilters();
        // Force CD — MatTableDataSource sometimes drops the initial frame
        // when the dataSource is bound through a getter alongside other inputs.
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoading = false;
        this.loadError = true;
        this.cdr.markForCheck();
      }
    });
  }

  applyFilters(): void {
    const query = this.searchQuery.trim().toLowerCase();
    this.dataSource.data = this.allRecords.filter((record: EmployeeAttendance) => {
      const fullName      = this.getFullName(record).toLowerCase();
      const statusTxt     = this.getStatusLabel(record).toLowerCase();
      const matchesSearch = !query ||
        fullName.includes(query) ||
        statusTxt.includes(query) ||
        (record.weekDay  ?? '').toLowerCase().includes(query) ||
        (record.userName ?? '').toLowerCase().includes(query);

      // Date filter: when a date is selected, records lacking a check-in
      // must be EXCLUDED (previous logic short-circuited and kept them).
      let matchesDate = true;
      if (this.selectedDate) {
        if (!record.checkInTime) {
          matchesDate = false;
        } else {
          const checkIn = new Date(record.checkInTime);
          matchesDate =
            this.normalizeDate(checkIn).getTime() ===
            this.normalizeDate(this.selectedDate).getTime();
        }
      }

      // Status filter — values 0=Working, 1=Leave, 2=Meeting, 3=Other
      const matchesShift = !this.shiftFilter ||
        String(Number(record.leaveType ?? 0)) === this.shiftFilter ||
        statusTxt === this.shiftFilter.toLowerCase();

      return matchesSearch && matchesDate && matchesShift;
    });

    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  checkIn(): void {
    if (this.isBusiness || this.isCheckedInToday || this.checkInOutLoading()) return;
    const userId = this.tokenService.getUserId();
    if (!userId) return;

    this.checkInOutLoading.set(true);
    this.checkInOutError.set(null);
    const now = new Date().toISOString();
    this.attendanceService.createAttendance({ userId, checkInTime: now, attendanceDate: now }).subscribe({
      next: () => {
        this.checkInOutLoading.set(false);
        this.loadAttendanceRecords();
      },
      error: () => {
        this.checkInOutLoading.set(false);
        this.checkInOutError.set('attendance.errors.checkInFailed');
        this.cdr.markForCheck();
      }
    });
  }

  checkOut(): void {
    const record = this.todayRecord;
    if (this.isBusiness || !record?.id || this.isCheckedOutToday || this.checkInOutLoading()) return;

    this.checkInOutLoading.set(true);
    this.checkInOutError.set(null);
    this.attendanceService.updateAttendance({ ...record, checkOutTime: new Date().toISOString() }).subscribe({
      next: () => {
        this.checkInOutLoading.set(false);
        this.loadAttendanceRecords();
      },
      error: () => {
        this.checkInOutLoading.set(false);
        this.checkInOutError.set('attendance.errors.checkOutFailed');
        this.cdr.markForCheck();
      }
    });
  }

  onSearchChange(): void { this.applyFilters(); }

  onDateInputChange(value: string): void {
    this.dateInputValue = value;
    this.selectedDate   = value ? new Date(value) : null;
    this.applyFilters();
  }

  onShiftChange(value: string): void {
    this.shiftFilter = value;
    this.applyFilters();
  }

  importAttendance(): void {}

  // Backend `leaveType` is the daily attendance STATUS, not a leave subtype.
  //   0 → Working, 1 → Leave, 2 → Meeting, 3 → Other
  getStatusLabel(record: EmployeeAttendance): string {
    switch (Number(record?.leaveType ?? 0)) {
      case 0: return 'Working';
      case 1: return 'Leave';
      case 2: return 'Meeting';
      case 3: return 'Other';
      default: return '—';
    }
  }

  /** Modifier class for the status badge — paired with .ui-status-badge. */
  getStatusClass(record: EmployeeAttendance): string {
    switch (Number(record?.leaveType ?? 0)) {
      case 0: return 'ui-status-badge--working';
      case 1: return 'ui-status-badge--leave';
      case 2: return 'ui-status-badge--meeting';
      case 3: return 'ui-status-badge--other';
      default: return '';
    }
  }

  /** Back-compat aliases — keep callers using the old names from breaking. */
  getLeaveTypeLabel(record: EmployeeAttendance): string { return this.getStatusLabel(record); }
  getShiftType(record: EmployeeAttendance): string      { return this.getStatusLabel(record); }

  getFullName(record: EmployeeAttendance): string {
    const first = record.employee?.firstName ?? '';
    const last  = record.employee?.lastName  ?? '';
    return `${first} ${last}`.trim();
  }

  formatDateWithOrdinal(value: string | Date | null | undefined): string {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return '';
    const day     = d.getDate();
    const ordinal = this.getOrdinal(day);
    const month   = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    return `${month} ${day}${ordinal} ${d.getFullYear()}`;
  }

  private getOrdinal(day: number): string {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  getInitials(name?: string): string {
    if (!name) return '';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  private normalizeDate(d: Date): Date {
    const n = new Date(d);
    n.setHours(0, 0, 0, 0);
    return n;
  }

  formatDate(date: string | Date | null | undefined): string {
    return this.formatDateWithOrdinal(date);
  }

  formatTime(value: string | Date | null | undefined): string {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return '';
    return new Intl.DateTimeFormat('en', { hour: '2-digit', minute: '2-digit' }).format(d);
  }
}
