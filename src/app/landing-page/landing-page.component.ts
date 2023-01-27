import { Component, Input, OnInit } from '@angular/core';
import { pelicula } from '../interface/pelicula.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

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
