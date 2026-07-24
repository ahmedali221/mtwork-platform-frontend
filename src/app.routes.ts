import { Routes } from '@angular/router';
import { Landingcomponent } from './features/landingComponents/landingcomponent/landingcomponent';
import { ERROR_ROUTES } from './features/ErrorMiddleWare/error.routes';
import { HomePageComponent } from './components/HomeLayout/home-page/home-page';
import { DashboardRoutes } from './components/DashboardLayout/DashboardRoutes';
import { CreateAccountsRoutes } from './features/auth/CreateAccount/CreateAccountsRoutes';
import { authGuard } from './guards/auth.guard';

export const APP_ROUTES: Routes = [

  // ── Public landing routes (with navbar + footer) ──────────────────
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: '', component: Landingcomponent, title: 'MTWork Platform - Home' },
      { path: 'Home', component: Landingcomponent },
      { path: 'Blog', loadComponent: () => import('./features/landingComponents/blog-component/blog-component').then(m => m.BlogComponent) },
      { path: 'Services', loadComponent: () => import('./features/landingComponents/choosing-component/choosing-component').then(m => m.ChoosingComponent) },
    ]
  },

  // ── Auth routes (no navbar/footer) ────────────────────────────────
  { path: 'login', loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent), title: 'MTWork Platform' },
  { path: 'admin-login', loadComponent: () => import('./features/auth/admin-login/admin-login.component').then(m => m.AdminLoginComponent), title: 'Admin Login' },
  { path: 'forgot-password', loadComponent: () => import('./features/auth/forgot-password/forgot-password').then(m => m.ForgotPasswordComponent), title: 'Forgot Password' },
  { path: 'otp', loadComponent: () => import('./features/auth/otp/otp.component').then(m => m.OtpComponent), title: 'Verify OTP' },
  { path: 'register', loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent), title: 'Create Account' },

  // ── Protected dashboard (all authenticated users) ─────────────────
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./components/DashboardLayout/authenticated-layout/authenticated-layout')
      .then(m => m.AuthenticatedLayoutComponent),
    title: 'MTWork Platform - Dashboard',
    children: [
      ...ERROR_ROUTES,
      ...DashboardRoutes,
    ]
  },

  ...CreateAccountsRoutes,

  { path: '**', redirectTo: '404-page', pathMatch: 'full' }
];
