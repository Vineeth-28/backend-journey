// ============================================
// DAY 29 - 01: CLASSES
// ============================================
// A class bundles data (properties) and behavior (methods)
// together, and provides a blueprint for creating objects (instances).

class Product {
  name: string;
  price: number;

  // The constructor runs once, when a new instance is created
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  // A method — behavior tied to instances of this class
  display(): void {
    console.log(`${this.name} costs ₹${this.price}`);
  }
}

const laptop = new Product("Laptop", 55000);
laptop.display(); // "Laptop costs ₹55000"

// Each instance has its own independent copy of the properties
const mouse = new Product("Mouse", 799);
mouse.display(); // "Mouse costs ₹799"

console.log(laptop.name, mouse.name); // independent values

// --------------------------------------------
// A slightly larger example: modeling a backend "User"
// --------------------------------------------
class User {
  id: number;
  email: string;

  constructor(id: number, email: string) {
    this.id = id;
    this.email = email;
  }

  describe(): string {
    return `User #${this.id} (${this.email})`;
  }
}

const newUser = new User(1, "vineet@example.com");
console.log(newUser.describe());

export {};
