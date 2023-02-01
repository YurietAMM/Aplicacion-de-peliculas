import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { generoPeliculas } from 'src/app/interface/genero.interface';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  guardar(Genero: generoPeliculas) {
    console.log(Genero);
    this.router.navigate(['/generos']);
  }

}
