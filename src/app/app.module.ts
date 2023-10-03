import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, myRoutings } from './app-routing.module';
import { AppComponent } from './app.component';
import { BINDINGSComponent } from './bindings/bindings.component';

import { CourseDetailsComponent } from './routings/course-details/course-details.component';
import { CourseDurationComponent } from './routings/course-duration/course-duration.component';
import { CourseFeeComponent } from './routings/course-fee/course-fee.component';
import { AdminHomeComponent } from './routings/admin-home/admin-home.component';

import { User } from './forms/user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    BINDINGSComponent,
    myRoutings,
    CourseDetailsComponent,
    CourseDurationComponent,
    CourseFeeComponent,
    AdminHomeComponent,
    TemplateDrivenFormComponent,
    ReactiveFormsComponent
 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
