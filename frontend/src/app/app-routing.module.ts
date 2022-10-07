import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {Routes} from "@angular/router";

const routes: Routes = [
{path: '', redirectTo: './auth', pathMatch: 'full'},
{loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
