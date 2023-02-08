import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css'],
})
export class ClientsPageComponent {
  constructor(private router: Router, public loginService: LoginService) {}

  //   ngOnInit() {
  //     console.log('ngoninit', this.loginService.user);
  //     // if (!this.loginService.user) {
  //     //   this.router.navigateByUrl('/login');
  //     // }
  //   }

  //   ngAfterViewInit() {
  //     console.log('ngAfterViewInit');
  //   }
}
