import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth';

export const authGuard: CanActivateFn = () => {
  const router       = inject(Router);
  const tokenService = inject(TokenService);
  const authService  = inject(AuthService);
  const token        = authService.getToken();

  if (token && !tokenService.isTokenExpired()) return true;

  // Token expired or missing — full logout to clear all state
  if (token) authService.logout();

  return router.createUrlTree(['/login']);
};
