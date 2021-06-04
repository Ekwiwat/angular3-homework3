
//File location in login folder and file name login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from '../model/loginData';
import { AuthenticationService } from '../service/authenticatio/authentication.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isFormInvalid = false;
  areCredentialsInvalid = false;



  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void { }

  onSubmit(logInForm: NgForm) {
    if (!logInForm.valid) {
      this.isFormInvalid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(logInForm);

  }

  private checkCredentials(logInForm: NgForm) {
    const logInData = new LoginData(logInForm.value.email, logInForm.value.password);
    if (!this.authenticationService.authenticate(logInData)) {
      this.isFormInvalid = false;
      this.areCredentialsInvalid = true;
    }

  }

}
// import { Component, OnInit } from '@angular/core';
// import { FormControl, Validators } from '@angular/forms';




// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   hide = true;

//   email = new FormControl('', [Validators.required, Validators.email]);

//   getErrorMessage() {
//     if (this.email.hasError('required')) {
//       return 'You must enter a value';
//     }

//     return this.email.hasError('email') ? 'Not a valid email' : '';
//   }

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
