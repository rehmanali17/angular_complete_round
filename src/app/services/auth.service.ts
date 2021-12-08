import { Router } from '@angular/router';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  loggedIn = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logIn() {
    this.loggedIn = true;
    this.router.navigate(['/users/view-users']);
  }

  logOut() {
    this.loggedIn = false;
    this.router.navigate(['/users/add-users']);
  }
}
