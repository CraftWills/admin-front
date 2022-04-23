import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { valueChanges } from 'src/app/helper/formerror.helper';
import { PromocodeService } from 'src/app/services/promocode.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private _promoServ: PromocodeService,
    private router: Router,
    private _fb: FormBuilder,
    private toastr: ToastrService,
    private spinner: NgxUiLoaderService,
  ) {}
  id = '';
  EditToggle = false;
  promoData = {
    discountPromocode: '',
    createdOn: '',
    ExpireOn: '',
    UsedOn: '',
    totalDiscount: '',
  };
  min_date;
  EditPromoForm: FormGroup;
  promoUserList = [
    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subPlan: 'Gold',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      status: 'Active',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },

    {
      name: 'Husain Ali',
      email: 'alisdhfiohsidof@.com',
      subPlan: 'Gold',
      subDate: '10-10-2020',
      expDate: '10-10-2020',
      status: 'Active',
      // actionRoute: 'this.assetsServices.getAssetsData(items)?.actionRoute',
      image: '../../../../../assets/Image/male.png',
    },
  ];

  createForm() {
    this.EditPromoForm = this._fb.group({
      specifyOwnershipType: [''],
      discountPromocode: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9]*'),
          Validators.maxLength(20),
        ],
      ],
      createdOn: [new Date().toISOString().slice(0, 10)],
      discountType: [, [Validators.required]],
      discountValue: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.maxLength(16),
        ],
      ],
      expireOn  :[moment().format('YYYY-MM-DD'), [Validators.required]],
      usage  : ['', [Validators.required, Validators.pattern('^[0-9]*$'),Validators.maxLength(16)]],
      appliesTo :['entireOrder', [Validators.required]],
      expireDateType:['Not expire',]
    });
    this.EditPromoForm.valueChanges.subscribe(() => {
      this.formErrors = valueChanges(
        this.EditPromoForm,
        { ...this.formErrors },
        this.formErrorMessages
      );
    });
  }
  formErrors = {
    discountPromocode: '',
    discountType: '',
    discountValue: '',
    usage: '',
  };

  formErrorMessages = {
    discountPromocode: {
      required: 'Promocode is required.',
      maxlength: 'Please enter valid Promocode',

      pattern: 'Please enter valid Promocode',
    },
    discountType: {
      required: 'Select Type',
    },
    discountValue: {
      required: 'Discount value is required.',
      maxlength: 'Please enter valid number',
      pattern: 'Only numeric values allowed',
    },
    usage: {
      required: 'Usage value is required.',
      maxlength: 'Please enter valid number',
 pattern: 'Only numeric values allowed',
    },
  };
  ngOnInit(): void {
    this.min_date = moment().format('YYYY-MM-DD');
    this.createForm();
    this.route.queryParams.subscribe(({ id }) => {
      if (id) {
        this.id = id;
      }
    });
    this.callPromoListHandler();
  }
  updatePromo() {
    if (this.EditPromoForm.invalid) {
      this.EditPromoForm.markAllAsTouched();
      this.formErrors = valueChanges(
        this.EditPromoForm,
        { ...this.formErrors },
        this.formErrorMessages
      );
      //console.log('invalid');

      return;
    }
    this.spinner.start();
    const data ={
      ...this.EditPromoForm.value,
      expireOn:this.EditPromoForm.value.expireDateType==='date'?this.EditPromoForm.value.expireOn:this.EditPromoForm.value.expireDateType
    }
    this._promoServ.editPromo(data,this.id).subscribe(
      (result) => {
        this.callPromoListHandler();
        this.EditToggle=false;
        this.spinner.stop();
        this.toastr.message(result.message, result.success);
      },
      (err) => {
        this.spinner.stop();
        this.toastr.message('Something Went Wrong!!!', false);
      }
    );
  }
  callPromoListHandler() {
    this._promoServ.getPromo().subscribe((result) => {
      console.log(result);
      this.promoData = result.data.find((el: any) => {
        return el._id === this.id;
      });
      if (!this.promoData) {
        this.router.navigate([`/home/promocodes`]);
      }
      this.EditPromoForm.patchValue(this.promoData);
    });
  }
}
