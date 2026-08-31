// ============================================
// DAY 29 - 04: INHERITANCE
// ============================================
// A subclass (`extends`) inherits properties and methods from a
// parent class, and can add or override its own behavior.

class Account {
  protected balance: number;

  constructor(protected owner: string, initialBalance: number) {
    // shorthand: declaring `protected owner` directly in the
    // constructor parameter list creates and assigns the property
    // in one step
    this.balance = initialBalance;
  }

  getBalance(): number {
    return this.balance;
  }

  describe(): string {
    return `${this.owner}'s account, balance: ${this.balance}`;
  }
}

class SavingsAccount extends Account {
  private interestRate: number;

  constructor(owner: string, initialBalance: number, interestRate: number) {
    super(owner, initialBalance); // must call the parent constructor first
    this.interestRate = interestRate;
  }

  applyInterest(): void {
    this.balance += this.balance * this.interestRate;
  }

  // Overriding the parent's method to add extra detail
  override describe(): string {
    const base = super.describe(); // reuse the parent's implementation
    return `${base} (interest rate: ${this.interestRate * 100}%)`;
  }
}

const savings = new SavingsAccount("Vineet", 1000, 0.05);
savings.applyInterest();
console.log(savings.getBalance());   // 1050
console.log(savings.describe());     // includes interest rate detail

// --------------------------------------------
// A second subclass showing shared behavior + its own extension
// --------------------------------------------
class CheckingAccount extends Account {
  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient funds");
      return;
    }
    this.balance -= amount;
  }
}

const checking = new CheckingAccount("Aman", 500);
checking.withdraw(200);
console.log(checking.getBalance()); // 300

export {};
