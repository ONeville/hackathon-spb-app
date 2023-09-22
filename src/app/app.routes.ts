import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard-page/dashboard-page.component').then(
        (x) => x.DashboardPageComponent
      ),
  },
  {
    path: 'case-management',
    loadComponent: () =>
      import('./pages/case-management/case-management.component').then(
        (x) => x.CaseManagementComponent
      ),
  },
  {
    path: 'homeless-user',
    loadComponent: () =>
      import('./pages/homeless-user/homeless-user.component').then(
        (x) => x.HomelessUserComponent
      ),
  },
  {
    path: 'organization',
    loadComponent: () =>
      import('./pages/organization/organization.component').then(
        (x) => x.OrganizationComponent
      ),
  },
  {
    path: 'cabin-management',
    loadComponent: () =>
      import('./pages/cabins/cabins.component').then((x) => x.CabinsComponent),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
