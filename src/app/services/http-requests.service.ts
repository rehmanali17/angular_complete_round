import { catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestsService implements OnInit {
  //   todos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  fetchTodos() {
    return (
      this.http
        .get<any[]>('https://jsonplaceholder.typicode.com/todos', {
          headers: new HttpHeaders({
            'Content-Type': 'application/xml',
            name: 'Rehman Ali',
          }),
          params: new HttpParams().set('name', 'Rehman Ali'),
          //   observe: 'response',
          observe: 'body',
        })
        // .subscribe(response => {
        //     console.log(response);
        // })
        .pipe(
          map((todos) => {
            const todosStringArray: string[] = [];
            for (const todo of todos) {
              todosStringArray.push(todo.title);
            }
            return todosStringArray;
          }),
          catchError((error) => {
            return throwError(error);
          })
        )
    );
  }
}
