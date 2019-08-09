import { Injectable } from '@angular/core';
import { Router , CanActivate } from '@angular/router';
import { LoginComponent} from './login/login.component';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /*canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error("Method not implemented.");
  }*/
  constructor(private _authservice:LoginComponent,private _router:Router){

  }
  canActivate():boolean{
    if(this._authservice.loggedIn()){
      console.log("canActivate method");
      return true
    }
    else{
      this._router.navigate(['/login'])
      return false
    }
  }
  
}
