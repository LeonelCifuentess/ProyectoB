import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './compartidos/nav/nav';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Registro } from './auth/registro/registro';
import { Footer } from './compartidos/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Nav,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectobootstrap');
}
