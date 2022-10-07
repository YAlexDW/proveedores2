import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from "./global";
import { User } from "../models/user"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url;
  public data: any;
  public user: any;
  public token: any;
  public identity: any;

  constructor(private http: HttpClient) {
    this.url = global.url;
    this.user = new User();
  }

  registerUser(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.url + 'user/register',data,{headers: headers });
    }
}
