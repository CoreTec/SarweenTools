import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TileComponent,TileMapComponent } from '@components';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    TileMapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
