import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthComponent } from './components/auth/auth.component';
import { BreadcrumbsComponent } from './components/shared/breadcrumbs/breadcrumbs.component';
import { FloatingButtonComponent } from './components/shared/floating-button/floating-button.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { PagenotfoundComponent } from './components/auth/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { UsersComponent } from './components/admin/users/users.component';
import { UserComponent } from './components/main/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdminComponent,
    AuthComponent,
    BreadcrumbsComponent,
    FloatingButtonComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    LoginComponent,
    ForgotPasswordComponent,
    PagenotfoundComponent,
    RegisterComponent,
    DashboardComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
