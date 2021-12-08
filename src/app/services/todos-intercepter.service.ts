import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpHeaders,
  HttpEventType,
} from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosIntercepterService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = req.clone({
      headers: new HttpHeaders().append('age', '23'),
    });
    return next.handle(modifiedRequest).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Sent) {
          console.log('Request is on its way');
        } else if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      })
    );
  }
}
