import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  template: `
  <p>this is child, named {{name}}</p>
  `,
  styleUrls: ['./name-child.component.css']
})
export class NameChildComponent implements OnInit {

   private _name: string = '';

   @Input()
   set name (name: string) {
      this._name = name;
   }

   get name(): string {
      return this._name;
   }

  constructor() { }

  ngOnInit(): void {
  }

}
