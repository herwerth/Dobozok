import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-szinvalaszto',
  templateUrl: './szinvalaszto.component.html',
  styleUrls: ['./szinvalaszto.component.css']
})
export class SzinvalasztoComponent implements OnInit{

  @Output()
  ujSzinKivalasztva = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  formSubmitTortent(e: any) {
    e.preventDefault();
    const ujSzin = e.target.elements.szin.value;
    this.ujSzinKivalasztva.emit(ujSzin);
  }
}
