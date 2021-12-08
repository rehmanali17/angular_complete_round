import { HttpRequestsService } from './../../../services/http-requests.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-http-basics',
  templateUrl: './http-basics.component.html',
  styleUrls: ['./http-basics.component.css'],
})
export class HttpBasicsComponent implements OnInit {
  todos: string[] = [];
  isWaiting = false;
  isLoading = false;
  response = '';
  deleteResponse = '';
  constructor(
    private http: HttpClient,
    private httpRequestsService: HttpRequestsService
  ) {}

  ngOnInit(): void {
    // this.http
    //   .get<any[]>('https://jsonplaceholder.typicode.com/todos')
    //   .subscribe((todos) => {
    //     this.todos = todos;
    //   });
    this.httpRequestsService.fetchTodos().subscribe(
      (todos) => {
        // console.log(todos);
        this.todos = todos;
      }
      // (error) => {
      //   console.log(error.message);
      // }
    );
  }

  handleClick(title: HTMLInputElement, body: HTMLInputElement) {
    this.isWaiting = true;
    this.http
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: title.value,
        body: body.value,
        userId: 1,
      })
      .subscribe((response) => {
        this.isWaiting = false;
        this.response = JSON.stringify(response);
      });
  }

  handleDelete() {
    this.isLoading = true;
    // this.http
    //   .delete('https://jsonplaceholder.typicode.com/posts/1',{
    //     observe: 'body'
    //   })
    //   .subscribe((response) => {
    //     this.deleteResponse =
    //       typeof response === 'object'
    //         ? 'Delete successfully'
    //         : 'Error deleting the resource';
    //     this.isLoading = false;
    //   });

    this.http
      .delete('https://jsonplaceholder.typicode.com/posts/1', {
        observe: 'events',
      })
      .subscribe((event) => {
        // console.log(event.type === HttpEventType.Sent);
        if (event.type === HttpEventType.Sent) {
          console.log('Sent');
        } else if (event.type === HttpEventType.Response) {
          console.log(event.body);
          console.log(event.status);
          this.isLoading = false;
        }
      });
  }
}
