// ============================================
// DAY 30 - 05: GENERIC LINEAR SEARCH
// ============================================
// A linear search checks each element in order until it finds a
// match. Making it generic means the SAME function works for
// numbers, strings, or any comparable type.

function linearSearch<T>(array: T[], target: T): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1; // not found
}

const numbers = [4, 8, 15, 16, 23, 42];
console.log(linearSearch(numbers, 16)); // 3
console.log(linearSearch(numbers, 99)); // -1

const names = ["Vineet", "Aman", "Singh"];
console.log(linearSearch(names, "Aman")); // 1
console.log(linearSearch(names, "Bob"));  // -1

// --------------------------------------------
// A generic search using a custom comparator — useful when
// searching for an object by one of its fields, not the whole object
// --------------------------------------------
function findBy<T>(array: T[], predicate: (item: T) => boolean): T | undefined {
  for (const item of array) {
    if (predicate(item)) {
      return item;
    }
  }
  return undefined;
}

interface UserRecord {
  id: number;
  email: string;
}

const users: UserRecord[] = [
  { id: 1, email: "vineet@example.com" },
  { id: 2, email: "aman@example.com" },
];

const found = findBy(users, (user) => user.id === 2);
console.log(found); // { id: 2, email: "aman@example.com" }

const notFound = findBy(users, (user) => user.id === 99);
console.log(notFound); // undefined

export {};
