import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [{
  path: '',
  redirectTo : 'login',
  pathMatch : 'full'
},
{
  path: 'dashboard',
  component :DashboardComponent,
  
},
{
  path: 'login',
  component :LoginComponent
},
{
  path: 'register',
  component :RegisterComponent
},
{
  path: '**',
  component :ErrorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
