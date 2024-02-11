import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'dobozok';
    kivalasztottSzin = "red";


  szinValasztasTortent(ujSzin: string){

    this.kivalasztottSzin = ujSzin;
    console.log(ujSzin);


  }


}

