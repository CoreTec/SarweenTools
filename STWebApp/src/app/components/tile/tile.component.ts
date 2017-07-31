import { Component,Input } from '@angular/core';
import { Tile } from 'app/models'

@Component({
  selector: 'tile',
  templateUrl: `./tile.component.html`,
  styleUrls:['./tile.component.css']
})
export class TileComponent {
  @Input() tile:Tile;
  onClick():void{
    alert(this.tile.system);
  }
}
