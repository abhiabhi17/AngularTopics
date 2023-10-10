import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHover]'
})
export class AppHoverDirective  implements OnInit{
  
  constructor(private element:ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {
   
  }
  @HostBinding('style.backgroundColor') backgroundColor:string='pink';
  @HostBinding('style.border') border:string='none';
  @HostBinding('style.color') textColor:string='black';


  @HostListener('mouseenter')
  onMouseEnter()
  {
    
  this.backgroundColor='white';
  this.textColor='black';
  this.border= 'black 3px solid';
  }
  @HostListener('mouseleave')
  onMouseOut()
  {
   
  this.backgroundColor='pink';
  this.textColor='none';
  this.border= 'black ';
  }
}
