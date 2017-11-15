import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SuperDuperComponent } from './super-duper/super-duper.component';
import { LoginComponent } from "./login/login.component";



@NgModule({
  imports: [CommonModule , DashboardRoutingModule ,FormsModule],
  declarations: [DashboardHomeComponent, SuperDuperComponent,LoginComponent]
})
export class DashboardModule { }