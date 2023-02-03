let sales: number = 123_456_789;
let course: string = "Typescript";
let is_published: boolean = true;

//arrays
let numbers: number[] = [1, 2, 3, 4];

//tuple
let user: [number, string] = [1, "Mosh"];

//enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}

let carSize: Size = Size.Large;

//functions
function calculateTax(income: number): number {
  if (income < 50_000) {
    return income * 1.2;
  }
  return income * 1.3;
}

//object
let employee: {
  id: number;
  name: string;
} = { id: 1, name: "employee-1" };

//type aliases
type Employee = {
  readonly id: number;
  name: string;
};

let em: Employee = {
  id: 1,
  name: "employee-2",
};

//union type
function kgToLbs(weight: number | string): number {
  if (typeof weight == "number") {
    return weight * 2.2;
  }
  return parseInt(weight) * 2.2;
}

//intersection type
type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizeable;
const textBox: UIWidget = {
  drag() {},
  resize() {},
};

//nullish coaelscing operator
let speed: number | null = null;
let car = {
  speed: speed ?? 30,
};

//type assertions
let phone = <HTMLInputElement>document.getElementById("phone");
phone.value;
