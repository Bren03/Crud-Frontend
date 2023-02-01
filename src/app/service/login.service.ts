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
  ) {}

  openSnackBar(message: string) {
    this._snackBar.open(message, '', { duration: 3000 });
  }

  loginUser(user: User) {
    // Send web request to create client
    // return this.webReqService.post('users/login', user);
    console.log('User', user);

    this.webReqService.post('users/login', user).subscribe(
      async (response: any) => {
        let token = response.token;

        const decToken: any = await jwt_decode(token);

        this.user = decToken;

        console.log('Auth success', response.message);

        console.log('this.user', this.user);

        this.openSnackBar(response.message);
        // if (decToken.admin == true) {
        //   this.user = true;
        // } else {
        //   this.user = false;
        // }
        this.router.navigateByUrl('clients');

        // return decToken.userID ? true : false;

        // } else {
        //   this.router.navigateByUrl('clients');
        // }
      },
      (error) => {
        console.log('error', error);
        this.openSnackBar(error.error.message);
        // return false;
        // show error message for fqailed logfin
      }
    );
  }
}
