import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent {

  @Input() fromParent;

  @Output() public childInfo=new EventEmitter();

  fireEvent()
  {
    this.childInfo.emit("This is from child");
  }
  

}
