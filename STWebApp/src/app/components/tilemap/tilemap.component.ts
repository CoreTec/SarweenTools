import { Component,Input } from '@angular/core';
import { Tile,TileMap } from '@models'

@Component({
  selector: 'tilemap',
  templateUrl:'./tilemap.component.html',
  styleUrls:['./tilemap.component.css']
})
export class TileMapComponent {
  @Input() map:TileMap
}
