import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {
  deleteToggle =false;
  selectedItem =null;
  plan = '';
  constructor(    private route: ActivatedRoute,    private _subscriptionServe: SubscriptionService,    private toastr: ToastrService,
    private spinner: NgxUiLoaderService,) { }
    userListPlansDisplay= [];
  userListPlans = [
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      lastLogin: 'Tuesday 8:30 A.M',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
  ]
  selectDeletItem(Item) {
    this.deleteToggle = true;
    this.selectedItem = Item;
  }
  remove() {
    console.log(this.selectedItem);
    this.selectedItem = null;
    this.deleteToggle = false;
  }
  ngOnInit(): void {
    this.spinner.start();
    this.route.queryParams.subscribe(({ plan}) => {
      if (plan) {
        this.plan = plan;
      }  
      this._subscriptionServe.getSubscriptionUser().subscribe(
        (result) => {
          console.log(result);
          this.userListPlans =result;
          if (this.plan === '') {
            this.userListPlansDisplay = [...this.userListPlans] ;
          }
          this.userListPlansDisplay = result.filter((el)=>el?.subPlan===this.plan) ;
          this.spinner.stop();
        },
        (err) => {
          this.spinner.stop();
        }
      );
    });
  }

}
