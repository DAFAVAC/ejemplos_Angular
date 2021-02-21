import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContadorComponent } from './ejercicio1/contador.component';
import { ListadoComponent } from './ejercicio3/listado/listado.component';
import { FormsModule } from '@angular/forms';
import { Tareacontenedores } from './ejercicio1.2/tareacontenedores.component/tareacontenedores.component.component';
import { HelloComponent } from './ejercicio1/hello.component';
import { ByeComponent } from './ejercicio1/bye.component';
import EstudiantesModule from './estudiantes/estudiantes.module';
import { ContadorModule } from './ejercicio1/contador/contador.module';
import { MainPageComponent } from './Presidentes/main-page/main-page.component';
import { PresidentesModule } from './Presidentes/main-page/presidentes.module';
import { HttpClientModule } from '@angular/common/http';
import { User } from "./models/users";



@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListadoComponent,
    Tareacontenedores,
    HelloComponent,
    ByeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EstudiantesModule,
    ContadorModule,
    PresidentesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
