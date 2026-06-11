import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoService } from '../../servicios/carritoServicio';
@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  constructor(private carritoService: CarritoService) { }

  Productos: Producto[] = [
    {
      id: 1,
      disponibilidad: true,
      marca: 'FORD Mustang',
      modelo: 'GT Performance',
      anio: '2025',
      color: 'azul',
      img: 'assets/mustang2.jpg',
      precio: 1000,
      cantidad: 1
    },
    {
      id: 2,
      disponibilidad: true,
      marca: 'FORD Mustang',
      modelo: 'GT Performance',
      anio: '2025',
      color: 'azul',
      img: 'assets/mustang2.jpg',
      precio: 1000,
      cantidad: 1
    },
    {
      id: 3,
      disponibilidad: true,
      marca: 'FORD Mustang',
      modelo: 'GT Performance',
      anio: '2025',
      color: 'azul',
      img: 'assets/mustang2.jpg',
      precio: 1000,
      cantidad: 1
    },
    {
      id: 4,
      disponibilidad: true,
      marca: 'FORD Mustang',
      modelo: 'GT Performance',
      anio: '2025',
      color: 'azul',
      img: 'assets/mustang2.jpg',
      precio: 1000,
      cantidad: 1
    },
    {
      id: 5,
      disponibilidad: true,
      marca: 'FORD Mustang',
      modelo: 'GT Performance',
      anio: '2025',
      color: 'azul',
      img: 'assets/mustang2.jpg',
      precio: 1000,
      cantidad: 1
    },
    {
      id: 6,
      disponibilidad: true,
      marca: 'FORD Mustang',
      modelo: 'GT Performance',
      anio: '2025',
      color: 'azul',
      img: 'assets/mustang2.jpg',
      precio: 1000,
      cantidad: 1
    },

  ]

  // Llama al servicio para agregar
  agregarCarrito(p: Producto) {
    this.carritoService.agregarCarrito(p);
  }

}
