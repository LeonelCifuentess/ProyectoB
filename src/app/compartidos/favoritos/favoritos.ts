import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { FavoritoServicio } from '../../servicios/favorito-servicio';
import { CarritoService } from '../../servicios/carritoServicio';
@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos implements OnInit {
  productosFavoritos: Producto[] = [];
  constructor(
    private favoritoServicio: FavoritoServicio, 
    private carritoService: CarritoService
  ) { }

  ngOnInit(): void {


    this.productosFavoritos =
      this.favoritoServicio.obtenerProductos();


  }
  eliminar(id: number): void {


    this.favoritoServicio.eliminarProducto(id);


    this.productosFavoritos =
      this.favoritoServicio.obtenerProductos();


  }
  /* agrega al carrito desde favorito */
  agregarCarrito(p: Producto) {
    this.carritoService.agregarCarrito(p);
  }
  
}
