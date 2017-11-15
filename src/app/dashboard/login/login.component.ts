import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'app-super-duper',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message: string;

//  bean = new Dashboard();
  constructor(private auth: AuthService,private router:Router) {
        this.setMessage();

   }
      setMessage() {
    this.message = 'Logged ' + (this.auth.isLoggedIn ? 'in' : 'out');
  }

login(){

  
      this.message = 'Trying to log in ...';
        this.auth.login().subscribe(() => {
      this.setMessage();
      if (this.auth.isLoggedIn) {
        // Todo: capture where the user was going and nav there.
        // Meanwhile redirect the user to the crisis admin
        this.router.navigate(['/admin/super-duper']);
      }
    });

}
    logout(){
      this.auth.logout();
    this.setMessage();
    }
}