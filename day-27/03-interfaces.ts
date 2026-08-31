// ============================================
// DAY 27 - 03: INTERFACES
// ============================================
// An interface describes the SHAPE a value must have —
// it's a contract, never an implementation. Interfaces can't
// be instantiated directly (`new SomeInterface()` is invalid).

interface Product {
  name: string;
  price: number;
  brand: string;
  display(): void; // a method signature — no body here
}

const item: Product = {
  name: "Keyboard",
  price: 2500,
  brand: "Logitech",
  display() {
    console.log(`${this.name} (${this.brand}) - ₹${this.price}`);
  },
};

item.display();

// --------------------------------------------
// Optional properties (`?`)
// --------------------------------------------
interface Config {
  port: number;
  host?: string; // optional — may be omitted entirely
}

const config1: Config = { port: 3000 };            // ✅ valid, host omitted
const config2: Config = { port: 3000, host: "0.0.0.0" }; // ✅ also valid
console.log(config1, config2);

// --------------------------------------------
// readonly properties — can be set once, then locked
// --------------------------------------------
interface Session {
  readonly sessionId: string;
  expiresAt: Date;
}

const session: Session = {
  sessionId: "abc-123",
  expiresAt: new Date(),
};

// session.sessionId = "xyz-999"; // ❌ Error — sessionId is readonly
session.expiresAt = new Date(); // ✅ allowed — not readonly
console.log(session);

export {};
