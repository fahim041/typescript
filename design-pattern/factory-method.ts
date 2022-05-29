//factory design pattern defines a interface to create a object, but lets sub classes decide which object to create.

interface Product {
  name: string;
  operation(): string;
}

class ConcreteProduct1 implements Product {
  name: string;
  constructor() {
    this.name = "Product1";
  }

  operation(): string {
    return "Doing operation on product1";
  }
}

class ConcreteProduct2 implements Product {
  name: string;
  constructor() {
    this.name = "Product2";
  }

  operation(): string {
    return "Doing Operation on product2";
  }
}

//factory
abstract class Creator {
  public abstract factoryMethod(): Product;

  //business logic
  public sell(): string {
    const product = this.factoryMethod();
    return "Creator method: selling product --> " + product.name;
  }

  public doOperation(): string {
    const product = this.factoryMethod();
    return product.operation();
  }
}

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

const sellerService = (creator: Creator) => {
  console.log("seller service....");
  console.log(creator.sell());
};

const operationService = (creator: Creator) => {
  console.log("operation service");
  console.log(creator.doOperation());
};

console.log("Application is starting...");
sellerService(new ConcreteCreator2());

console.log("");

operationService(new ConcreteCreator1());
