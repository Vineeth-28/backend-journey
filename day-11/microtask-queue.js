// ==========================================
// Day 11 - Microtask Queue
// File: microtask-queue.js
// ==========================================

// ------------------------------------------
// Example 1
// ------------------------------------------

console.log("Start");

Promise.resolve().then(() => {

    console.log("Promise");

});

console.log("End");

/*
Output

Start
End
Promise

*/

// ------------------------------------------
// Example 2
// ------------------------------------------

console.log("Start");

setTimeout(() => {

    console.log("Timeout");

}, 0);

Promise.resolve().then(() => {

    console.log("Promise");

});

console.log("End");

/*
Output

Start
End
Promise
Timeout

*/

// ------------------------------------------
// Example 3
// ------------------------------------------

console.log("A");

setTimeout(() => {

    console.log("B");

},0);

Promise.resolve().then(() => {

    console.log("C");

});

console.log("D");

/*
Output

A
D
C
B

*/

// ==========================================
// Important Notes
// ==========================================

/*

Priority

1. Call Stack

↓

2. Microtask Queue

↓

3. Callback Queue

Promise.then()

↓

Microtask Queue

setTimeout()

↓

Callback Queue

Microtask Queue always executes first.

*/