import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  input = ''
  constructor() { }

  ngOnInit(): void {
  }

  handleInput(event:Event){
    this.input = (<HTMLInputElement>event.target).value
  }

  handleClick(event:Event){
    event.preventDefault()
    this.input += this.input
  }

  handleClear(event: Event){
    event.preventDefault()
    this.input = ''
  }

}
