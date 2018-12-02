import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { UserComponent } from './user/user.component';

const Components = [
    MainComponent,
    UserComponent
]

@NgModule({
  declarations: Components,
  exports: Components,
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})

export class MainModule { }
