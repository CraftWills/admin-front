import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private spinner: NgxUiLoaderService,
    private _subscriptionServe: SubscriptionService,
    private _userServ: UserService,
    private _router: Router,
  ) {}
  plansList = [];
  plansListDisplay = [
    {
      planName: 'Trial',
      price: '0',
      planDescription: '',
    },
  ];
  onViewPerformance(value){
    if (value.planName==='month') {
      this._router.navigate(['/home/subscription/performance'], { queryParams:{plan:'1 month'}});
      return;
    }
    this._router.navigate(['/home/subscription/performance'], { queryParams:{plan:value.planName}});
  }
  ngOnInit(): void {
    this.spinner.start();
    this._subscriptionServe.getPlansList().subscribe(
      (result) => {
        console.log(result.data);
        this.plansList = result.data.map((el) => {
          return {
            planName: el.planName,
            price: el.price,
            planDescription: el.planDescription,
          };
        });
        this.plansListDisplay =[...this.plansList]
        this.spinner.stop();
      },
      (err) => {
        this.spinner.stop();
      }
    );
  }
}
