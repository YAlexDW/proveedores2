import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule} from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LogOutComponent } from './log-out/log-out.component';
import { AuthService } from '../services/auth.service';
import { Type1Component } from './type1/type1.component';
import { Type2Component } from './type2/type2.component';
import { Type3Component } from './type3/type3.component';
import { DataComponent } from './data/data.component';
import { MyUserComponent } from './my-user/my-user.component';
import { UsersComponent } from './users/users.component';
import { NewsComponent } from './news/news.component';
import { Login2Component } from './login2/login2.component';



@NgModule({
  declarations: [RegisterComponent,  HomeComponent, AdminComponent, LogOutComponent, Type1Component, Type2Component, Type3Component, DataComponent, MyUserComponent, UsersComponent, NewsComponent, Login2Component],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule
  ]

})
export class AuthModule { }
