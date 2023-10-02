import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, myRoutings } from './app-routing.module';
import { AppComponent } from './app.component';
import { BINDINGSComponent } from './bindings/bindings.component';

import { CourseDetailsComponent } from './routings/course-details/course-details.component';
import { CourseDurationComponent } from './routings/course-duration/course-duration.component';
import { CourseFeeComponent } from './routings/course-fee/course-fee.component';
import { AdminHomeComponent } from './routings/admin-home/admin-home.component';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { AbcComponent } from './abc/abc.component';
import { User } from './forms/user';
import { FormsModule } from '@angular/forms';


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
    AbcComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
