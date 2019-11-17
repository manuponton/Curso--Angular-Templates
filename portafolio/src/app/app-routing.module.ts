import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';


const routes: Routes = [
  { path: 'home', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'item', component : ItemComponent},
  {path: '**', redirectTo : 'home', pathMatch: 'full'} ,
  // Los asteriscos simbolizan cualquier ruta diferente en el arreglo routes
  // patMatch:"full" hace que se lea todo el path
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
  // El useHash es utilizado para que los servidores no indexen la direccion de una
  // ruta como una carpeta o un directorio: Le indica a los servidores que lo que viene
  // despues de "#", pertenece a una ruta de Angular
})
export class AppRoutingModule { }
