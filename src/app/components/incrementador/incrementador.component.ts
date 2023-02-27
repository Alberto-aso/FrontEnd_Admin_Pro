import { Component, EventEmitter, Input, Output } from '@angular/core'; //Importamos input porque resivira valor de otro componente

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  @Input() progreso: number = 53; //Creamos la variable de progresso 1, indicamos que es inpout porque va a revisir el valor de otro componente

  @Output() valorSalida: EventEmitter<number> = new EventEmitter(); //Creamos la funcion para el valor de salida hacia el padre

  cambiarValor(valor: number) { //Creamos la funcion de cambiar valor para el progreso 1

    this.progreso = this.progreso + valor; //Indicamos que el valor sera sumado al porcentaje
    this.valorSalida.emit( this.progreso ); //Mandamos el emit del calor hacia el padre

    if (this.progreso >= 100 && valor >= 0) { //Evaluamos si el pprogreso sobrepas los 100
      this.valorSalida.emit(100); //Mandamos el valor del emit hacia el padre
      return this.progreso = 100; //Retornamos el 100 porciente
    } else if (this.progreso <= 0 && valor <= 0) {
      this.valorSalida.emit(0); //mandamos el valor del emit hacia el padre
      return this.progreso = 0; //retormamos el 0 porciento
    }
  }
  
}
