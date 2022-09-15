import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { credenciales } from '../models/credenciales';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  UrlLogin = 'http://localhost:5000/api/login'
   token : string |any;

  constructor(
    private http : HttpClient,
    private jwtHelper : JwtHelperService
  ) { }


  login(credenciales : credenciales):Observable<any>{
    return this.http.post(this.UrlLogin,credenciales);

  }

ispermises():Boolean{
  this.token = localStorage.getItem('token');
  if(this.jwtHelper.isTokenExpired(this.token) ||  !localStorage.getItem('token')){
    return false

  }
  return true
}
}
