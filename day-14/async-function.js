//Basic async function

async function greet() {
  return "HELLO BACKEND";
}

console.log(greet());

//async returns a promise

async function age() {
  return 27;
}
age().then((data) => {
  console.log(data);
});

//Returning an array

async function skills() {
  return ["Node ", "Express", "Mongodb"];
}
skills().then((data) => {
  console.log(data[1]);
});

// ======================================
// Interview Notes
// ======================================

// What is an async function?

// An async function always returns a Promise.

// Does async automatically create a Promise?

// Yes.
// Whatever value you return gets wrapped
// inside Promise.resolve().

// Can async return numbers, strings,
// objects and arrays?

// Yes.
// They are automatically wrapped into
// resolved Promises.

// Why is async useful?

// It lets us write asynchronous code
// that looks like synchronous code.

// Key Takeaways

// 1. async always returns a Promise.
// 2. return becomes Promise.resolve(returnValue).
// 3. async functions work with .then().
// 4. async is mainly used together with await.
