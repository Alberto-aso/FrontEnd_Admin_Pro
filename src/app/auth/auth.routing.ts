//Modulos
import { NgModule } from '@angular/core'; //Importamos toda s las librerias de angular
import { RouterModule, Routes } from '@angular/router' //Realizamos la importacion del modulo necesario para el manejo de las turas

//Importamos los componentes en el auth como el login y register
import { LoginComponent } from './login/login.component'; //Importamos el login component
import { RegisterComponent } from './register/register.component'; //Importamos el register component

//Componentes de la aplucacion

//Variable de las rutas en la aplicacion
const routes: Routes = [
  { path: 'login', component: LoginComponent }, //Declaramos la ruta y el modulo que sera usado en cada una de ellas
  { path: 'register', component: RegisterComponent }, //Declaramos la ruta y el modulo que sera usado en cada una de ellas
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes), //Importamos el router module
  ],
  exports: [
    RouterModule //Exportamos el router module con las rutas ya especificadas para la aplicacion
  ]
})
export class AuthRountingModule { }
