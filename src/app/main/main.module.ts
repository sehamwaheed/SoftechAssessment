import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
     
  ]
})
export class MainModule { }
