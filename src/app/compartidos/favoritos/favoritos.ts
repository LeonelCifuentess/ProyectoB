import { Component } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {
  productosFavoritos: Producto[]= []
}
