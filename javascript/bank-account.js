class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (!amount > 0) return 'Deposit amount must be greater than zero.';
    const transaction = { type: 'deposit', amount };
    this.transactions.push(transaction);
    this.balance += amount;
    return `Successfully deposited ${amount}. New balance: ${this.balance}`;
  }

  withdraw(amount) {
    if (!(amount > 0 || amount < this.balance)) return 'Insufficient balance or invalid amount.';
    const transaction = { type: 'withdraw', amount };
    this.transactions.push(transaction);
    this.balance -= amount;
    return `Successfully withdrew ${amount}. New balance: ${this.balance}`;
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = this.transactions
      .filter((transaction) => transaction.type === 'deposit')
      .map((transaction) => transaction.amount)
      .join(',');
    return `Deposits: ${deposits}`;
  }

  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter((transaction) => transaction.type === 'withdraw')
      .map((transaction) => transaction.amount)
      .join(',');
    return `Withdrawals: ${withdrawals}`;
  }
}

const myAccount = new BankAccount();
myAccount.deposit(100);
myAccount.deposit(200);
myAccount.withdraw(50);
myAccount.deposit(300);
myAccount.withdraw(100);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount.checkBalance());
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());
