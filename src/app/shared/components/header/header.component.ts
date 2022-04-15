import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HeaderService } from 'src/app/services/header.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment.prod';
import { ToastrService } from '../../services/toastr.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username: string = 'helloo';
  imageSrc: string = '';
  defaultMale = '../../../../assets/Image/male.png';
  defaultFemale = '../../../../assets/Image/female.png';
  toggleModal: boolean = false;
  latestWillId='';
  latestWillData=[];
  constructor(
    public router: Router,
    public _headerServ: HeaderService,
    private _userServ: UserService,
    private spinner: NgxUiLoaderService,
    private toastr: ToastrService,
    private _route:Router,
    private route: ActivatedRoute,
  ) {
    this._headerServ.username.subscribe((name) => {
      this.username = name.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
    });
  }
  key = ['willType', 'date'];
  logout() {
    localStorage.removeItem('user');
  }
  latestWill() {
    console.log('latest Will');
    this._route.navigate([`will/createWill`], { queryParams:{wid:this.latestWillId}});
  }
  willpresent=false;
  wid='';
  routeToWill(){
    
  }
  ngOnInit(): void {
    // this.spinner.start();
    this.route.queryParams.subscribe(({ wid,re}) => {
      if (wid) {
        this.wid = wid;
      }

     
    });
   

    this._headerServ.image.subscribe((image) => {
      // this.imageSrc = image;
    });
    
    this.imageSrc = this.defaultMale;

  }
}
