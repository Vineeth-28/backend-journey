// ============================================
// DAY 27 - 04: `type` vs `interface`
// ============================================

// --------------------------------------------
// Simple aliases — `type` is the natural fit
// --------------------------------------------
type UserId = number | string;
type Tags = string[];

// --------------------------------------------
// Indexed interfaces — an object with a known KEY type
// mapping to a known VALUE type
// --------------------------------------------
interface NumberArray {
  [index: number]: number;
}

const scores: NumberArray = [90, 85, 78];
console.log(scores[1]); // 85

interface StringMap {
  [key: string]: string;
}

const env: StringMap = {
  NODE_ENV: "development",
  PORT: "3000",
};
console.log(env.NODE_ENV);

// --------------------------------------------
// Unions — only `type` can express these, not `interface`
// --------------------------------------------
type RequestStatus = "idle" | "loading" | "success" | "error";

// interface RequestStatus {
//   "idle" | "loading" // ❌ not valid syntax for an interface
// }

let status: RequestStatus = "idle";
status = "loading"; // ✅
console.log(status);

// --------------------------------------------
// Quick summary
// --------------------------------------------
// - type:      unions, tuples, primitive aliases, function types, object shapes
// - interface: object shapes, function types, indexed types, declaration merging,
//              and a more natural fit for "extendable" public contracts

export {};
