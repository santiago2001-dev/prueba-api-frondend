import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './components/cifrar/users.component';
import { CrudComponent } from './components/crud/crud.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DescifrarComponent } from './components/descifrar/descifrar.component';
const routes : Routes = [

  {path : '',component :CrudComponent},
  {path: 'addProduct',component : AddProductComponent},
  {path : 'updateProduct/:id',component : AddProductComponent},
  {path: 'encriptar',component: UsersComponent},
  {path: 'descifrar',component: DescifrarComponent}
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
