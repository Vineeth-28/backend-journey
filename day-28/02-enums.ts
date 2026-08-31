// ============================================
// DAY 28 - 02: ENUMS
// ============================================
// Use an enum for a fixed, limited set of named values — a
// clearer alternative to comparing raw strings scattered
// throughout the codebase.

// --------------------------------------------
// Numeric enums (default) — auto-numbered starting at 0
// --------------------------------------------
enum OrderStatus {
  Pending,   // 0
  Shipped,   // 1
  Delivered, // 2
  Cancelled, // 3
}

console.log(OrderStatus.Shipped); // 1

const order = {
  id: 101,
  status: OrderStatus.Pending,
};

if (order.status === OrderStatus.Pending) {
  console.log("Order is still pending");
}

// --------------------------------------------
// Numeric enums with custom values — common for HTTP status codes
// --------------------------------------------
enum HttpStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  NotFound = 404,
  ServerError = 500,
}

function respond(status: HttpStatus, message: string) {
  console.log(`[${status}] ${message}`);
}

respond(HttpStatus.NotFound, "User not found");

// --------------------------------------------
// String enums — values are strings, not numbers.
// Often preferred for readability in logs and debugging.
// --------------------------------------------
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

function hasAdminAccess(role: UserRole): boolean {
  return role === UserRole.Admin;
}

console.log(hasAdminAccess(UserRole.Admin));  // true
console.log(hasAdminAccess(UserRole.Viewer)); // false

export {};
