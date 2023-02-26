import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importamos los componentes que usara el auth module
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent, //Declaramos el componente login
    RegisterComponent, //Declaramos el register componen
  ],
  exports: [
    LoginComponent, //Exportamos el login component
    RegisterComponent, //Exportamos el register component
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
