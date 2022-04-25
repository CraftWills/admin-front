import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './subscription.component';
import { PlansComponent } from './plans/plans.component';
import { AllSubscribersComponent } from './all-subscribers/all-subscribers.component';
import { SubcriptionComponent } from './subcription/subcription.component';
import { PerformanceComponent } from './plans/performance/performance.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';


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
    SubscriptionRoutingModule,
    NgSelectModule,
    SharedModule
  ]
})
export class SubscriptionModule { }
