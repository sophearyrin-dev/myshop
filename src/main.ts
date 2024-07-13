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
class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  move(dx: number, dy: number) {
    this.x += dx;
    this.y += dy;
  }
  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }

  getDistance(another : Point){
    let dx = this.x - another.x;
    let dy = this.y - another.y;
    return Math.sqrt(dx*dx + dy*dy);
  }

}

//Object
let objectPoint: Point = new Point(3,4);

objectPoint.draw();




