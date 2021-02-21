import { Component } from '@angular/core';
import { HelloComponent } from './hello.component';
import { ByeComponent } from './bye.component';

@Component({
  selector: 'app-component',
    template: `<h1>hola mundo</h1>
                <h3>{{title}}</h3>
                
                
<p>-----------------------Ejemplo *ngIf --------------------------------------------------------------------</p>
                <span>{{number}}</span>
                <br>
                <button (click)="number=number+1">sumar +1</button>
                
                <button (click)="number=number-1">sumar -1</button>
                <br>

                <p *ngIf='number>=5'>has aprobado</p>
<p>-----------------------Ejemplo *ngSwitch --------------------------------------------------------------------</p>
                <p>Ingrese primer valor
                  <input [(ngModel)]="valor1" type="number">
                </p>
                <p>Ingrese segundo valor
                  <input [(ngModel)]="valor2" type="number">
                </p>
                <p>
                  <select [(ngModel)]="operacion">
                    <option value="ninguna">Elija una opción</option>
                    <option value="sumar">Sumar</option>
                    <option value="restar">Restar</option>
                    <option value="multiplicar">multiplicar</option>
                    <option value="dividir">Dividir</option>
                  </select>
                </p>
                <p>Resultado:
                  <span [ngSwitch]="operacion">
                    <span *ngSwitchCase="'sumar'">{{valor1+valor2}}</span>
                    <span *ngSwitchCase="'restar'">{{valor1-valor2}}</span>
                    <span *ngSwitchCase="'multiplicar'">{{valor1*valor2}}</span>
                    <span *ngSwitchCase="'dividir'">{{valor1/valor2}}</span>
                    <span *ngSwitchDefault>(No eligió operación)</span>
                  </span>
                </p>
<p>-----------------------Ejemplo *ngPlural --------------------------------------------------------------------</p>

              <h3>{{num}}</h3>
              <h2>base= {{base}}</h2>
                <button (click)="operation1(base)">sumar base</button>
                <button (click)="operation1(-base)">menos base</button>




                <p [ngPlural]="num">
                <ng-template ngPluralCase="0">
                  No products in cart
                </ng-template>
                <ng-template ngPluralCase="5">
                  {{num}} product in cart
                </ng-template>
                <ng-template ngPluralCase="other">
                  {{ num }} products in cart
                </ng-template>
              </p>



<p>-----------------------Ejemplo *ngComponentOutlet --------------------------------------------------------------------</p>


<button (click)="render()">Render dynamic component</button>
    <ng-container *ngComponentOutlet="currentComponent"></ng-container>








                `
  
})
export class ContadorComponent {
  title = 'frontend-angular-laravel';
  number = 10;
  num = 10;
  base=5;
  operation (valor:number)
  {
    this.number+=valor;
  }
  operation1 (valor:number)
  {
    this.num+=valor;
  }
 
  valor1=0;
  valor2=0;
  operacion: string = "ninguna";
  resultado: number=0;








  public components = [HelloComponent, ByeComponent];
  public currentComponent:any ;

  public render(): void {
    const index = Math.round(Math.random());
    this.currentComponent = this.components[index];
  }






}
