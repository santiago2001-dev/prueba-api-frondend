import { Component, OnInit } from '@angular/core';
import { DefaultValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {credenciales} from 'src/app/models/credenciales';
import {LoginService} from 'src/app/services/login.service'
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup



  constructor(
    private router : Router,
    private fb : FormBuilder,
    private loginserv : LoginService

  ) {

    this.loginForm = this.fb.group({
      user:['',Validators.required],
      pass : ['',Validators.required]
    })
   }


   autenticacion(){
    if(this.loginForm.invalid){
      swal.fire({
        icon: 'error',
        title: 'los campos son obligatorios',
      
      })
    }else{
      const crenden : credenciales ={
        nombreUsuario : this.loginForm.get('user')?.value,
        contraseña : this.loginForm.get('pass')?.value
      }
      this.loginserv.login(crenden).subscribe(
        data=>{
        //envio de token a el local storage
          localStorage.setItem('token',data.token);
          this.router.navigate(['inicio'])
        },
        error=>{
          swal.fire({
            icon: 'error',
            title: 'Usuario o contraseña incorrectos',
          
          })
        }
      )
    }

   }
   get user(){
    return this.loginForm.get('user')
  }
  
  
  get pass(){
    return this.loginForm.get('pass')
  }
  ngOnInit(): void {
  }

}
