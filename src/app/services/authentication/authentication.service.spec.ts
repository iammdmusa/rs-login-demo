import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SigninData } from 'src/app/model/signinData';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('isAuthenticated should return false', () => {
    expect(service.isAuthenticated).toBeFalsy();
  });

  it('authenticate should return false', () => {
    const testUser = new SigninData('a', 'b');
    expect(service.authenticate(testUser)).toBeFalsy();
  });

  it('authenticate should', () => {
    const testUser = new SigninData('test', '11');
    expect(service.checkCredentials(testUser)).toBeTruthy();
  });

  it('logout should work', () => {
    expect(service.logout()).toBeUndefined();
  });
});
