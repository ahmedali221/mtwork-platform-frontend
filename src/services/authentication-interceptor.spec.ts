import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import {
  provideHttpClient,
  withInterceptors,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

import { authenticationInterceptor } from './authentication-interceptor';
import { AuthService } from './auth';
import { TokenService } from './token.service';

// ── Helpers ───────────────────────────────────────────────────────────────────

const TEST_URL = '/api/Test/endpoint';

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('authenticationInterceptor', () => {
  let http:      HttpClient;
  let httpMock:  HttpTestingController;

  let authSpy:    jest.Mocked<Pick<AuthService,    'getToken' | 'logout'>>;
  let tokenSpy:   jest.Mocked<Pick<TokenService,   'isTokenExpired'>>;
  let routerSpy:  jest.Mocked<Pick<Router,         'navigate'>>;
  let snackSpy:   jest.Mocked<Pick<MatSnackBar,    'open'>>;
  let translocoSpy: jest.Mocked<Pick<TranslocoService, 'translate'>>;

  beforeEach(() => {
    authSpy     = { getToken: jest.fn(), logout: jest.fn() };
    tokenSpy    = { isTokenExpired: jest.fn().mockReturnValue(false) };
    routerSpy   = { navigate: jest.fn() };
    snackSpy    = { open: jest.fn() };
    translocoSpy = { translate: jest.fn().mockReturnValue('') };
    localStorage.clear();

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([authenticationInterceptor])),
        provideHttpClientTesting(),
        { provide: AuthService,      useValue: authSpy },
        { provide: TokenService,     useValue: tokenSpy },
        { provide: Router,           useValue: routerSpy },
        { provide: MatSnackBar,      useValue: snackSpy },
        { provide: TranslocoService, useValue: translocoSpy },
      ],
    });

    http     = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
    jest.clearAllMocks();
  });

  // ── Pre-request token expiry check ────────────────────────────────────────

  describe('pre-request: expired token', () => {
    it('calls logout() immediately when token exists and is expired', () => {
      authSpy.getToken.mockReturnValue('expired-token');
      tokenSpy.isTokenExpired.mockReturnValue(true);

      http.get(TEST_URL).subscribe({ error: () => {} });
      httpMock.expectNone(TEST_URL); // request aborted — no HTTP call made

      expect(authSpy.logout).toHaveBeenCalledTimes(1);
    });

    it('aborts the request (no HTTP call) when pre-request check fires', () => {
      authSpy.getToken.mockReturnValue('expired-token');
      tokenSpy.isTokenExpired.mockReturnValue(true);

      http.get(TEST_URL).subscribe({ error: () => {} });
      httpMock.expectNone(TEST_URL);
    });

    it('emits a 401 HttpErrorResponse when pre-request check fires', (done) => {
      authSpy.getToken.mockReturnValue('expired-token');
      tokenSpy.isTokenExpired.mockReturnValue(true);

      http.get(TEST_URL).subscribe({
        error: (err: HttpErrorResponse) => {
          expect(err.status).toBe(401);
          done();
        },
      });
      httpMock.expectNone(TEST_URL);
    });

    it('does NOT abort when token is absent (no token = no pre-check)', () => {
      authSpy.getToken.mockReturnValue(null);
      tokenSpy.isTokenExpired.mockReturnValue(false);

      http.get(TEST_URL).subscribe();
      httpMock.expectOne(TEST_URL).flush({});
    });
  });

  // ── Header attachment ─────────────────────────────────────────────────────

  describe('header attachment', () => {
    beforeEach(() => {
      authSpy.getToken.mockReturnValue(null);
      tokenSpy.isTokenExpired.mockReturnValue(false);
    });

    it('attaches lang header from localStorage (default: en)', () => {
      http.get(TEST_URL).subscribe();
      const req = httpMock.expectOne(TEST_URL);
      expect(req.request.headers.get('lang')).toBe('en');
      req.flush({});
    });

    it('attaches lang header from localStorage (ar)', () => {
      localStorage.setItem('lang', 'ar');
      http.get(TEST_URL).subscribe();
      const req = httpMock.expectOne(TEST_URL);
      expect(req.request.headers.get('lang')).toBe('ar');
      req.flush({});
    });

    it('attaches Authorization header when token is present', () => {
      authSpy.getToken.mockReturnValue('my-jwt-token');
      tokenSpy.isTokenExpired.mockReturnValue(false);

      http.get(TEST_URL).subscribe();
      const req = httpMock.expectOne(TEST_URL);
      expect(req.request.headers.get('Authorization')).toBe('Bearer my-jwt-token');
      req.flush({});
    });

    it('does NOT attach Authorization header when token is absent', () => {
      authSpy.getToken.mockReturnValue(null);

      http.get(TEST_URL).subscribe();
      const req = httpMock.expectOne(TEST_URL);
      expect(req.request.headers.has('Authorization')).toBe(false);
      req.flush({});
    });
  });

  // ── Error handling: 401 ───────────────────────────────────────────────────

  describe('error handling: 401', () => {
    beforeEach(() => {
      authSpy.getToken.mockReturnValue('valid-token');
      tokenSpy.isTokenExpired.mockReturnValue(false);
    });

    it('navigates to /login when 401 and local token is expired', () => {
      tokenSpy.isTokenExpired.mockReturnValue(true);
      // pre-request check fires first in this case — we test server 401 when local token valid
      // Reset: no pre-check abort (getToken returns null for pre-check but valid in error handler)
      // Use a different approach: expired at time of error, not before request
      authSpy.getToken
        .mockReturnValueOnce(null) // pre-check: no token → proceeds
        .mockReturnValue('valid-token'); // error handler: token exists
      tokenSpy.isTokenExpired.mockReturnValue(true);

      http.get(TEST_URL).subscribe({ error: () => {} });
      const req = httpMock.expectOne(TEST_URL);
      req.flush({}, { status: 401, statusText: 'Unauthorized' });

      expect(authSpy.logout).toHaveBeenCalled();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
    });

    it('navigates to /dashboard/403 when 401 but local token not expired', () => {
      authSpy.getToken.mockReturnValue('valid-token');
      tokenSpy.isTokenExpired.mockReturnValue(false);

      http.get(TEST_URL).subscribe({ error: () => {} });
      const req = httpMock.expectOne(TEST_URL);
      req.flush({}, { status: 401, statusText: 'Unauthorized' });

      expect(authSpy.logout).not.toHaveBeenCalled();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard/403']);
    });
  });

  // ── Error handling: 403 ───────────────────────────────────────────────────

  describe('error handling: 403', () => {
    it('navigates to /dashboard/403 on 403', () => {
      authSpy.getToken.mockReturnValue(null);
      tokenSpy.isTokenExpired.mockReturnValue(false);

      http.get(TEST_URL).subscribe({ error: () => {} });
      httpMock.expectOne(TEST_URL).flush({}, { status: 403, statusText: 'Forbidden' });

      expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard/403']);
    });

    it('does NOT call logout() on 403', () => {
      authSpy.getToken.mockReturnValue(null);
      tokenSpy.isTokenExpired.mockReturnValue(false);

      http.get(TEST_URL).subscribe({ error: () => {} });
      httpMock.expectOne(TEST_URL).flush({}, { status: 403, statusText: 'Forbidden' });

      expect(authSpy.logout).not.toHaveBeenCalled();
    });
  });

  // ── Error handling: 429 ───────────────────────────────────────────────────

  describe('error handling: 429', () => {
    it('opens snack bar on 429', () => {
      authSpy.getToken.mockReturnValue(null);
      tokenSpy.isTokenExpired.mockReturnValue(false);

      http.get(TEST_URL).subscribe({ error: () => {} });
      httpMock.expectOne(TEST_URL).flush({}, { status: 429, statusText: 'Too Many Requests' });

      expect(snackSpy.open).toHaveBeenCalledTimes(1);
    });

    it('does NOT navigate on 429', () => {
      authSpy.getToken.mockReturnValue(null);

      http.get(TEST_URL).subscribe({ error: () => {} });
      httpMock.expectOne(TEST_URL).flush({}, { status: 429, statusText: 'Too Many Requests' });

      expect(routerSpy.navigate).not.toHaveBeenCalled();
    });
  });

  // ── Error handling: 500 ───────────────────────────────────────────────────

  describe('error handling: 500', () => {
    it('opens snack bar on 500', () => {
      authSpy.getToken.mockReturnValue(null);

      http.get(TEST_URL).subscribe({ error: () => {} });
      httpMock.expectOne(TEST_URL).flush({}, { status: 500, statusText: 'Internal Server Error' });

      expect(snackSpy.open).toHaveBeenCalledTimes(1);
    });
  });

  // ── Error handling: status 0 (network) ───────────────────────────────────

  describe('error handling: status 0 (network failure)', () => {
    it('navigates to /dashboard/106 after final network failure', fakeAsync(() => {
      authSpy.getToken.mockReturnValue(null);
      tokenSpy.isTokenExpired.mockReturnValue(false);

      http.get(TEST_URL).subscribe({ error: () => {} });

      // First attempt — triggers retry delay of 2 s
      httpMock.expectOne(TEST_URL).error(new ProgressEvent('error'));

      // Advance clock past the timer(2000) in the interceptor
      tick(2000);

      // Second attempt (retry) — also fails
      httpMock.expectOne(TEST_URL).error(new ProgressEvent('error'));

      // Allow catchError to propagate
      tick(0);

      expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard/106']);
    }));
  });

  // ── Pass-through ──────────────────────────────────────────────────────────

  describe('pass-through on success', () => {
    it('emits response when request succeeds', (done) => {
      authSpy.getToken.mockReturnValue(null);
      tokenSpy.isTokenExpired.mockReturnValue(false);

      const payload = { id: 1 };
      http.get(TEST_URL).subscribe({
        next: (res) => { expect(res).toEqual(payload); done(); },
      });
      httpMock.expectOne(TEST_URL).flush(payload);
    });
  });
});
