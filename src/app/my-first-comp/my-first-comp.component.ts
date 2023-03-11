import { Component, OnInit, Output, EventEmitter } from '@angular/core';
  
@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.css']
})
export class MyFirstCompComponent implements OnInit {

   textComp:string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  clickAction() {
        this.textComp = 'radek';
 }

}
