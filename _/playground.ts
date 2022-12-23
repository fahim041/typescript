class KeyValuPair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuPair("a", "b");
console.log(pair);

function wrapInArray<T>(value: T) {
  return [value];
}

interface Result<T> {
  data: T | null;
  error: string | null;
}

interface Person {
  name: string;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

let res = fetch<Person>("url");
console.log(res.data?.name);
