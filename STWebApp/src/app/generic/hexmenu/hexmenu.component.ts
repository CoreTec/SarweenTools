import { Component,Input,ElementRef,ContentChildren,QueryList } from '@angular/core';

@Component({
  selector: 'hexmenu',
  templateUrl:'./hexmenu.component.html',
  styleUrls:['./hexmenu.component.css']
})
export class HexMenuComponent {
    @Input() model:any;
    @ContentChildren(ElementRef) buttons: QueryList<ElementRef>
    ngAfterContentInit() {
      this.buttons.forEach(tabInstance => console.log(tabInstance))
    }
}
