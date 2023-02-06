import { Component, OnInit } from '@angular/core';
import { actor } from '../../interface/actor.interface';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardar(actor : actor){
    console.log(actor);
  }

}
