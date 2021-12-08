import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-basics',
  templateUrl: './pipes-basics.component.html',
  styleUrls: ['./pipes-basics.component.css'],
})
export class PipesBasicsComponent implements OnInit {
  currentStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Active');
    }, 10000);
  });
  name = 'rehman ali';
  age = new Date();
  integer2 = 25;
  displayPower = false;
  int = 0;
  pow = 0;
  filterArray = [
    {
      name: 'Ali',
      status: 'Active',
    },
    {
      name: 'Hamza',
      status: 'Inactive',
    },
    {
      name: 'Shaan',
      status: 'Active',
    },
    {
      name: 'Akbar',
      status: 'Inactive',
    },
    {
      name: 'Tayyab',
      status: 'Inactive',
    },
  ];
  filterString = '';
  constructor() {}

  ngOnInit(): void {}

  getPower(integerInput: HTMLInputElement, powerInput: HTMLInputElement) {
    this.int = +integerInput.value;
    this.pow = +powerInput.value;
    this.displayPower = true;
    setTimeout(() => {
      this.displayPower = false;
    }, 3000);
  }
}
