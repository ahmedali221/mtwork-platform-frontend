import { Routes } from '@angular/router';
import { roleGuard } from '../../guards/role.guard';
import { dashboardRedirectGuard } from '../../guards/dashboard-redirect.guard';
import { permissionGuard } from '../../guards/permission.guard';
import { UserRole } from '../../models/roles.enum';
import { FeatureKey } from '../../models/feature-keys.enum';

export const DashboardRoutes: Routes = [
  {
    path: '',
    canActivate: [dashboardRedirectGuard],
    loadComponent: () =>
      import('../../features/dashboard/business-dashboard/business-dashboard').then(m => m.BusinessDashboardComponent),
  },
  {
    path: 'admin',
    canActivate: [roleGuard],
    data: { roles: [UserRole.Admin] },
    loadComponent: () =>
      import('../../features/dashboard/admin-dashboard/admin-dashboard').then(m => m.AdminDashboardComponent),
    title: 'Admin Dashboard'
  },
  {
    path: 'business',
    canActivate: [roleGuard],
    data: { roles: [UserRole.Business, UserRole.Admin] },
    loadComponent: () =>
      import('../../features/dashboard/business-dashboard/business-dashboard').then(m => m.BusinessDashboardComponent),
    title: 'Business Dashboard'
  },
  {
    path: 'employee',
    canActivate: [roleGuard],
    data: { roles: [UserRole.Employee] },
    loadComponent: () =>
      import('../../features/dashboard/employee-dashboard/employee-dashboard').then(m => m.EmployeeDashboardComponent),
    title: 'Employee Dashboard'
  },
  {
    path: 'contractor',
    canActivate: [roleGuard],
    data: { roles: [UserRole.Contractor] },
    loadComponent: () =>
      import('../../features/dashboard/contractor-dashboard/contractor-dashboard').then(m => m.ContractorDashboardComponent),
    title: 'Contractor Dashboard'
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('../DashboardLayout/Projects/all-projects-component/all-projects-component').then(m => m.AllProjectsComponent),
    title: 'Projects'
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('../DashboardLayout/Projects/tichpro-project-component/tichpro-project-component').then(m => m.TichproProjectComponent),
    title: 'Project Tasks'
  },
  {
    path: 'teams',
    loadComponent: () =>
      import('../DashboardLayout/SidebarComponents/TeamsTabComponents/teams-list/teams-list').then(m => m.TeamsListComponent),
    title: 'Teams'
  },
  {
    // FeatureAccess.attendance → [Admin, Business, Employee]
    path: 'genralattendance',
    canActivate: [roleGuard],
    data: { feature: 'attendance' },
    loadComponent: () =>
      import('../DashboardLayout/SidebarComponents/general-attendance/general-attendance').then(m => m.GeneralAttendanceComponent),
    title: 'General Attendance'
  },
  {
    // Centralised role policy lives in src/config/authorization.policy.ts
    //   FeatureAccess.contracts → [Admin, Business]
    path: 'contracts',
    canActivate: [roleGuard],
    data: { feature: 'contracts' },
    loadComponent: () =>
      import('../../components/DashboardLayout/Contract/contract-list/contract-list').then(m => m.ContractListComponent),
    title: 'Contracts'
  },
  {
    path: 'CreateFixedSalaryContract',
    canActivate: [roleGuard],
    data: { feature: 'contracts' },
    loadComponent: () =>
      import('../../components/DashboardLayout/Contract/wizard/create-fixed-salary/create-fixed-salary').then(m => m.CreateFixedSalaryComponent),
    title: 'Create Fixed Salary Contract'
  },
  {
    path: 'CreatePaytaskContact',
    canActivate: [roleGuard],
    data: { feature: 'contracts' },
    loadComponent: () =>
      import('../../components/DashboardLayout/Contract/wizard/create-pay-by-task/create-pay-by-task').then(m => m.CreatePayByTaskComponent),
    title: 'Create Pay By Task Contract'
  },
  {
    path: 'CreateEmployeeContract',
    canActivate: [roleGuard],
    data: { feature: 'contracts' },
    loadComponent: () =>
      import('../../components/DashboardLayout/Contract/wizard/create-employee/create-employee').then(m => m.CreateEmployeeComponent),
    title: 'Create Employee Contract'
  },
  {
    path: 'CreateMileStoneContract',
    canActivate: [roleGuard],
    data: { feature: 'contracts' },
    loadComponent: () =>
      import('../../components/DashboardLayout/Contract/wizard/create-milestone/create-milestone').then(m => m.CreateMilestoneComponent),
    title: 'Create Milestone Contract'
  },
  {
    path: 'typecontract',
    canActivate: [roleGuard],
    data: { feature: 'contracts' },
    loadComponent: () =>
      import('../../components/DashboardLayout/Contract/contract-list/CreateFixedSalaryContract/choose-contractype/choose-contractype').then(m => m.ChooseContractype),
    title: 'Choose Contract Type'
  },
  {
    path: 'typepeople',
    loadComponent: () =>
      import('../../components/DashboardLayout/SidebarComponents/choose-people-type/choose-people-type').then(m => m.ChoosePeopleType),
    title: 'Choose People Type'
  },
  {
    // FeatureAccess.salary → [Employee, Business]
    path: 'salary',
    canActivate: [roleGuard],
    data: { feature: 'salary' },
    loadComponent: () =>
      import('../DashboardLayout/Salary/salary-page/salary-page').then(m => m.SalaryPageComponent),
    title: 'Salary'
  },
  {
    path: 'payments',
    loadComponent: () =>
      import('../DashboardLayout/Payments/balance-recharge/balance-recharge').then(m => m.BalanceRechargeComponent),
    title: 'Payments'
  },
  {
    path: 'payments/return',
    loadComponent: () =>
      import('../DashboardLayout/Payments/payment-return/payment-return').then(m => m.PaymentReturnComponent),
    title: 'Payment Return'
  },
  {
    path: 'subscription',
    canActivate: [roleGuard],
    data: { roles: [UserRole.Business] },
    loadComponent: () =>
      import('../DashboardLayout/Payments/subscription-pricing/subscription-pricing').then(m => m.SubscriptionPricingComponent),
    title: 'Subscription'
  },
  {
    // FeatureAccess.companyProfile → [Admin, Business]
    path: 'company-profile',
    canActivate: [roleGuard],
    data: { feature: 'companyProfile' },
    loadComponent: () =>
      import('../DashboardLayout/Company/company-profile/company-profile').then(m => m.CompanyProfileComponent),
    title: 'Company Profile'
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('../../features/profile/user-profile/user-profile').then(m => m.UserProfileComponent),
    title: 'My Profile'
  },
  {
    // FeatureAccess.withdrawals → [Employee, Business]
    path: 'withdrawals',
    canActivate: [roleGuard],
    data: { feature: 'withdrawals' },
    loadComponent: () =>
      import('../../features/withdraw/withdrawals-page/withdrawals-page').then(m => m.WithdrawalsPageComponent),
    title: 'Withdrawals'
  },
  {
    path: 'task-management',
    loadComponent: () =>
      import('../../features/tasks/task-management/task-management').then(m => m.TaskManagementComponent),
    title: 'Task Management'
  },
  {
    // FeatureAccess.hr → [Admin, Business]
    path: 'hr',
    canActivate: [roleGuard],
    data: { feature: 'hr' },
    loadComponent: () =>
      import('../DashboardLayout/HR/hr-list/hr-list').then(m => m.HrListComponent),
    title: 'HR'
  },
  {
    // FeatureAccess.employees → [Business] (own-company directory, see authorization.policy.ts)
    path: 'employees',
    canActivate: [roleGuard],
    data: { feature: 'employees' },
    loadComponent: () =>
      import('../DashboardLayout/Employees/employees-list/employees-list').then(m => m.EmployeesListComponent),
    title: 'Employees'
  },
  {
    path: 'meetings',
    loadComponent: () =>
      import('../DashboardLayout/SidebarComponents/MeetingsTabComponents/meetings-list/meetings-list').then(m => m.MeetingsListComponent),
    title: 'Meetings'
  },
  {
    // FeatureAccess.attendance → [Admin, Business, Employee]
    path: 'attendance',
    canActivate: [roleGuard],
    data: { feature: 'attendance' },
    loadComponent: () =>
      import('../DashboardLayout/SidebarComponents/attendance-details/attendance-details').then(m => m.AttendanceDetailsComponent),
    title: 'Attendance'
  },
  {
    path: 'reports',
    canActivate: [permissionGuard],
    data: { feature: FeatureKey.ViewReports },
    loadComponent: () =>
      import('../../features/dashboard/reports/report-list').then(m => m.ReportListComponent),
    title: 'Reports'
  },
  {
    // FeatureAccess.requests → [Employee, Contractor, Business]
    path: 'requests',
    canActivate: [roleGuard],
    data: { feature: 'requests' },
    loadComponent: () =>
      import('./Requests/requests-list/requests-list').then(m => m.RequestsListComponent),
    title: 'Requests'
  },
  {
    path: 'drafts',
    redirectTo: '/dashboard/contracts',
    pathMatch: 'full'
  },

  // ── Admin-only routes ──────────────────────────────────────────
  {
    path: 'users',
    canActivate: [roleGuard],
    data: { roles: [UserRole.Admin] },
    loadComponent: () =>
      import('./Admin/user-management/user-management').then(m => m.UserManagementComponent),
    title: 'User Management'
  },
  {
    path: 'companies',
    canActivate: [roleGuard],
    data: { roles: [UserRole.Admin] },
    loadComponent: () =>
      import('./Admin/company-management/company-management').then(m => m.CompanyManagementComponent),
    title: 'Company Management'
  },
  {
    path: 'settings',
    canActivate: [roleGuard],
    data: { roles: [UserRole.Admin] },
    loadComponent: () =>
      import('./Admin/settings/settings').then(m => m.AdminSettingsComponent),
    title: 'Settings'
  },
  {
    path: 'permissions',
    canActivate: [roleGuard],
    data: { roles: [UserRole.Admin] },
    loadComponent: () =>
      import('./Admin/permissions/permissions').then(m => m.PermissionsComponent),
    title: 'Permissions'
  },
  {
    path: 'withdraw-admin',
    canActivate: [roleGuard],
    data: { roles: [UserRole.Admin] },
    loadComponent: () =>
      import('../../features/withdraw/admin-withdrawals/admin-withdrawals').then(m => m.AdminWithdrawalsComponent),
    title: 'Admin Withdrawals'
  },

  // User-facing modules (mock-only where backend is missing).
  {
    path: 'messages',
    loadComponent: () =>
      import('../../features/messages/messages-page/messages-page').then(m => m.MessagesPageComponent),
    title: 'Messages'
  },
  {
    path: 'notifications',
    loadComponent: () =>
      import('../../features/notifications/notifications-page/notifications-page').then(m => m.NotificationsPageComponent),
    title: 'Notifications'
  },
  {
    // User-facing settings - distinct from admin-only `/settings` route above.
    path: 'account-settings',
    loadComponent: () =>
      import('../../features/settings/account-settings/account-settings').then(m => m.AccountSettingsComponent),
    title: 'Account Settings'
  },
];
