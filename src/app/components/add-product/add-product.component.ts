import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import {backendService} from 'src/app/services/backend'
import{producto} from 'src/app/models/productos'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm : FormGroup;
  Id  : String | null  ; 
Titulo = 'Insertar Enlace'
  constructor(
    private router: Router,
    private fb : FormBuilder,

    private serv : backendService,
    private aRouter  : ActivatedRoute  
  
  ) { 
    this.productForm= this.fb.group({
      id :[],
      codigo :['',Validators.required],
      descripcion : ['',Validators.required],
      imagen : ['',Validators.required],
      produtoParaLaVenta  : ['',Validators.required],
      porcentajeIva : ['',Validators.required]

    })
    this.Id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }


  addProduct(){
    if(this.productForm.invalid){
      swal.fire({
        icon: 'error',
        title: 'los campos son obligatorios',
      
      })

    }else{
      const Producto :producto = {
        id : this.productForm.get('id')?.value,
        codigo : this.productForm.get('codigo')?.value,
        descripcion : this.productForm.get('descripcion')?.value,
      imagen : this.productForm.get('imagen')?.value,
      produtoParaLaVenta : this.productForm.get('produtoParaLaVenta')?.value,
      porcentajeIva :this.productForm.get('porcentajeIva')?.value

      }

      if(this.Id !== null){
        this.serv.updateProduct(this.Id,Producto).subscribe(
          data=>{
            swal.fire({
              position: 'center',
              icon: 'success',
              title: 'producto agregado correctamente',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['/']);

          },error=>{
            swal.fire({
              icon: 'error',
              title: 'algo salio mal intenta de nuevo porfavor ',
            
            })

          }
        )
      }else{
        this.serv.insertProduct(Producto).subscribe(
          data=>{
            swal.fire({
              position: 'center',
              icon: 'success',
              title: 'producto agregado correctamente',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['/']);
            


          },error=>{
            swal.fire({
              icon: 'error',
              title: 'algo salio mal intenta de nuevo porfavor ',
            
            })
            this.productForm.reset(); //limpiar formulario

          }
        )
      }
    }
  }

  esEditar(){

    if(this.Id !== null){
      this.Titulo = 'editar contacto';
      this.serv.getByid(this.Id).subscribe(
  
        data =>{
        
          this.productForm.patchValue({
             id:data[0].id,
             codigo:data[0].codigo,
             descripcion:data[0].descripcion,
             imagen:data[0].imagen,
             produtoParaLaVenta:data[0].produtoParaLaVenta,
             porcentajeIva:data[0].porcentajeIva,
        
  
            
          })
        },
        error=>{
          console.log(error)
        }
  
      )
    }
  
  }


}
