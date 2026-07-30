// ==========================================
// Day 11 - Advanced Event Loop
// File: event-loop-advanced.js
// ==========================================

// ------------------------------------------
// Example 1
// ------------------------------------------

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("3");
    })
    .then(() => {
        console.log("4");
    });

console.log("5");

/*
Output

1
5
3
4
2

*/

// ------------------------------------------
// Example 2
// ------------------------------------------

console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("Promise 1");
    })
    .then(() => {
        console.log("Promise 2");
    });

setTimeout(() => {
    console.log("Timeout 2");
}, 0);

console.log("End");

/*
Output

Start
End
Promise 1
Promise 2
Timeout 1
Timeout 2

*/

// ------------------------------------------
// Example 3
// ------------------------------------------

console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

setTimeout(() => {
    console.log("C");
}, 0);

Promise.resolve().then(() => {
    console.log("D");
});

console.log("E");

/*
Output

A
E
B
D
C

*/

// ==========================================
// Notes
// ==========================================

/*

Execution Order

1. Global Code
2. Microtask Queue
3. Callback Queue

Promise.then()

↓

Microtask Queue

setTimeout()

↓

Callback Queue

Every .then() in a chain schedules the next
microtask only after the previous one completes.

*/