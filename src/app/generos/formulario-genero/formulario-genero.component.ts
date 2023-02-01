import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeraLetraMayuscula } from '../../utilidades/validadores/primeraLetraMayuscula';
import { generoPeliculas } from '../../interface/genero.interface';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<generoPeliculas>();

  constructor(private router : Router, private formBuilder: FormBuilder) { }

  formulario!: FormGroup;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['',{validators : [Validators.required, Validators.minLength(3), PrimeraLetraMayuscula()]}]
    });
  }

  guardarFormulario(){
    this.onSubmit.emit(this.formulario.value);
  }

  obtenerErrorCampoNombre() {
    var campo = this.formulario.get('nombre');
    if(campo?.hasError('required')){
      return 'El campo nombre es requerido';
    }
    if(campo?.hasError('minlength')){
      return 'La longitud minima es de tres caracteres';
    }
    if(campo?.hasError('primeraLetraMayuscula')){
      return 'La primera letra debe ser en mayúscula';
    }
    return '';
  }

}
