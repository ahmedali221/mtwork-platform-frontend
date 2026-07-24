import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { authGuard } from './auth.guard';
import { AuthService } from '../services/auth';
import { TokenService } from '../services/token.service';

// ── Helpers ───────────────────────────────────────────────────────────────────

function runGuard() {
  return TestBed.runInInjectionContext(() => authGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot));
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('authGuard', () => {
  let authSpy: jest.Mocked<Pick<AuthService, 'getToken' | 'logout' | 'isLoggedIn'>>;
  let tokenSpy: jest.Mocked<Pick<TokenService, 'isTokenExpired'>>;
  let routerSpy: jest.Mocked<Pick<Router, 'createUrlTree'>>;

  const loginTree = {} as UrlTree;

  beforeEach(() => {
    authSpy  = { getToken: jest.fn(), logout: jest.fn(), isLoggedIn: jest.fn() };
    tokenSpy = { isTokenExpired: jest.fn() };
    routerSpy = { createUrlTree: jest.fn().mockReturnValue(loginTree) };

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService,  useValue: authSpy },
        { provide: TokenService, useValue: tokenSpy },
        { provide: Router,       useValue: routerSpy },
      ],
    });
  });

  afterEach(() => jest.clearAllMocks());

  it('allows navigation when token exists and is not expired', () => {
    authSpy.getToken.mockReturnValue('valid-token');
    tokenSpy.isTokenExpired.mockReturnValue(false);
    expect(runGuard()).toBe(true);
  });

  it('redirects to /login when no token', () => {
    authSpy.getToken.mockReturnValue(null);
    tokenSpy.isTokenExpired.mockReturnValue(false);
    const result = runGuard();
    expect(routerSpy.createUrlTree).toHaveBeenCalledWith(['/login']);
    expect(result).toBe(loginTree);
  });

  it('calls logout() and redirects when token is expired', () => {
    authSpy.getToken.mockReturnValue('expired-token');
    tokenSpy.isTokenExpired.mockReturnValue(true);
    const result = runGuard();
    expect(authSpy.logout).toHaveBeenCalledTimes(1);
    expect(routerSpy.createUrlTree).toHaveBeenCalledWith(['/login']);
    expect(result).toBe(loginTree);
  });

  it('does NOT call logout() when no token (nothing to clear)', () => {
    authSpy.getToken.mockReturnValue(null);
    tokenSpy.isTokenExpired.mockReturnValue(false);
    runGuard();
    expect(authSpy.logout).not.toHaveBeenCalled();
  });
});
