class Account {
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
    public nickname?: number
  ) {}

  deposit(amount: number): void {
    if (amount < 0) {
      throw new Error("Invalid amount");
    }
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }
}

let account = new Account(1, "User-1", 10);
account.deposit(100);

//abstract class
abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("rendering from circle");
  }
}

//interface
interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

// abstract class Calender{
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

class GoogleCalendar implements Calender {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
