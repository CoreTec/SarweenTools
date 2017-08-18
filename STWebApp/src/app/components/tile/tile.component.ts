import { Component,Input } from '@angular/core';
import { Tile } from '@models'

@Component({
  selector: 'tile',
  templateUrl:'./tile.component.html',
  styleUrls:['./tile.component.css']
})
export class TileComponent {
  @Input() model:Tile;
  getTestData():Promise<Tile[]>
  {
    return new Promise<Tile[]>(resolve=>{
      setTimeout(() => {
                resolve([new Tile(),new Tile(),new Tile()]);
            }, 1000); 
    });
  }
  getTestCount():Promise<number[]>
  {
    return new Promise<number[]>(resolve=>{
      setTimeout(() => {
                resolve([1,2,3]);
            }, 1000); 
    });
  }
  async get title(): string {
        var res =  await Promise.all(this.getTestCount(),this.getTestData());
        return "qwe";
  }
}
