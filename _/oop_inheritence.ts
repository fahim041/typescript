class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("Walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("taking a test");
  }
}

class Teacher extends Person {
  constructor(public teacherId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  override get fullName(): string {
    return "Prof " + super.fullName;
  }
}

//polymorphism
function printName(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printName([new Student(1, "John", "Mark"), new Teacher(11, "Tech", "Jack")]);

let teacher = new Teacher(1, "john", "mack");
console.log(teacher.fullName);
