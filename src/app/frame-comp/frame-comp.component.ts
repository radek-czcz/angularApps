import {Component, Input, OnInit, OnDestroy} from '@angular/core'
import {titleAndDesc} from '../components/mainComponents/main-content/main-content.titleAnddesc'


@Component({
selector: 'frame-comp',
templateUrl: './frame-comp.component.html',
styleUrls: ['./frame-comp.component.css']
})
export class FrameComponent implements OnInit, OnDestroy {

  class2: boolean = false;

  @Input()
  someText = {} as titleAndDesc;

  ngOnInit(): void {
    console.log('create frame');
  }

  ngOnDestroy(): void {
    console.log('destroy frame');
  }

  changeClass(){
    this.class2 = !this.class2;
  }

}
