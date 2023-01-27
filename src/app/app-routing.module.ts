import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { IndiceCineComponent } from './cines/indice-cine/indice-cine.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoPeliculasComponent
  },
  {
    path: 'generos',
    component: IndiceGenerosComponent
  },
  {
    path: 'generos/crear',
    component: CrearGeneroComponent
  },
  {
    path: 'actores',
    component: IndiceActoresComponent
  },
  {
    path: 'actores/crear',
    component: CrearActorComponent
  },
  {
    path: 'actores/editar/:id',
    component: EditarActorComponent
  },
  {
    path: 'cines',
    component: IndiceCineComponent
  },
  {
    path: 'cines/crear',
    component: CrearCineComponent
  },
  {
    path: 'peliculas/crear',
    component: CrearPeliculaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
