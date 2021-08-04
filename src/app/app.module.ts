import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { NosotrosComponent } from './secciones/nosotros/nosotros.component';
import { ProductosComponent } from './secciones/productos/productos.component';
import { ServicioComponent } from './secciones/servicio/servicio.component';
import { ContactoComponent } from './secciones/contacto/contacto.component';

import { ConfigService } from "./secciones/contacto/contacto.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    NosotrosComponent,
    ProductosComponent,
    ServicioComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
