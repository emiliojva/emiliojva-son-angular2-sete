import { Component, OnInit } from '@angular/core';
import {employees as employeesMock, Employee} from '../mocks/employees';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeeNewComponent implements OnInit {

  public name:string = ''; // property bind []
  public salary:number = 0;
  public lastName:string = ''; // reativa [(ngModel)]
  // employees:Array<any> = [];
  employees:Array<Employee> = employeesMock;

  constructor() {
    // setTimeout(()=>{ this.name = "Mateus meu filho lindo" },3000)
  }

  ngOnInit(): void {}

  addEmployee(event){
    // this.employees.push(this.name);
    this.employees.push({name:this.name, salary:this.salary});
    console.log(this.employees);
  }

  echo(){
    return JSON.stringify(this.employees);
  }

}
