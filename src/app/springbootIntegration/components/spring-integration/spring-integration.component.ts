import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/employee.model';
import { NgForm } from '@angular/forms';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-spring-integration',
  templateUrl: './spring-integration.component.html',
  styleUrls: ['./spring-integration.component.css'],
  providers:[EmployeeService]
})
export class SpringIntegrationComponent  implements OnInit{
  ngOnInit(): void {
    
  }
  allEmployees:Employee[]=[];
  isFetching:boolean=false;
  @ViewChild('employeesForm') form:NgForm
  editMode:boolean=false;
  currentEmployeeId:string;

  constructor(private employeeService:EmployeeService){}

  onEmployeesFetch()
  {
      this.fetchEmployees();
  }

  onEmployeeCreate(employees:Employee)
  {
    if(!this.editMode)
    this.employeeService.createEmployee(employees);
   // console.log(employees);
    else
    this.employeeService.updateEmployee(this.currentEmployeeId,employees)
  }

  private fetchEmployees()
  {
    this.employeeService.getAllEmployees()
    .subscribe((employees)=>{
      this.allEmployees=employees;

    });
  }
  onDeleteEmployee(id:string)
  {
    this.employeeService.deleteEmployeeById(id);
  }
  deleteEmployees()
  {
    this.employeeService.deleteEmployees();

  }
  onEditEmployeEmployee(id:string)
  {
    //Get the current product id
      this.currentEmployeeId=id;

      let currentEmployee=this.allEmployees.find((p)=>{return p.id ===id })
     //populate the form
      this.form.setValue({
        
        firstName:currentEmployee.firstName,
        lastName:currentEmployee.lastName,
        email:currentEmployee.email})

        //change the button value to update employee
        this.editMode=true;
  }
}
