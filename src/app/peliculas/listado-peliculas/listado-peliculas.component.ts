import { Component } from '@angular/core';
import { pelicula } from '../../interface/pelicula.interface';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent{

  constructor() {}

  ngOnInit(): void {
    this.peliculasEnCines = [
      {
        titulo: 'Ant-Man y la Avispa: Quantumania',
        fechaLanzamiento: 'Febrero 16 de 2023',
        generoId: [2,1],
        precio: 9700,
        poster: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/antmanquantumania_payoff_1-sht_v5a_lg.jpg',
        proximosEstrenos: true,
        enCines: false
      },
      {
        titulo: 'Llaman a la puerta',
        fechaLanzamiento: 'Febrero 3 de 2023',
        generoId: [3,1],
        precio: 9900,
        poster: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/980px/public/media/image/2023/02/llaman-puerta-2943202.jpg?itok=nxZM7eTq',
        proximosEstrenos: true,
        enCines: false
      }
  ]
  }
  peliculasEnCines: pelicula[] = [];
  peliculasProximas: pelicula[] = [];

}
