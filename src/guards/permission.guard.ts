import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth';
import { AuthorizationService } from '../services/authorization.service';
import { FeatureKey } from '../models/feature-keys.enum';

/**
 * Route-level permission gate, complements the existing `roleGuard`.
 *
 * Usage on a route:
 *   {
 *     path: 'salary',
 *     canActivate: [permissionGuard],
 *     data: { feature: FeatureKey.PaySalary },
 *     loadComponent: () => import('...').then(m => m.SalaryPage),
 *   }
 *
 * Behavior:
 *   - No `data.feature` → allow (use roleGuard or no guard for those).
 *   - Token expired      → /login.
 *   - Permission missing → /dashboard/403  (matches interceptor 403 path).
 */
export const permissionGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router       = inject(Router);
  const tokenService = inject(TokenService);
  const authService  = inject(AuthService);
  const auth         = inject(AuthorizationService);

  if (tokenService.isTokenExpired()) {
    authService.logout();
    return router.createUrlTree(['/login']);
  }

  const feature = route.data?.['feature'] as FeatureKey | undefined;

  // No feature declared on the route → nothing to enforce here.
  if (!feature) return true;

  if (auth.canAccessFeature(feature)) return true;

  return router.createUrlTree(['/dashboard/403']);
};
