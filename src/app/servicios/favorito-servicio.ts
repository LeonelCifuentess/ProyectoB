import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Ofertas } from '../paginas/ofertas/ofertas';

@Injectable({
  providedIn: 'root',
})
export class FavoritoServicio {
  favorito: Producto [] =[];
   agregarFavorito(p: Producto) {


    const existe =
      this.favorito.find(prod => prod.id === p.id);


    if (existe) {


      existe.cantidad++;


    } else {


      this.favorito.push({ ...p });


    }
console.log(this.favorito);

  }
  obtenerProductos() {


    return this.favorito;


  }
   eliminarProducto(id: number) {


    this.favorito =
      this.favorito.filter(p => p.id !== id);


  }
}
