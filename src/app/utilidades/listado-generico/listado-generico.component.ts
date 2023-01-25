import { Component, Input, OnInit } from '@angular/core';
import { pelicula } from '../../interface/pelicula.interface';

@Component({
  selector: 'app-listado-generico',
  templateUrl: './listado-generico.component.html',
  styleUrls: ['./listado-generico.component.css']
})
export class ListadoGenericoComponent implements OnInit {

  @Input()

  listado: pelicula[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  retirar(indice : number) : void {
    this.listado.splice(indice, 1);
  }

}
