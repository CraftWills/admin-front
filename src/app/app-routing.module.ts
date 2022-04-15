import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path : "",
    loadChildren : ()=>import("./modules/auth/auth.module").then(m1=>m1.AuthModule)
  },
  {
    path : "subscription",
    loadChildren : ()=>import("./modules/subscription/subscription.module").then(m2=>m2.SubscriptionModule)
  },
  {
    path : "user",
    loadChildren : ()=>import("./modules/user-managment/user-managment.module").then(m2=>m2.UserManagmentModule)
  },
  {
    path : "home",
    loadChildren : ()=>import("./modules/home/home.module").then(m2=>m2.HomeModule)
  },
  {
    path:'**',
    redirectTo:'login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
