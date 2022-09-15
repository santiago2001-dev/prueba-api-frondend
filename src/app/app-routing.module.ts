import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard}  from './guards/login.guard'
import { UsersComponent } from './components/home/users.component';
const routes : Routes = [
  {path: 'login',component: LoginComponent},
  {path : 'inicio',component :UsersComponent,canActivate:[AuthGuard]}
  
]


@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
