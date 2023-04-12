import { Component, OnInit, Input } from '@angular/core';
/*import {textUsed2} from "./main-content.text";*/
import * as titles from './main-content.titleAnddesc'
import {titleAndDesc} from './main-content.titleAnddesc'
import {FrameComponent} from '../../../frame-comp/frame-comp.component'

let runner = titles.generator;
//console.log(runner[0]);

@Component({
  selector: 'app-main-content',
  templateUrl:'./main-content.component.html',
  styleUrls: ['./main-content.component.css']
})

export class MainContentComponent implements OnInit {

  condition1: boolean = true

  @Input()
  someText: titleAndDesc[] = []

   /*getText(): string {
      var textArray: string[] = textUsed2.map(element => element.data);
      var textReduced = textArray.reduce(function(a, b) {
         return a + '\n' + b;
      })

      return textReduced;
   }*/

  changeCond(): void {
    this.condition1 = !this.condition1;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewFrame(frame: titleAndDesc): void {
    this.someText.push(frame);
    console.log(Object.getOwnPropertyNames(Array))
    setTimeout(() => this.someText.pop(),1000);
  }

}
