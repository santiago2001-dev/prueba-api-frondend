import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import swal from 'sweetalert2';
import {backendService} from 'src/app/services/backend';
import {mensaje} from 'src/app/models/mensaje'
@Component({
  selector: 'app-descifrar',
  templateUrl: './descifrar.component.html',
  styleUrls: ['./descifrar.component.css']
})
export class DescifrarComponent implements OnInit {
  mensajeForm : FormGroup
  mensajeEncriptado = ''
  constructor(
    private router : Router,
    private fb : FormBuilder,
    private serv : backendService
  ) { 
    this.mensajeForm = this.fb.group({
      frase : ['',Validators.required], 
      clave : ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  descifrarMensaje(){
    if(this.mensajeForm.invalid){
 
      swal.fire({
        icon: 'error',
        title: 'los campos son obligatorios',
      
      })
  }else{
    const Mensaje : mensaje = {
      clave : this.mensajeForm.get('clave')?.value,
      frase : this.mensajeForm.get('frase')?.value
    }

    this.serv.descrifrar(Mensaje).subscribe(
      data=>{
        this.mensajeEncriptado = data
        swal.fire({
          position: 'center',
          icon: 'success',
          title: `frase : ${this.mensajeEncriptado}`,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      },error=>{
     


      }
    )

  }

  
}
}
