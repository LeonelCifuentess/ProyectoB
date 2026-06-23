import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoService } from '../../servicios/carritoServicio';
import { FavoritoServicio } from '../../servicios/favorito-servicio';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  constructor(private carritoService: CarritoService,
    private favoritoServicio: FavoritoServicio
  ) { }

  Productos: Producto[] = [
    {
      id: 1,
      disponibilidad: true,
      marca: 'Mercedes',
      modelo: 'AMG GT43',
      anio: '2024',
      color: 'Naranja',
      img: 'assets/Mercedes-AMG GT.png',
      precio: 100000,
      cantidad: 1
    },
    {
      id: 2,
      disponibilidad: true,
      marca: 'BMW',
      modelo: 'M4',
      anio: '2021',
      color: 'Rosa',
      img: 'assets/BMW M4.png',
      precio: 82000,
      cantidad: 1
    },
    {
      id: 3,
      disponibilidad: true,
      marca: 'Lamborghini',
      modelo: 'Aventador',
      anio: '2022',
      color: 'Gris oscuro',
      img: 'assets/Lamborghini Aventador.png',
      precio: 300000,
      cantidad: 1
    },
    {
      id: 4,
      disponibilidad: true,
      marca: 'Bugatti',
      modelo: 'Veyron 16.4',
      anio: '2015',
      color: 'Negro',
      img: 'assets/Bugatti Veyron.png',
      precio: 500000,
      cantidad: 1
    },
    {
      id: 5,
      disponibilidad: true,
      marca: 'Ferrari',
      modelo: '488 GTB',
      anio: '2019',
      color: 'Rojo',
      img: 'assets/Ferrari 488 Pista.png',
      precio: 200000,
      cantidad: 1
    },
    {
      id: 6,
      disponibilidad: true,
      marca: 'Ferrari',
      modelo: 'California',
      anio: '2017',
      color: 'Negro',
      img: 'assets/Ferrari California.png',
      precio: 80000,
      cantidad: 1
    },

  ]

  // Llama al servicio para agregar
  agregarCarrito(p: Producto) {
    this.carritoService.agregarCarrito(p);
    this.mostrarMensaje(`${p.modelo} agregado al carrito`);
  }
  //llama al servicio para agregar
  agregarFavorito(p: Producto) {

    this.favoritoServicio.agregarFavorito(p);

    this.mostrarMensaje(`${p.modelo} agregado a favoritos`);
  }
  mensaje = '';
  mostrarMensaje(texto: string) {
    this.mensaje = texto;
    setTimeout(() => {
      this.mensaje = '';
    }, 2000);
  } 
 
}
