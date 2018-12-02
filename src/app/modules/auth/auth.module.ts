import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from 'src/app/components/auth/auth.component';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { ForgotPasswordComponent } from 'src/app/components/auth/forgot-password/forgot-password.component';
import { PagenotfoundComponent } from 'src/app/components/auth/pagenotfound/pagenotfound.component';
import { RegisterComponent } from 'src/app/components/auth/register/register.component';


import { UserService } from 'src/app/services/user.service';

const Components = [
  AuthComponent,
  LoginComponent,
  ForgotPasswordComponent,
  PagenotfoundComponent,
  RegisterComponent
]

@NgModule({
  declarations: [Components],
  exports: [Components],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService]
})

export class AuthModule { }
