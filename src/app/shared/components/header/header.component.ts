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
  email: string = 'helloo';
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
      this.username = name?.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
    });
    this._headerServ.email.subscribe((email) => {
      this.email = email;
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
   setImageHandler = (result) => {
    if (!result?.profilePic) {
      console.log(result);
      
      this.imageSrc = this.defaultMale;
      this._headerServ.image.next(this.imageSrc);
    } else if (
      
      result?.profilePic !== '' &&
      result?.profilePic !== null
      ) {
        console.log(result);
        this.imageSrc = `${environment.serverUrl}${result?.profilePic}`;
        this._headerServ.image.next(this.imageSrc);
    }
  };
  ngOnInit(): void {
    this.spinner.start();
    this.route.queryParams.subscribe(({ wid,re}) => {
      if (wid) {
        this.wid = wid;
      }

     
    });
   

    this._headerServ.image.subscribe((image) => {
      console.log(image);
      
      this.imageSrc = image;
    });
    
    this._userServ.getProfilePic().subscribe(
      (result) => {
        this.spinner.stop();
      console.log(result);
      this.setImageHandler(result);
      },(err)=>{
        this.spinner.stop();
        this.toastr.message("Something Went Wrong!!!",false);
          });

          this._userServ.getProfile().subscribe(
            (result) => {
            console.log(result);
            this._headerServ.username.next(result?.data?.firstName+ ' ' +result?.data?.lastName );
        this._headerServ.email.next(result?.data?.email);
        
        this.setImageHandler(result);
      
            },(err)=>{
              this.spinner.stop();
              this.toastr.message("Something Went Wrong!!!",false);
                });
  }
}
