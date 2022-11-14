let age: number = 20;

let arr: [number, string] = [1, "2"];

// console.log(arr);

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

// console.log(ageCheck(32));

//type aliases

type Employee = {
  readonly id: number,
  name: string
}

const user: Employee = {
  id: 1,
  name: "User-1"
}

//generics class

class KP<K, V>{
  constructor(public key: K, public value: V){}
}

let kp = new KP<string, string>('1', 'a');
console.log(kp)

//generic function

function wrapArray<T>(value: T): T[]{
  return [value]
}

let s = wrapArray<string>('5')

//generics interface

interface Result<T> {
  data: T | null,
  error: string | null
}

function fetch<T>(url: string): Result<T>{
  return {data: null, error: null}
}

interface User{
  name: string;
}

interface Product{
  title: string;
}

let result = fetch<Product>('url')