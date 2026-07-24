import {
  Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { interval, Subscription } from 'rxjs';

export interface SessionExpiryDialogData {
  /** Seconds remaining until expiry when dialog opens */
  secondsRemaining: number;
}

export type SessionExpiryDialogResult = 'extend' | 'logout';

@Component({
  selector: 'app-session-expiry-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="session-dialog">
      <div class="session-dialog__icon">
        <mat-icon aria-hidden="true">timer</mat-icon>
      </div>

      <h2 class="session-dialog__title">{{ 'session.expiringTitle' | transloco }}</h2>
      <p class="session-dialog__body">
        {{ 'session.expiringBody' | transloco }}
        <strong class="session-dialog__countdown">{{ formattedTime }}</strong>.
        {{ 'session.expiringPrompt' | transloco }}
      </p>

      <div class="session-dialog__actions">
        <button mat-flat-button color="primary" (click)="extend()"
                [attr.aria-label]="'session.extendBtn' | transloco">
          <mat-icon aria-hidden="true">refresh</mat-icon>
          {{ 'session.extendBtn' | transloco }}
        </button>
        <button mat-stroked-button color="warn" (click)="logout()"
                [attr.aria-label]="'session.signOutBtn' | transloco">
          <mat-icon aria-hidden="true">logout</mat-icon>
          {{ 'session.signOutBtn' | transloco }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .session-dialog {
      padding: 24px;
      text-align: center;
      max-width: 360px;
    }
    .session-dialog__icon mat-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: var(--brand-accent-500);
    }
    .session-dialog__title {
      font-size: 1.25rem;
      font-weight: 700;
      margin: 12px 0 8px;
    }
    .session-dialog__body {
      color: var(--ui-text-muted);
      font-size: 0.9375rem;
      margin-bottom: 24px;
    }
    .session-dialog__countdown {
      font-size: 1.125rem;
      color: var(--functional-danger-600);
      font-variant-numeric: tabular-nums;
    }
    .session-dialog__actions {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }
  `]
})
export class SessionExpiryDialogComponent implements OnInit, OnDestroy {
  private dialogRef = inject(MatDialogRef<SessionExpiryDialogComponent, SessionExpiryDialogResult>);
  private data      = inject<SessionExpiryDialogData>(MAT_DIALOG_DATA);
  private cdr       = inject(ChangeDetectorRef);

  secondsRemaining: number;
  private tick$?: Subscription;

  constructor() {
    this.secondsRemaining = this.data.secondsRemaining;
  }

  get formattedTime(): string {
    const m = Math.floor(this.secondsRemaining / 60);
    const s = this.secondsRemaining % 60;
    return m > 0
      ? `${m}m ${s.toString().padStart(2, '0')}s`
      : `${s}s`;
  }

  ngOnInit(): void {
    this.tick$ = interval(1000).subscribe(() => {
      this.secondsRemaining = Math.max(0, this.secondsRemaining - 1);
      this.cdr.markForCheck();
      if (this.secondsRemaining === 0) {
        this.dialogRef.close('logout');
      }
    });
  }

  ngOnDestroy(): void {
    this.tick$?.unsubscribe();
  }

  extend(): void { this.dialogRef.close('extend'); }
  logout(): void { this.dialogRef.close('logout'); }
}
