import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  elementsList = ['Class 1','Class 2','Class 3','Class 4']
  isDisabled = false
  innerText = 'Hide'
  className = 'btn-danger'
  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(){
    this.isDisabled = !this.isDisabled
    this.innerText = this.innerText === 'Hide' ? 'Show' : 'Hide'
    this.className = this.className === 'btn-danger' ? 'btn-success' : 'btn-danger'
  }

}
