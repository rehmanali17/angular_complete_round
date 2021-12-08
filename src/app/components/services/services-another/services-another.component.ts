import { UserService } from './../../../services/users.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-another',
  templateUrl: './services-another.component.html',
  styleUrls: ['./services-another.component.css'],
  // providers: [UserService],
})
export class ServicesAnotherComponent implements OnInit, OnDestroy {
  userElements: { name: string; status: boolean }[] = [];

  constructor(private userService: UserService) {
    this.userService.statusUpdated.subscribe((users) => {
      this.userElements = users;
    });
  }

  ngOnInit(): void {
    this.userElements = this.userService.users;
  }

  updateStatus(id: number) {
    const status = !this.userElements[id].status;
    this.userService.updateStatus(id, status);
  }

  ngOnDestroy(): void {
    console.log('Component Destroyed');
  }
}
