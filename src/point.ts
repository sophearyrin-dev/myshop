export class Point {

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
  
    //YOU can make setter like set X
    set X(value: any) {
      if(value < 0){
        throw new Error("Value cannot be less than Zero");
      }
      this.x = value;
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
  console.log(objectPoint.getX);
  objectPoint.X = 300;
  
  objectPoint.draw();

