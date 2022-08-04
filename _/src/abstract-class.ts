abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }
  render(): void {
    console.log("a circle");
  }
}

let circle = new Circle(15, "red");
circle.render();
