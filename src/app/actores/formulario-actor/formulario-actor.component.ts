import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actor } from '../../interface/actor.interface';

@Component({
  selector: 'app-formulario-actor',
  templateUrl: './formulario-actor.component.html',
  styleUrls: ['./formulario-actor.component.css']
})
export class FormularioActorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  formulario!: FormGroup;

  @Output() submit: EventEmitter<actor> = new EventEmitter<actor>();

  @Input() modelo!: actor;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', {Validators: [Validators.required]}],
      fechaNacido: ''
    });

    if(this.modelo !== undefined){
      this.formulario.patchValue(this.modelo);
    }
  }

  onSubmit(){
    this.submit.emit(this.formulario.value);
  }

}
