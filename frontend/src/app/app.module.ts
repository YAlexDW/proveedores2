import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './auth/home/home.component';
import { NewsComponent } from './auth/news/news.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { FooterComponent } from './auth/footer/footer.component';
import { HeaderComponent } from './auth/header/header.component';
import { LoadComponent } from './auth/load/load.component';
import { DataComponent } from './auth/data/data.component';
import { GCGComponent } from './auth/gcg/gcg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NewsComponent,
    LogoutComponent,
    FooterComponent,
    HeaderComponent,
    LoadComponent,
    DataComponent,
    GCGComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
