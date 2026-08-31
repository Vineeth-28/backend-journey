// ============================================
// DAY 26 - 04: ARRAYS & TUPLES
// ============================================

// --------------------------------------------
// Typed arrays — every element must match the declared type
// --------------------------------------------
let numbers: number[] = [1, 2, 3];
let usernames: string[] = ["vineet", "aman", "singh"];
console.log(numbers, usernames);

// numbers.push("4"); // ❌ Error — only numbers allowed in this array

// --------------------------------------------
// Heterogeneous arrays — a union of allowed types
// --------------------------------------------
let mixedIds: (number | string)[] = [1, "abc", 3];
console.log(mixedIds);

// --------------------------------------------
// Tuples — a fixed-length array where each POSITION has its
// own known type. Order and count matter.
// --------------------------------------------
let user: [number, string, boolean] = [1, "Vineet", true];
console.log(user);

// A practical backend use case: representing a [key, value] pair
// or a [statusCode, message] result without creating a full object
type ApiResult = [number, string];

function checkHealth(): ApiResult {
  return [200, "OK"];
}

const [statusCode, message] = checkHealth();
console.log(statusCode, message); // 200 OK

export {};
