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
      id: 7,
      disponibilidad: true,
      marca: 'Wolkswagen',
      modelo: 'Golf 8 R',
      anio: '2023',
      color: 'Bordo',
      img: 'Wolkswagen Golf 8R.png',
      precio: 60000,
      cantidad:1,
      precioOferta:50000,
    },
    {
      id: 8,
      disponibilidad: true,
      marca: 'FORD Mustang',
      modelo: 'Shelby GT500',
      anio: '2022',
      color: 'Blanco',
      img: 'Mustang Shelby GT500.png',
      precio: 110000,
      cantidad:1,
      precioOferta:90000,
    },
    {
      id: 9,
      disponibilidad: true,
      marca: 'BMW',
      modelo: 'M2 Competition F87',
      anio: '2020',
      color: 'azul',
      img: 'BMW F87 M2.png',
      precio: 50000,
      cantidad:1,
      precioOferta:45000,
    },
    {
      id: 10,
      disponibilidad: true,
      marca: 'Ferrari',
      modelo: 'F50',
      anio: '1995',
      color: 'Rojo',
      img: 'Ferrari F50.png',
      precio: 100000,
      cantidad:1,
      precioOferta:80000,
    },
    {
      id: 11,
      disponibilidad: true,
      marca: 'Lamborghini',
      modelo: 'Revuelto',
      anio: '2024',
      color: 'Blanco',
      img: 'Lamborghini Revuelto.png',
      precio: 100000,
      cantidad:1,
      precioOferta:95000,
    },
    {
      id: 12,
      disponibilidad: true,
      marca: 'Toyota',
      modelo: 'GR Supra MK5',
      anio: '2025',
      color: 'Negro',
      img: 'supra.png',
      precio: 65000,
      cantidad:1,
      precioOferta:50000,
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
