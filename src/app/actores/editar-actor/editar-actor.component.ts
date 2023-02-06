import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actor } from '../../interface/actor.interface';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  modelo: actor = {
    nombre: 'Pedrin',
    fechaNacido: new Date()
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
