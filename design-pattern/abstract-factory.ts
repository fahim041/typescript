interface Button {
  paint(): string;
}

class WinButton implements Button {
  paint(): string {
    return "render a windows button";
  }
}

class MacButton implements Button {
  paint(): string {
    return "render a mac button";
  }
}

interface Checkbox {
  paint(): string;
}

class WinCheckbox implements Checkbox {
  paint(): string {
    return "render a windows checkbox";
  }
}

class MacCheckbox implements Checkbox {
  paint(): string {
    return "render a mac checkbox";
  }
}

interface GUIFactory {
  name: string;
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class WinFactory implements GUIFactory {
  name = "WinFactory";
  createButton(): Button {
    return new WinButton();
  }

  createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}

class MacFactory implements GUIFactory {
  name = "MacFactory";
  createButton(): Button {
    return new MacButton();
  }

  createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}

class Application {
  private factory: GUIFactory;
  private button: Button;
  private checkbox: Checkbox;

  constructor(factory: GUIFactory) {
    this.factory = factory;
  }
  createUI() {
    console.log(
      "creating button & checkbox ..... ",
      this.factory && this.factory.name
    );
    this.button = this.factory.createButton();
    this.checkbox = this.factory.createCheckbox();
  }

  paint() {
    console.log(this.button.paint());
    console.log(this.checkbox.paint());
  }
}

class ConfigClass {
  private factory: GUIFactory;
  constructor(public platform: string) {
    if (platform == "Windows") {
      this.factory = new WinFactory();
    } else if (platform == "Mac") {
      this.factory = new MacFactory();
    } else {
      console.error("Unknown Platform");
    }

    if (this.factory) {
      const app = new Application(this.factory);
      app.createUI();
      app.paint();
    }
  }
}

new ConfigClass("Windows");
