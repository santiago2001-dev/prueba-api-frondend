import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {JwtHelperService,JWT_OPTIONS} from'@auth0/angular-jwt'
import { AppComponent } from './app.component';

import {UsersComponent}from './components/cifrar/users.component'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
//petciones http
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrudComponent } from './components/crud/crud.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DescifrarComponent } from './components/descifrar/descifrar.component';

@NgModule({
  declarations: [
    AppComponent,

    UsersComponent,
     CrudComponent,
     AddProductComponent,
     DescifrarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [  {provide: JWT_OPTIONS,useValue:JWT_OPTIONS},
    JwtHelperService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
