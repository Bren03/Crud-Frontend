import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import token to be used
// import jwt_decode from 'jwt-decode';

import { LoginService } from 'src/app/service/login.service';

import { User } from 'src/app/User';

import { AES } from 'crypto-js';
var CryptoJS = require('crypto-js');
const secretKey: string = 'secret key 123';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  formData: User = {
    user: '',
    password: '',
  };
  token = '';

  constructor(private router: Router, public loginService: LoginService) {}

  async logIn() {
    // encript password
    const encPassword = CryptoJS.AES.encrypt(
      this.formData.password,
      secretKey,
      { mode: CryptoJS.mode.ECB }
    ).toString();
    console.log(encPassword);
    // this.formData.password = encPassword;

    // decrypt password
    const decPassword = AES.decrypt(encPassword, secretKey);
    const originPassword = decPassword.toString(CryptoJS.enc.Utf8);

    /*

      Log in
      normaluser = user: "testUser",  "password": "testUserpassword"
      adminuser = user: "testAdminUser",  "password": "testAdminPassword"

    */

    this.loginService.loginUser(this.formData);

    /*.subscribe((response: any) => {
      this.token = response.token;
      console.log(this.token);
      const decToken: any = jwt_decode(this.token);
      console.log(decToken);
      if (decToken.admin) {
        this.router.navigateByUrl('clients');
      } else {
        this.router.navigateByUrl('clients');
      }
    });*/

    // this.router.navigateByUrl('clients');
  }

  ngOnInit() {
    console.log('ngoninit', this.loginService.user);
    if (this.loginService.user) {
      this.router.navigateByUrl('/clients');
    }
  }
}
