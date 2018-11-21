import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from 'src/app/components/admin/admin.component';
import { DashboardComponent } from 'src/app/components/admin/dashboard/dashboard.component';
import { UsersComponent } from 'src/app/components/admin/users/users.component';


const Components = [
  AdminComponent,
  DashboardComponent,
  UsersComponent
]

@NgModule({
  declarations: [Components],
  exports: [Components],
  imports: [
    BrowserModule,
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})

export class AdminModule { }
