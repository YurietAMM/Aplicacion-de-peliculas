import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actor, leerActor } from '../../interface/actor.interface';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  modelo: leerActor = {
    nombre: 'Dwayne Johnson',
    fechaNacido: new Date(),
    foto: 'Dwayne Johnson.jpg'
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //console.log(params.id);
    })
  }

  guardar(actor: actor){
    console.log(actor);
  }

}
