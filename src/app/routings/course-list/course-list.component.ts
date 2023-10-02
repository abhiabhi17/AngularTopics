import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent  implements OnInit{
  constructor(private activatedRoute:ActivatedRoute,private router:Router){}
selectedId:any;
  ngOnInit(): void {
 this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
  let id=params.get('id');
  this.selectedId=id;
 })
  }
course=[

  {"id":1,"name":"Angular"},
  {"id":2,"name":"React"},
  {"id":3,"name":"Spring"},
  {"id":4,"name":"Microservices"},
  {"id":5,"name":"SpringBoot"},
]

//on select course,navigates to another link with courseid
c:any;
onSelect(c: { id: any; })
{

 //this.router.navigate(['/course',c.id]);//abosulte routing
 this.router.navigate([c.id],{relativeTo:this.activatedRoute});
}


isSelected(c:any)
{
  return c.id === this.selectedId;
}
}
