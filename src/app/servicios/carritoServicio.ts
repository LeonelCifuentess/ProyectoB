import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  carrito: Producto[] = [];


  agregarCarrito(p: Producto) {


    const existe =
      this.carrito.find(prod => prod.id === p.id);


    if (existe) {


      existe.cantidad++;


    } else {


      this.carrito.push({ ...p });


    }


  }


  obtenerProductos() {


    return this.carrito;


  }


  eliminarProducto(id: number) {


    this.carrito =
      this.carrito.filter(p => p.id !== id);


  }


  aumentarCantidad(id: number) {


    const producto =
      this.carrito.find(p => p.id === id);


    if (producto) {


      producto.cantidad++;


    }


  }


  disminuirCantidad(id: number) {


    const producto =
      this.carrito.find(p => p.id === id);


    if (producto && producto.cantidad > 1) {


      producto.cantidad--;


    }


  }


  eliminarTodo(): void {


    this.carrito = [];


  }

  calcularTotal(): number {
    let total = 0;

    this.carrito.forEach(producto => {
      if (producto.precioOferta) {
        total += producto.precioOferta * producto.cantidad;
      } else{ 

        total += producto.precio * producto.cantidad;
      }
      

    });

    return total;
  }

}
