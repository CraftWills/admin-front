import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {
  deleteToggle =false;
  selectedItem =null;
  plan = '';
  constructor(    private route: ActivatedRoute) { }
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
    this.route.queryParams.subscribe(({ plan}) => {
      if (plan) {
        this.plan = plan;
      }  
    });
  }

}
