// ============================================
// DAY 26 - 02: TYPE INFERENCE & STATIC TYPING
// ============================================
// You don't always need to write the type yourself — TypeScript
// can INFER it from the value you assign. This is called
// "type inference".

let id = 10;            // inferred as: number
let name = "Vineet";    // inferred as: string
let isAdmin = false;    // inferred as: boolean

console.log(id, name, isAdmin);

// Once TypeScript infers (or you annotate) a type, that variable
// is "statically typed" for the rest of its life — it cannot
// switch to a different type later. This is what makes TS
// "type-safe" compared to plain JavaScript.

// id = "ten";      // ❌ Error: Type 'string' is not assignable to type 'number'
// name = 123;       // ❌ Error: Type 'number' is not assignable to type 'string'

// --------------------------------------------
// When to annotate explicitly vs let TS infer
// --------------------------------------------
// Inference is fine for simple local variables:
let requestCount = 0;

// Explicit annotation is better for function parameters and
// return types, and for variables declared without an initial
// value, because there's nothing for TS to infer from:
let userId: number; // no value yet — annotation is required here
userId = 42;

console.log(requestCount, userId);

export {};
