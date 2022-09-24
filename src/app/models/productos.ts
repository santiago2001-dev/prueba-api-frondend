export class producto{
    id : number
    codigo : string
    descripcion : string
     imagen : string
    produtoParaLaVenta : boolean
    porcentajeIva : number
    

    constructor(id : number ,codigo : string,descripcion : string,imagen : string,productoParaLaVenta : boolean,porcentajeIva : number){
        this.id =  id;
        this.codigo = codigo;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.produtoParaLaVenta =  productoParaLaVenta;
        this.porcentajeIva =  porcentajeIva

    }
}