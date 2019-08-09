import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  registerForm:any;
  constructor(private auth:OperationsService) { 
    this.registerForm = new FormGroup({
      username : new FormControl(),
      first_name : new FormControl(),
      last_name : new FormControl(),
      email: new FormControl('',Validators.email),
      password: new FormControl('')
    });
}

  ngOnInit() {
  }

  registerUser(){
    console.log(this.registerForm.value.email);
    let email = this.registerForm.value.email ;
    let password = this.registerForm.value.password ;


    this.auth.register(email, password).subscribe((value)=>{
      console.log(value);
    })


  }
}
