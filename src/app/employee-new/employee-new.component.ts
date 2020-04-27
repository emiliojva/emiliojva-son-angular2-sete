import { Component, OnInit } from '@angular/core';
import {employees as employeesMock, Employee} from '../mocks/employees';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeeNewComponent implements OnInit {

  employee: Employee;
  // public name:string = ''; // property bind []
  // public salary:number = 0;
  public lastName:string = ''; // reativa [(ngModel)]
  // employees:Array<any> = [];
  employees:Array<Employee> = employeesMock;

  constructor() {
    // setTimeout(()=>{ this.name = "Mateus meu filho lindo" },3000)
    this.employee = {name:'',salary:0};
  }

  ngOnInit(): void {

  }

  addEmployee(event){

    let copy = Object.assign({},this.employee);
    // this.employees.push(this.name);
    copy.salary = copy.salary >= 1000 ? 0 : copy.bonus;
    this.employees.push(copy);
    console.log(this.employees);
  }

  echo(){
    return JSON.stringify(this.employees);
  }

}
