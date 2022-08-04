//class
class KeyValuePair<T, V> {
  constructor(public key: T, public value: V) {}
}

let pair = new KeyValuePair<number, string>(1, "Hello");

//inheritence
interface Product {
  name: string;
  price: number;
}

class Store<T> {
  private _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}

class CompressibleStore<T> extends Store<T> {
  compress(): void {
    console.log("compress");
  }
}

let store = new Store<Product>();

//function
function wrapInArray<T>(value: T) {
  return [value];
}

let number = wrapInArray<string>("1");

//interface
interface Result<T> {
  data: T | null;
  error: string | null;
}

interface User {
  name: string;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

let result = fetch<User>("url");
