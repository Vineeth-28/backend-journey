// ============================================
// DAY 26 - 03: UNION TYPES
// ============================================
// A union type lets a variable hold more than one possible type.
// Useful for values that legitimately vary — like an ID that
// might come in as a string from a URL param, or a number
// once parsed.

let userId: number | string = "35";
userId = 10; // ✅ still allowed — `number` is part of the union
console.log(userId);

// Union types are common at backend API boundaries, where input
// often arrives as a string and needs to be handled safely:
function formatUserId(id: number | string): string {
  // typeof narrows the union down to one branch at a time
  if (typeof id === "number") {
    return `USER-${id.toString().padStart(5, "0")}`;
  }
  return `USER-${id}`;
}

console.log(formatUserId(7));      // "USER-00007"
console.log(formatUserId("abc"));  // "USER-abc"

// A union can combine more than two types too:
let status: "pending" | "active" | "closed" = "pending";
status = "active"; // ✅ allowed
// status = "archived"; // ❌ Error — not part of the union
console.log(status);

export {};
