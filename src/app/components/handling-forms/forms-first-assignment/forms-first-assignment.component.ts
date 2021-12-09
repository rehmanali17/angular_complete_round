import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-forms-first-assignment',
  templateUrl: './forms-first-assignment.component.html',
  styleUrls: ['./forms-first-assignment.component.css'],
})
export class FormsFirstAssignmentComponent implements OnInit {
  @ViewChild('form') UserForm!: NgForm;
  defaultOption = 'Advanced';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.UserForm = form;
    console.log(this.UserForm.value);
  }
}
