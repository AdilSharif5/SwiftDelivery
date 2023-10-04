import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private loaderService: NgxUiLoaderService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  async onLogin() {
    this.loaderService.start();

    const timer = setTimeout(() => {
      if (this.loginForm.valid) {
        const formData = this.loginForm.value;
        if (formData.username === 'Admin' && formData.password === 'Admin') {
          this.router.navigate(['v1/projects']);
        }
      } else {
        console.error('Please enter the valid credentials', 'Login Error');
      }
      this.loaderService.stop();
    }, 3000);
    return false;
  }

  ngOnInit() {}
}
