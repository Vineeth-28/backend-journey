function createIterator(arr) {
  let index = 0;
  return {
    next() {
      if (index < arr.length) {
        return {
          value: arr[index++],
          done: false,
        };
      }
      return {
        value: undefined,
        done: true,
      };
    },
  };
}

const iterator = createIterator([10, 20, 30]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Custom iterator

function createIterator1(arr) {
  let index = 0;
  return {
    next() {
      if (index < arr.length) {
        return {
          value: arr[index++],
          done:false
        };
      }
      return {
        value:undefined,
        done :true
      }
    },
  };
}

const iterator1 = createIterator1(["NODE", "EXPRESS", "REDIS"]);
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

// ======================================
// Interview Notes
// ======================================

// What is a Custom Iterator?
// A Custom Iterator is an object that implements
// a next() method to return one value at a time.

// Why is index outside next()?
// Because it must remember its previous value.
// Closures allow next() to remember index.

// What happens if index is inside next()?
// It resets to 0 every call.
// The iterator would never move forward.

// Real Backend Uses
// - Reading log files
// - Processing database records
// - Streaming APIs
// - File readers
// - Pagination

// Key Takeaways
// 1. next() returns { value, done }.
// 2. Closures preserve iterator state.
// 3. Custom Iterators help process data lazily.
// 4. Generators automate this pattern.
