class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public color: string) {
    super(color);
  }

  private drive(): void {
    console.log("vroom");
  }

  startProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car("blue");
car.startProcess();
console.log(car.color);

/*const vehicle = new Vehicle("red");
console.log(vehicle.color);*/
