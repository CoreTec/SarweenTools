import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<hexmap [data]="data">
              <ng-template #hex let-hex>
                <tile *ngIf="hex" [model]="hex"></tile>
              </ng-template>
              <ng-template #editor let-hex>
                <tilemenu [model]="hex"></tilemenu>
              </ng-template>
             </hexmap>`
})
export class AppComponent {
  data: object[][];
  constructor() {
    this.data  =[];
    for (let q = 0; q < 20; q++) {
      this.data[q] = [];
      for (let w = 0; w < 20; w++){
        if( (5-q)*(5-q)+(5-w)*(5-w)>30){
          this.data[q][w]=null;
          continue;
        }
        var rnd=Math.round( Math.random()*2);
        this.data[q][w] = { content: 0, system:"tile" + rnd,test:0 };
      }
    }
  }
}
