import {
  Directive,
  OnInit,
  ElementRef,
  Input,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective implements OnInit {
  @Input() defaultColor = '';
  @Input('hoverColor') backgroundColor = '';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseenter() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.backgroundColor
    );
  }

  @HostListener('mouseout') mouseout() {
    this.elementRef.nativeElement.style.background = this.defaultColor;
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = this.defaultColor;
  }
}
