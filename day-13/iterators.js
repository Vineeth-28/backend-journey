const arr = [10,20,30];
const iterator = arr[Symbol.iterator()];

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// =====================================
// Interview Notes
// =====================================

// What is an Iterator?
// An Iterator is an object that allows us to access
// one element at a time from a collection.

// What does next() return?
// It returns an object with:
// 1. value -> current element
// 2. done -> whether iteration has finished

// Why not return only the value?
// Because JavaScript also needs to tell us
// whether the iteration is complete.

// Real Backend Uses
// - Reading large files
// - Database cursors
// - Processing streams
// - Pagination
// - Reading logs line by line

// Key Takeaways
// 1. Iterators process data one item at a time.
// 2. next() returns { value, done }.
// 3. done becomes true when there are no more elements.
// 4. Iterators are memory efficient.


