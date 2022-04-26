import { Component,ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { passwordValidation, passwordValidationNotMatch, valueChanges } from 'src/app/helper/formerror.helper';
import { HeaderService } from 'src/app/services/header.service';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild('x')
  public x:ElementRef ;
  constructor( private toastr: ToastrService,
    private spinner: NgxUiLoaderService,
    private _fb: FormBuilder,
    private _headerServ: HeaderService,
    private _userServ: UserService) { }
  imageChangedEvent: any = '';
  inputState = true;
  profileData;
  userInfo: FormGroup;
  passwordForm: FormGroup;
  showCropped: boolean = false;
  disablePassword = true;
  croppedImage: any = '';
  showImageUpload: boolean = false;
  genderList = ['Male', 'Female', 'Other'];
  toggleModalTutorial: boolean = false;
  imageSrc: string = '../../../../../assets/Image/male.png';
  showRemoveButton: boolean = true;
  defaultMale = '../../../../../assets/Image/male.png';
  defaultFemale = '../../../../../assets/Image/female.png';
  min_date;
  
  idList = ['NRIC', 'Passport', 'FIN'];
  createForm() {
    this.userInfo = this._fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'),
        ],  ],
        firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'),Validators.maxLength(32)]],
        lastName : ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'),Validators.maxLength(32)]],
        gender:[],
    
      // id_type: [, Validators.required],
      // id_number: ['', [Validators.required ,Validators.pattern('[a-zA-Z0-9]*'),
      // Validators.maxLength(16),]],
      // gender: [],
      // floorNumber: ['', [Validators.required, Validators.maxLength(6)]],
      // unitNumber: ['', [Validators.required, Validators.maxLength(6)]],
      // streetName: ['', [Validators.required,Validators.maxLength(64)]],
      // postalCode: ['', [Validators.required, , Validators.pattern('^[0-9]*$'), Validators.maxLength(12)]],
      // id_country: [''],
      // dob: [],
      // Citizenship: [''],
    });
    this.passwordForm = this._fb.group(
      {
        password: [
          '0000000000000000',
          [Validators.required],
        ],
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: [
          passwordValidation.match('newPassword', 'confirmPassword'),
          // !passwordValidation.match('password', 'newPassword'),
          passwordValidationNotMatch.Notmatch('password', 'newPassword'),
        ],
      }
    );
    this.userInfo.valueChanges.subscribe(() => {
      this.formErrors = valueChanges(
        this.userInfo,
        { ...this.formErrors },
        this.formErrorMessages
      );
    });
    this.passwordForm.valueChanges.subscribe(() => {
      this.formErrors = valueChanges(
        this.passwordForm,
        { ...this.formErrors },
        this.formErrorMessages
      );
    });
  }
  formErrors = {
    firstName :'',
            lastName:'',
            gender:'',
            email:'',
    newPassword: '',
    confirmPassword: '',
    password: '',
  };

  formErrorMessages = {
    gender: {
      required: 'Gender is required.',
    },
    firstName: {
      required: 'Full name is required.',
      maxlength: 'Word limit Exceed..',
      pattern: 'Please enter a valid name',
    },
    lastName: {
      required: 'Full name is required.',
      maxlength: 'Word limit Exceed..',
      pattern: 'Please enter a valid name',
    },
    email: {
      required: 'Email is required.',
      pattern: 'Please enter valid email address.For example johndoe@domain.com ',
    },
    password: {
      required: 'Current password is required.',
      minlength: 'Minimum length of password must be 6',
    },
    
    newPassword: {
      required: 'New Password is required.',
      minlength: 'Minimum length must be 6',
      Notmatching: 'Current Password and New password should Not be same',
    },
    confirmPassword: {
      required: 'Confirm Password is required.',
      matching: 'New Password and confirm password should be same',
    },
  };
  
  ngOnInit(): void {
    this.createForm();
    this.min_date = moment().subtract(18, 'years').format('YYYY-MM-DD');
    this._userServ.getProfile().subscribe(
      (result) => {
        console.log(result);
        
        this.spinner.stop();
        this.profileData=(({ _id,password, ...o }) => o)(result.data);
        this.userInfo.patchValue( (({ subscriptionData, ...o }) => o)(result.data));
        this._headerServ.username.next(result?.data?.firstName+ ' ' +result?.data?.lastName );
        this._headerServ.email.next(result?.data?.email);
        //console.log(result);
        this.setImageHandler(result);
      },(err)=>{
        this.spinner.stop();
        this.toastr.message("Something Went Wrong!!!",false);
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
  }
  DataURIToBlob(dataURI: string) {
    const splitDataURI = dataURI.split(',');
    const byteString =
      splitDataURI[0].indexOf('base64') >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);
    return new Blob([ia], { type: mimeString });
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.showImageUpload = true;
    if (event.target.value.length === 0) {
      this.showImageUpload = false;
    }
    //console.log(event.target.value);
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  
  // click preview button
  showcroppedImage() {
    this.showCropped = !this.showCropped;
  }
  // click cancel button
  onCancel() {
    this.showImageUpload = false;
    this.showCropped = false;
    this.imageChangedEvent = null;
  }
  // click back button
  onBack() {
    this.showCropped = false;
  }
  //on click save
  uploadImage() {
    this.spinner.start();
    let form = new FormData();
    const profilePic = this.DataURIToBlob(this.croppedImage);
    form.append('attachments', profilePic);
    console.log(profilePic);
    console.log(form);

    this._userServ.imageUpload(form).subscribe(
      (result) => {
        this.spinner.stop();
        this.toastr.message(result.message, result.success);
        if (result.success === true) {
          this._headerServ.image.next(this.croppedImage);
          this.imageSrc = this.croppedImage;
          this.showImageUpload = false;
          this.showCropped = false;
          this.showRemoveButton = true;
          this.imageChangedEvent = null;
        }
      },
      (err) => {
        this.spinner.stop();
        this.toastr.message('Something Went Wrong!!!', false);
      }
    );
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
    // click remove button
  remove() {
      this.toggleModalTutorial = false;
      this.spinner.start();
      this._userServ.imageUpload(null).subscribe(
        (result) => {
          this.spinner.stop();
          this.toastr.message(
            result.success ? 'Image Removed SuccessFully' : 'Image Remove Error',
            result.success
          );
          this.setImageHandler(result);
          this.showRemoveButton = false;
        },
        (err) => {
          this.spinner.stop();
          this.toastr.message('Something Went Wrong!!!', false);
        }
      );
  }
  setImageHandler = (result) => {
    if (!result?.profilePic) {
      console.log(result);
      
      this.imageSrc = this.defaultMale;
      this._headerServ.image.next(this.imageSrc);
      this.showRemoveButton = false;
    } else if (
      
      result?.profilePic !== '' &&
      result?.profilePic !== null
      ) {
        console.log(result);
        this.imageSrc = `${environment.serverUrl}${result?.profilePic}`;
        this._headerServ.image.next(this.imageSrc);
    }
  };
    imageLoaded(image: LoadedImage) {
      // show cropper
    }
    changeStatus() {
      if (this.inputState === false) {
        this.userInfo.setValue({ ...this.profileData });
      }
      this.inputState = !this.inputState;
    }
    togglePassword() {
      this.x['type']='password'
      this.passwordForm.reset();
      this.disablePassword = !this.disablePassword;
      if(this.disablePassword===true){
        this.passwordForm.patchValue({
          password:'***************'
        })
      }
    }
    profileUpdate() {
      if (this.userInfo.invalid) {
        this.userInfo.markAllAsTouched();
        this.formErrors = valueChanges(
          this.userInfo,
          { ...this.formErrors },
          this.formErrorMessages
        );
        return;
      }
      this.spinner.start();
      const profiledate = {
        ...this.userInfo.value,
      };
      this._userServ.updateProfile(profiledate).subscribe(
        (result) => {
          console.log(result);
          this.profileData = (({
            firstName ,
            lastName ,
            gender,
            email,
          }) => ({
            firstName ,
            lastName ,
            gender,
            email,
          }))(result.data);
          this.setImageHandler(result);
  
          // this.userInfo.setValue({ ...result.data });
          if (result.success) {
            this.inputState = true;
            this.spinner.stop();
          }
          this.spinner.stop();
          this.toastr.message(result.message, result.success);
        },(err)=>{
          this.spinner.stop();
          this.toastr.message("Something Went Wrong!!!",false);
            });
      this._headerServ.username.next(this.userInfo.value.firstName + ' ' +this.userInfo.value.lastName);
      this._headerServ.email.next(this.userInfo.value.email);
    }
    logout() {
      localStorage.removeItem('user');
    }
    passwordUpdate() {
      if (this.passwordForm.invalid) {
        this.passwordForm.markAllAsTouched();
        this.formErrors = valueChanges(
          this.passwordForm,
          { ...this.formErrors },
          this.formErrorMessages
        );
        return;
      }
      this.spinner.start();
      this._userServ.updatePassword(this.passwordForm.value).subscribe(
        (result) => {
          if (result.success) {
            this.passwordForm.reset();
            this.disablePassword = true;
          }
          this.spinner.stop();
          this.toastr.message(result.message, result.success);
        },
        (err) => {
          this.spinner.stop();
          this.toastr.message(err.message, false);
          //console.log(err);
        }
      );
    }
}
