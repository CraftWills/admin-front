import { Component, OnInit } from '@angular/core';

import { valueChanges } from 'src/app/helper/formerror.helper';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthservicesService } from 'src/app/services/authservices.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userLogin: FormGroup;
  message: string;
  placeholder = ['E-mail address', 'password'];
  formData = ['email', 'password'];
  createForm() {
    this.userLogin = this._fb.group({
      email: [
        '',
        [
          Validators.required,
          // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required]],
    });

    this.userLogin.valueChanges.subscribe(() => {
      this.formErrors = valueChanges(
        this.userLogin,
        { ...this.formErrors },
        this.formErrorMessages
      );
    });
  }

  formErrors = {
    email: '',
    password: '',
  };

  formErrorMessages = {
    email: {
      required: 'Email is required.',
      // pattern: 'Please enter valid email address',
    },
    password: {
      required: 'Password is required.',
    },
  };

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthservicesService,
    private _router: Router,
    private toastr: ToastrService,
    private spinner: NgxUiLoaderService,
    private route: ActivatedRoute,
  ) {}

  submit() {
    if (this.userLogin.invalid) {
      //console.log('hello');

      this.userLogin.markAllAsTouched();
      this.formErrors = valueChanges(
        this.userLogin,
        { ...this.formErrors },
        this.formErrorMessages
      );
      return;
    }
    this.spinner.start();
    //console.log(this.userLogin.value);

    this._authService.login(this.userLogin.value).subscribe(
      (result) => {
        //console.log(result);
        this.spinner.stop();
        this.toastr.message(result.message, result.success);
        if (result.success === true) {
          localStorage.setItem('user', result.token);
          this._router.navigate(['/home/dashboard']);
          this.userLogin.reset();
        }
      },
      (err) => {
        if (err.error.text === 'email not found in the database.') {
          this.spinner.stop();
          this.toastr.message('Email Not Found', false);
        }
        else if (err.error.text === 'Invalid password') {
          this.spinner.stop();
          this.toastr.message('Invalid password', false);
        }
else{
        this.spinner.stop();
        this.toastr.message("Something Went Wrong!!!",false);
}

      }
    );
  }
emailMessage=false;
forgetMessage=false;
  ngOnInit(): void {
    this.route.queryParams.subscribe(({ en,fm }) => {
      if (en==="true") {
        this.emailMessage=true;
      }
      if (fm==="true") {
        this.forgetMessage=true;
      }
      
    });
    this.createForm();
  }
}
