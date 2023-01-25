import { Component, OnInit, Input } from '@angular/core';
import { pelicula } from '../../interface/pelicula.interface';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent{

  constructor() { }

  @Input()

  peliculas: pelicula[] = [];

  retirar(indice : number): void {
    this.peliculas.splice(indice, 1);
  }

  manejarRated(voto: number) : void {
    console.log(voto);
  }
}
