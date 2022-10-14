import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule} from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LogOutComponent } from './log-out/log-out.component';
import { AuthService } from '../services/auth.service';
import { Type1Component } from './type1/type1.component';
import { Type2Component } from './type2/type2.component';
import { Type3Component } from './type3/type3.component';
import { DataComponent } from './data/data.component';
import { MyUserComponent } from './my-user/my-user.component';
import { NewsComponent } from './news/news.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [RegisterComponent, LoginComponent, HomeComponent, AdminComponent, LogOutComponent, Type1Component, Type2Component, Type3Component, DataComponent, MyUserComponent, NewsComponent, UsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule
  ]

})
export class AuthModule { }
