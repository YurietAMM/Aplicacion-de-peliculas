import { Component, OnInit, Input } from '@angular/core';
import { pelicula } from '../../interface/pelicula.interface';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent{

  constructor() {}

  ngOnInit(): void {
    this.peliculasEnCines = [{
      titulo: 'Gato con botas: el último deseo',
      fechaLanzamiento: 'Diciembre 8 de 2022',
      precio: 9700,
      poster: 'https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/8/3/2/8/28238-17-esl-CO/f5bb2406d172-pib_cineco_2-poster_480x670.jpg'
    },{
      titulo: 'Avatar: El camino del agua',
      fechaLanzamiento: 'Diciembre 15 de 2022',
      precio: 9900,
      poster: 'https://revistahush.com/wp-content/uploads/2022/11/Poster-y-Trailer-de-Avatar-The-Way-of-Life-2-819x1024.webp'
    }]
  }
  peliculasEnCines: pelicula[] = [];
  peliculasProximas: pelicula[] = [];

}
