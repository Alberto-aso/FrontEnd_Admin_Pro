//Modulos
import { NgModule } from '@angular/core'; //Importamos toda s las librerias de angular
import { RouterModule, Routes } from '@angular/router' //Realizamos la importacion del modulo necesario para el manejo de las turas

//Componentes de la aplucacion
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficasComponent } from './graficas/graficas.component';

//Variable de las rutas en la aplicacion
const routes: Routes = [
  {
    path: 'dashboard',component: PagesComponent, //Creamos el pages component en el que estaran las paginas d ela aplicacion
    children: [ //Indicmaos que los componentes son hijos de la clase pages component
      { path: '', component: DashboardComponent }, //Declaramos la ruta y el modulo que sera usado en cada una de ellas
      { path: 'progress', component: ProgressComponent }, //Declaramos la ruta y el modulo que sera usado en cada una de ellas
      { path: 'grafica', component: GraficasComponent }, //Declaramos la ruta y el modulo que sera usado en cada una de ellas
    ]
  }, //Importamos el pages component que seta el Administrador de las paginas de la aplicacion
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes) //Importamos el router module
  ],
  exports: [
    RouterModule //Exportamos el router module con las rutas ya especificadas para la aplicacion
  ]
})
export class PagesRountingModule { }
