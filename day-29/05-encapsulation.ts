// ============================================
// DAY 29 - 05: ENCAPSULATION
// ============================================
// Encapsulation means hiding internal state (with `private`) and
// only exposing it through controlled methods or getters/setters —
// so the class itself can enforce its own rules about valid state.

class Product {
  public name: string;
  private _price: number; // underscore is a common convention for a
                           // private field backing a getter/setter

  constructor(name: string, price: number) {
    this.name = name;
    this._price = price;
  }

  // A getter — reads like a property (`product.price`) but runs code
  get price(): number {
    return this._price;
  }

  // A setter — assigns like a property (`product.price = x`) but
  // can validate the new value before accepting it
  set price(newPrice: number) {
    if (newPrice <= 0) {
      console.log("Price must be positive — update rejected");
      return;
    }
    this._price = newPrice;
  }
}

const item = new Product("Monitor", 12000);
console.log(item.price); // 12000 — reads through the getter

item.price = 15000; // writes through the setter
console.log(item.price); // 15000

item.price = -50; // rejected by the setter's validation
console.log(item.price); // still 15000

// --------------------------------------------
// Why this matters: without encapsulation, ANY code could set
// `product.price = -50` directly and silently corrupt the data.
// The getter/setter pair keeps that rule enforced in exactly one
// place, no matter how many places in the codebase update the price.
// --------------------------------------------

export {};
