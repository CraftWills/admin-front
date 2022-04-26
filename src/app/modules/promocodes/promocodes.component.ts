import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { debounceTime, retry } from 'rxjs';
import { valueChanges } from 'src/app/helper/formerror.helper';
import { PromocodeService } from 'src/app/services/promocode.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { NumberCode } from 'src/app/shared/utils/NumberCode';
@Component({
  selector: 'app-promocodes',
  templateUrl: './promocodes.component.html',
  styleUrls: ['./promocodes.component.scss'],
})
export class PromocodesComponent implements OnInit {
  searchForm = new FormControl('');
  createPromoForm: FormGroup;
  massPromoForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _promoServ: PromocodeService,
    private toastr: ToastrService,
    private spinner: NgxUiLoaderService,
    private route: Router,
  ) {}
  deleteToggle = false;
  CreateToggle = false;
  uploadToggle = false;
  selectedItem;
  promoListDisplay = [];
  promoList = [];
  min_date;
  selectDeletItem(Item) {
    this.deleteToggle = true;
    this.selectedItem = Item;
  }

  public cars: any = NumberCode;
  createForm() {
    this.createPromoForm = this._fb.group({
      discountPromocode:[
        '',
        [Validators.required, Validators.pattern('[a-zA-Z0-9]*'),Validators.maxLength(20)],
      ],
      createdOn: [(new Date()).toISOString().slice(0, 10)],
      discountType:[, [Validators.required]],
      discountValue:  ['', [Validators.required, Validators.pattern('^[0-9]*$'),Validators.maxLength(16)]],
      expireOn  :[moment().format('YYYY-MM-DD'), [Validators.required]],
      usage  : ['', [Validators.required, Validators.pattern('^[0-9]*$'),Validators.maxLength(16)]],
      appliesTo :['entireOrder', [Validators.required]],
      expireDateType:['Not expire',],
      currencyType:[]
    });
    this.createPromoForm.valueChanges.subscribe(() => {
      this.formErrors = valueChanges(
        this.createPromoForm,
        { ...this.formErrors },
        this.formErrorMessages
        );
    });
    this.massPromoForm = this._fb.group({
      file: [],
    });
  }
  formErrors = {
      discountPromocode:'',
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
    this.spinner.start();
    this.min_date = moment().format('YYYY-MM-DD');
    this.createForm();
    this.searchForm.valueChanges.pipe(debounceTime(200)).subscribe((e) => {
      this.onSearchHandler();
    });
    this.callPromoListHandler();
  }
  onActionRoute(id){
    this.route.navigate([`/home/promocode-detail`], { queryParams:{id:id}})
  }
  remove() {
    console.log(this.selectedItem._id);

    this.deleteToggle = false;
    this._promoServ.deletePromo(this.selectedItem?._id).subscribe(
      (result) => {
        console.log(result);
        this.callPromoListHandler();
        this.selectedItem = null;
        this.spinner.stop();
        this.toastr.message(result.message, result.success);
      },
      (err) => {
        this.spinner.stop();
        this.selectedItem = null;
        this.toastr.message('Something Went Wrong!!!', false);
      }
    );
  }
  callPromoListHandler() {
    this._promoServ.getPromo().subscribe((result) => {
      console.log(result);
      this.spinner.stop();
      this.promoList = result.data.map((el: any) => {
        return {
          discountPromocode: el?.discountPromocode,
          discountType: el?.discountType,
          discountValue: el?.discountValue,
          createdOn: el?.createdOn,
          image: '../../../../../assets/Image/male.png',
          _id: el._id,
        };
      });

      this.promoListDisplay = [...this.promoList];
    }),
    (err) => {
      this.spinner.stop();
      this.toastr.message('Something Went Wrong!!!', false);
    };
  }
  fileData ;
  upload(e){
    console.log(e.target.files[0]);
    this.fileData = e.target.files[0];
    console.log(this.fileData);
    
    //pick from one of the 4 styles of file uploads below
    // this.uploadAndProgress(files);
  }
  uploadMassPromo() {
    console.log(this.massPromoForm.value.file);
    
    this.spinner.start();

    this._promoServ.csvUpload('form').subscribe(
      (result) => {
        this.spinner.stop();
        this.toastr.message(result.message, result.success);
      },
      (err) => {
        this.spinner.stop();
        this.toastr.message('Something Went Wrong!!!', false);
      }
    );
  }
  createPromo() {
    if (this.createPromoForm.invalid) {
      this.createPromoForm.markAllAsTouched();
      this.formErrors = valueChanges(
        this.createPromoForm,
        { ...this.formErrors },
        this.formErrorMessages
      );
      //console.log('invalid');

      return;
    }
    this.spinner.start();
const data ={
  ...this.createPromoForm.value,
  expireOn:this.createPromoForm.value.expireDateType==='date'?this.createPromoForm.value.expireOn:this.createPromoForm.value.expireDateType
}
    this._promoServ.createPromo(data).subscribe(
      (result) => {
        this.callPromoListHandler();
        this.CreateToggle=false;
        this.spinner.stop();
        this.toastr.message(result.message, result.success);
      },
      (err) => {
        this.spinner.stop();
        this.toastr.message('Something Went Wrong!!!', false);
      }
    );
    this.createPromoForm.reset();
    this.createPromoForm.patchValue({
      appliesTo :'entireOrder',
      expireDateType:'Not expire',        
      expireOn:moment().format('YYYY-MM-DD')
    })
  }
  onSearchHandler() {
    if (this.searchForm.value === null || this.searchForm.value === '') {
      this.promoListDisplay = [...this.promoList];
    }
    this.promoListDisplay = this.promoList.filter((items) => {
      for (const property in items) {
        console.log(items[property]);
        if (
          items[property]
            ?.toString()
            ?.toLowerCase()
            ?.includes(this.searchForm.value?.toLowerCase())
        ) {
          return items;
        }
      }

      return false;
    });
  }
}
