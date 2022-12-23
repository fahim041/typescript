interface TaxCalculator {
  calculateTax(): number;
}

class TaxCalculator2020 implements TaxCalculator {
  constructor(private taxableIncome: number) {}

  public calculateTax(): number {
    return this.taxableIncome * 0.3;
  }
}

class TaxCalculator2021 implements TaxCalculator {
  constructor(private taxableIncome: number) {}

  public calculateTax() {
    return this.taxableIncome * 0.4;
  }
}

class TaxReport {
  constructor(private taxCalculator: TaxCalculator) {}

  public show() {
    let tax = this.taxCalculator.calculateTax();
    console.log(tax);
  }
}

let tr = new TaxReport(new TaxCalculator2021(100));
tr.show();
