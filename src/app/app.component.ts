import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTopics';

  parentMsg:string="This is Parent Component (app component message)";
  msg:String | undefined;
}
