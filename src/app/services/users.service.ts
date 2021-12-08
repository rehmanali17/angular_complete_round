import { OnInit, Output, EventEmitter, Injectable } from '@angular/core';

import { LogService } from './log.service';

@Injectable()
export class UserService implements OnInit {
  users = [
    { name: 'A', status: false },
    { name: 'B', status: false },
    { name: 'C', status: false },
    { name: 'D', status: false },
    { name: 'E', status: false },
    { name: 'F', status: false },
    { name: 'G', status: false },
    { name: 'H', status: false },
    { name: 'I', status: false },
    { name: 'J', status: false },
  ];
  @Output() statusUpdated = new EventEmitter<any>();

  constructor(private logService: LogService) {}

  ngOnInit() {}

  updateStatus(id: number, status: boolean) {
    this.users[id].status = status;
    this.logService.logStatus(status === true ? 'Active' : 'DeActivate');
    this.statusUpdated.emit(this.users);
  }
}
