import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {


listado:string [] = ['Jose','Maritza','Daniel','juan', 'Pedro']

listaElementoBorrado="";

borrarElemento()
{

  this.listaElementoBorrado = this.listado.shift() || "";
}


}
