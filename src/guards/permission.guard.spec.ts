import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { permissionGuard } from './permission.guard';
import { AuthService } from '../services/auth';
import { TokenService } from '../services/token.service';
import { AuthorizationService } from '../services/authorization.service';
import { FeatureKey } from '../models/feature-keys.enum';

// ── Helpers ───────────────────────────────────────────────────────────────────

function makeRoute(data: Record<string, unknown> = {}): ActivatedRouteSnapshot {
  return { data } as unknown as ActivatedRouteSnapshot;
}

function runGuard(route: ActivatedRouteSnapshot) {
  return TestBed.runInInjectionContext(() =>
    permissionGuard(route, {} as RouterStateSnapshot),
  );
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('permissionGuard', () => {
  let tokenSpy:  jest.Mocked<Pick<TokenService,         'isTokenExpired'>>;
  let authSpy:   jest.Mocked<Pick<AuthService,          'logout'>>;
  let authzSpy:  jest.Mocked<Pick<AuthorizationService, 'canAccessFeature'>>;
  let routerSpy: jest.Mocked<Pick<Router,               'createUrlTree'>>;

  const loginTree:      {} = {};
  const forbidden403Tree: {} = {};

  beforeEach(() => {
    tokenSpy  = { isTokenExpired: jest.fn() };
    authSpy   = { logout: jest.fn() };
    authzSpy  = { canAccessFeature: jest.fn() };
    routerSpy = {
      createUrlTree: jest.fn().mockImplementation((commands: string[]) =>
        commands[0] === '/login' ? loginTree : forbidden403Tree,
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
      runGuard(makeRoute({ feature: FeatureKey.PaySalary }));
      expect(authSpy.logout).toHaveBeenCalledTimes(1);
    });

    it('redirects to /login', () => {
      const result = runGuard(makeRoute({ feature: FeatureKey.PaySalary }));
      expect(routerSpy.createUrlTree).toHaveBeenCalledWith(['/login']);
      expect(result).toBe(loginTree);
    });

    it('short-circuits before checking permissions', () => {
      runGuard(makeRoute({ feature: FeatureKey.CreateContract }));
      expect(authzSpy.canAccessFeature).not.toHaveBeenCalled();
    });
  });

  // ── No feature on route ───────────────────────────────────────────────────

  describe('when no feature is declared on route', () => {
    beforeEach(() => tokenSpy.isTokenExpired.mockReturnValue(false));

    it('returns true when data has no feature key', () => {
      expect(runGuard(makeRoute())).toBe(true);
    });

    it('returns true when feature is undefined', () => {
      expect(runGuard(makeRoute({ feature: undefined }))).toBe(true);
    });

    it('does NOT call canAccessFeature when no feature declared', () => {
      runGuard(makeRoute());
      expect(authzSpy.canAccessFeature).not.toHaveBeenCalled();
    });
  });

  // ── Permission gate ───────────────────────────────────────────────────────

  describe('when feature is declared and token is valid', () => {
    beforeEach(() => tokenSpy.isTokenExpired.mockReturnValue(false));

    it('returns true when canAccessFeature() returns true', () => {
      authzSpy.canAccessFeature.mockReturnValue(true);
      const result = runGuard(makeRoute({ feature: FeatureKey.CreateContract }));
      expect(result).toBe(true);
    });

    it('calls canAccessFeature with the correct FeatureKey', () => {
      authzSpy.canAccessFeature.mockReturnValue(true);
      runGuard(makeRoute({ feature: FeatureKey.PaySalary }));
      expect(authzSpy.canAccessFeature).toHaveBeenCalledWith(FeatureKey.PaySalary);
    });

    it('redirects to /dashboard/403 when canAccessFeature() returns false', () => {
      authzSpy.canAccessFeature.mockReturnValue(false);
      const result = runGuard(makeRoute({ feature: FeatureKey.DeleteContract }));
      expect(routerSpy.createUrlTree).toHaveBeenCalledWith(['/dashboard/403']);
      expect(result).toBe(forbidden403Tree);
    });

    it('does NOT call logout() on permission denial (no token issue)', () => {
      authzSpy.canAccessFeature.mockReturnValue(false);
      runGuard(makeRoute({ feature: FeatureKey.ApproveWithdraw }));
      expect(authSpy.logout).not.toHaveBeenCalled();
    });

    it('does NOT redirect to /login on permission denial', () => {
      authzSpy.canAccessFeature.mockReturnValue(false);
      runGuard(makeRoute({ feature: FeatureKey.ViewReports }));
      expect(routerSpy.createUrlTree).not.toHaveBeenCalledWith(['/login']);
    });

    // Spot-check each FeatureKey variant hits the permission gate
    it.each([
      FeatureKey.CreateLeave,
      FeatureKey.ViewHRList,
      FeatureKey.ApproveLeave,
      FeatureKey.RequestWithdraw,
      FeatureKey.ViewReports,
    ])('enforces gate for FeatureKey.%s', (key) => {
      authzSpy.canAccessFeature.mockReturnValue(false);
      runGuard(makeRoute({ feature: key }));
      expect(authzSpy.canAccessFeature).toHaveBeenCalledWith(key);
    });
  });
});
