import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/model/loginData';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser = new LoginData('admin@yourstore.com', 'admin');
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(logInData: LoginData): boolean {
    if (this.checkCredentials(logInData)) {
      this.isAuthenticated = true;
      this.router.navigate(['dashboard']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(logInData: LoginData): boolean {
    return this.checkEmail(logInData.getEmail()) && this.checkPassword(logInData.getPassword())
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
