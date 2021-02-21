import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EstudiantesComponent } from './ejercicio2/estudiantes.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        EstudiantesComponent,
        ListadoComponent
    ],
    imports: [
      CommonModule
    ],
    exports: [
        ListadoComponent,
        EstudiantesComponent
      ],
  })

class EstudiantesModule{

}

export default EstudiantesModule;