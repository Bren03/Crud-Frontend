import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import token to be used
import { LoginService } from 'src/app/service/login.service';

import { User } from '../../User';

import { AES } from 'crypto-js';

var CryptoJS = require('crypto-js');
const secretKey: string = 'secret key 123';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  adminUser = {
    user: 'testAdminUser',
    password: 'testAdminPassword',
  };
  loginUser = {
    user: 'testUser',
    password: 'testUserPassword',
  };

  formData: User = {
    user: '',
    password: '',
  };
  token = '';

  constructor(private router: Router, public loginService: LoginService) {}

  async logIn() {
    // encript password
    if (this.formData.user == '' && this.formData.password == '') {
      this.formData = {
        user: 'testAdminUser',
        password: 'testAdminPassword',
      };
    }

    const encPassword = CryptoJS.AES.encrypt(
      this.formData.password,
      secretKey,
      { mode: CryptoJS.mode.ECB }
    ).toString();
    console.log(encPassword);

    // decrypt password
    const decPassword = AES.decrypt(encPassword, secretKey);
    const originPassword = decPassword.toString(CryptoJS.enc.Utf8);

    /*
      Log in
      normaluser = user: "testUser",  "password": "testUserpassword"
      adminuser = user: "testAdminUser",  "password": "testAdminPassword"
    */

    this.loginService.loginUser(this.formData);
  }

  async ngOnInit() {
    const token = window.localStorage.getItem('token');
    console.log('WE HAVE A TOKEN ', token);
    await this.loginService.validateToken(token);
    // console.log('ngoninit', this.loginService.user);
    // console.log('formdata', this.formData);
    // if (this.loginService.user) {
    //   this.router.navigateByUrl('clients');
    // }
  }
}
