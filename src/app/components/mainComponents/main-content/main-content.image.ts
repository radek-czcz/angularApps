import {contentData} from './main-content.content-data'

class imageData implements contentData {

   data: string;
   orderNumber: number;

   constructor(str: string, num: number) {
      this.data = str;
      this.orderNumber = num;
   }
}

export function getImages(): imageData[] {

   var data: imageData[] = [];
   for (var runner = 0; runner < arrayOfData.length; runner++) {
      data.push(new imageData(arrayOfData[runner][0], arrayOfData[runner][1]))
   };
   return data;

}

var arrayOfData: [string,number][] = [
   ['abc',2],
   ['fvg',3]
]
