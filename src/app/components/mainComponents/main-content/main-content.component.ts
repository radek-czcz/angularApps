import { Component, OnInit, Input } from '@angular/core';
import {textUsed2} from "./main-content.text";
import * as titles from './main-content.titleAnddesc'
import {titleAndDesc} from './main-content.titleAnddesc'

let runner = titles.generator;
//console.log(runner[0]);

@Component({
  selector: 'app-main-content',
  template: `
   <div class = "welcome-m" *ngFor="let runner of someText">
      <frame-comp [someText] = runner>
      </frame-comp>
   </div>
  `,
  styleUrls: ['./main-content.component.css']
})

export class MainContentComponent implements OnInit {

  @Input()
  someText: titleAndDesc[] = []

   getText(): string {
      var textArray: string[] = textUsed2.map(element => element.data);
      var textReduced = textArray.reduce(function(a, b) {
         return a + '\n' + b;
      })

      return textReduced;
   }

  constructor() {
  }

  ngOnInit(): void {
  }

}
