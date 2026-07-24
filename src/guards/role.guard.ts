import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth';
import { AuthorizationService } from '../services/authorization.service';
import { UserRole } from '../models/roles.enum';
import { isAppFeature } from '../config/authorization.policy';

/** Maps numeric userTypeId (from API) to UserRole string (from JWT) */
const USER_TYPE_ROLE_MAP: Record<number, UserRole> = {
  1: UserRole.Employee,
  2: UserRole.Contractor,
  3: UserRole.Business,
};

/**
 * Route-level role/feature gate.
 *
 * Two declarative shapes accepted on the route's `data`:
 *
 *   1. Centralised policy (preferred):
 *        data: { feature: 'contracts' }
 *      Looks the role list up in `FeatureAccess` (authorization.policy.ts).
 *
 *   2. Inline list (legacy / one-off):
 *        data: { roles: [UserRole.Business, UserRole.Admin] }
 *
 * Behaviour:
 *   - Token expired      → /login (silent logout).
 *   - Wrong role         → /dashboard/403 (NO logout).
 *   - Allowed            → true.
 */
export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router        = inject(Router);
  const tokenService  = inject(TokenService);
  const authService   = inject(AuthService);
  const authorization = inject(AuthorizationService);

  // Token expired or missing → full logout then go to login
  if (tokenService.isTokenExpired()) {
    authService.logout();
    return router.createUrlTree(['/login']);
  }

  // ── Centralised policy (preferred) ─────────────────────────────
  const feature = route.data?.['feature'];
  if (typeof feature === 'string' && isAppFeature(feature)) {
    return authorization.hasAccess(feature)
      ? true
      : router.createUrlTree(['/dashboard']);   // forbidden → safe redirect, NO logout
  }

  // ── Inline list (legacy) ───────────────────────────────────────
  const allowedRoles: UserRole[] = route.data?.['roles'] ?? [];
  if (allowedRoles.length === 0) return true;

  // Try JWT role claim first; fall back to userTypeId from localStorage
  let userRole = tokenService.getUserRole() as UserRole | null;
  if (!userRole) {
    const typeId = authService.getUserTypeId();
    if (typeId != null) userRole = USER_TYPE_ROLE_MAP[typeId] ?? null;
  }

  if (userRole && allowedRoles.includes(userRole)) {
    return true;
  }

  // Wrong role → safe redirect to /dashboard, NO logout
  return router.createUrlTree(['/dashboard']);
};
