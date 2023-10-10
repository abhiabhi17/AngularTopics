import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective  implements OnInit{

  constructor(private element:ElementRef,private render:Renderer2) { }
  ngOnInit(): void {
    
  }

  @HostListener('mouseenter')
  OnMouseEnter()
  {
   this.render.setStyle(this.element.nativeElement,'backgroundColor','green');
  }
  @HostListener('mouseleave')
  onMouseOut() 

  {
    this.render.setStyle(this.element.nativeElement,'backgroundColor','yellow');
    //this.render.addClass(this.element.nativeElement,'demo')// demo class styles
  }

}
