import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { SignUp } from '../../SignUp';
import { UserService } from '../../service/user.service';
import { User } from 'src/app/User';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css'],
})
export class SignUpPageComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private _formBuilder: FormBuilder
  ) {}

  openSnackBar(message: string) {
    this._snackBar.open(message, '', { duration: 3000 });
  }

  adminUser = this._formBuilder.group({
    admin: false,
    notAdmin: false,
  });

  userSingUp: SignUp = {
    user: '',
    password: '',
    admin: false,
  };

  cancel(): void {
    this.router.navigateByUrl('clients');
  }

  signUp() {
    console.log('create a user.....', this.userSingUp);
    this.userService.createUser(this.userSingUp).subscribe((response: any) => {
      console.log(response);
      this.openSnackBar(response.message);
      this.router.navigateByUrl('clients');
    });
  }
}
