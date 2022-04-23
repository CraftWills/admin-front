import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ProfileComponent } from '../profile/profile.component';
import { DetailsComponent } from '../promocodes/details/details.component';
import { PromocodesComponent } from '../promocodes/promocodes.component';
import { AllSubscribersComponent } from '../subscription/all-subscribers/all-subscribers.component';
import { PerformanceComponent } from '../subscription/plans/performance/performance.component';
import { PlansComponent } from '../subscription/plans/plans.component';
import { SubcriptionComponent } from '../subscription/subcription/subcription.component';
import { SubscriptionComponent } from '../subscription/subscription.component';
import { UserManagmentComponent } from '../user-managment/user-managment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:"",
    canActivate:[AuthGuard],
    component:HomeComponent,
    children:[
      {
        path : "",
        canActivate:[AuthGuard],
        redirectTo:"dashboard",
      },
      {
        path:"dashboard",
        canActivate:[AuthGuard],
         component:DashboardComponent,
       },
      {
       path:"user",
        canActivate:[AuthGuard],
        component:UserManagmentComponent,
      },
      {
        path:"promocodes",
         canActivate:[AuthGuard],
         component:PromocodesComponent,
       },
       {
        path:"promocode-detail",
         canActivate:[AuthGuard],
         component:DetailsComponent,
       },
       {
        path:"profile",
         canActivate:[AuthGuard],
         component:ProfileComponent,
       },
      {
       path:"subscription",
      canActivate:[AuthGuard],
        component:SubscriptionComponent,
        children: [
          {
            path:"",
            canActivate:[AuthGuard],
             component:SubcriptionComponent,
           },
          {
            path:"plans",
            canActivate:[AuthGuard],
             component:PlansComponent,
           },
           {
            path:"all-subscribers",
            canActivate:[AuthGuard],
             component:AllSubscribersComponent,
           },
           {
            path:"performance",
             canActivate:[AuthGuard],
             component:PerformanceComponent,
           },
        ]
      },
      // {
      //  path:"subscriptionHistory",
      //  canActivate:[AuthGuard],
      //   component:SubscriptionHistoryComponent,
      // },

    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
