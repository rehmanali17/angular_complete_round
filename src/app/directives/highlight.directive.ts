import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @HostBinding('style.color') color = '';
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.color = 'blue';
  }
}
