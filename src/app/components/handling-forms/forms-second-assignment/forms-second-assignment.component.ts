import {
  FormGroup,
  FormControl,
  Validators,
  AsyncValidatorFn,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forms-second-assignment',
  templateUrl: './forms-second-assignment.component.html',
  styleUrls: ['./forms-second-assignment.component.css'],
})
export class FormsSecondAssignmentComponent implements OnInit {
  userForm!: FormGroup;
  projectsTaken = ['Scenario', 'Analytics', 'Server'];
  constructor() {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        this.checkExistingProject.bind(this),
      ]),
      mail: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.checkExistingEmails as AsyncValidatorFn
      ),
      status: new FormControl('Pending', Validators.required),
    });
  }

  checkExistingProject(
    control: FormControl
  ): { [key: string]: boolean } | null {
    if (this.projectsTaken.includes(control.value)) {
      return { nameIsTaken: true };
    } else {
      return null;
    }
  }

  checkExistingEmails(
    control: FormControl
  ): Observable<any> | Promise<boolean> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'demo@gmail.com') {
          resolve({ emailIsTaken: true });
        } else {
          resolve(null);
        }
      }, 500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.userForm.value);
    // console.log(this.userForm.get('name')?.hasError('minlength'));
  }
}
