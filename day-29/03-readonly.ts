// ============================================
// DAY 29 - 03: READONLY PROPERTIES
// ============================================
// `readonly` allows a property to be SET once (at declaration
// or inside the constructor), then locks it permanently.

class Product {
  public name: string;
  private price: number;
  readonly tags: string[];
  readonly createdAt: Date;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.tags = ["electronics"];   // ✅ allowed — still inside the constructor
    this.createdAt = new Date();   // ✅ allowed — still inside the constructor
  }

  display(): void {
    console.log(this.name, this.price);
  }

  setPrice(price: number): void {
    if (price <= 0) return;
    this.price = price; // ✅ allowed — `price` is NOT readonly
  }
}

const item = new Product("Keyboard", 2500);
item.display(); // "Keyboard 2500"

// item.tags = ["office"];    // ❌ Error — `tags` is readonly
// item.tags.push("office");  // ⚠️ this actually WORKS — readonly locks
//                                REASSIGNING the array, not its contents
item.tags.push("office");
console.log(item.tags); // ["electronics", "office"]

// --------------------------------------------
// `readonly` vs `private`: two different concerns
// --------------------------------------------
// `private`  -> controls WHO can access it (visibility)
// `readonly` -> controls WHETHER it can be reassigned (mutability)
// A property can be both: `private readonly id: number;`

class Session {
  private readonly sessionId: string;

  constructor(sessionId: string) {
    this.sessionId = sessionId;
  }

  getId(): string {
    return this.sessionId;
  }
}

const session = new Session("abc-123");
console.log(session.getId());

export {};
