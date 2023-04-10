import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FrameComponent} from '../../frame-comp/frame-comp.component'
import {titleAndDesc} from '../mainComponents/main-content/main-content.titleAnddesc'

@Component({
  selector: 'app-button-that-creates-comp',
  templateUrl: './button-that-creates-comp.component.html',
  styleUrls: ['./button-that-creates-comp.component.css']
})
export class ButtonThatCreatesCompComponent implements OnInit {

  clicked: boolean = false;
  frame: titleAndDesc;

  @Output() generateEvent = new EventEmitter<titleAndDesc>();

  constructor() {

    this.frame = new titleAndDesc('','');

  }

  ngOnInit(): void {
  }

  generate(): void {
    console.log('generating')
    this.frame = new titleAndDesc('Miner', 'How i get gold');
    this.generateEvent.emit(this.frame);
  }

}
