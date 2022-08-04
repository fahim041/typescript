//arrays
let numbers: number[] = [1, 2, 3, 4];

//enum
enum Size {
  small = 1,
  midium = 2,
  large = 3,
}

//function
function calculateTax(income: number): number {
  return 0;
}

//type
type Employee = {
  readonly id: number;
  name?: string;
};

//object
let employee: Employee = { id: 1 };
employee.name = "Hello";

//union
function kyToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}
