import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-subcription',
  templateUrl: './subcription.component.html',
  styleUrls: ['./subcription.component.scss']
})
export class SubcriptionComponent implements OnInit {

  constructor(private _subscriptionServe: SubscriptionService,    private toastr: ToastrService,
    private spinner: NgxUiLoaderService) { }

  subscriptionHistoryDisplay=[];
  filtertoggle ;
  subscriptionHistory = [
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
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
      subPlan: 'Gold Subscription',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      price:  '$199.00',
      status:  'expire',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subPlan: 'Gold Subscription',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      price:  '$199.00',
      status:  'expire',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subPlan: 'Gold Subscription',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      price:  '$199.00',
      status:  'expire',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subPlan: 'Gold Subscription',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      price:  '$199.00',
      status:  'expire',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subPlan: 'Gold Subscription',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      price:  '$199.00',
      status:  'expire',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
  ]
  subscriptionStats 


  filterHandler(value){
    console.log(value);
    this.filtertoggle=value;
    this.subscriptionHistoryDisplay=[...this.subscriptionHistory];
    this.subscriptionHistoryDisplay =this.subscriptionHistory.filter((el)=>el.status === value) 
  }
  AllSubscriberslist(){
    this._subscriptionServe.getSubscriptionUser().subscribe((result)=>{
      this.spinner.stop();
      this.subscriptionHistory = result ;
  
      this.subscriptionHistoryDisplay = [...this.subscriptionHistory];
      console.log(this.subscriptionHistoryDisplay);
    }),
    (err) => {
      this.spinner.stop();
      this.toastr.message('Something Went Wrong!!!', false);
    };
  
  }
  getTabsdata(){
    this._subscriptionServe.getSubscriptionStats().subscribe((result)=>{
      this.spinner.stop();
      this.subscriptionStats = result ;
        console.log(this.subscriptionStats);
    }),
    (err) => {
      this.spinner.stop();
      this.toastr.message('Something Went Wrong!!!', false);
    };
  }

  ngOnInit(): void {
    this.spinner.start();
    this.subscriptionHistoryDisplay=[...this.subscriptionHistory];
    this.getTabsdata() ;
    this.AllSubscriberslist() ;
  }

}
