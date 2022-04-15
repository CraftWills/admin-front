import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './subscription.component';
import { PlansComponent } from './plans/plans.component';
import { AllSubscribersComponent } from './all-subscribers/all-subscribers.component';
import { SubcriptionComponent } from './subcription/subcription.component';
import { PerformanceComponent } from './plans/performance/performance.component';


@NgModule({
  declarations: [
    SubscriptionComponent,
    PlansComponent,
    AllSubscribersComponent,
    SubcriptionComponent,
    PerformanceComponent
  ],
  imports: [
    CommonModule,
    SubscriptionRoutingModule
  ]
})
export class SubscriptionModule { }
