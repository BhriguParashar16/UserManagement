import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { OperationsService } from '../operations.service' ;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
 
  usersData:any ;
  searchResult:any;
  serchKey:string ;

  constructor(private breakpointObserver: BreakpointObserver, private auth:OperationsService) {
    this.getAllUsers()
      console.log(this.searchResult);

  }


  getAllUsers(){
    return new Promise((resolve,reject)=>{
      this.auth.listAll(1,12).subscribe((val:any) =>{ 
        // console.log(data);
         this.usersData = val.data;
         resolve(this.usersData);
         },reject);
    })
    
  }

  searchByName(){
          console.log(this.usersData);
     this.searchResult = this.usersData.filter((item)=>{
        if(item.first_name == this.serchKey){
          return item;
        }
      })
      console.log(this.searchResult);
}


}
