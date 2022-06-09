interface Eat {
  eat(): void;
}

interface Walk {
  walk(): void;
}

interface Swim {
  swim(): void;
}

class Animal implements Eat {
  eat(): void {
    console.log("Eating....");
  }
}

class Walkable implements Walk {
  walk(): void {
    console.log("walking....");
  }
}

class Swimable implements Swim {
  swim(): void {
    console.log("swimming...");
  }
}

class Dog {
  constructor(
    public animal: Eat,
    public walkable: Walk,
    public swimable: Swim
  ) {}
}
const a = new Animal();
const w = new Walkable();
const s = new Swimable();
const d = new Dog(a, w, s);
d.swimable.swim();
