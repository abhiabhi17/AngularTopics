import { Component, ContentChild, ContentChildren, ElementRef, Query, QueryList } from '@angular/core';
import { TestComponent } from '../../test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @ContentChild('para') paragrapghEl:ElementRef;
  @ContentChild(TestComponent) testEl:TestComponent;// ContentChild accesing TestComponent
  @ContentChildren('para') paraElements:QueryList<ElementRef>;// access all the template referce with para from parentHtml


  @ContentChildren(TestComponent) testElements:QueryList<TestComponent>;//acces all contente children [name] property from parentHtml


  childButton()
  {
    
    // console.log(this.paragrapghEl.nativeElement);
    // console.log(this.testEl);
   
    // // ContentChildren is used to access all 'para' refernce 
    // this.paraElements.forEach((currentElement)=>{
    //   console.log(currentElement.nativeElement);
    // })


    this.testElements.forEach((el)=>{
      console.log(el);
    })
  
  }

}
