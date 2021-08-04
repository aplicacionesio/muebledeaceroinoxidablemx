import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NosotrosComponent } from './secciones/nosotros/nosotros.component';
import { ContactoComponent } from './secciones/contacto/contacto.component';
import { ServicioComponent } from './secciones/servicio/servicio.component';
import { ProductosComponent } from './secciones/productos/productos.component';


const routes: Routes = [
  { path: '', component: MainComponent }, 
  { path: 'nosotros', component: NosotrosComponent }, 
  { path: 'productos', component: ProductosComponent }, 
  { path: 'servicio', component: ServicioComponent }, 
  { path: 'contacto', component: ContactoComponent }, 
  { path: '**', pathMatch: 'full', redirectTo: '' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
