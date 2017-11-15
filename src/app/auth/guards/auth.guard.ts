import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    alert("Can Activate");
    // redirect and return false
    if (this.auth.isLoggedIn) { return true; }
    this.router.navigate(['/admin/login']);
    return false;
     
  }
}
