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


  //constructor
  constructor(private x: number, public y: number) {
  }
  move(dx: number, dy: number) {
    this.x += dx;
    this.y += dy;
  }
  draw() {
    console.log(`X=${this.x} and Y=${this.y}`);
  }

  getX(){
    return this.x;
  }

  setX(value: any) {
    if(value < 0){
      throw new Error("Value cannot be less than Zero");
    }
  }

  getDistance(another : Point){
    let dx = this.x - another.x;
    let dy = this.y - another.y;
    return Math.sqrt(dx*dx + dy*dy);
  }

}

//Creating Object
let objectPoint = new Point(3,4);
//objectPoint.x = 20;

objectPoint.draw();





