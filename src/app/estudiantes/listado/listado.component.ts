import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { HttpClient } from '@angular/common/http';
import { User } from "../../models/users";

@Component({
  selector: 'app-listados',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  User:any[] = [];

constructor(public api:ApiService,public http:HttpClient){
  this.getUserApi();
  //console.log(this.User);

}





listado:string [] = ['Jose','Maritza','Daniel','juan', 'Pedro']

listaElementoBorrado="";

borrarElemento()
{

  this.listaElementoBorrado = this.listado.shift() || "";

 

}


getUserApi()
{
  this.api.getConfig()
  .subscribe(data => {
    let user = data.body;
    //data.body?.map((item)=>{this.User.push(Object.values(item))});
    data.body?.map((item)=>{this.User.push(Object.values(
                                                          item
                                                        ))});

  console.log(this.User);
 
});
}


}
