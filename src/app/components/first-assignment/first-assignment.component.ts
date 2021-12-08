import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-assignment',
  templateUrl: './first-assignment.component.html',
  styleUrls: ['./first-assignment.component.css']
})
export class FirstAssignmentComponent implements OnInit {
  innerText = 'Hide'
  showMessage = false
  elementsList: string[] = []


  constructor() { }

  ngOnInit(): void {
  }

  updateStatus(){
    this.showMessage = !this.showMessage
    this.innerText = this.innerText === 'Hide' ? 'Show' : 'Hide'
    const length = this.elementsList.length
    this.elementsList.push(`Item ${length+1}`)
  }

  getColor(index: number){
    return index >= 5 ? 'green' : 'red'
  }

}
