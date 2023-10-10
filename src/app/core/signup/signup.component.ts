import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private loaderService: NgxUiLoaderService,
    private toastrService: ToastrService
  ) {
    this.signupForm = new FormGroup({
      email: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  log() {
    console.log('log it to the console!');
  }

  ngOnInit() {}

  onPasswordConfirmPasswordChange() {
    const formData = this.signupForm.value;
    if (formData.password !== formData.confirmPassword) {
      this.setBtnEffect(true);
    } else {
      this.setBtnEffect(false);
    }
  }

  onRegister() {
    if (!this.signupForm.invalid) {
      this.loaderService.start();
      const formData = this.signupForm.value;

      // this.authService.login(this.loginForm.value).then(
      //   (res: any) => {
      //     console.log('Login successful...');
      //     this.spinner.stop();
      //   },
      //   (err: any) => {
      //     this.toastrService.error(err, 'Login Error');
      //     this.spinner.stop();
      //   }
      // );
    } else {
      this.toastrService.error(
        'Please enter the valid credentials',
        'Login Error'
      );
    }
    this.loaderService.stop();
  }

  setBtnEffect(status: boolean) {
    const btnHandlers = document.querySelectorAll('.hover-handler');
    Array.from(btnHandlers).forEach((btn) => {
      console.log('active' in btn.classList);
      if (status) {
        if (!('active' in btn.classList)) btn.classList.add('active');
      } else {
        if (!('active' in btn.classList)) btn.classList.remove('active');
      }
    });
  }
}
