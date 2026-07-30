// ==========================================
// Day 11 - then() & catch()
// File: then-catch.js
// ==========================================

// ------------------------------------------
// Example 1
// ------------------------------------------

Promise.resolve(10)

.then((x) => {

    return x * 2;

})

.then((y) => {

    throw new Error("Something went wrong!");

})

.then((z) => {

    console.log(z);

})

.catch((err) => {

    console.log(err.message);

});

/*
Output

Something went wrong!

*/

// ------------------------------------------
// Example 2
// ------------------------------------------

Promise.resolve(5)

.then((x) => {

    console.log("A", x);

    return x * 2;

})

.then((y) => {

    console.log("B", y);

    throw new Error("DB Error");

})

.then((z) => {

    console.log("C", z);

})

.catch((err) => {

    console.log("D", err.message);

})

.then(() => {

    console.log("E");

});

/*
Output

A 5
B 10
D DB Error
E

*/

// ------------------------------------------
// Example 3
// ------------------------------------------

Promise.resolve(1)

.then(() => {

    console.log("A");

    throw new Error("Error 1");

})

.catch(() => {

    console.log("B");

    return 100;

})

.then((value) => {

    console.log("C", value);

});

/*
Output

A
B
C 100

*/

// ==========================================
// Notes
// ==========================================

/*

throw Error

↓

Promise becomes Rejected

↓

Remaining .then() skipped

↓

.catch() executes

↓

Chain continues

*/