import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SigninData } from 'src/app/model/signinData';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly mockedUser: SigninData = new SigninData('test', '11');

  isAuthenticated = false;
  constructor(private router: Router) {}

  authenticate(signinData: SigninData): boolean {
    if (this.checkCredentials(signinData)) {
      this.isAuthenticated = true;
      this.router.navigate(['dashboard']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  //used public for Test case unless private will be safe.
  public checkCredentials(signinData: SigninData): boolean {
    //In Real life sinario will check auth serives
    return (
      this.checkEmail(signinData.getEmail()) &&
      this.checkPassword(signinData.getPassword())
    );
  }

  private checkEmail(email: string): boolean {
    return email === this.mockedUser.getEmail();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockedUser.getPassword();
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}
