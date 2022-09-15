import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from '../services/login.service'
import swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
  private authService : LoginService,
  private router : Router
  ){}

  
  canActivate():boolean{
    if(!this.authService.ispermises()){
     
      swal.fire({
        icon: 'error',
        title: 'Usuario o contraseña incorrectos',
      
      })
      this.router.navigate(['login'])
      return false
    }
  
    return true;
}
  }
