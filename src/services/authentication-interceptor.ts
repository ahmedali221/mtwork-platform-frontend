import {
  HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpErrorResponse
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoService } from '@ngneat/transloco';
import { catchError, retry, throwError, timer } from 'rxjs';
import { AuthService } from './auth';
import { TokenService } from './token.service';

/**
 * Interceptor responsibilities:
 * 1. Pre-request: if token is expired → logout immediately, abort request.
 * 2. Attach Bearer token + lang header.
 * 3. Retry network errors once after 2 s.
 * 4. Handle HTTP error responses:
 *    - 401  → logout + /login
 *    - 403  → /dashboard/403
 *    - 0    → retry once, then /dashboard/106 + toast
 *    - 429  → toast "Too many requests"
 *    - 500  → toast "Server error"
 */
export const authenticationInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const authService  = inject(AuthService);
  const tokenService = inject(TokenService);
  const router       = inject(Router);
  const snackBar     = inject(MatSnackBar);
  const transloco    = inject(TranslocoService);

  const t = (key: string) => transloco.translate(key);

  // ── Pre-request token check ──────────────────────────────────────
  const token = authService.getToken();

  if (token && tokenService.isTokenExpired()) {
    authService.logout();
    return throwError(() => new HttpErrorResponse({ status: 401, statusText: 'Token Expired' }));
  }

  // ── Attach headers ───────────────────────────────────────────────
  const language = localStorage.getItem('lang') || 'en';
  const headersConfig: Record<string, string> = { lang: language };
  if (token) headersConfig['Authorization'] = `Bearer ${token}`;

  const authReq = req.clone({ setHeaders: headersConfig });

  // ── Send request + error handling ───────────────────────────────
  return next(authReq).pipe(
    // Retry network errors (status 0) once after 2 seconds
    retry({
      count: 1,
      delay: (error: HttpErrorResponse) =>
        error.status === 0 ? timer(2000) : throwError(() => error),
    }),

    catchError((error: HttpErrorResponse) => {
      switch (error.status) {
        case 401:
          // Only force-logout when the token is actually expired locally.
          // A server-side 401 with a valid local token is treated as 403 — no logout.
          if (authService.getToken()) {
            if (tokenService.isTokenExpired()) {
              authService.logout();
              router.navigate(['/login']);
            } else {
              router.navigate(['/dashboard/403']);
            }
          }
          break;

        case 403:
          router.navigate(['/dashboard/403']);
          break;

        case 0:
          snackBar.open(t('errors.noConnection'), t('errors.ok'), {
            duration: 6000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['snack-warn'],
          });
          router.navigate(['/dashboard/106']);
          break;

        case 429:
          snackBar.open(t('errors.tooManyReqs'), t('errors.ok'), {
            duration: 6000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['snack-warn'],
          });
          break;

        case 500:
          snackBar.open(t('errors.serverError'), t('errors.ok'), {
            duration: 6000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['snack-error'],
          });
          break;
      }

      return throwError(() => error);
    })
  );
};
