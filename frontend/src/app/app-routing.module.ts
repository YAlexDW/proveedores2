import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: './auth/home', pathMatch: 'full'},
  { path: 'home' , loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)},
  { path: 'auth' , loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
