import { Component, OnInit } from '@angular/core';
import {textUsed2} from "./main-content.text";




@Component({
  selector: 'app-main-content',
  template: `<div class="welcome-m"><h3>{{getText()}}</h3></div>`,
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {



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
