import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
  Inicial = 1000;
  coleccion:any = [1, 2, 3, 4, 5, 6];

  agregarElemento(){
    this.coleccion.push('X');
  }
}
