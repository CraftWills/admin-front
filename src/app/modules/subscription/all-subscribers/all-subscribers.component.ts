import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-all-subscribers',
  templateUrl: './all-subscribers.component.html',
  styleUrls: ['./all-subscribers.component.scss']
})
export class AllSubscribersComponent implements OnInit {

  constructor( private _subscriptionServe: SubscriptionService,    private toastr: ToastrService,
    private spinner: NgxUiLoaderService) { }
    allSubscribersDisplay=[];
    allSubscribers = []


AllSubscriberslist(){
  this._subscriptionServe.getSubscriptionUser().subscribe((result)=>{

    this.allSubscribers = result ;

    this.allSubscribersDisplay = [...this.allSubscribers];
    console.log(this.allSubscribersDisplay);
  })

}


  onSorting(value) {
    console.log(value);
    
    if (value === 'All') {
      this.allSubscribersDisplay = this.allSubscribers;
    } else {
      this.allSubscribersDisplay = this.allSubscribers.filter(
        (item) => item.subPlan === value
        );
      }
  }

  ngOnInit(): void {

  this.AllSubscriberslist()
  }

}
