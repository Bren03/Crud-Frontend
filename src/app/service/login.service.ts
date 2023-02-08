import { Injectable } from '@angular/core';

// Use to make function Observable
// import { Observable, of } from 'rxjs';
import { User } from '../User';

import jwt_decode from 'jwt-decode';

import { WebrequestService } from './webrequest.service';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: any;

  constructor(
    private webReqService: WebrequestService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    // const token = window.localStorage.getItem('token');
    // console.log('service token', token);
    // this.user = { name: '123', admin: true };
    // DO BACKEND CHECK
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', { duration: 3000 });
  }

  async validateToken(token: any) {
    // const token = window.localStorage.getItem('token');
    const body = {
      token: token,
    };
    await this.webReqService
      .post(`users/validate`, body)
      .subscribe(async (response: any) => {
        console.log('response', response);

        window.localStorage.setItem('token', response.token);
        const decToken: any = await jwt_decode(response.token);
        this.user = decToken;

        this.router.navigateByUrl('clients');
        // Do stuff with response
      });
  }

  loginUser(user: User) {
    // Send web request to login user
    console.log('User', user);
    const token = window.localStorage.getItem('token');
    this.webReqService.post(`users/login?token=${token}`, user).subscribe(
      async (response: any) => {
        let token = response.token;
        window.localStorage.setItem('token', token);

        const decToken: any = await jwt_decode(token);
        this.user = decToken;

        console.log('Auth success', response.message);
        console.log('this.user', this.user);

        this.openSnackBar(response.message);
        this.router.navigateByUrl('clients');
      },
      (error) => {
        console.log('error', error);
        this.openSnackBar(error.error.message);
        // show error message for failed logfin
      }
    );
  }
  signUpUser(user: User) {
    // Send web request to login user
    console.log('User', user);
    const token = window.localStorage.getItem('token');
    this.webReqService.post(`users/login?token=${token}`, user).subscribe(
      async (response: any) => {
        let token = response.token;
        window.localStorage.setItem('token', token);

        const decToken: any = await jwt_decode(token);
        this.user = decToken;

        console.log('Auth success', response.message);
        console.log('this.user', this.user);

        this.openSnackBar(response.message);
        this.router.navigateByUrl('signUp');
      },
      (error) => {
        console.log('error', error);
        this.openSnackBar(error.error.message);
        // show error message for failed logfin
      }
    );
  }
}
