import { Component,Input } from '@angular/core';
import { Tile } from '@models'

@Component({
  selector: 'tile',
  templateUrl:'./tile.component.html',
  styleUrls:['./tile.component.css']
})
export class TileComponent {
  @Input() model:Tile;
}
