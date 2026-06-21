import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoService } from '../../servicios/carritoServicio';
import { FavoritoServicio } from '../../servicios/favorito-servicio';

@Component({
  selector: 'app-ofertas',
  imports: [],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {
  constructor (private carritoService:CarritoService,
    private favoritoServicio: FavoritoServicio
  ){}

  ofertas: Producto[] = [
    {
      id: 1,
      disponibilidad: true,
      marca: 'FORD Mustang',
      modelo: 'GT Performance',
      anio: '2025',
      color: 'azul',
      img: 'mustang.avif',
      precio: 1500,
      cantidad:1,
      precioOferta:1000,
    },
    {
      id: 1,
      disponibilidad: true,
      marca: 'FORD Mustang',
      modelo: 'GT Performance',
      anio: '2025',
      color: 'azul',
      img: 'mustang.avif',
      precio: 1500,
      cantidad:1,
      precioOferta:1000,
    },
    {
      id: 1,
      disponibilidad: true,
      marca: 'FORD Mustang',
      modelo: 'GT Performance',
      anio: '2025',
      color: 'azul',
      img: 'mustang.avif',
      precio: 1500,
      cantidad:1,
      precioOferta:1000,
    },
    {
      id: 1,
      disponibilidad: true,
      marca: 'FORD Mustang',
      modelo: 'GT Performance',
      anio: '2025',
      color: 'azul',
      img: 'mustang.avif',
      precio: 1500,
      cantidad:1,
      precioOferta:1000,
    },
    {
      id: 1,
      disponibilidad: true,
      marca: 'FORD Mustang',
      modelo: 'GT Performance',
      anio: '2025',
      color: 'azul',
      img: 'mustang.avif',
      precio: 1500,
      cantidad:1,
      precioOferta:1000,
    },
    {
      id: 1,
      disponibilidad: true,
      marca: 'FORD Mustang',
      modelo: 'GT Performance',
      anio: '2025',
      color: 'azul',
      img: 'mustang.avif',
      precio: 1500,
      cantidad:1,
      precioOferta:1000,
    },
  ]
   // Llama al servicio para agregar
  agregarCarrito(p: Producto) {
    this.carritoService.agregarCarrito(p);
  }
  //llama al servicio para agregar
  agregarFavorito(p: Producto){
  
    this.favoritoServicio.agregarFavorito(p);

  }
  calcularDescuento(precio: number, precioOferta:number): number {
  const descuento = ((precio - precioOferta) / precio) * 100;
  return Math.round(descuento);
}
}
