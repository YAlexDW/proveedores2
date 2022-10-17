import { Injectable} from '@angular/core';
import { NgProbeToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../Models/user';
import { JwtResponseI } from '../Models/jwt-response';
import { tap } from 'rxjs';
import { Observable, BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common';
import { NavigationEnd } from '@angular/router';



@Injectable()
export class AuthService {
  private token : any;


  AUTH_SERVER: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) { }

  register(user:UserI):Observable <JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/register`,
    user).pipe(tap(
      (res: JwtResponseI)=>{
        if(res){
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn)
        }
      }
    ));
  }

  login(user:UserI):Observable <JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`,
    user).pipe(tap(
      (res: JwtResponseI)=>{
        if(res){
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn)
        }
      }
    ));
  }

  logout():void{
    this.token='';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token: string, expiresIn: string):void{
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken():string{
    if(!this.token){
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
}
