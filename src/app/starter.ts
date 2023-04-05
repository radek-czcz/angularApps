//import * as scrap from "./meczajniki"
//import * as fs from 'fs';

class StarterClass {

  static initialized: boolean = false;

  name1: string = '';

  constructor(){
    this.name1 = 'radek';
  }

  public showName() {
    console.log(this.name1);
  }

  static isInitialized() {
    return StarterClass.initialized;
  }

}

export {StarterClass}
