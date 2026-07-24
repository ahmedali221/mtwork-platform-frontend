import { Routes } from '@angular/router';
import { BusinessAccountRoutes } from './BusinessAccountRoutes';

// ── CONTRACTOR flow ONLY (4 steps). Business is fully isolated in
//    BusinessAccountRoutes — do NOT add business paths here. ──────────
export const CreateAccountsRoutes: Routes = [
  {
    path: 'CreateContractorAccount',
    loadComponent: () =>
      import('../CreateAccount/create-account-layout/create-account-layout')
        .then(m => m.CreateAccountLayout),
    title: 'CreateAccount',
    children: [
      { path: '', redirectTo: 'basic-info', pathMatch: 'full' },
      {
        path: 'basic-info',
        loadComponent: () =>
          import('../CreateAccount/basic-info-component/basic-info-component')
            .then(m => m.BasicInfoComponent),
      },
      {
        path: 'edu-qual',
        loadComponent: () =>
          import('../CreateAccount/education-equlaification-component/education-equlaification-component')
            .then(m => m.EducationEqulaificationComponent),
      },
      {
        path: 'address',
        loadComponent: () =>
          import('../CreateAccount/address-component/address-component')
            .then(m => m.AddressComponent),
      },
      {
        path: 'attachments',
        loadComponent: () =>
          import('../CreateAccount/attachment-component/attachment-component')
            .then(m => m.AttachmentComponent),
      }
    ]
  },

  // Business flow lives in its own isolated route group.
  ...BusinessAccountRoutes,
];
