import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outter-comp',
  templateUrl: './outter-comp.component.html',
  styleUrls: ['./outter-comp.component.css']
})
export class OutterCompComponent implements OnInit {

  textToDisplay: string = "this should be displayed";

  constructor() { }

  ngOnInit(): void {
  }

  createNewInfo() {
    console.log("hubi");
  }

}
