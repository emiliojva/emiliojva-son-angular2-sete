import { Component, OnInit } from '@angular/core';
import { Employee } from '../mocks/employees';
import {employees} from '../mocks/employees';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Array<Employee> = employees;

  constructor() { }

  ngOnInit(): void {
  }

}
