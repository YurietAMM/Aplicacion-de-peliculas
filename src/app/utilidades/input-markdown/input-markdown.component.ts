import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  InputTextArea(texto: string) {
    console.log(texto);
  }

}
