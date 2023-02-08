import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { UserService } from '../../service/user.service';
import { User } from '../../User';

import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../../components/form/form.component';
// Import login service fot token
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    public loginService: LoginService,
    private router: Router
  ) {}
  displayedColumns: string[] = [
    'no',
    'user',
    'admin',
    'dateCreated',
    'buttons',
  ];

  // Asign clients as properties of component
  users: User[] = [];

  dataSource: any;

  ngOnInit(): void {
    // Used to return Observable
    this.userService
      .getUsers()
      .subscribe(
        (users) => (this.dataSource = new MatTableDataSource<User>(users))
      );
  }

  logOut(): void {
    window.localStorage.setItem('token', '');
    this.router.navigateByUrl('login');
    location.reload();
  }

  addUser(): void {
    this.router.navigateByUrl('sign-up');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editUser(user: User): void {
    console.log(user._id);

    const dialogRef = this.dialog.open(FormComponent, {
      data: {
        _id: user._id,
        user: user.user,
        admin: user.admin,
        type: 'Edit User',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      if (result) {
        user = {
          no: 0,
          user: '',
          password: '',
          admin: false,
        };
      }
    });
  }

  // Give delete button function
  deleteUser(user: User) {
    console.log('Delete', user._id);
    this.userService.deleteUserID(user._id).subscribe((res: any) => {
      console.log(res);
    });
    this.dataSource.setD;
  }
}
