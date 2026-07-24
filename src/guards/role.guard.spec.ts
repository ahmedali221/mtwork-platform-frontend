import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { roleGuard } from './role.guard';
import { AuthService } from '../services/auth';
import { TokenService } from '../services/token.service';
import { AuthorizationService } from '../services/authorization.service';
import { UserRole } from '../models/roles.enum';

// ── Helpers ───────────────────────────────────────────────────────────────────

function makeRoute(data: Record<string, unknown> = {}): ActivatedRouteSnapshot {
  return { data } as unknown as ActivatedRouteSnapshot;
}

function runGuard(route: ActivatedRouteSnapshot) {
  return TestBed.runInInjectionContext(() =>
    roleGuard(route, {} as RouterStateSnapshot),
  );
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('roleGuard', () => {
  let tokenSpy:   jest.Mocked<Pick<TokenService,       'isTokenExpired' | 'getUserRole'>>;
  let authSpy:    jest.Mocked<Pick<AuthService,        'logout' | 'getUserTypeId'>>;
  let authzSpy:   jest.Mocked<Pick<AuthorizationService, 'hasAccess' | 'canAccessFeature'>>;
  let routerSpy:  jest.Mocked<Pick<Router,             'createUrlTree'>>;

  const loginTree:     {} = {};
  const dashboardTree: {} = {};

  beforeEach(() => {
    tokenSpy  = { isTokenExpired: jest.fn(), getUserRole: jest.fn() };
    authSpy   = { logout: jest.fn(), getUserTypeId: jest.fn() };
    authzSpy  = { hasAccess: jest.fn(), canAccessFeature: jest.fn() };
    routerSpy = {
      createUrlTree: jest.fn().mockImplementation((commands: string[]) =>
        commands[0] === '/login' ? loginTree : dashboardTree,
      ),
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: TokenService,         useValue: tokenSpy },
        { provide: AuthService,          useValue: authSpy },
        { provide: AuthorizationService, useValue: authzSpy },
        { provide: Router,               useValue: routerSpy },
      ],
    });
  });

  afterEach(() => jest.clearAllMocks());

  // ── Expired-token branch ──────────────────────────────────────────────────

  describe('when token is expired', () => {
    beforeEach(() => tokenSpy.isTokenExpired.mockReturnValue(true));

    it('calls authService.logout()', () => {
      runGuard(makeRoute());
      expect(authSpy.logout).toHaveBeenCalledTimes(1);
    });

    it('redirects to /login', () => {
      const result = runGuard(makeRoute());
      expect(routerSpy.createUrlTree).toHaveBeenCalledWith(['/login']);
      expect(result).toBe(loginTree);
    });

    it('does NOT redirect to /dashboard', () => {
      runGuard(makeRoute());
      expect(routerSpy.createUrlTree).not.toHaveBeenCalledWith(['/dashboard']);
    });
  });

  // ── Centralised policy (feature key) ────────────────────────────────────

  describe('centralised policy via data.feature', () => {
    beforeEach(() => tokenSpy.isTokenExpired.mockReturnValue(false));

    it('returns true when hasAccess() is true for a known feature', () => {
      authzSpy.hasAccess.mockReturnValue(true);
      expect(runGuard(makeRoute({ feature: 'contracts' }))).toBe(true);
    });

    it('returns /dashboard tree when hasAccess() is false', () => {
      authzSpy.hasAccess.mockReturnValue(false);
      const result = runGuard(makeRoute({ feature: 'contracts' }));
      expect(routerSpy.createUrlTree).toHaveBeenCalledWith(['/dashboard']);
      expect(result).toBe(dashboardTree);
    });

    it('does NOT call logout() on wrong role (policy gate only)', () => {
      authzSpy.hasAccess.mockReturnValue(false);
      runGuard(makeRoute({ feature: 'hr' }));
      expect(authSpy.logout).not.toHaveBeenCalled();
    });

    it('falls through to inline logic when feature is not a known AppFeature', () => {
      // 'unknownFeature' is not in FeatureAccess → isAppFeature returns false
      tokenSpy.getUserRole.mockReturnValue(UserRole.Business);
      // No roles declared → returns true (empty list guard)
      const result = runGuard(makeRoute({ feature: 'unknownFeature' }));
      expect(authzSpy.hasAccess).not.toHaveBeenCalled();
      expect(result).toBe(true);
    });
  });

  // ── Inline roles list ────────────────────────────────────────────────────

  describe('inline roles via data.roles', () => {
    beforeEach(() => {
      tokenSpy.isTokenExpired.mockReturnValue(false);
      tokenSpy.getUserRole.mockReturnValue(null);
      authSpy.getUserTypeId.mockReturnValue(null);
    });

    it('returns true when no roles declared on route (open route)', () => {
      expect(runGuard(makeRoute({ roles: [] }))).toBe(true);
    });

    it('returns true when route has no data at all', () => {
      expect(runGuard(makeRoute())).toBe(true);
    });

    it('allows matching role from JWT claim', () => {
      tokenSpy.getUserRole.mockReturnValue(UserRole.Business);
      const result = runGuard(makeRoute({ roles: [UserRole.Business, UserRole.Admin] }));
      expect(result).toBe(true);
    });

    it('redirects to /dashboard when JWT role does not match', () => {
      tokenSpy.getUserRole.mockReturnValue(UserRole.Employee);
      const result = runGuard(makeRoute({ roles: [UserRole.Business] }));
      expect(routerSpy.createUrlTree).toHaveBeenCalledWith(['/dashboard']);
      expect(result).toBe(dashboardTree);
    });

    it('falls back to userTypeId when JWT role claim is null — allowed', () => {
      tokenSpy.getUserRole.mockReturnValue(null);
      authSpy.getUserTypeId.mockReturnValue(3); // Business
      const result = runGuard(makeRoute({ roles: [UserRole.Business] }));
      expect(result).toBe(true);
    });

    it('falls back to userTypeId when JWT role claim is null — denied', () => {
      tokenSpy.getUserRole.mockReturnValue(null);
      authSpy.getUserTypeId.mockReturnValue(1); // Employee
      const result = runGuard(makeRoute({ roles: [UserRole.Business] }));
      expect(routerSpy.createUrlTree).toHaveBeenCalledWith(['/dashboard']);
      expect(result).toBe(dashboardTree);
    });

    it('redirects to /dashboard when both JWT role and userTypeId are null', () => {
      tokenSpy.getUserRole.mockReturnValue(null);
      authSpy.getUserTypeId.mockReturnValue(null);
      const result = runGuard(makeRoute({ roles: [UserRole.Business] }));
      expect(routerSpy.createUrlTree).toHaveBeenCalledWith(['/dashboard']);
      expect(result).toBe(dashboardTree);
    });

    it('does NOT call logout() on wrong role', () => {
      tokenSpy.getUserRole.mockReturnValue(UserRole.Employee);
      runGuard(makeRoute({ roles: [UserRole.Business] }));
      expect(authSpy.logout).not.toHaveBeenCalled();
    });
  });
});
