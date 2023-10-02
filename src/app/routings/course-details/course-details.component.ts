import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit{
  constructor(private route:Router,private activatedRoute:ActivatedRoute){}
  courseId: any;
  ngOnInit(): void {
  //let cId=this.activatedRoute.snapshot.paramMap.get('id');
  //this.courseId=cId;
  this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
    let id=params.get('id');
    this.courseId=id;
  })
  }
//-------------------------------------- To Navigate to previous id in course details
  toPrevious()
  {
   let previousId= this.courseId-1;
   //this.route.navigate(['/course',previousId]);//absoulte routing
   this.route.navigate([{id:previousId}],{relativeTo:this.activatedRoute}) //relative routing
  }

  //------------------------To Navigate to next page id in course Details
  toNext()
  {
    //let nextId=this.courseId;
    let nextId= Number (this.courseId) +1;

   //this.route.navigate(['/course',nextId]);//absoluate routing
    this.route.navigate([{id:nextId}],{relativeTo:this.activatedRoute})
  }
  //-----------------------------------------to go back the course
  goBack()
  {
    let selectedId=this.courseId?this.courseId:null;
    //this.route.navigate(['/course',{id:selectedId}]);//absoulute routing
    this.route.navigate(['../',{id:selectedId,}],{relativeTo:this.activatedRoute})//relative navigation (in future if the link changes it works)
  }
  showDuration()
  {
    this.route.navigate(['duration'],{relativeTo:this.activatedRoute});
  }
 showFee()
 {
  this.route.navigate(['fee'],{relativeTo:this.activatedRoute})
 }
}
