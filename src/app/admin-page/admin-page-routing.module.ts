import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { MainComponent } from './main/main.component';
import { StaffComponent } from './staff/staff.component';


const routes: Routes = [{path: '',component:AdminPageComponent,
children:[
 
  { path: 'main',component:MainComponent},
  { path: 'staff',component:StaffComponent},
 
]},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  
  ]
})
export class AdminPageRoutingModule { }
