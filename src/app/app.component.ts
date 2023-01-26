import { Component } from '@angular/core';
import { pelicula } from './interface/pelicula.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [{
        titulo: 'Black Adam',
        fechaLanzamiento: 'Octubre 5 de 2022',
        precio: 9700,
        poster: ''
      },{
        titulo: 'Avatar: El camino del agua',
        fechaLanzamiento: 'Diciembre 15 de 2022',
        precio: 9900,
        poster: ''
      }]
    }, 500);
  }

  peliculasEnCines: pelicula[] = [









  ];

  peliculasProximas: pelicula[] = [];
    // {
      // titulo: 'Spider-Man: Across the Spider-Verse',
      // fechaLanzamiento: 'Abril 28 de 2023',
      // precio: 9700
    // },{
      // titulo: 'Dungeons & Dragons: Honor entre ladrones',
      // fechaLanzamiento: 'junio 19 de 2023',
      // precio: 9900
    // }
  // ];
}
