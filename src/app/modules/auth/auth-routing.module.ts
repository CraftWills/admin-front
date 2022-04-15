import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterLoginGuard } from 'src/app/guards/after-login.guard';
import { AuthComponent } from './auth.component';
import { ForgetComponent } from './components/forget/forget.component';
import { LoginComponent } from './components/login/login.component';
import { ResetComponent } from './components/reset/reset.component';

const routes: Routes = [
  {
    path : "",
    // canActivate:[AfterLoginGuard],
    component : AuthComponent,
    children  : [
      {
        path : "",
        // canActivate:[],
        redirectTo:"login",
      },
      {
        path : "login",
        // canActivate:[AfterLoginGuard],
        component: LoginComponent,
      },

      {
        path:'forgetPassword',
        // canActivate:[AfterLoginGuard],
        component:ForgetComponent,
      },
      {
        path:"resetpassword/:id",
        canActivate:[AfterLoginGuard],
        component:ResetComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
