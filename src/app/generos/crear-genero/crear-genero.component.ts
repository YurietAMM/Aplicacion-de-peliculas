import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { generoPeliculas } from '../../interface/genero.interface';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent{

  constructor(private router : Router) { }

  guardar(Genero: generoPeliculas) {
    console.log(Genero);
    this.router.navigate(['/generos']);
  }

}
