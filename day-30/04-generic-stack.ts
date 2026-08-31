// ============================================
// DAY 30 - 04: GENERIC STACK
// ============================================
// A Stack is a classic Last-In-First-Out (LIFO) data structure.
// Making it generic lets the SAME class safely hold numbers,
// strings, or any other type — without ever using `any`.

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  get size(): number {
    return this.items.length;
  }
}

// --------------------------------------------
// Stack<number>
// --------------------------------------------
const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
console.log(numberStack.pop());  // 30
console.log(numberStack.peek()); // 20
console.log(numberStack.size);   // 2

// --------------------------------------------
// Stack<string>
// --------------------------------------------
const stringStack = new Stack<string>();
stringStack.push("first");
stringStack.push("second");
console.log(stringStack.pop());  // "second"
// stringStack.push(5); // ❌ Error — this Stack is locked to <string>

// --------------------------------------------
// A backend example: tracking a call stack of processing steps
// --------------------------------------------
const pipelineStack = new Stack<string>();
pipelineStack.push("validateRequest");
pipelineStack.push("authenticateUser");
pipelineStack.push("processPayment");

while (!pipelineStack.isEmpty()) {
  console.log("Undoing step:", pipelineStack.pop());
}

export {};
