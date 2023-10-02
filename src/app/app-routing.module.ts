import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './routings/student-list/student-list.component';
import { CourseListComponent } from './routings/course-list/course-list.component';
import { PageNotFoundComponent } from './routings/page-not-found/page-not-found.component';
import { CourseDetailsComponent } from './routings/course-details/course-details.component';
import { CourseDurationComponent } from './routings/course-duration/course-duration.component';
import { CourseFeeComponent } from './routings/course-fee/course-fee.component';
import { AdminHomeComponent } from './routings/admin-home/admin-home.component';
import { adminAccessGuard } from './routings/admin-access.guard';

const routes: Routes = [
  {path:'',redirectTo:'/student',pathMatch:'full'},
  {path:'admin',
     component:AdminHomeComponent,
    canActivate: [adminAccessGuard]
   },
  {path:'student',component:StudentListComponent},
  {path:'course-list',component:CourseListComponent},
  {path:'course-list/:id',component:CourseDetailsComponent,
   children:[
    {path:'duration',component:CourseDurationComponent},
    {path:'fee',component:CourseFeeComponent}
   ]},
  { path: 'faculty', loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule) },
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
export const myRoutings=[

StudentListComponent,
CourseListComponent,
PageNotFoundComponent,
CourseDetailsComponent,
CourseDurationComponent,
CourseFeeComponent
]

