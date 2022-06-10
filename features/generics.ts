class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const newArr = new ArrayOfAnything(["a", "b", "c"]);
console.log(newArr.get(1));
