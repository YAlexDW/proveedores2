import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationEnd } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { Type1Component } from './type1/type1.component';
import { Type2Component } from './type2/type2.component';
import { Type3Component } from './type3/type3.component';
import { MyUserComponent } from './my-user/my-user.component';
import { NewsComponent } from './news/news.component';
import { Login2Component } from './login2/login2.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path : 'register' , component: RegisterComponent},
  { path : 'home' , component: HomeComponent},
  { path : 'admin' , component: AdminComponent},
  { path : 'type1' , component: Type1Component},
  { path : 'type2' , component: Type2Component},
  { path : 'type3', component: Type3Component},
  { path : 'myUser', component: MyUserComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'news' , component: NewsComponent},
  { path : 'login2' , component : Login2Component}
  { path : 'users' , component : UsersComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
