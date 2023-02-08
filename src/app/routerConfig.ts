// routerConfig.ts

import { Routes } from '@angular/router';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: 'clients',
    component: ClientsPageComponent,
  },
  { path: 'signUp', component: SignUpFormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginPageComponent },
];
export default appRoutes;
