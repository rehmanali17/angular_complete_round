import { Component, OnInit } from '@angular/core';
import { filter, interval, map } from 'rxjs';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-observables-basics',
  templateUrl: './observables-basics.component.html',
  styleUrls: ['./observables-basics.component.css'],
})
export class ObservablesBasicsComponent implements OnInit {
  list: number[] = [1];
  count: string = '';
  constructor(private observableService: ObservableService) {
    this.observableService.customObservable
      .pipe(
        map((count) => {
          return 'Data: ' + count;
        }),
        filter((data) => {
          return data !== 'Data 1';
        })
      )
      .subscribe(
        (value) => {
          this.count = value;
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('Observer Completed');
        }
      );
  }

  ngOnInit(): void {
    // interval(1000).subscribe((count) => {
    //   this.list.push(count);
    // });
  }
}
