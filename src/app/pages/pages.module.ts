import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'

//Importamos los componentes de el PAGES.MODULE
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent, //Declaramos que haremos uso del componente
    ProgressComponent,//Declaramos que haremos uso del componente
    GraficasComponent,//Declaramos que haremos uso del componente
    PagesComponent//Declaramos que haremos uso del componente
  ],
  exports:[
    DashboardComponent,//Declaramos que ecportaremos uso del componente
    ProgressComponent,//Declaramos que exportaremos uso del componente
    GraficasComponent,//Declaramos que exportaremos uso del componente
    PagesComponent//Declaramos que exportaremos uso del componente
  ],
  imports: [
    CommonModule,
    RouterModule, //Importamoso el router poque aqui esta tamien concentrado un sistema de rutas
    SharedModule //Aqui cargo la informacion el auth module donde tengo el header y el footer
  ]
})
export class PagesModule { }
