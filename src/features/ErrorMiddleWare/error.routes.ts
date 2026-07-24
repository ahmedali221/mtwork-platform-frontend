import { Routes } from '@angular/router';

export const ERROR_ROUTES: Routes = [
  {
    path: '400',
    loadComponent: () =>
      import('./bad-request400/bad-request400').then(m => m.BadRequest400),
    title: 'Bad Request (400)'
  },
  {
    path: '403',
    loadComponent: () =>
      import('./forbidden403/forbidden403').then(m => m.Forbidden403),
    title: 'Forbidden (403)'
  },
  {
    path: '404-page',
    loadComponent: () =>
      import('./error404/error404').then(m => m.Error404),
    title: 'Page Not Found (404)'
  },
  {
    path: '404-result',
    loadComponent: () =>
      import('./result-not-found/result-not-found').then(m => m.ResultNotFound),
    title: 'Result Not Found (404)'
  },
  {
    path: '500',
    loadComponent: () =>
      import('./internal-server-error/internal-server-error').then(m => m.InternalServerError),
    title: 'Internal Server Error (500)'
  },
  {
    path: 'maintenance',
    loadComponent: () =>
      import('./maintance-page/maintance-page').then(m => m.MaintancePage),
    title: 'Maintenance Page'
  },
   {
    path: '106',
    loadComponent: () =>
      import('../../components/DashboardLayout/no-internet-connection/no-internet-connection').then(m => m.NoInternetConnectionComponent),
    title: 'Maintenance Page'
  }
];
