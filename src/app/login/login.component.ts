import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SigninData } from '../model/signinData';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'rs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isFormValid = false;
  areCredentialsInvalid = false;
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}
  onSubmit(signInForm: NgForm) {
    if (!signInForm.valid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCreditentials(signInForm);
  }

  private checkCreditentials(signInForm: NgForm) {
    const signinData = new SigninData(
      signInForm.value.email,
      signInForm.value.password
    );
    if (!this.authenticationService.authenticate(signinData)) {
      this.isFormValid = false;
      this.areCredentialsInvalid = true;
    }
  }
}
