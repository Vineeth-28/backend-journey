// ============================================
// DAY 29 - 02: ACCESS MODIFIERS (public, private, protected)
// ============================================

class BankAccount {
  public accountHolder: string;  // accessible from anywhere
  private balance: number;       // accessible only inside this class
  protected accountType: string; // accessible here AND in subclasses

  constructor(accountHolder: string, initialBalance: number) {
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
    this.accountType = "savings";
  }

  deposit(amount: number): void {
    if (amount <= 0) return; // guard against invalid input
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= 0 || amount > this.balance) return;
    this.balance -= amount;
  }

  // A public method is the ONLY way outside code can read `balance`
  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount("Vineet", 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // 1300

// account.balance = 999999; // ❌ Error — `balance` is private
console.log(account.accountHolder); // ✅ public — fine to read directly

// --------------------------------------------
// `protected` in action — accessible in a subclass, not outside it
// --------------------------------------------
class SavingsAccount extends BankAccount {
  describeType(): string {
    // `accountType` is protected — visible here because
    // SavingsAccount extends BankAccount
    return `This is a ${this.accountType} account`;
  }
}

const savings = new SavingsAccount("Aman", 2000);
console.log(savings.describeType()); // "This is a savings account"
// savings.accountType; // ❌ Error — protected, not accessible from OUTSIDE the class hierarchy

export {};
