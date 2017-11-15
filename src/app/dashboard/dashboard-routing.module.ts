import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SuperDuperComponent } from './super-duper/super-duper.component';
import { AdminGuard } from '../auth/guards/admin.guard';
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "../auth/guards/auth.guard";

const routes: Routes = [
  
  {
    path: '',
    component: DashboardHomeComponent,
   
    children: [
      {
        path: 'super-duper',
        component: SuperDuperComponent,
         canActivate: [AuthGuard],
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }