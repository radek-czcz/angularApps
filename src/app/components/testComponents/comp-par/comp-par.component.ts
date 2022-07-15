import { Component, OnInit } from '@angular/core';
import {nameList} from '../names'

@Component({
  selector: 'app-comp-par',
  templateUrl: './comp-par.component.html',
  styleUrls: ['./comp-par.component.css']
})
export class CompParComponent implements OnInit {

   names = nameList;

  constructor() { }

  ngOnInit(): void {
  }

}
