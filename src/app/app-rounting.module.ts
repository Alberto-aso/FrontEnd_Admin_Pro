//Modulos
import { NgModule } from '@angular/core'; //Importamos toda s las librerias de angular
import { RouterModule, Routes } from '@angular/router' //Realizamos la importacion del modulo necesario para el manejo de las turas

//Componentes de la aplucacion
import { DashboardComponent } from './pages/dashboard/dashboard.component'; //Realizamos la importacion del modulo
import { GraficasComponent } from './pages/graficas/graficas.component';//Realizamos la importacion del modulo
import { ProgressComponent } from './pages/progress/progress.component';//Realizamos la importacion del modulo
import { LoginComponent } from './auth/login/login.component';//Realizamos la importacion del modulo
import { RegisterComponent } from './auth/register/register.component';//Realizamos la importacion del modulo
import { Page404Component } from './pageNotFound/page404/page404.component';//Realizamos la importacion del modulo
import { PagesComponent } from './pages/pages.component';

//Variable de las rutas en la aplicacion
const routes: Routes = [
  {
    path: '',
    component: PagesComponent, //Creamos el pages component en el que estaran las paginas d ela aplicacion
    children: [ //Indicmaos que los componentes son hijos de la clase pages component
      { path: 'dashboard', component: DashboardComponent }, //Declaramos la ruta y el modulo que sera usado en cada una de ellas
      { path: 'progress', component: ProgressComponent }, //Declaramos la ruta y el modulo que sera usado en cada una de ellas
      { path: 'grafica', component: GraficasComponent }, //Declaramos la ruta y el modulo que sera usado en cada una de ellas
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //Redireccionamos al usuario si es que ingreso una ruta vacia
    ]
  }, //Importamos el pages component que seta el Administrador de las paginas de la aplicacion

  { path: 'login', component: LoginComponent }, //Declaramos la ruta y el modulo que sera usado en cada una de ellas
  { path: 'register', component: RegisterComponent }, //Declaramos la ruta y el modulo que sera usado en cada una de ellas

  { path: '**', component: Page404Component } // Mandamos al componente de que no se encontro la pagina
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) //Importamos el router module
  ],
  exports: [
    RouterModule //Exportamos el router module con las rutas ya especificadas para la aplicacion
  ]
})
export class AppRountingModule { }
