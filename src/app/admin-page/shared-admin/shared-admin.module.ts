import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';



@NgModule({
  declarations: [ 
    SidebarAdminComponent,
    HeaderAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarAdminComponent,
    HeaderAdminComponent
  ]
})
export class SharedAdminModule { }
