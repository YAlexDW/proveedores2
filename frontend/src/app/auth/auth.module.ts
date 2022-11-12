import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { TypeUserComponent } from './type-user/type-user.component';
import { MyUserComponent } from './my-user/my-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { DataComponent } from './data/data.component';
import { FooterComponent } from './footer/footer.component';
import { GCGComponent } from './gcg/gcg.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoadComponent } from './load/load.component';
import { LogoutComponent } from './logout/logout.component';
import { NewsComponent } from './news/news.component';
import { MyTestComponent } from './my-test/my-test.component';
import { GaleryComponent } from './galery/galery.component';
import { BoxComponent } from './box/box.component';
import { BannerComponent } from './banner/banner.component';
import { BotonComponent } from './boton/boton.component';
import { InicioComponent } from './inicio/inicio.component';
import { Header2Component } from './header2/header2.component';
import { StarComponent } from './star/star.component';



@NgModule({
  declarations: [
    AdminComponent,
    TypeUserComponent,
    MyUserComponent,
    LoginComponent,
    RegisterComponent,
    DataComponent,
    FooterComponent,
    GCGComponent,
    HeaderComponent,
    HomeComponent,
    LoadComponent,
    LogoutComponent,
    NewsComponent,
    MyTestComponent,
    GaleryComponent,
    BoxComponent,
    BannerComponent,
    BotonComponent,
    InicioComponent,
    Header2Component,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule
  ]
})
export class AuthModule { }
