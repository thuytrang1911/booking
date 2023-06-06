import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { ClientPageModule } from './client-page/client-page.module';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminPageModule } from './admin-page/admin-page.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
//import { PreloadAllModules, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ClientPageComponent,
    AdminPageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientPageModule,
   AdminPageModule,
   HttpClientModule,
   BrowserAnimationsModule,
   ReactiveFormsModule,
   
  // RouterModule.forRoot(AppRoute,{preloadingStrategy: PreloadAllModules}),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
