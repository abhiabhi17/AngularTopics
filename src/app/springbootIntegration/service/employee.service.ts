import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Employee } from "../model/employee.model";
import { map } from "rxjs";

@Injectable({
    "providedIn":"root"
})
export class EmployeeService implements OnInit
{
    ngOnInit(): void {
        
    }
    constructor(private httpClient:HttpClient){}
    private baseUrl='http://localhost:8080/api/employees';

    //-------- Add Employee------//
    createEmployee(employees:Employee)
    {
        this.httpClient.post(`${this.baseUrl}/save`,employees).subscribe();
    }

    //------Get all Employees----//
    getAllEmployees()
    {http://localhost:8080/api/employees/getAll

        return this.httpClient.get<{[key:string]:Employee}>(`${this.baseUrl}/getAll`)
        
        .pipe(map((res)=>{
            const employees=[];
            for (const key in res)
            {
                if(res.hasOwnProperty(key))
                {
                    employees.push({...res[key],id:key})
                }
            }
            return employees;
        }));
    }
    //-----Delete by id-----------

    deleteEmployeeById(id:number)
    {
        
        this.httpClient.delete(`${this.baseUrl}/delete/${id}`).subscribe();
    }

    //--- Delete all Employees-----
    deleteEmployees()
    {
        this.httpClient.delete('http://localhost:8080/api/employees/deleteAll').subscribe();
    }


    //-------- Update Employee-----
     updateEmployee(id:string,value:Employee)
     {
        this.httpClient.put('http://localhost:8080/api/employees/'+id,value).subscribe();
     }
}