// function doSomething(){
//   for(let i=0; i<5; i++){
//     console.log(i);
//   }
// }
// doSomething();

// arrow function
// let log = function(message: any){
//   console.log(message);
// }


// let log2 = (message: any) => {
//   console.log(message);
// }

//interface
// interface Point {
//   x: number,
//   y: number
// }

// let drawPoint = (point : Point) => {

// }

// drawPoint({x:10, y:20});

//Class

// import { Point } from "./point";

// let point = new Point(1,2);

// console.log(point.X);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));






