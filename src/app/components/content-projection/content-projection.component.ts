import {
  Component,
  ContentChild,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  ElementRef,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css'],
})
export class ContentProjectionComponent
  implements OnInit, OnChanges, AfterContentInit
{
  constructor() {
    console.log('Constructor Called');
  }

  ngOnInit(): void {
    console.log('ngOnInit Called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called');
    console.log(changes);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
}
