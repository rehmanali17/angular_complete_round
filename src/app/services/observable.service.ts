import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ObservableService {
  customObservable: Observable<any> = new Observable();

  constructor() {
    this.customObservable = Observable.create((observer: Observer<any>) => {
      let count = 0;
      setInterval(() => {
        count++;
        if (count === 6) {
          observer.complete();
        } else if (count > 3) {
          observer.error('Error occured');
        }
        observer.next(count);
      }, 1000);
    });
  }
}
