import { Component, OnInit, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  // selector: 'app-container',
  // selector: '[app-container]',
  selector: '.app-container',
  // template: `<p class='text-center text-success'>Container Works</p>`,
  templateUrl: './container.component.html',
  // styles: [
  //   `text-center{
  //     text-align:center; margin-top: 100px;
  //   }`,
  //   `text-success{
  //     color:green;
  //   }`
  // ]
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  innerText = "Container Works!"
  @ViewChild('secondText') secondText!: ElementRef
  constructor() { }

  ngOnInit(): void {
    
  }

  customEvent(data:string){
    this.secondText.nativeElement.value = data;
    this.innerText = data
  }

}
