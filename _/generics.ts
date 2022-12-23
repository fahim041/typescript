interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T) {
    this._objects.push(obj);
  }
}

class CompressibleStore<T> extends Store<T> {
  compress() {}
}

class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}
