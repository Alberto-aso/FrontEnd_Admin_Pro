//Declaramos los modulos en la aplucacion
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRountingModule } from './app-rounting.module'; //Importamos el routing para la logica en las rutas

//Declaramos los modulos indepentienes de Pages/Auth
import { PagesModule } from './pages/pages.module'; //Importamos el pages module
import { AuthModule } from './auth/auth.module'; // importamos el auth module

//Declaramos los componentes en la aplicacion
import { AppComponent } from './app.component'; //Importamos el app component
import { Page404Component } from './pageNotFound/page404/page404.component'; //Omportamos la pagina 404

@NgModule({ //Aqui es donde tenemos que importas los componentes de nuestro proyectp
  declarations: [
    AppComponent,// declaramos al app component
    Page404Component, //Declaramos el pages 404
  ],
  imports: [
    BrowserModule,
    AppRountingModule, //Aqui Realizamos la importacion del app routing para el manejo de las rutas
    PagesModule, // Nos traemos el modulo de pages
    AuthModule //Nos traemos el auth module
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
