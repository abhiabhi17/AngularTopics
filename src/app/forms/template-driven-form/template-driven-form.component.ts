import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  userModel=new User('abhi','abhi@@gmail.com','deeveloper','male','default',true);
  courseHasError=true;
  course=['Angular','Spring','SpringBoot','Microservices'];
  ValidateCourse(value:any)
  {
    if(value === 'default')
    {
      this.courseHasError=true;
    }
    else{
      this.courseHasError=false;
    }
  }
  onSubmit(value:any)
  {
    console.log(this.userModel);
  }

}
