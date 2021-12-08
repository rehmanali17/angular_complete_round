import { UserService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-basics',
  templateUrl: './services-basics.component.html',
  styleUrls: ['./services-basics.component.css'],
  // providers: [UserService],
})
export class ServicesBasicsComponent implements OnInit {
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
}
