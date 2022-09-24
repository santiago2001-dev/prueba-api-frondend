import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { producto } from '../models/productos';
import { Observable } from 'rxjs';
import { mensaje } from '../models/mensaje';


@Injectable({
  providedIn: 'root'
})
export class backendService {
  Url = 'http://localhost:440/api/crud'
  urlEncript = 'http://localhost:440/api'
urlDes = 'http://localhost:440/api/descifrar'

  constructor(
    private http : HttpClient,

  ) { }

  getAllProducts():Observable<any>{
    return this.http.get(this.Url);

  }

  insertProduct(Producto :producto){
    return this.http.post(this.Url,Producto)

  }

updateProduct(id :any,Producto: producto):Observable<any>{
  return this.http.put(this.Url+'/'+id,Producto)

}

  getByid(id : any):Observable<any>{
    return this.http.get(`${this.Url}/${id}`)
  
  }
  
  deleteProduct(id: any):Observable<any>{
  
    return this.http.delete(this.Url+'/'+id)
  }

encriptar(Mensaje : mensaje ):Observable<any>{
  return this.http.post(this.urlEncript,Mensaje);
}


descrifrar(Mensaje: mensaje):Observable<any>{
  return this.http.post(this.urlDes,Mensaje)
}
}
