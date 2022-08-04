class Person {
  constructor(public firstName: string, public lastName: string) { }

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("walk");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  test() {
    console.log("test");
  }
}

class Teacher extends Person {
  get fullName(): string {
    return "techer: " + super.fullName;
  }
}

function printName(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

let teacher = new Teacher("first", "last");
//console.log(teacher.fullName);

printName([teacher, new Student(1, "Tony", "Smith")]);
