import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ClientPageComponent } from './client-page.component';
import { ContactComponent } from './contact/contact.component';
import { DetailDoctorComponent } from './detail-doctor/detail-doctor.component';


const routes: Routes = [{path: '',component:ClientPageComponent,
children:[
 
  { path: 'home',component:HomeComponent},
  { path: 'about',component:AboutComponent},
  { path: 'services',component:ServicesComponent},
  { path: 'contact',component:ContactComponent},
  { path: 'detail-doctor/:id',component:DetailDoctorComponent},
]},
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ClientPageRoutingModule { }
