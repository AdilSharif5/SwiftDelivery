import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor() {
    this.signupForm = new FormGroup({
      email: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
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
