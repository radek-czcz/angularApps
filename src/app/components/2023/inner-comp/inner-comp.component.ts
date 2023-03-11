import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inner-comp',
  templateUrl: './inner-comp.component.html',
  styleUrls: ['./inner-comp.component.css']
})
export class InnerCompComponent implements OnInit {

  constructor() { this.displayed = "" }

  @Input()
  displayed: String;

  ngOnInit(): void {
  }

  @Output() 
  click1 = new EventEmitter<string>();

  emiting() {
    this.click1.emit("hubi");
  }

}
