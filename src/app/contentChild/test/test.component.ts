import { Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

 @Input() name:String='';
  @ContentChild('paratest') paraTest:ElementRef;
  testcomponent()
  {
   console.log(this.paraTest.nativeElement);

  }

}
