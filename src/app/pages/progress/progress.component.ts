import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent {

  progreso1: number = 35; //Declaramos el progreso 1
  progreso2: number = 55; //Declaramos el progreso 2
  
  get getProgreso1() { //Mandamos el valor del porcentaje uno 
    return `${this.progreso1}%` //convertimos a porcentaje al valor dos
  }

  get getProgreso2() { //Mandamos el valor del porcentaje dos
    return `${this.progreso2}%` //Convertimos a porcentaje el valor
  }

  cambioValorHijo(valor: number) {
    console.log(valor);
  }
}
