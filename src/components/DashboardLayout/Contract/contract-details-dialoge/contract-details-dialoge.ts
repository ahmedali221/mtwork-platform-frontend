import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoModule } from '@ngneat/transloco';
import { Contract, ContractStatus, CONTRACT_STATUS_LABELS } from '../../../../models/contract-models';
import { ContractService } from '../../../../services/contract-service';

export type DialogCloseResult = 'deleted' | 'status-changed' | null;

@Component({
  selector: 'app-contract-details-dialoge',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    TranslocoModule,
  ],
  templateUrl: './contract-details-dialoge.html',
  styleUrls: ['./contract-details-dialoge.css']
})
export class ContractDetailsDialogeComponent implements OnInit {

  private contractService = inject(ContractService);
  private dialogRef       = inject(MatDialogRef<ContractDetailsDialogeComponent, DialogCloseResult>);
  private snackBar        = inject(MatSnackBar);
  private initialData     = inject<Contract>(MAT_DIALOG_DATA);

  contract: Contract = this.initialData;
  isLoading       = signal(false);
  isActioning     = signal(false);
  confirmDelete   = signal(false);

  // Collapsible section states
  basicOpen        = signal(true);
  authorizedOpen   = signal(true);
  attachmentsOpen  = signal(true);
  employerOpen     = signal(true);
  workerOpen       = signal(false);
  contractingOpen  = signal(true);
  salaryOpen       = signal(true);

  readonly ContractStatus = ContractStatus;

  ngOnInit(): void {
    if (this.contract?.id) {
      this.isLoading.set(true);
      this.contractService.getContractById(this.contract.id).subscribe({
        next: (detail) => {
          if (detail?.id) this.contract = detail;
          this.isLoading.set(false);
        },
        error: () => this.isLoading.set(false),
      });
    }
  }

  toggle(section: 'basic' | 'authorized' | 'attachments' | 'employer' | 'worker' | 'contracting' | 'salary'): void {
    const map = {
      basic:       this.basicOpen,
      authorized:  this.authorizedOpen,
      attachments: this.attachmentsOpen,
      employer:    this.employerOpen,
      worker:      this.workerOpen,
      contracting: this.contractingOpen,
      salary:      this.salaryOpen,
    };
    const sig = map[section];
    sig.set(!sig());
  }

  // ── Status Change ────────────────────────────────────────────────
  // Backend ContractStatusEnum: 1=Initiated → 2=Reviewed → 3=Approved (4=Canceled).
  // Workflow buttons preserved at the same numeric transitions:
  //   "Mark Reviewed" : Initiated (1) → Reviewed (2)
  //   "Approve"       : Reviewed (2)  → Approved (3)
  // Cancel transition is not exposed in this dialog (out of scope for F3).
  canActivate():  boolean { return this.contract.statusId === ContractStatus.Initiated; }
  canTerminate(): boolean { return this.contract.statusId === ContractStatus.Reviewed; }

  changeStatus(statusId: ContractStatus): void {
    if (this.isActioning()) return;
    this.isActioning.set(true);
    this.contractService.changeStatus(Number(this.contract.id), statusId).subscribe({
      next: () => {
        const labelKey = CONTRACT_STATUS_LABELS[statusId] ?? '';
        const labelName = ContractStatus[statusId] ?? String(statusId);
        this.contract = { ...this.contract, statusId, status: labelName };
        this.snackBar.open(`Contract status changed to ${labelName}`, 'OK', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.isActioning.set(false);
        void labelKey; // available for future i18n; snackbar uses raw enum name for now
        this.dialogRef.close('status-changed');
      },
      error: (err) => {
        const msg = err?.error?.message ?? 'Failed to change status. Please try again.';
        this.snackBar.open(msg, 'OK', { duration: 4000, horizontalPosition: 'center', verticalPosition: 'top', panelClass: ['snack-warn'] });
        this.isActioning.set(false);
      },
    });
  }

  // ── Delete ───────────────────────────────────────────────────────
  requestDelete(): void { this.confirmDelete.set(true); }
  cancelDelete():  void { this.confirmDelete.set(false); }

  confirmDeleteAction(): void {
    if (this.isActioning()) return;
    this.isActioning.set(true);
    this.contractService.deleteContract(this.contract.id).subscribe({
      next: () => {
        this.snackBar.open('Contract deleted.', 'OK', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.dialogRef.close('deleted');
      },
      error: (err) => {
        const msg = err?.error?.message ?? 'Failed to delete contract.';
        this.snackBar.open(msg, 'OK', { duration: 4000, horizontalPosition: 'center', verticalPosition: 'top', panelClass: ['snack-warn'] });
        this.isActioning.set(false);
      },
    });
  }

  // ── PDF Download ─────────────────────────────────────────────────
  downloadPdf(): void {
    if (this.isActioning()) return;
    this.isActioning.set(true);
    this.contractService.downloadPdf(this.contract.id).subscribe({
      next: (blob) => {
        const url  = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href  = url;
        link.download = `contract-${this.contract.workId || this.contract.id}.pdf`;
        link.click();
        URL.revokeObjectURL(url);
        this.isActioning.set(false);
      },
      error: (err) => {
        const msg = err?.error?.message ?? 'Failed to download PDF.';
        this.snackBar.open(msg, 'OK', { duration: 4000, horizontalPosition: 'center', verticalPosition: 'top', panelClass: ['snack-warn'] });
        this.isActioning.set(false);
      },
    });
  }

  // ── Helpers ──────────────────────────────────────────────────────
  closeDialog(): void { this.dialogRef.close(null); }

  downloadAttachment(url?: string): void {
    if (url) window.open(url, '_blank');
  }

  getInitials(name?: string | null): string {
    if (!name) return '?';
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return parts[0].substring(0, 2).toUpperCase();
  }
}
