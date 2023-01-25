import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maximoRating: number = 5;
  @Input()
  ratingSeleccionado: number = 0;
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();
  ratingArr: number[] = [];
  votado: boolean = false;
  ratingAnterior: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.ratingArr = Array(this.maximoRating).fill(0);
    console.log(this.ratingArr);
  }

  manejarME(posicion: number) : void {
    this.ratingSeleccionado = posicion + 1;
  }

  manejarML() : void{
    if(this.ratingAnterior !== 0){
      this.ratingSeleccionado = this.ratingAnterior;
    }else{
      this.ratingSeleccionado = 0;
    }
  }

  rate(posicion: number) : void{
    this.ratingSeleccionado = posicion + 1;
    this.votado = true;
    this.ratingAnterior = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
  }

}
