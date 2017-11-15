import { Component } from '@angular/core';
// import { Router } from "@angular/router";



import { Dashboard } from "../dashboard";
import { AuthService } from "../../auth/auth.service";



@Component({
  
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent  {

  constructor(){}
  // message: string;

//  bean = new Dashboard();
//   constructor(private auth: AuthService,private router:Router) {
//         this.setMessage();

//    }
//       setMessage() {
//     this.message = 'Logged ' + (this.auth.isLoggedIn ? 'in' : 'out');
//   }

// login(){
//   //  alert(this.bean.password);
//   // if(this.bean.name=="admin" && this.bean.password=="admin"){
//   //   alert("Logged in successfully");
   
//   // }
//   // else{
//   //   alert("Login failed :( ");
//   // }
  
//       this.message = 'Trying to log in ...';
//         this.auth.login().subscribe(() => {
//       this.setMessage();
//       if (this.auth.isLoggedIn) {
//         // Todo: capture where the user was going and nav there.
//         // Meanwhile redirect the user to the crisis admin
//         this.router.navigate(['/admin/super-duper']);
//       }
//     });

// }
//     logout(){
//       this.auth.logout();
//     this.setMessage();
//     }

}