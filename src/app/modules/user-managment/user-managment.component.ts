import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { valueChanges } from 'src/app/helper/formerror.helper';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.scss'],
})
export class UserManagmentComponent implements OnInit {
  InviteUserForm: FormGroup;
  deleteToggle = false;
  selectedItem;
  constructor(
    private _userServ: UserService,
    private _subscriptionServe: SubscriptionService,
    private toastr: ToastrService,
    private _fb: FormBuilder,
    private spinner: NgxUiLoaderService
  ) {}
  toggleModal = false;
  tableKeys = ['name', 'email', 'subDate', 'expDate', 'lastLogin'];

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
    'Last Login',
  ];
  userManagmentData = [
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
  ngOnInit(): void {
    this.createForm();
    this._subscriptionServe.getSortByuser().subscribe(
      (result) => {
        console.log(result);
        
        this.spinner.stop();
        this.userManagmentData = result?.data?.map((items, i) => {
          console.log(items);

          return {
            Name: 'Husain Ali',
            email: 'alisdhfiohsidof@.com',
            subDate: '10-10-2020',
            expDate: '10-10-2020',
            lastLogin: 'Tuesday 8:30 A.M',
            // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
            image: '../../../../../assets/Image/male.png',
            isDeletable: true,
          };
        });
      },
      (err) => {
        this.spinner.stop();
      }
    );
  }

  selectDeletItem(Item) {
    this.deleteToggle = true;
    this.selectedItem = Item;
  }
  remove() {
    console.log(this.selectedItem);
    this.selectedItem = null;
    this.deleteToggle = false;
  }
  addNewUser() {
    if (this.InviteUserForm.invalid) {
      //console.log('is 3');
      this.InviteUserForm.markAllAsTouched();
      this.formErrors = valueChanges(
        this.InviteUserForm,
        { ...this.formErrors },
        this.formErrorMessages
      );
      return;
    }
    console.log('add new user');
  }
  createForm() {
    this.InviteUserForm = this._fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
          Validators.maxLength(32),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'),
        ],
      ],
      plan: [, [Validators.required]],
      planDuration: [, [Validators.required]],
    });
    this.InviteUserForm.valueChanges.subscribe(() => {
      this.formErrors = valueChanges(
        this.InviteUserForm,
        { ...this.formErrors },
        this.formErrorMessages
        );
    });
  }
  formErrors = {
    name: '',
    email: '',
    plan: '',
    planDuration: '',
  };

  formErrorMessages = {
    name: {
      required: 'Full Name is required.',
      pattern: 'Invalid Name',
      maxlength: 'Invalid Name',
    },
    email: {
      required: 'Email is required.',
      pattern:
        'Please enter valid email address.For example johndoe@domain.com ',
    },
    plan: {
      required: 'Please select Plan.',
    },
    planDuration: {
      required: 'Please select SubscriptionPlan.',
    },
  
  };
}
