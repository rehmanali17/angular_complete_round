import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css'],
})
export class StructuralComponent implements OnInit {
  numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  value = 15;
  constructor() {}

  ngOnInit(): void {}
}
