import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ClientsComponent } from './clients/clients.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const Components = [
  AdminComponent,
  DashboardComponent,
  UsersComponent
]

@NgModule({
  declarations: [Components, ClientsComponent, VehiclesComponent],
  exports: [Components],
  imports: [
    BrowserModule,
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})

export class AdminModule { }
