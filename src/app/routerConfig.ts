// routerConfig.ts

import { Routes } from '@angular/router';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: 'clients',
    component: ClientsPageComponent,
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginPageComponent },
];
export default appRoutes;
