import { Component, OnInit, Input } from '@angular/core';
import {NameInt} from '../nameInterface';
import {nameList} from '../names'

@Component({
  selector: 'app-comp-chi',
  templateUrl: './comp-chi.component.html',
  styleUrls: ['./comp-chi.component.css']
})
export class CompChiComponent implements OnInit {

   @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
     console.log(this.name);
  }

}
