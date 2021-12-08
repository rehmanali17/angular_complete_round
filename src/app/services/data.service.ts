import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService implements OnInit {
  data = ['Alice', 'Bob', 'Shamita', 'Sunny', 'Billu'];

  constructor() {}

  ngOnInit(): void {}
}
