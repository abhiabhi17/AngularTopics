import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent {
  
  parentMsg:string="This is from Parent Component";
msg:string;

}
