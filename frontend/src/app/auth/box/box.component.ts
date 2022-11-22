import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

import { subscribeOn } from 'rxjs';
import { UserI } from 'src/app/Models/user';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  [x: string]: any;

  constructor(AuthService:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLOgin(form: any):void{
    //console.log('login', form.value)
    //console.log('login', form.value)
    this['authService'].login(form.value).subscribe( (res: any) =>{
      this.router.navigateByUrl('/auth/myUser');
    });
  }

}
