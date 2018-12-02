import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

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
