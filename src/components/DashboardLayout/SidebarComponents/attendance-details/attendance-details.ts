import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttendanceService } from '../../../../services/attendance';
import { EmployeeAttendance, LeaveTypeEnum } from '../../../../models/employee-attendance.model';
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
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-attendance-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule, TranslocoModule],
  templateUrl: './attendance-details.html',
  styleUrls: ['./attendance-details.css']
})
export class AttendanceDetailsComponent implements OnInit {
  private attendanceService = inject(AttendanceService);
  private tokenService      = inject(TokenService);
  private cdr               = inject(ChangeDetectorRef);

  readonly employeeId: string = this.tokenService.getUserId() ?? '';
  employeeName  = '';
  employeeRole  = '';
  employeeStatus = '';

  attendanceRecords: EmployeeAttendance[] = [];
  filteredRecords:   EmployeeAttendance[] = [];
  searchQuery    = '';
  selectedDate:    Date | null = null;
  shiftFilter    = '';
  dateInputValue = '';
  isLoading      = false;
  loadError      = false;

  // ── View toggle — plain property (default change detection picks it up) ──
  viewMode: 'table' | 'cards' = 'table';
  setView(mode: 'table' | 'cards'): void {
    this.viewMode = mode;
    this.cdr.markForCheck();
  }

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

  // Employee column dropped: page is scoped to ONE employee (shown in the
  // header card above the table). Repeating the name in every row is redundant.
  // Columns mirror real backend AttendanceDto fields (no fake `shiftType`).
  displayedColumns = ['date', 'leaveType', 'checkIn', 'checkOut', 'actions'];

  ngOnInit(): void {
    this.loadAttendanceRecords();
  }

  loadAttendanceRecords(): void {
    this.isLoading = true;
    this.loadError = false;
    this.cdr.markForCheck();
    this.attendanceService.getEmployeeAttendance(this.employeeId).subscribe({
      next: (data) => {
        this.attendanceRecords = data ?? [];
        if (this.attendanceRecords.length > 0) {
          const first = this.attendanceRecords[0];
          this.employeeName = this.getFullName(first);
        }
        this.isLoading = false;
        this.applyFilters();
        // Wake CD so the @if (viewMode === 'table') / @if (filteredRecords.length === 0)
        // branches re-render immediately — without this users had to click first.
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoading = false;
        this.loadError = true;
        this.attendanceRecords = [];
        this.filteredRecords   = [];
        this.cdr.markForCheck();
      }
    });
  }

  applyFilters(): void {
    const q = this.searchQuery.trim().toLowerCase();
    this.filteredRecords = this.attendanceRecords.filter(record => {
      const fullName      = this.getFullName(record).toLowerCase();
      const statusTxt     = this.getStatusLabel(record).toLowerCase();
      const matchesSearch = !q ||
        fullName.includes(q) ||
        statusTxt.includes(q) ||
        (record.weekDay   ?? '').toLowerCase().includes(q) ||
        (record.userName  ?? '').toLowerCase().includes(q);

      // Date filter: prefer attendanceDate, fall back to checkInTime.
      // When a date is selected, records lacking BOTH must be EXCLUDED.
      let matchesDate = true;
      if (this.selectedDate) {
        const recordDate = record.attendanceDate ?? record.checkInTime;
        if (!recordDate) {
          matchesDate = false;
        } else {
          const d = new Date(recordDate);
          matchesDate =
            this.normalizeDate(d).getTime() ===
            this.normalizeDate(this.selectedDate).getTime();
        }
      }

      // Status filter — values 0=Working, 1=Leave, 2=Meeting, 3=Other
      const matchesShift = !this.shiftFilter ||
        String(Number(record.leaveType ?? 0)) === this.shiftFilter ||
        statusTxt === this.shiftFilter.toLowerCase();

      return matchesSearch && matchesDate && matchesShift;
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
  //   0 → Working (no leave on that day; default int when not set)
  //   1 → Leave    (CheckOutEnum.Leave)
  //   2 → Meeting  (CheckOutEnum.Meeting)
  //   3 → Other    (CheckOutEnum.Other)
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
}
