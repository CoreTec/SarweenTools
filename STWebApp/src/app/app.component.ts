import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<hexmap [data]="data">
              <ng-template #hex let-hex>
                <img *ngIf="hex" src="/assets/{{hex.system}}.png" style="width:100%;height:100%"/>
              </ng-template>
              <ng-template #editor let-hex>
                <hexmenu [model]="hex">
                  <button g5> 
                    {{hex.system}}
                  </button>   
                  <button g2 class="fa fa-times"></button>
                  <button g2 class="fa fa-arrow-right"></button>           
                  <button g6 class="fa fa-times"></button>
                  <button g6 class="fa fa-arrow-right"></button>

                  
                  <button g4 >1</button>
                  <button g4 >2</button>   
                  <button g4 >3</button>   
                  <button g4 >4</button>   

                  <button g3 >1</button>                  
                  <button g3 >2</button>   
                  <button g3 >3</button>   
                  <button g3 >4</button> 

                  <input g1 style="width:50px;font-size:6px" placeholder="type name" [(ngModel)]="hex.system"/> 
                </hexmenu>
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
        this.data[q][w] = { content: "qwe",system:"tile" + rnd,test:0 };
      }
    }
  }
}
