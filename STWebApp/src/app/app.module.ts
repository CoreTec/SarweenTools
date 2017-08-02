import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';

import { AppComponent } from './app.component';
import { HexMapComponent,HexMenuComponent } from '@components';

@NgModule({
  declarations: [
    AppComponent,
    HexMapComponent,
    HexMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA ]
})
export class AppModule { }
