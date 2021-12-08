import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-url-data-passing',
  templateUrl: './url-data-passing.component.html',
  styleUrls: ['./url-data-passing.component.css'],
})
export class UrlDataPassingComponent implements OnInit {
  static_data: string = '';
  dynamic_data: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.static_data = this.route.snapshot.data['static_name'];
    this.dynamic_data = this.route.snapshot.data['dynamic_name'];
  }
}
