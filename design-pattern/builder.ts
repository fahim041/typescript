//builder pattern allows constructing complex objects step by step.
//unlike other creational patterns, builder doesn't require products to have a common interface. That make it possible to product different products using the same construction process.

interface Builder {
  producePartA(): void;
  producePartB(): void;
  producePartC(): void;
}

class Product1 {
  public parts: { name: string; status: string }[] = [];

  public partsName() {
    return this.parts.map((e) => console.log(e.name));
  }
}

//product2 slightly different interface then
class Product2 {
  public parts: { name: string; status: string }[] = [];
  private model: string;

  constructor(model: string) {
    this.model = model;
  }

  public modelName(): string {
    return this.model;
  }

  public partsName() {
    return this.parts.map((e) => console.log(e.name));
  }
}

class ConcreteBuilder1 implements Builder {
  private product: Product1;

  constructor() {
    this.reset();
  }

  private reset(): void {
    this.product = new Product1();
  }

  producePartA(): void {
    this.product.parts.push({ name: "partA", status: "done" });
  }

  producePartB(): void {
    this.product.parts.push({ name: "partB", status: "done" });
  }

  producePartC(): void {
    this.product.parts.push({ name: "partC", status: "done" });
  }

  public getProduct(): Product1 {
    const result = this.product;
    this.reset();
    return result;
  }
}

class ConcreteBuilder2 implements Builder {
  private product: Product2;
  private model: string;

  constructor(model: string) {
    this.model = model;
    this.reset();
  }

  private reset(): void {
    this.product = new Product2(this.model);
  }

  producePartA(): void {
    this.product.parts.push({ name: "partA", status: "done" });
  }

  producePartB(): void {
    this.product.parts.push({ name: "partB", status: "done" });
  }

  producePartC(): void {
    this.product.parts.push({ name: "partC", status: "done" });
  }

  public getProduct(): Product2 {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildNormalProduct(): void {
    this.builder.producePartA();
  }

  public buildProProduct(): void {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}

const clientCode = (director: Director, productName: string, type?: string) => {
  let builder;
  switch (productName) {
    case "product1":
      console.log("building product--> product 1");
      builder = new ConcreteBuilder1();
      director.setBuilder(builder);
      if (type == "normal") {
        console.log("Normal product...");
        director.buildNormalProduct();
        builder.getProduct().partsName();
      } else {
        console.log("Pro Product...");
        director.buildProProduct();
        builder.getProduct().partsName();
      }
      break;
    case "product2":
      console.log("building product --> product 2");
      builder = new ConcreteBuilder2("model-2");
      director.setBuilder(builder);
      if (type == "normal") {
        director.buildNormalProduct();
        console.log("model name: ", builder.getProduct().modelName());
        builder.getProduct().partsName();
      } else {
        console.log("Pro Product...");
        director.buildProProduct();
        console.log("model name: ", builder.getProduct().modelName());
        builder.getProduct().partsName();
      }

      break;

    default:
      console.error("no product found!");
  }
};

const director = new Director();
clientCode(director, "product1", "pro");
