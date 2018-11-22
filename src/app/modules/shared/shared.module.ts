import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from 'src/app/components/shared/header/header.component';
import { SidenavComponent } from 'src/app/components/shared/sidenav/sidenav.component';
import { BreadcrumbsComponent } from 'src/app/components/shared/breadcrumbs/breadcrumbs.component';
import { FloatingButtonComponent } from 'src/app/components/shared/floating-button/floating-button.component';
import { TabnavComponent } from 'src/app/components/shared/tabnav/tabnav.component';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';

const Components = [
  HeaderComponent,
  SidenavComponent,
  TabnavComponent,
  BreadcrumbsComponent,
  FloatingButtonComponent,
  FooterComponent
]

@NgModule({
  declarations: Components,
  exports: Components,
  imports: [
    CommonModule
  ]
})

export class SharedModule { }
