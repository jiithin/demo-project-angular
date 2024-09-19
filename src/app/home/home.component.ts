import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  username:string=""
  user:string=""

  hobbies:string=""

  allEmployee:any=[
    {empId:100,empName:"max",empSalary:5000},
    {empId:101,empName:"perez",empSalary:4000},
    {empId:102,empName:"leclarc",empSalary:7000},
    {empId:103,empName:"louis",empSalary:6000},
    {empId:104,empName:"sainz",empSalary:8000},
  ]

  constructor(private ds:DataService){
    this.user=this.ds.loginUserName
    
  }
}
