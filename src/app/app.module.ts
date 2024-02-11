import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DobozComponent } from './doboz/doboz.component';
import { SzinvalasztoComponent } from './szinvalaszto/szinvalaszto.component';

@NgModule({
  declarations: [
    AppComponent,
    DobozComponent,
    SzinvalasztoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
