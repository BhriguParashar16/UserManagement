import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {OperationsService } from '../operations.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm:any;
  localStorage:any;
  constructor(private auth2:OperationsService) {     
    this.logInForm = new FormGroup({
    email : new FormControl('',Validators.email),
    password : new FormControl(),
   });

  }
  ngOnInit() {
  }


  loginUser(){
    console.log("In loginUser method"+this.logInForm.value.email);
    let email = this.logInForm.value.email ;
    let password = this.logInForm.value.password ;


    this.auth2.logIn(email, password).subscribe((value)=>{
      console.log(value);
      this.localStorage=value;
    })
  }

  loggedIn(){
     return !!this.localStorage.getItem('token');
    //return true
  }

}
