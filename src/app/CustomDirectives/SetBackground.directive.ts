import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]',//Register this directive in appmodule in declaratuons

})
export class SetBackground implements OnInit{
    constructor(private element:ElementRef,private renderer:Renderer2){
        this.renderer=renderer;
    }
    ngOnInit(): void {
        // We cannot directly modify the DOM So We Use Rendere//
    // this.element.nativeElement.style.backgroundColor='red';
    //    this. element.nativeElement.style.color='yellow';

     this.renderer.setStyle(this.element.nativeElement,'backgroundColor','red');
     this.renderer.setStyle(this.element.nativeElement,'color','white');
     this.renderer.setAttribute(this.element.nativeElement,'title','This is Example Title');
     
    }


}