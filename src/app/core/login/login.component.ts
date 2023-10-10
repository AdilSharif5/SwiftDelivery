import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private loaderService: NgxUiLoaderService,
    private toastrService: ToastrService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  async onLogin() {
    const timer = setTimeout(() => {
      if (!this.loginForm.invalid) {
        this.loaderService.start();
        const formData = this.loginForm.value;
        if (formData.username === 'Admin' && formData.password === 'Admin') {
          this.router.navigate(['v1/projects']);
        }
      } else {
        this.toastrService.error(
          'Please enter the valid credentials',
          'Login Error'
        );
      }
      this.loaderService.stop();
    }, 1000);
    return false;
  }

  ngOnInit() {}
}
