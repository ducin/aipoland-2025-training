import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: '',
    loadComponent: () => import('./layout.component').then(m => m.LayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'cargo-management',
        loadComponent: () => import('./features/cargo-management.component').then(m => m.CargoManagementComponent)
      },
      {
        path: 'cargo-management/:id',
        loadComponent: () => import('./features/cargo-detail.component').then(m => m.CargoDetailComponent)
      },
      {

        path: 'warehouse-operations',
        loadComponent: () => import('./features/warehouse-operations.component').then(m => m.WarehouseOperationsComponent)
      },
      {
        path: 'storage-requests',
        loadComponent: () => import('./features/storage-requests.component').then(m => m.StorageRequestsComponent)
      },
      {
        path: 'storage-requests/:id',
        loadComponent: () => import('./features/storage-request-detail.component').then(m => m.StorageRequestDetailComponent)
      },
      {
        path: 'reservations',
        loadComponent: () => import('./features/reservations.component').then(m => m.ReservationsComponent)
      },
      {
        path: 'warehouse-map',
        loadComponent: () => import('./features/warehouse-map.component').then(m => m.WarehouseMapComponent)
      },
      {
        path: 'dock-management',
        loadComponent: () => import('./features/dock-management.component').then(m => m.DockManagementComponent)
      },
      {
        path: 'dock-management/:id',
        loadComponent: () => import('./features/dock-detail.component').then(m => m.DockDetailComponent)
      },
      {
        path: 'billing-payments',
        loadComponent: () => import('./features/billing-payments.component').then(m => m.BillingPaymentsComponent)
      },
      {
        path: 'billing-payments/invoice/:id',
        loadComponent: () => import('./features/invoice-detail.component').then(m => m.InvoiceDetailComponent)
      },
      {
        path: 'contractors',
        loadComponent: () => import('./features/contractors.component').then(m => m.ContractorsComponent)
      },
      {
        path: 'contractors/:id',
        loadComponent: () => import('./features/contractor-detail.component').then(m => m.ContractorDetailComponent)
      },
      {
        path: 'employees',
        loadComponent: () => import('./features/employees.component').then(m => m.EmployeesComponent),
        data: { role: 'Warehouse Manager' }
      },
      {
        path: 'employees/:id',
        loadComponent: () => import('./features/employee-detail.component').then(m => m.EmployeeDetailComponent),
        data: { role: 'Warehouse Manager' }
      },

      {
        path: 'role-management',
        loadComponent: () => import('./features/role-management.component').then(m => m.RoleManagementComponent),
        data: { role: 'Warehouse Manager' }
      },
      {
        path: 'settings',
        loadComponent: () => import('./features/settings.component').then(m => m.SettingsComponent)
      },
      {
        path: 'reports',
        loadComponent: () => import('./features/reports.component').then(m => m.ReportsComponent),
        data: { role: 'Warehouse Manager' }
      },
      // Legacy route redirect
      {
        path: 'inventory',
        redirectTo: '/cargo-management',
        pathMatch: 'full'
      },
      // Legacy users route redirect
      {
        path: 'users',
        redirectTo: '/employees',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];