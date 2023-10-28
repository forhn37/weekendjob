function Circle(radius) {
  console.log(this);

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  }
}

const circle = new Circle(1);
const circle2 = new Circle(5);
console.log(circle);
console.log(circle2);