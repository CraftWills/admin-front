import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-subcription',
  templateUrl: './subcription.component.html',
  styleUrls: ['./subcription.component.scss']
})
export class SubcriptionComponent implements OnInit {

  constructor(private _subscriptionServe: SubscriptionService) { }

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
  
      this.subscriptionHistory = result ;
  
      this.subscriptionHistoryDisplay = [...this.subscriptionHistory];
      console.log(this.subscriptionHistoryDisplay);
    })
  
  }
  getTabsdata(){
    this._subscriptionServe.getSubscriptionStats().subscribe((result)=>{

      this.subscriptionStats = result ;
        console.log(this.subscriptionStats);
    })
  }

  ngOnInit(): void {
    this.subscriptionHistoryDisplay=[...this.subscriptionHistory];
    this.getTabsdata() ;
    this.AllSubscriberslist() ;
  }

}
