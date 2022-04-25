import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagmentRoutingModule } from './user-managment-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserManagmentComponent } from './user-managment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    UserManagmentComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    UserManagmentRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class UserManagmentModule { }
