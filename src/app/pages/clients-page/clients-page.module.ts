import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsPageRoutingModule } from './clients-page-routing.module';
import { ClientsPageComponent } from './clients-page.component';


@NgModule({
  declarations: [
    ClientsPageComponent
  ],
  imports: [
    CommonModule,
    ClientsPageRoutingModule
  ]
})
export class ClientsPageModule { }
