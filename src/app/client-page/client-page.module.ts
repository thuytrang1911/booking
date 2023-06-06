import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { SharedModule } from './shared/shared.module';
import { ClientPageRoutingModule } from './client-page-routing.module';
import { ContactComponent } from './contact/contact.component';
import { DetailDoctorComponent } from './detail-doctor/detail-doctor.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ 
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    DetailDoctorComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClientPageRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule 
  ],
  exports:[
    SharedModule
  ]
  
})
export class ClientPageModule { }
