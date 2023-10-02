import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BINDINGSComponent {


  name:string="Abhishek";//interpolation
  courseId:any=123;//property binding
  isDisabled:boolean=false//property binding
  myText="TextColor";//class binding
  myStyle="TextStyle"; //class Binding
  required:boolean=true; // conditional 

  Group={
    "TextStyle":this.required,
    "TextColor":this.required,
  } // ng class binding group of classes declared in css textstyle and textcolor
myColor:string="blue";
  myStyles={
    color:"grey",
    fontStyle:"italic",
    fontSize:"10px"
  }//ng style multiple styles binding
 greetings:string | undefined;
  onClick()
  {
   this.greetings="Event Binding";
  }// Evntt binding

  message(message:any)
  {
console.log(message);
  }// TEMPLATE Refernce
  data:"" | undefined
  status:boolean=true;//ngIf

  myChoice:string="one";//ng switch
   students=[ 'abhi','raj','ram'];//ngFor

   @Input('fromParent')parent: any;//input () component interaction

   @Output() childComponentInfo=new EventEmitter();
   
   fireEvent()
   {
     this.childComponentInfo.emit("Thisis from child component (childcomponent.ts)");
   }
}




