class Account {
  nikename?: number;

  constructor(
    readonly _id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("invalid amount");
    this._balance += amount;
  }

  private calculateTax() {}

  get balance(): number {
    return this._balance;
  }
}

let account = new Account(1, "user", 30);
account.deposit(50);
console.log(account.balance);
