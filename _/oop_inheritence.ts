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
  constructor(
    public studentId: number,
    public override firstName: string,
    public override lastName: string
  ) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("taking a test");
  }
}

class Teacher extends Person {
  constructor(
    public teacherId: number,
    public override firstName: string,
    public override lastName: string
  ) {
    super(firstName, lastName);
  }

  override get fullName(): string {
    return "Prof " + super.fullName;
  }
}

let teacher = new Teacher(1, "john", "mack");
console.log(teacher.fullName);
