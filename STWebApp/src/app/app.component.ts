import { Component } from '@angular/core';
import { TileMap } from '@models';

@Component({
  selector: 'app-root',
  template: '<tilemap [map]="map"></tilemap>'
})
export class AppComponent {
  map: TileMap;
  constructor() {
    this.map = new TileMap();
    this.map.tiles = [];
    for (let q = 0; q < 20; q++) {
      this.map.tiles[q] = [];
      for (let w = 0; w < 20; w++){
        if( (5-q)*(5-q)+(5-w)*(5-w)>30)continue;
        var rnd=Math.round( Math.random()*2);
        this.map.tiles[q][w] = { content: "qwe",system:"tile" + rnd };
      }
    }
  }
}
