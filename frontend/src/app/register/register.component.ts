import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {FormsModule, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { global } from "./../service/global";
import { User } from "../models/user"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public mensajeError : any;
  public mensajeExito: any;
  public user: any;
  public url: any;
  constructor( private userService: UserService) { 
    this.url = global.url;
    this.user = new User();
  }

  ngOnInit(): void {
  }
  registerUser(userForm: any) {
    if (userForm.valid) {
      this.userService
        .registerUser({

          name: userForm.value.name,
          nit: userForm.value.nit,
          billing_email: userForm.value.billing_email,
          phoneNumber: userForm.value.phoneNumber,
          adress: userForm.value.adress,
          identification: userForm.value.identification,
          password: userForm.value.password,
          contac_email: userForm.value.contac_email,
        })
        .subscribe(
          (response) => {
            this.mensajeExito = "usuario creado";
            console.log(response);
            this.user = new User();
            this.cerrarError();
          },
            (error) => {
            this.mensajeError = "Error al crear producto";
            console.log("Error ", error);
            this.user = new User();
            this.cerrarError();
          }
        );
    } else {
      this.mensajeError = "Favor llenar todos los datos";
      console.log("Favor llenar todos los datos");
  
      this.cerrarError();
      console.log("error en datos");
    }
  }

  cerrarError(){
    setTimeout(() => {
    this.mensajeError = '';
    this.mensajeExito = '';
    }, 2000);
  }
}
