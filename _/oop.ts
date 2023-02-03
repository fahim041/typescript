class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("invalid amount");
    }
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }
}

let account = new Account(1, "user", 100);
account.deposit(50);
console.log(account.balance);
