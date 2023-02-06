import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValoresBusqueda } from '../../interface/valoresBusqueda.interface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private location : Location, private activatedRoute: ActivatedRoute) {
    this.formularioBusqueda = new FormGroup({});
  }

  generos = [{id: 1, nombre: 'Drama'}, {id: 2, nombre: 'Comedia'}, {id: 3, nombre: 'Romance'}];

  peliculasBuscar = [
    {
      titulo: 'Gato con botas: el último deseo',
      fechaLanzamiento: '',
      generoId: [2,1],
      precio: 0,
      poster: 'https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/8/3/2/8/28238-17-esl-CO/f5bb2406d172-pib_cineco_2-poster_480x670.jpg',
      proximosEstrenos: false,
      enCines: true
    },
    {
      titulo: 'Avatar: El camino del agua',
      fechaLanzamiento: '',
      generoId: [2,3],
      precio: 0,
      poster: 'https://revistahush.com/wp-content/uploads/2022/11/Poster-y-Trailer-de-Avatar-The-Way-of-Life-2-819x1024.webp',
      proximosEstrenos: false,
      enCines: true
    },
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
  ];

  private leerParametrosEnURL(){
    this.activatedRoute.queryParams.subscribe((params) => {
      var objeto: ValoresBusqueda = {
        titulo: '',
        generoId: 0,
        proximosEstrenos: false,
        enCines: false
      };

      if(params.titulo){
        objeto.titulo = params.titulo;
      }
      if(params.generoId){
        objeto.generoId = params.generoId;
      }
      if(params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos;
      }
      if(params.enCines){
        objeto.enCines = params.enCines;
      }

      this.formularioBusqueda.patchValue(objeto);
    });
  }

  private escribirParametrosEnURL(){
    var queryStrings = [];
    var valoresFormulario = this.formularioBusqueda.value;

    if(valoresFormulario.titulo){
      queryStrings.push(`titulo=${valoresFormulario.titulo}`)
    }

    if(valoresFormulario.generoId){
      queryStrings.push(`genero=${valoresFormulario.generoId}`)
    }

    if(valoresFormulario.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`)
    }

    if(valoresFormulario.enCines){
      queryStrings.push(`proximosEstrenos=${valoresFormulario.enCines}`)
    }

    this.location.replaceState('peliculas/buscar', queryStrings.join('&'));
  }

  peliculasOriginal = this.peliculasBuscar;

  formularioBusqueda: FormGroup;

  formularioLimpio = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false};

  ngOnInit(): void {
    this.formularioBusqueda = this.formBuilder.group(this.formularioLimpio);
    this.leerParametrosEnURL();
    this.buscarPeliculas(this.formularioBusqueda.value);

    this.formularioBusqueda.valueChanges.subscribe(valores => {
      this.peliculasBuscar = this.peliculasOriginal;
      this.buscarPeliculas(valores);
      this.escribirParametrosEnURL();
    });
  }

  limpiar(){
    this.formularioBusqueda.patchValue(this.formularioLimpio);
  }

  buscarPeliculas(valores: ValoresBusqueda){
    if(valores.titulo){
      this.peliculasBuscar = this.peliculasBuscar.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) != -1);
    }
    if(valores.generoId !== 0){
      this.peliculasBuscar = this.peliculasBuscar.filter(pelicula => pelicula.generoId.indexOf(valores.generoId) != -1);
    }
    if (valores.proximosEstrenos){
      this.peliculasBuscar = this.peliculasBuscar.filter(pelicula => pelicula.proximosEstrenos);
    }
    if (valores.enCines){
      this.peliculasBuscar = this.peliculasBuscar.filter(pelicula => pelicula.enCines);
    }
  }

}
