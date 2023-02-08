import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { UsersComponent } from './pages/users/users.component';

import { AuthGuardService as AuthGuard } from './service/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: 'clients',
    component: ClientsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
