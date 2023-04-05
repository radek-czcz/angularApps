import {Component, Input} from '@angular/core'
import {titleAndDesc} from '../components/mainComponents/main-content/main-content.titleAnddesc'

@Component({
selector: 'frame-comp',
templateUrl: './frame-comp.component.html',
styleUrls: ['./frame-comp.component.css']
})
export class FrameComponent {

  @Input()
  someText = {} as titleAndDesc;

}
