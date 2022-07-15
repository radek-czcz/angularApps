import { Component, OnInit } from '@angular/core';

   console.log("browser loaded");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component2.css']
})
export class AppComponent {
  title = 'hello-world';
  buttonNames:String[] = [
     'abc',
     'bcd'
];

createButtons(){
for (let nth:number=1;nth<this.buttonNames.length;nth++){
   let name:String = this.buttonNames[nth];
   console.log(name);
}
};

}
