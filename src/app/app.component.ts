import { Component } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  links = [
    {
      name: 'Clients',
      link: 'clients',
    },
    {
      name: 'Users',
      link: 'users',
    },
  ];

  activeLink = 'clients';

  user: any;

  token: any = window.localStorage.getItem('token');

  constructor(public loginService: LoginService) {}
}
