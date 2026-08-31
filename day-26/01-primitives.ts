// ============================================
// DAY 26 - 01: PRIMITIVE TYPES
// ============================================
// TypeScript's primitive types describe the most basic kinds
// of values a variable can hold. Declaring the type up front
// lets the compiler catch mistakes before the code ever runs.

// string - text data
let username: string = "Vineet";

// number - integers AND floating-point numbers (TS has one number type)
let age: number = 25;
let price: number = 499.99;

// boolean - true / false
let isActive: boolean = true;

// undefined - a variable that has been declared but not assigned
let sessionToken: undefined = undefined;

// null - an intentional "no value"
let deletedAt: null = null;

// bigint - for integers too large for the regular `number` type
// (useful for things like large IDs from certain databases)
let bigUserId: bigint = 9007199254740993n;

// symbol - a unique, immutable identifier (rarely used day-to-day,
// but shows up when building unique object keys)
let uniqueKey: symbol = Symbol("userKey");

console.log(username, age, price, isActive);
console.log(sessionToken, deletedAt, bigUserId, uniqueKey);

// A common backend example: modeling a raw request field before validation
let requestBody: string = '{"userId": 1}';
console.log("Received body:", requestBody);

export {};
