import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: []
})
export class IncrementComponent implements OnInit {

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progress: number = 50;

  @Output() cambio : EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cambioValor(valor) {

    if (this.progress < 100 && this.progress > 0) {
      this.progress = this.progress + valor;
    }
    if (this.progress == 100 && valor == -5) {
      this.progress = this.progress + valor;
    } else {
      if (this.progress == 0 && valor == +5) {
        this.progress = this.progress + valor;
      }
    }
    this.cambio.emit( this.progress );
  }
}
