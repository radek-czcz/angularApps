import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  elem: ElementRef;
  swapVar: boolean = false;

  @HostListener('click') clickedMethod() {
    this.swapVar = !this.swapVar;
    this.swapVar ? this.elem.nativeElement.style.backgroundColor = "#1f959a" :
    this.elem.nativeElement.style.backgroundColor = "#22f956";
  }

  constructor(comp: ElementRef) {
    this.elem = comp;
    this.elem.nativeElement.style.backgroundColor = "#22f956"
  }

}