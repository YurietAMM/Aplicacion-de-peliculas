import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Event } from '@angular/router';
import { toBase64 } from '../helpers';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  @Input() UrlImagen : string | undefined;

  @Output() img : EventEmitter<File> = new EventEmitter<File>();

  constructor() { }

  imagenBase64 : string = '';

  ngOnInit(): void {
  }

  change(evento: any){
    if (evento.target.files.length > 0){
      const file: File = evento.target.files[0];
      toBase64(file).then((valor: string) => {
        this.imagenBase64 = valor;
        this.img.emit(file);
      }).catch((error) => {
        console.error(error);
      });
      this.UrlImagen = '';
    }
  }

}
