import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  apiUrl:string = "https://reqres.in/api/";


  constructor(private http:HttpClient) {

    console.log();

    //this.listAll();
      
   }


  logIn(email,password){
    console.log("Log In Method");
    let query = this.apiUrl+"login";

     let params = {
      params : new HttpParams().set("email",email).set("password",password)
      }
     return this.http.post(query,params);


  }

  logOut(){
    console.log("Log In Method");
  }

  register(email, password){
     console.log("Register Method ");
     let query = this.apiUrl+"register";

     let params = {
      params : new HttpParams().set("email",email).set("password",password)
      }
     return this.http.post(query,params);
  }

  listAll(page, per_page){
    console.log("ListAll Method");

    let query = this.apiUrl+"users";

    let params = {
      params : new HttpParams().set("page","1").set("per_page","10")
    }
    return this.http.get(query,params);
    
  }

  searchUserbyName(){
    console.log("Log In Method");
  }

  updateDetails(){
    console.log("Update Method");
  }

  deleteUser(){
    console.log("Delete Method");
  }

  createUser(){

  }

}
