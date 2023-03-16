import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaCurso: string[] = ['TypeScript', 'JavaScript', 'Java', 'C#', 'PHP'];

  habilitar: boolean = true;
  texto_boton: string = 'Ocultar';

  constructor() { }

  change():void {
    this.habilitar = !this.habilitar;
    if (this.habilitar) {
      this.texto_boton = 'Ocultar';
    } else {
      this.texto_boton = 'Mostrar';
    }
  }

}
