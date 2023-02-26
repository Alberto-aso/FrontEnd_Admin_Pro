//Modulos
import { NgModule } from '@angular/core'; //Importamos toda s las librerias de angular
import { RouterModule, Routes } from '@angular/router' //Realizamos la importacion del modulo necesario para el manejo de las turas

//Componentes de la aplucacion
import { Page404Component } from './pageNotFound/page404/page404.component';//Realizamos la importacion del modulo
import { PagesRountingModule } from './pages/pages.routing'; //Importamos la logita de rutas de el pages 
import { AuthRountingModule } from './auth/auth.routing'; //Importamos la logica de turas del auth 

//Variable de las rutas en la aplicacion
const routes: Routes = [
  //{path: '/dashboard', component: PagesRouting} //Aqui se tienen las rutas de pages modulw
  //{path: '/auth', component: AuthRouting} //Aqui se tienen las rutas del auth
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //Redireccionamos al usuario si es que ingreso una ruta vacia
  { path: '**', component: Page404Component } // Mandamos al componente de que no se encontro la pagina
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes), //Importamos el router module
    PagesRountingModule, //Aqui importamos el pages routing para ir agregando ahi las paginas ya con usuairo autenticado
    AuthRountingModule
  ],
  exports: [
    RouterModule //Exportamos el router module con las rutas ya especificadas para la aplicacion
  ]
})
export class AppRountingModule { }
