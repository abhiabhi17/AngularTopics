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
import { HttpCurdComponent } from './HttpRequests/http-curd/http-curd.component';
import {HttpClientModule} from '@angular/common/http'
import { ProductService } from './HttpRequests/service/products.service';


import { EmployeeService } from './springbootIntegration/service/employee.service';
import { SpringIntegrationComponent } from './springbootIntegration/components/spring-integration/spring-integration.component';
import { ParentComponent } from './contentChild/parent/parent/parent.component';
import { ChildComponent } from './contentChild/child/child/child.component';
import { TestComponent } from './contentChild/test/test.component';
import { ParentCompComponent } from './@Input@output/parentComp/parent-comp/parent-comp.component';
import { ChildCompComponent } from './@Input@output/childComp/child-comp/child-comp.component';
import { DemoComponent } from './CustomDirectives/demo/demo.component';
import { SetBackground } from './CustomDirectives/SetBackground.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { AppHoverDirective } from './CustomDirectives/app-hover.directive';

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
    ReactiveFormsComponent,
    HttpCurdComponent,
    SpringIntegrationComponent,
    ParentComponent,
    ChildComponent,
    TestComponent,
    ParentCompComponent,
    ChildCompComponent,
    DemoComponent,
    SetBackground,
    HighlightDirective,
    AppHoverDirective
   
 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [ProductService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
