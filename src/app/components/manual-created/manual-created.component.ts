import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-manual-created',
    templateUrl: './manual-created.component.html',
    styleUrls: ['./manual-created.component.css']
})

export class ManualCreatedComponent implements OnInit{
    showData = 'Manual Created Component Works!'
    constructor(){
    }

    ngOnInit(){
    }


}