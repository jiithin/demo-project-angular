import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  description:string="Please fill this form"
  css_styles:string="text-danger fw-bold"
  username:string=""

  constructor(private loginRouter:Router, private ds:DataService){}

   getUserName(event:any){
     console.log(event.target.value);
     this.username=event.target.value
  }


  login(pswd:any){
    if(this.username){
    console.log(pswd.value);
    this.ds.loginUserName=this.username;
    alert(`username is ${this.username} and password is ${pswd.value}`)
    this.loginRouter.navigateByUrl('home')
    }
    
  }

  
}
