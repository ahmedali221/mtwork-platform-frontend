import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { AuthService, LoginResponse } from './auth';
import { ApiService } from './api.service';
import { TokenService } from './token.service';
import { AuthorizationService } from './authorization.service';

// ── Helpers ───────────────────────────────────────────────────────────────────

const VALID_TOKEN = 'valid.jwt.token';

function makeLoginResponse(overrides: Partial<LoginResponse> = {}): LoginResponse {
  return { token: VALID_TOKEN, userId: 'user-123', userTypeId: 3, companyId: 1, ...overrides };
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('AuthService', () => {
  let service: AuthService;
  let apiSpy: jest.Mocked<Pick<ApiService, 'post' | 'get' | 'postForm'>>;
  let tokenSpy: jest.Mocked<Pick<TokenService, 'isTokenExpired' | 'getUserId' | 'getEmail' | 'getUserRole' | 'getCompanyId'>>;
  let authzSpy: jest.Mocked<Pick<AuthorizationService, 'refreshPermissions' | 'clear'>>;
  let routerSpy: jest.Mocked<Pick<Router, 'navigate'>>;

  beforeEach(() => {
    apiSpy   = { post: jest.fn(), get: jest.fn(), postForm: jest.fn() };
    tokenSpy = { isTokenExpired: jest.fn().mockReturnValue(false), getUserId: jest.fn().mockReturnValue(null), getEmail: jest.fn().mockReturnValue(null), getUserRole: jest.fn().mockReturnValue(null), getCompanyId: jest.fn().mockReturnValue(null) };
    authzSpy = { refreshPermissions: jest.fn(), clear: jest.fn() };
    routerSpy = { navigate: jest.fn() };
    localStorage.clear();

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: ApiService,           useValue: apiSpy },
        { provide: TokenService,         useValue: tokenSpy },
        { provide: AuthorizationService, useValue: authzSpy },
        { provide: Router,               useValue: routerSpy },
      ],
    });
    service = TestBed.inject(AuthService);
  });

  afterEach(() => { localStorage.clear(); jest.clearAllMocks(); });

  // ── login() ──────────────────────────────────────────────────────────────────

  describe('login()', () => {
    it('calls POST Auth/login with correct payload', (done) => {
      apiSpy.post.mockReturnValue(of(makeLoginResponse()));
      service.login('a@b.com', 'pw').subscribe(() => {
        expect(apiSpy.post).toHaveBeenCalledWith('Auth/login', { email: 'a@b.com', password: 'pw' });
        done();
      });
    });

    it('stores MT_token in localStorage', (done) => {
      apiSpy.post.mockReturnValue(of(makeLoginResponse()));
      service.login('a@b.com', 'pw').subscribe(() => {
        expect(localStorage.getItem('MT_token')).toBe(VALID_TOKEN);
        done();
      });
    });

    it('stores userId from top-level field', (done) => {
      apiSpy.post.mockReturnValue(of(makeLoginResponse({ userId: 'u-456' })));
      service.login('a@b.com', 'pw').subscribe(() => {
        expect(localStorage.getItem('userId')).toBe('u-456');
        done();
      });
    });

    it('stores userId from nested user.id shape', (done) => {
      apiSpy.post.mockReturnValue(of({ token: VALID_TOKEN, user: { id: 'nested-id', userType: 1, companyId: 5 } } as LoginResponse));
      service.login('a@b.com', 'pw').subscribe(() => {
        expect(localStorage.getItem('userId')).toBe('nested-id');
        done();
      });
    });

    it('stores userTypeId in localStorage', (done) => {
      apiSpy.post.mockReturnValue(of(makeLoginResponse({ userTypeId: 2 })));
      service.login('a@b.com', 'pw').subscribe(() => {
        expect(localStorage.getItem('userTypeId')).toBe('2');
        done();
      });
    });

    it('stores companyId in localStorage', (done) => {
      apiSpy.post.mockReturnValue(of(makeLoginResponse({ companyId: 7 })));
      service.login('a@b.com', 'pw').subscribe(() => {
        expect(localStorage.getItem('companyId')).toBe('7');
        done();
      });
    });

    it('calls authorizationService.refreshPermissions()', (done) => {
      apiSpy.post.mockReturnValue(of(makeLoginResponse()));
      service.login('a@b.com', 'pw').subscribe(() => {
        expect(authzSpy.refreshPermissions).toHaveBeenCalledTimes(1);
        done();
      });
    });

    it('emits true on isLoggedIn$ after login', (done) => {
      apiSpy.post.mockReturnValue(of(makeLoginResponse()));
      service.login('a@b.com', 'pw').subscribe(() => {
        service.isLoggedIn$.subscribe(val => { expect(val).toBe(true); done(); });
      });
    });

    it('[C1] throws when 200 response has no token field', (done) => {
      apiSpy.post.mockReturnValue(of({} as any));
      service.login('a@b.com', 'wrong').subscribe({
        error: (err) => {
          expect(err.message).toContain('Login failed');
          expect(localStorage.getItem('MT_token')).toBeNull();
          done();
        },
      });
    });

    it('[C1] uses response.message in error when present', (done) => {
      apiSpy.post.mockReturnValue(of({ message: 'Account suspended' } as any));
      service.login('a@b.com', 'pw').subscribe({
        error: (err) => { expect(err.message).toBe('Account suspended'); done(); },
      });
    });
  });

  // ── adminLogin() ──────────────────────────────────────────────────────────────

  describe('adminLogin()', () => {
    it('calls POST Admin/login — NOT Auth/login', (done) => {
      apiSpy.post.mockReturnValue(of(makeLoginResponse()));
      service.adminLogin('admin@test.com', 'pw').subscribe(() => {
        expect(apiSpy.post).toHaveBeenCalledWith('Admin/login', expect.any(Object));
        done();
      });
    });

    it('throws when response has no token', (done) => {
      apiSpy.post.mockReturnValue(of({ message: 'Unauthorized' } as any));
      service.adminLogin('admin@test.com', 'pw').subscribe({
        error: (err) => { expect(err.message).toBe('Unauthorized'); done(); },
      });
    });
  });

  // ── logout() ──────────────────────────────────────────────────────────────────

  describe('logout()', () => {
    beforeEach(() => {
      localStorage.setItem('MT_token', VALID_TOKEN);
      localStorage.setItem('userId', 'u-1');
      localStorage.setItem('userTypeId', '3');
      localStorage.setItem('companyId', '1');
    });

    it('clears MT_token', () => { service.logout(); expect(localStorage.getItem('MT_token')).toBeNull(); });
    it('clears userId', () => { service.logout(); expect(localStorage.getItem('userId')).toBeNull(); });
    it('clears userTypeId', () => { service.logout(); expect(localStorage.getItem('userTypeId')).toBeNull(); });
    it('clears companyId', () => { service.logout(); expect(localStorage.getItem('companyId')).toBeNull(); });
    it('calls authorizationService.clear()', () => { service.logout(); expect(authzSpy.clear).toHaveBeenCalledTimes(1); });
    it('emits false on isLoggedIn$', () => {
      let emitted: boolean | undefined;
      service.isLoggedIn$.subscribe(v => (emitted = v));
      service.logout();
      expect(emitted).toBe(false);
    });
    it('navigates to /login', () => { service.logout(); expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']); });
  });

  // ── isLoggedIn() ──────────────────────────────────────────────────────────────

  describe('isLoggedIn()', () => {
    it('returns false when no token', () => { expect(service.isLoggedIn()).toBe(false); });
    it('returns false when token is expired', () => {
      localStorage.setItem('MT_token', VALID_TOKEN);
      tokenSpy.isTokenExpired.mockReturnValue(true);
      expect(service.isLoggedIn()).toBe(false);
    });
    it('returns true when token valid and not expired', () => {
      localStorage.setItem('MT_token', VALID_TOKEN);
      tokenSpy.isTokenExpired.mockReturnValue(false);
      expect(service.isLoggedIn()).toBe(true);
    });
  });

  // ── getToken() / getUserTypeId() ─────────────────────────────────────────────

  describe('getToken()', () => {
    it('returns null when no token', () => { expect(service.getToken()).toBeNull(); });
    it('returns stored token', () => { localStorage.setItem('MT_token', VALID_TOKEN); expect(service.getToken()).toBe(VALID_TOKEN); });
  });

  describe('getUserTypeId()', () => {
    it('returns null when not stored', () => { expect(service.getUserTypeId()).toBeNull(); });
    it('returns numeric value', () => { localStorage.setItem('userTypeId', '2'); expect(service.getUserTypeId()).toBe(2); });
  });
});
