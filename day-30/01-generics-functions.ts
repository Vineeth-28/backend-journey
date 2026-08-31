// ============================================
// DAY 30 - 01: WHY GENERICS EXIST & GENERIC FUNCTIONS
// ============================================

// --------------------------------------------
// The problem generics solve
// --------------------------------------------
// Without generics, you'd either duplicate a function per type...
function firstNumber(arr: number[]): number {
  return arr[0];
}
function firstString(arr: string[]): string {
  return arr[0];
}
// ...or fall back to `any`, which loses all type safety:
function firstAny(arr: any[]): any {
  return arr[0];
}
const result = firstAny([1, 2, 3]);
// result is typed `any` here — TS has no idea it's actually a number

// --------------------------------------------
// The generic solution — ONE function, ANY type, full type safety
// --------------------------------------------
function first<T>(arr: T[]): T {
  return arr[0];
}

const firstNum = first([1, 2, 3]);          // T becomes `number`
const firstStr = first(["a", "b", "c"]);    // T becomes `string`
console.log(firstNum, firstStr);
// firstNum.toFixed(2);   // ✅ TS knows this is a number
// firstStr.toUpperCase(); // ✅ TS knows this is a string

// --------------------------------------------
// A generic function with two type parameters
// --------------------------------------------
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

const idAndName = pair<number, string>(1, "Vineet");
console.log(idAndName); // [1, "Vineet"]

// TypeScript can usually INFER the type parameters too —
// you don't always have to write <number, string> explicitly:
const inferredPair = pair(2, "Aman");
console.log(inferredPair);

export {};
