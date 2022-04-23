import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { Chart, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { SubscriptionService } from 'src/app/services/subscription.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  constructor(
    private toastr: ToastrService,
    private spinner: NgxUiLoaderService,
    private _subscriptionServe: SubscriptionService,
    private _userServ: UserService
  ) {
    Chart.register(...registerables);
  }
  totalWill=0;
  totalActiveWills=0;
  currentSubscribedUsers=0;
  tableKeys = ['name', 'email', 'subDate', 'expDate'];

  userData = [];
  classes = [
    'w-1/5 break-all hidden md:flex text-sm',
    'w-1/5 break-all hidden md:flex text-sm',
    'w-1/5 break-all hidden md:flex text-sm',
    'w-1/5 break-all hidden md:flex text-sm',
    'w-1/5 break-all hidden md:flex text-sm',
  ];
  tableHeadings = [
    'Name',
    'Email Address',
    'Subscription Date',
    'Expiry Date',
  ];
  chart1: any = [];
  ngOnInit(): void {
    this._subscriptionServe.getSubscriptionUser().subscribe(
      (result) => {
        console.log(result);
        this.userData = result ;
        this.spinner.stop();
      },
      (err) => {
        this.spinner.stop();
      }
    );
    this.GraphData();
    this._userServ.getStats().subscribe((result)=>{
if (result.success==true) {
  this.currentSubscribedUsers =result?.currentSubscribedUsers;
this.totalActiveWills=result?.totalActiveWills;
this.totalWill=result?.totalWill;
}
    });
  }

  GraphData() {
    this._userServ.getStats().subscribe(
      (result) => {
        console.log(result);
        
        this.spinner.stop();
        const canvas = <HTMLCanvasElement>document.getElementById('canvas');
        const ctx = canvas?.getContext('2d');
        var gradientFill = ctx?.createLinearGradient(500, 0, 100, 0);
        gradientFill.addColorStop(0, 'rgba(254, 103, 130, 0.33)');
        gradientFill.addColorStop(0.5, 'rgba(254, 103, 130, 0.2)');
        gradientFill.addColorStop(1, 'rgba(254, 103, 130, 0)');
        this.chart1 = new Chart(ctx, {
          type: 'line',
          data: {
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
            datasets: [
              {
                tension: 0.1,
                fill: true,
                data: [
                  3000, 3400, 8500, 6002, 5200, 4200, 4020, 4900, 4000, 2400,
                  2000, 8000,
                ],
                // borderColor: '#1c4865',
                hoverBackgroundColor: '#FF8672',
                hoverBorderColor: '#FF8672',
                label: '',
                borderWidth: 2,
                backgroundColor: gradientFill,
                borderColor: 'purple',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)',
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
              intersect: false,
            },
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                min: 0,
                ticks: {},
                beginAtZero: true,
                grid: {
                  display: false,
                },
              },
              y: {
                min: 0,
                beginAtZero: true,
                grid: {
                  display: false,
                },
              },
            },
          },
        });
      },
      (err) => {
        this.spinner.stop();
      }
    );
  }
}
