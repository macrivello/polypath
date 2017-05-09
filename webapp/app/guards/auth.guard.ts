import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class  AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    console.log("canActivate");
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }


    // not logged in so redirect to login page with the return url
    console.log("routing to login");
    this.router.navigate(['/login']);
    return false;
  }
}
