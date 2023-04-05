import { Component, OnInit } from '@angular/core';
//import { StarterClass } from './starter';
import * as titles from './/components/mainComponents/main-content/main-content.titleAnddesc'
import {titleAndDesc} from './/components/mainComponents/main-content/main-content.titleAnddesc'

let runner = titles.generator;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component2.css']
})
export class AppComponent {

  title = 'hello-world';

  titAndDesc: titleAndDesc[] = runner;

}
