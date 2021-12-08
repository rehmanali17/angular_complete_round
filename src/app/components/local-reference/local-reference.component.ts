import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-local-reference',
  templateUrl: './local-reference.component.html',
  styleUrls: ['./local-reference.component.css']
})
export class LocalReferenceComponent implements OnInit {
  @Input('aliasInput') customInput:string = '';
  data = ''
  second_data = ''
  additional_data = ''
  @Output('aliasEvent') customEvent = new EventEmitter<string>()
  @ViewChild('second_input', { static: true }) secondInput!: ElementRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  addData(input: HTMLInputElement){
    this.data = input.value
    this.second_data += this.secondInput.nativeElement.value
  }

  emitEvent(){
    this.customEvent.emit(this.data)
  }

}
