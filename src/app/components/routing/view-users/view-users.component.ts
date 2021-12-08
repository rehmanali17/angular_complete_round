import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
})
export class ViewUsersComponent implements OnInit {
  constructor(private route: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  handleClick(
    name: HTMLInputElement,
    allowedit: HTMLSelectElement,
    fragment: HTMLInputElement
  ) {
    this.route.navigate([`/users/user-details/${name.value}`], {
      queryParams: { allowedit: allowedit.value },
      fragment: fragment.value,
    });
  }

  logOut() {
    this.authService.logOut();
  }
}
