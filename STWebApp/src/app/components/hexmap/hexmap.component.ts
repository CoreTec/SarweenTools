import { Component,Input,ContentChild,TemplateRef,ElementRef } from '@angular/core';

@Component({
  selector: 'hexmap',
  templateUrl:'./hexmap.component.html',
  styleUrls:['./hexmap.component.css']
})
export class HexMapComponent {
  selection: any;
  @Input() data: any[][];
  @ContentChild("hex") itemTemplate: TemplateRef<ElementRef>;
  @ContentChild("editor") editorTemplate: TemplateRef<ElementRef>;
  onClick(hex){
    this.selection = hex;
  };
}
