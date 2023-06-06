import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [{path: '', loadChildren: () => import('./client-page/client-page.module').then((m) => m.ClientPageModule)},
                        {path: 'admin', loadChildren: () => import('./admin-page/admin-page.module').then((m) => m.AdminPageModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
