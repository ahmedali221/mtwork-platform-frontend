import { Injectable, inject, NgZone } from '@angular/core';
import {
  interval, Subscription, fromEvent, merge, Subject
} from 'rxjs';
import { switchMap, throttleTime, takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { TokenService } from './token.service';
import { AuthService } from './auth';
import {
  SessionExpiryDialogComponent,
  SessionExpiryDialogResult
} from '../features/auth/session-expiry-dialog/session-expiry-dialog.component';

/** How often (ms) we poll the token for expiry */
const CHECK_INTERVAL_MS   = 60_000;   // 1 minute

/** Warn the user when this many seconds remain */
const WARN_BEFORE_SECONDS = 5 * 60;   // 5 minutes

/** Auto-logout after this much idle time (ms) */
const IDLE_TIMEOUT_MS     = 30 * 60_000; // 30 minutes

@Injectable({ providedIn: 'root' })
export class SessionService {
  private tokenService = inject(TokenService);
  private authService  = inject(AuthService);
  private transloco    = inject(TranslocoService);
  private dialog       = inject(MatDialog);
  private snackBar     = inject(MatSnackBar);
  private router       = inject(Router);
  private ngZone       = inject(NgZone);

  private stop$         = new Subject<void>();
  private checkSub?:    Subscription;
  private idleSub?:     Subscription;
  private dialogOpen    = false;

  // ── Public API ───────────────────────────────────────────────────

  startMonitoring(): void {
    this.stopMonitoring(); // reset if already running
    this._startTokenCheck();
    this._startIdleDetection();
  }

  stopMonitoring(): void {
    this.stop$.next();
    this.checkSub?.unsubscribe();
    this.idleSub?.unsubscribe();
    this.dialogOpen = false;
  }

  // ── Token expiry check (every 1 minute) ─────────────────────────

  private _startTokenCheck(): void {
    this.checkSub = interval(CHECK_INTERVAL_MS)
      .pipe(takeUntil(this.stop$))
      .subscribe(() => this._checkToken());

    // Also check immediately on start
    this._checkToken();
  }

  private _checkToken(): void {
    const decoded = this.tokenService.getDecodedToken();
    if (!decoded || !decoded['exp']) {
      this._forceLogout('expired');
      return;
    }

    const nowSec       = Math.floor(Date.now() / 1000);
    const secondsLeft  = decoded['exp'] - nowSec;

    if (secondsLeft <= 0) {
      this._forceLogout('expired');
      return;
    }

    if (secondsLeft <= WARN_BEFORE_SECONDS && !this.dialogOpen) {
      this._openWarningDialog(secondsLeft);
    }
  }

  // ── Warning dialog ───────────────────────────────────────────────

  private _openWarningDialog(secondsRemaining: number): void {
    if (this.dialogOpen) return;
    this.dialogOpen = true;

    this.ngZone.run(() => {
      const ref = this.dialog.open<
        SessionExpiryDialogComponent,
        { secondsRemaining: number },
        SessionExpiryDialogResult
      >(SessionExpiryDialogComponent, {
        data: { secondsRemaining },
        disableClose: true,
        width: '400px',
      });

      ref.afterClosed().subscribe((result: SessionExpiryDialogResult | undefined) => {
        this.dialogOpen = false;
        if (result === 'logout' || !result) {
          this._forceLogout('signedOut');
        }
        // 'extend': session continues — next check will re-evaluate
      });
    });
  }

  // ── Idle detection (30 minutes) ──────────────────────────────────

  private _startIdleDetection(): void {
    const activity$ = merge(
      fromEvent(document, 'mousemove'),
      fromEvent(document, 'keydown'),
      fromEvent(document, 'click'),
      fromEvent(document, 'touchstart'),
    ).pipe(throttleTime(5000));   // de-bounce activity events

    this.idleSub = activity$
      .pipe(
        // Every time there's activity, reset a 30-min idle timer
        switchMap(() => interval(IDLE_TIMEOUT_MS)),
        takeUntil(this.stop$),
      )
      .subscribe(() => {
        if (!this.dialogOpen) {
          this._openWarningDialog(0);   // 0s remaining → dialog counts down immediately
        }
      });

    // Start the idle timer immediately (no initial activity assumed)
    interval(IDLE_TIMEOUT_MS)
      .pipe(takeUntil(merge(this.stop$, activity$)))
      .subscribe(() => {
        if (!this.dialogOpen) {
          this._openWarningDialog(0);
        }
      });
  }

  // ── Force logout ─────────────────────────────────────────────────

  /** @param messageKey — 'expired' | 'signedOut' (mapped to session.* i18n keys) */
  private _forceLogout(messageKey: 'expired' | 'signedOut'): void {
    this.stopMonitoring();
    this.authService.logout();   // clears all localStorage keys + authz state

    const t = (k: string) => this.transloco.translate(k);
    const keyMap: Record<'expired' | 'signedOut', string> = {
      expired:   'session.expired',
      signedOut: 'session.signedOut',
    };

    this.ngZone.run(() => {
      this.snackBar.open(t(keyMap[messageKey]), t('errors.ok'), {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['snack-warn'],
      });
      this.router.navigate(['/login']);
    });
  }
}
