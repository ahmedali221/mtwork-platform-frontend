import { Routes } from '@angular/router';

// ── BUSINESS flow ONLY — fully isolated from the contractor flow. ───
//    3 steps: basic-info → authorized → attachments. NO education,
//    NO address. Dedicated business components (no shared step ownership
//    with contractor beyond the layout shell + leaf form widgets).
export const BusinessAccountRoutes: Routes = [
  {
    path: 'CreateBusinessAccount',
    loadComponent: () =>
      import('./create-account-layout/create-account-layout')
        .then(m => m.CreateAccountLayout),
    title: 'CreateAccount',
    children: [
      { path: '', redirectTo: 'basic-info', pathMatch: 'full' },
      {
        path: 'basic-info',
        loadComponent: () =>
          import('./business-basic-info-component/business-basic-info-component')
            .then(m => m.BusinessBasicInfoComponent),
      },
      {
        path: 'authorized',
        loadComponent: () =>
          import('./business-authorized-component/business-authorized-component')
            .then(m => m.BusinessAuthorizedComponent),
      },
      {
        path: 'attachments',
        loadComponent: () =>
          import('./business-attachment-component/business-attachment-component')
            .then(m => m.BusinessAttachmentComponent),
      },
    ]
  }
];
