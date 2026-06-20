import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoService } from '../../servicios/carritoServicio';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit {
  productosCarrito: Producto[] = [];
  constructor(
    private carritoServicio: CarritoService
  ) { }




  ngOnInit(): void {


    this.productosCarrito =
      this.carritoServicio.obtenerProductos();


  }


  eliminar(id: number): void {


    this.carritoServicio.eliminarProducto(id);


    this.productosCarrito =
      this.carritoServicio.obtenerProductos();


  }


  aumentarCantidad(id: number): void {


    this.carritoServicio.aumentarCantidad(id);


  }


  disminuirCantidad(id: number): void {


    this.carritoServicio.disminuirCantidad(id);


  }
  eliminarTodo(): void {


    this.carritoServicio.eliminarTodo();


    this.productosCarrito =
      this.carritoServicio.obtenerProductos();

  }
  calcularTotal(): number {
  return this.carritoServicio.calcularTotal();
}

finalizarCompra() {
   let cantidadProductos = 0;

  this.productosCarrito.forEach(producto => {
    cantidadProductos += producto.cantidad;
  });
  alert("Total de la compra: $" + this.calcularTotal()+"\ncantidad de productos: "+cantidadProductos);
}
}
