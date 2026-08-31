// ============================================
// DAY 26 - 05: FUNCTIONS
// ============================================

// --------------------------------------------
// Typed parameters and return type
// --------------------------------------------
function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(2, 3)); // 5

// --------------------------------------------
// Optional parameters (`?`)
// --------------------------------------------
// `age?: number` tells TS the caller MAY omit this argument.
// If omitted, its value inside the function is `undefined`.
function greet(name: string, age?: number): string {
  if (age === undefined) {
    return `Hello, ${name}!`;
  }
  return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet("Vineet"));        // "Hello, Vineet!"
console.log(greet("Vineet", 25));    // "Hello, Vineet! You are 25 years old."

// --------------------------------------------
// Default parameters — an alternative to `?`
// --------------------------------------------
function createUser(name: string, role: string = "member"): string {
  return `${name} joined as ${role}`;
}

console.log(createUser("Aman"));           // "Aman joined as member"
console.log(createUser("Aman", "admin"));  // "Aman joined as admin"

// --------------------------------------------
// A small backend-flavored example: validating a request payload
// --------------------------------------------
function isValidAge(age: number): boolean {
  return age >= 0 && age < 150;
}

console.log(isValidAge(25));  // true
console.log(isValidAge(-5));  // false

export {};
