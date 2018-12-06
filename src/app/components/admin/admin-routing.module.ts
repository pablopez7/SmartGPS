import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from 'src/app/components/admin/admin.component';
import { DashboardComponent } from 'src/app/components/admin/dashboard/dashboard.component';
import { UsersComponent } from 'src/app/components/admin/users/users.component';
import { ClientsComponent } from './clients/clients.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

import { LoginGuard } from '../../services/guards/login.guard';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [ LoginGuard ],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'vehicles', component: VehiclesComponent },
      { path: '', redirectTo: '/dashboard' , pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
