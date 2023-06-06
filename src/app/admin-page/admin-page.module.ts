import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { StaffComponent } from './staff/staff.component';
import { SharedAdminModule } from './shared-admin/shared-admin.module';
import { AdminPageRoutingModule } from './admin-page-routing.module';



@NgModule({
  declarations: [
    MainComponent,
    StaffComponent
  ],
  imports: [
    CommonModule,
    SharedAdminModule,
    AdminPageRoutingModule
  ],
  exports:[
    SharedAdminModule
  ]
})
export class AdminPageModule { }
