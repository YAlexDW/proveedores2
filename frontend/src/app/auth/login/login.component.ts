import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserI } from 'src/app/models/user';
import { subscribeOn } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form):void{
    this.authService.login(form.value).subscribe(res => {
      this.router.navigateByUrl('/auth/admin')
    });
  }

}
