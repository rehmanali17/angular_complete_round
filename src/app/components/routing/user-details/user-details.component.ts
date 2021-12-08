import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  name: string = '';
  // fragment:string = '';
  queryParamsSubscription: Subscription;
  allowedEdit: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params) => {
        this.allowedEdit = params['allowedit'] === '1' ? true : false;
      }
    );
    // this.queryParamsSubscription = this.route.params.subscribe(params =>{
    //   this.name = params['name']
    // })
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    // this.fragment = this.route.snapshot.fragment?['fragment']
    // this.allowedEdit = this.route.snapshot.queryParams['allowedit']
  }

  handleClick() {
    this.router.navigate(['/users/view-users']);
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }
}
