import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TileComponent,TileMenuComponent } from '@components';
import { HexMenuComponent,HexMapComponent } from '@generic';

@NgModule({
  declarations: [
    AppComponent,
    TileMenuComponent,
    TileComponent,
    HexMapComponent,
    HexMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA ]
})
export class AppModule { }
