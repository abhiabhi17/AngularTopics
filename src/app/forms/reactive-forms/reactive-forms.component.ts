import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { nameValidator } from 'src/app/customvalidators/user-name.validator';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})

export class ReactiveFormsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  //----------------getuserName is used in Html for displaying validtion erors-------//
  get userName()
  {
    return this.registrationForm.get('userName');
  }
constructor(private fb:FormBuilder){}
// <!-----------------------------FormGroup-------------------->
  // registrationForm=new FormGroup(
  //   {
  //     userName:new FormControl('Abhi'),
  //     password: new FormControl(),
  //     confirmPassword:new FormControl(''),
  //     address:new FormGroup(
  //       {
  //         city:new FormControl(''),
  //         state:new FormControl(''),
  //         pincode:new FormControl('')
  //       }
  //     )
  //   }
  // );
  // displayValues()
  // {
  //   this.registrationForm.setValue(
  //     {
  //       userName: 'testUser',
  //       password: 'testPassword',
  //       confirmPassword: 'testPassword',
  //       address: {
  //         city:'hyd',
  //         state:'hyd',
  //         pincode:'test'
  //       }
  //     }
  //   );
  // }
  registrationForm=this.fb.group({
      userName:['abhi',[Validators.required,Validators.minLength(3)],nameValidator],
      password:[''],
      confirmPassword:[''],
      address:this.fb.group({
        city:[''],
        state:[''],
        pincode:['']

      })

  })
  displayValues()
  {
    this.registrationForm.patchValue(
      {
        userName: 'testUser',
        password: 'testPassword',
        confirmPassword: 'testPassword',
       
      }
    );
  }
}