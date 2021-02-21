import { Component } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  
})
export class EstudiantesComponent {
nombre = "Carlos";
edad=26;

  obtenerNombre():string
  {
    return `${this.nombre} - ${this.edad}`
  }

  get nombreMayusculas()
  {
    return this.nombre.toLocaleUpperCase();
  }

}
