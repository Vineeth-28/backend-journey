// ============================================
// DAY 30 - 02: GENERIC ARRAYS
// ============================================
// `T[]` itself is a generic type — an array specialized to hold
// exactly one type of element. This file focuses on writing
// functions that operate generically over arrays.

function getLength<T>(arr: T[]): number {
  return arr.length;
}

console.log(getLength([1, 2, 3]));        // 3
console.log(getLength(["a", "b"]));       // 2

// A generic function that filters an array using a predicate,
// without knowing (or needing to know) the element type
function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  const result: T[] = [];
  for (const item of arr) {
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
}

const evenNumbers = filterArray([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

const shortNames = filterArray(["Vineet", "Al", "Aman", "Bo"], (name) => name.length <= 3);
console.log(shortNames); // ["Al", "Bo"]

// --------------------------------------------
// A backend-flavored example: paginating any list of records
// --------------------------------------------
function paginate<T>(items: T[], page: number, pageSize: number): T[] {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}

const users = ["u1", "u2", "u3", "u4", "u5"];
console.log(paginate(users, 2, 2)); // ["u3", "u4"]

export {};
