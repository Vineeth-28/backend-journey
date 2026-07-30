// ==========================================
// Day 11 - Promises
// File: promises.js
// ==========================================

// A Promise is an object that represents the
// eventual success or failure of an asynchronous operation.

// Promise States
// 1. Pending
// 2. Fulfilled
// 3. Rejected

// ------------------------------------------
// Creating a Promise
// ------------------------------------------

const promise = new Promise((resolve, reject) => {

    console.log("Promise Started");

    resolve("Backend Journey");

});

console.log(promise);

/*
Output:

Promise Started
Promise { <fulfilled>: 'Backend Journey' }
*/

// ------------------------------------------
// Pending Promise
// ------------------------------------------

const pendingPromise = new Promise((resolve, reject) => {

    // No resolve() or reject()

});

console.log(pendingPromise);

/*
Output:

Promise { <pending> }
*/

// ------------------------------------------
// Rejected Promise
// ------------------------------------------

const rejectedPromise = new Promise((resolve, reject) => {

    reject("Database Connection Failed");

});

// Uncomment to observe the behavior
// console.log(rejectedPromise);

// ------------------------------------------
// Only First Resolve Works
// ------------------------------------------

const promise2 = new Promise((resolve, reject) => {

    resolve("First");

    resolve("Second");

});

console.log(promise2);

/*
Output:

Promise { <fulfilled>: 'First' }
*/

// ------------------------------------------
// Resolve then Reject
// ------------------------------------------

const promise3 = new Promise((resolve, reject) => {

    resolve("Success");

    reject("Failed");

});

console.log(promise3);

/*
Output:

Promise { <fulfilled>: 'Success' }
*/

// ------------------------------------------
// Reject then Resolve
// ------------------------------------------

const promise4 = new Promise((resolve, reject) => {

    reject("Something Went Wrong");

    resolve("Success");

});

// Uncomment to observe rejected promise
// console.log(promise4);

// ==========================================
// End
// ==========================================