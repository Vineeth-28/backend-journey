// ============================================
// DAY 27 - 02: TYPE ALIASES
// ============================================
// A type alias gives a reusable name to a type — most useful
// for object shapes you'll reference in multiple places.

type Details = {
  name: string;
  marks: number;
  address: string;
};

const student: Details = {
  name: "Vineet",
  marks: 89,
  address: "Bangalore",
};

console.log(student);

// Reuse the alias in a function signature instead of retyping the shape
function printDetails(details: Details): void {
  console.log(`${details.name} scored ${details.marks} (${details.address})`);
}

printDetails(student);

// --------------------------------------------
// A small backend example: modeling a database row shape
// --------------------------------------------
type UserRow = {
  id: number;
  email: string;
  createdAt: Date;
};

const dbUser: UserRow = {
  id: 1,
  email: "vineet@example.com",
  createdAt: new Date(),
};

console.log(dbUser);

export {};
