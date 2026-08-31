// ============================================
// DAY 27 - 01: OBJECT TYPING & STRUCTURAL TYPING
// ============================================

// TypeScript infers an object literal's type from its shape.
const user = {
  id: 1,
  name: "Vineet",
  isActive: true,
};
// inferred type: { id: number; name: string; isActive: boolean }

console.log(user);

// You can also annotate the shape explicitly:
const admin: { id: number; name: string; role: string } = {
  id: 2,
  name: "Aman",
  role: "admin",
};
console.log(admin);

// --------------------------------------------
// Structural typing: TypeScript compares objects by SHAPE,
// not by name. Two differently-declared objects are compatible
// if their members match.
// --------------------------------------------
type Point2D = { x: number; y: number };

function printPoint(point: Point2D) {
  console.log(`(${point.x}, ${point.y})`);
}

const coordinates = { x: 10, y: 20 }; // never explicitly typed as Point2D
printPoint(coordinates); // ✅ works — the SHAPE matches, that's all TS checks

// --------------------------------------------
// Updating an existing key is fine; adding an undeclared one is not
// --------------------------------------------
admin.name = "Aman Singh"; // ✅ same key, same type
// admin.email = "aman@example.com"; // ❌ Error — `email` was never declared

export {};
