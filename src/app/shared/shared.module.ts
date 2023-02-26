import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importamos los modulos que son compartidos en la aplucacioj TEMPLATE
import { HeaderComponent } from '../shared/header/header.component'; //Importamos el header component
import { FooterComponent } from '../shared/footer/footer.component'; //Importamos el footer componenr

@NgModule({
  declarations: [
    HeaderComponent, //Declaramos que haremos uso del componente
    FooterComponent, //Declaramos que haremos uso del componente
  ],
  exports:[
    HeaderComponent, //Declaramos que exportaremos uso del componente
    FooterComponent, //Declaramos que exportaremos uso del componente
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
