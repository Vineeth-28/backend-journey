// ============================================
// DAY 28 - 03: `any`, `unknown`, `void`, `never`
// ============================================

// --------------------------------------------
// `any` — completely opts OUT of type checking
// --------------------------------------------
let looseValue: any = 10;
looseValue = "now a string"; // ✅ allowed, but this defeats the purpose of TS
console.log(looseValue);

// The line below is commented out on purpose: it COMPILES without any
// error (because `any` disables all checking), but would CRASH at
// runtime with "someMethodThatDoesNotExist is not a function".
// Try uncommenting it to see the crash for yourself:
// looseValue.someMethodThatDoesNotExist();

// WHY `any` SHOULD GENERALLY BE AVOIDED IN BACKEND CODE:
// It silently disables every safety check TypeScript provides.
// A typo'd method name, a wrong property access, a mismatched
// argument — none of it gets caught at compile time. In a backend
// service, that means bugs that should have been caught in your
// editor instead surface as 500 errors in production.

// --------------------------------------------
// `unknown` — the safer alternative to `any`
// --------------------------------------------
let incomingData: unknown = JSON.parse('{"id": 1}');

// incomingData.id; // ❌ Error — TS forces you to check the type first

if (typeof incomingData === "object" && incomingData !== null && "id" in incomingData) {
  console.log((incomingData as { id: number }).id); // ✅ safe after narrowing
}

// `unknown` still lets you accept "any possible value", but forces
// you to prove what it actually is before using it — exactly the
// kind of check you want at an API boundary.

// --------------------------------------------
// `void` — "this function returns nothing useful"
// --------------------------------------------
function logMessage(message: string): void {
  console.log(message);
}
logMessage("Server started"); // ✅ just call it, don't use the return value

// --------------------------------------------
// `never` — a function that NEVER returns normally
// (it always throws, or loops forever)
// --------------------------------------------
function throwError(message: string): never {
  throw new Error(message);
}

function assertIsNumber(value: unknown): asserts value is number {
  if (typeof value !== "number") {
    throwError("Value is not a number");
  }
}

console.log("Reached the end of the file");

export {};
