//Declaramos los modulos en la aplucacion
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRountingModule } from './app-rounting.module';

//Declaramos los componentes en la aplicacion
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Page404Component } from './pageNotFound/page404/page404.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({ //Aqui es donde tenemos que importas los componentes de nuestro proyectp
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    DashboardComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    FooterComponent,
    ProgressComponent,
    GraficasComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule //Aqui Realizamos la importacion del app routing para el manejo de las rutas
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
