import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('form') UserForm!: NgForm;
  userEmail = '';
  userSalary = 0;
  constructor() {}

  ngOnInit(): void {}

  // handleSubmit(form: NgForm) {
  //   console.log(form.value);
  //   console.log(form);
  // }

  handleSubmit(form: NgForm) {
    this.UserForm = form;
    this.userEmail = this.UserForm.value['email'];
    this.userSalary = this.UserForm.value['salary'];
    // this.UserForm.setValue({
    //   email: 'Rehman',
    //   salary: 23000,
    // });
    // this.UserForm.form.patchValue({
    //   email: 'reman',
    // });
    // this.UserForm.resetForm();
    this.UserForm.reset();
    // console.log(this.UserForm.value);
  }
}
