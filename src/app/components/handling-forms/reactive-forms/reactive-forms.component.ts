import { Component, OnInit } from '@angular/core';
import {
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  userForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      jobData: new FormGroup({
        salary: new FormControl(null, Validators.required),
        duration: new FormControl(null, Validators.required),
      }),
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.forbiddenEmails as AsyncValidatorFn
      ),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      hobbies: new FormArray([]),
    });
  }

  forbiddenEmails(control: FormControl): Observable<any> | Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'demo@gmail.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.userForm.value);
    console.log(this.userForm.get('email')?.hasError('required'));
    // console.log(this.userForm.get('email')?.errors?['required'] );
    this.userForm.reset();
    this.userForm.patchValue({
      name: 'Rehman Ali',
    });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.userForm.get('hobbies')).push(control);
  }
}
