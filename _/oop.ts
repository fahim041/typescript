class Account {
  constructor(
    public readonly id: number,
    public owner: string,
    private balance: number,
    public nickname?: number
  ) {}

  deposit(amount: number): void {
    if (amount < 0) {
      throw new Error("Invalid amount");
    }
    this.balance += amount;
  }

  getBalace(): number{
    return this.balance;
  }
}

let account = new Account(1, "User-1", 10)
account.deposit(100)
console.log(account.getBalace())