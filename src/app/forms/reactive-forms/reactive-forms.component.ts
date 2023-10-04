import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,FormArray, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/customvalidators/password.validator';
import { nameValidator } from 'src/app/customvalidators/user-name.validator';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})

export class ReactiveFormsComponent implements OnInit {
  registrationForm:FormGroup | any;
  ngOnInit() {
    this.registrationForm=this.fb.group({
      userName:['abhi',[Validators.required,Validators.minLength(3),nameValidator(/admin/)]], // admin username is not allowed
      email:[''],
      subscribe:[false],
      password:[''],
      confirmPassword:[''],
      address:this.fb.group({
        city:[''],
        state:[''],
        pincode:['']
     }),
     alternateEmails:this.fb.array([]),
      
  },{validator:PasswordValidator});
  this.registrationForm.get('subscribe').valueChanges
  .subscribe((checkedValue: any) =>{
    const email=this.registrationForm.get('email');
    if(checkedValue)
    {
      email.setValidators(Validators.required);
    }else{
      email.clearValidators;
    }
    email.updateValueAndValidity();
  });
  }
  //----------------getuserName is used in Html for displaying validtion erors-------//
  get userName()
  {
    return this.registrationForm.get('userName');
  }
  //-------------getEmail for eror validations in view page-------------//
  get email()
  {
    return this.registrationForm.get('email');
  }

  //----------------get Alertnative emails for--------------- 
  get alternateEmails()
  {
    return this.registrationForm.get('aleternateEmails') as FormArray;
  }

  //--- for adding dynamically add formcontrol------------//

  addAlternateEmail()
  {
   
    this.alternateEmails.push(this.fb.control(''));
    

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

  //--------------------------------FORMBUILDER-------------------------//

  displayValues()
  {
    this.registrationForm.patchValue(
      {
       
        password: 'testPassword',
        confirmPassword: 'testPassword',
       
      }
    );
  }
}
