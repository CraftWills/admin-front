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
  allSubscribers = [
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subPlan: 'free',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      price:  '$199.00',
      status:  'Active',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subPlan: 'month',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      price:  '$199.00',
      status:  'Active',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subPlan: 'free',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      price:  '$199.00',
      status:  'Active',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subPlan: 'month',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      price:  '$199.00',
      status:  'Active',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subPlan: 'free',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      price:  '$199.00',
      status:  'Active',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subPlan: 'month',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      price:  '$199.00',
      status:  'Active',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subPlan: 'free',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      price:  '$199.00',
      status:  'Active',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subPlan: 'month',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      price:  '$199.00',
      status:  'Active',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subPlan: 'free',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      price:  '$199.00',
      status:  'Active',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subPlan: 'month',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      price:  '$199.00',
      status:  'Active',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
  ]
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
    this.allSubscribersDisplay = [...this.allSubscribers];
    this._subscriptionServe.getSubscriptionUser().subscribe(
      (result) => {
        console.log(result);
        // this.allSubscribers= result?.data?.map((el)=>{
        //     console.log(el);
            
        //    return { name: el.name,
        //     email: el.name,
        //     subPlan: el.subPlan,
        //     subDate: el.subDate,
        //     expDate: el.expDate,
        //     price:  el.price,
        //     status:  el.status,
        //     // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
        //     image: '../../../../../assets/Image/male.png',}
        //      })
        this.spinner.stop();
        // this.allSubscribersDisplay = [...this.allSubscribers];
      },
      (err) => {
        this.spinner.stop();
      }
    );
  }

}
