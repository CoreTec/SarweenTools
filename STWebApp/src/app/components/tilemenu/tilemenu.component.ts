import { Component,Input } from '@angular/core';

@Component({
  selector: 'tilemenu',
  templateUrl:'./tilemenu.component.html',
  styleUrls:['./tilemenu.component.css']
})
export class TileMenuComponent {
  @Input() model: any;
}
