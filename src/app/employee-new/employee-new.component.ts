import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeeNewComponent implements OnInit {

  public name:string = ''; // property bind []
  public lastName:string = ''; // reativa [(ngModel)]

  constructor() { 
    setTimeout(()=>{ this.name = "Mateus meu filho lindo" },3000)
  }

  ngOnInit(): void {}

}
