import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.loggedIn === true) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.loggedIn === true) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}

// export class AuthGuardService implements CanActivateChild {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivateChild(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     if (this.authService.loggedIn === true) {
//       return true;
//     } else {
//       this.router.navigate(['/']);
//       return false;
//     }
//   }
// }
