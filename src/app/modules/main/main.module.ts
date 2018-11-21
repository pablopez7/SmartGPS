import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from 'src/app/components/main/main.component';
import { UserComponent } from 'src/app/components/main/user/user.component';

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
