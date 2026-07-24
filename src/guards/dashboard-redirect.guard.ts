import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { TokenService } from '../services/token.service';

export const dashboardRedirectGuard: CanActivateFn = () => {
  const authService  = inject(AuthService);
  const tokenService = inject(TokenService);
  const router       = inject(Router);

  if (!authService.isLoggedIn()) {
    return router.createUrlTree(['/login']);
  }

  // Primary: JWT role claim (most reliable)
  const role = tokenService.getUserRole();
  if (role === 'Admin') {
    return router.createUrlTree(['/dashboard/admin']);
  }
  if (role === 'Business') {
    return router.createUrlTree(['/dashboard/business']);
  }
  if (role === 'Employee') {
    return router.createUrlTree(['/dashboard/employee']);
  }
  if (role === 'Contractor') {
    return router.createUrlTree(['/dashboard/contractor']);
  }

  // Fallback: userTypeId stored from API response
  const userTypeId = authService.getUserTypeId();
  switch (userTypeId) {
    case 1: return router.createUrlTree(['/dashboard/employee']);
    case 2: return router.createUrlTree(['/dashboard/contractor']);
    case 3: return router.createUrlTree(['/dashboard/business']);
    default:
      return router.createUrlTree(['/login']);
  }
};
