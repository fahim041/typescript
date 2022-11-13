let age: number = 20;

let arr: [number, string] = [1, "2"];

console.log(arr);

// enum

enum Size {
  Small = 0,
  Medium = 1,
  Large = 2,
}

let mySize: Size = Size.Large;

// functions

function ageCheck(age: number, year?: number): boolean {
  if (age > 18) {
    return true;
  }
  return false;
}

console.log(ageCheck(32));
