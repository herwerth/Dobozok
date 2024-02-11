import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doboz',
  templateUrl: './doboz.component.html',
  styleUrls: ['./doboz.component.css']
})
export class DobozComponent {
      constructor() {}

  eppenMozgatvaVan = false;
  @Input()
  xPozicio = 100;

  @Input()
  yPozicio = 100;

  @Input()
  kivalasztottSzin= "";

  dobozDragStart() {
    this.eppenMozgatvaVan = true;
  }

  dobozDragVege() {
    this.eppenMozgatvaVan = false;
  }

  dobozDragFolyamatban(event: any) {

    if(this.eppenMozgatvaVan) {
        this.xPozicio = event.clientX - 300 / 2;
        this.yPozicio = event.clientY - 180 / 2;
    }

  }
}
