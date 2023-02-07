import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actor, leerActor } from '../../interface/actor.interface';

@Component({
  selector: 'app-formulario-actor',
  templateUrl: './formulario-actor.component.html',
  styleUrls: ['./formulario-actor.component.css']
})
export class FormularioActorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  formulario!: FormGroup;

  @Output() submit: EventEmitter<actor> = new EventEmitter<actor>();

  @Input() modelo!: leerActor;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      fechaNacido: '',
      foto: [null, [Validators.required]]
    });

    if(this.modelo !== undefined && this.modelo !== null){
      this.formulario.patchValue(this.modelo);
    }
  }


  imagen(file: File){
    this.formulario.get('foto')?.setValue(file);
  }

  onSubmit(){
    this.submit.emit(this.formulario.value);
  }

}
