import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importamos los componentes que se pueden reutilizar en la aplicacion
import { IncrementadorComponent } from './incrementador/incrementador.component';

@NgModule({
  declarations: [
    IncrementadorComponent //Importamos el incrementador component para retulilizarlo en los progress
  ],
  exports:[
    IncrementadorComponent //Exportamos el incrementados para reutilzarlo en los progress
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
