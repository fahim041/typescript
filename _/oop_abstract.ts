abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: string, color: string) {
    super(color);
  }

  override render(): void {
    console.log("rendering a circle");
  }
}
