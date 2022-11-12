import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { FooterComponent } from './footer/footer.component';
import { GCGComponent } from './gcg/gcg.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoadComponent } from './load/load.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NewsComponent } from './news/news.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { TypeUserComponent } from './type-user/type-user.component';
import { MyUserComponent } from './my-user/my-user.component';
import { MyTestComponent } from './my-test/my-test.component';
import { GaleryComponent } from './galery/galery.component';
import { StarComponent } from './star/star.component';

const routes: Routes = [
  { path : 'admin' , component : AdminComponent},
  { path : 'data' , component : DataComponent},
  { path : 'load' , component : LoadComponent},
  { path : 'login' , component : LoginComponent },
  { path : 'myUser' ,  component : MyUserComponent},
  { path : 'register' , component : RegisterComponent},
  { path : 'myTest' , component: MyTestComponent},
  { path : 'star' , component: StarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
