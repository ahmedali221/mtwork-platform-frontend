import {
  Component, OnInit, inject, signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';

import { WithdrawService } from '../../../services/withdraw-service';
import { WithdrawEntry } from '../../../models/salary-withdraw-models';

type ProcessKind = 'approve' | 'reject';

@Component({
  selector: 'app-admin-withdrawals',
  standalone: true,
  imports: [CommonModule, MatIconModule, TranslocoModule],
  templateUrl: './admin-withdrawals.html',
  styleUrls: ['./admin-withdrawals.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminWithdrawalsComponent implements OnInit {
  private readonly withdrawService = inject(WithdrawService);

  readonly isLoading = signal(true);
  readonly errorKey  = signal('');

  readonly pending   = signal<WithdrawEntry[]>([]);
  readonly processed = signal<WithdrawEntry[]>([]);
  readonly pendingCount   = signal(0);
  readonly processedCount = signal(0);

  /** Id of the row currently being processed (disables its buttons + shows spinner). */
  readonly processingId = signal<number | null>(null);
  /** Row-level action error key, keyed by request id. */
  readonly actionErrorKey = signal('');

  ngOnInit(): void {
    this.load();
  }

  private load(): void {
    this.isLoading.set(true);
    this.errorKey.set('');

    this.withdrawService.getAdminRequestsGrouped().subscribe({
      next: (res) => {
        this.pending.set(res.pending ?? []);
        // Processed history — latest first.
        this.processed.set(
          [...(res.processed ?? [])].sort((a, b) => this.dateValue(b) - this.dateValue(a))
        );
        this.pendingCount.set(res.totalPendingCount ?? (res.pending?.length ?? 0));
        this.processedCount.set(res.totalProcessedCount ?? (res.processed?.length ?? 0));
        this.isLoading.set(false);
      },
      error: () => {
        this.errorKey.set('admin.withdrawals.errors.load');
        this.isLoading.set(false);
      },
    });
  }

  /** Approve or reject a pending request via PUT Withdraw/ProcessRequest/{id}. */
  process(entry: WithdrawEntry, kind: ProcessKind): void {
    if (this.processingId() !== null) return; // guard against double-submit
    this.processingId.set(entry.id);
    this.actionErrorKey.set('');

    this.withdrawService.processRequest(entry.id, {
      status: kind === 'approve' ? 'approved' : 'rejected',
    }).subscribe({
      next: () => {
        this.processingId.set(null);
        // Refresh from the server so both tables + counts reflect the new state.
        this.load();
      },
      error: () => {
        this.processingId.set(null);
        this.actionErrorKey.set('admin.withdrawals.errors.process');
      },
    });
  }

  retry(): void {
    this.load();
  }

  /** Maps a withdraw status to a badge modifier class suffix. */
  statusClass(status: string): string {
    if (status === 'approved') return 'admin-wd__badge--approved';
    if (status === 'rejected') return 'admin-wd__badge--rejected';
    return 'admin-wd__badge--pending';
  }

  /** i18n key for a withdraw status label. */
  statusLabel(status: string): string {
    if (status === 'approved') return 'admin.withdrawals.status.approved';
    if (status === 'rejected') return 'admin.withdrawals.status.rejected';
    return 'admin.withdrawals.status.pending';
  }

  private dateValue(e: WithdrawEntry): number {
    const raw = e.processedAt || e.createdAt;
    const t = raw ? Date.parse(raw) : NaN;
    return Number.isNaN(t) ? 0 : t;
  }
}
