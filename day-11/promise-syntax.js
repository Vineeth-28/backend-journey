// ==========================================
// Day 11 - Promise Syntax
// File: promise-syntax.js
// ==========================================

// Basic Promise Syntax

const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {

        resolve("Promise Fulfilled");

    } else {

        reject("Promise Rejected");

    }

});

console.log(promise);

// ------------------------------------------
// Promise with Number
// ------------------------------------------

const numberPromise = new Promise((resolve) => {

    resolve(100);

});

console.log(numberPromise);

// ------------------------------------------
// Promise with Object
// ------------------------------------------

const objectPromise = new Promise((resolve) => {

    resolve({
        id: 1,
        name: "Vineet"
    });

});

console.log(objectPromise);

// ------------------------------------------
// Promise with Array
// ------------------------------------------

const arrayPromise = new Promise((resolve) => {

    resolve([10,20,30]);

});

console.log(arrayPromise);

// ------------------------------------------
// Promise using Function
// ------------------------------------------

function getUser() {

    return new Promise((resolve) => {

        resolve({
            username: "backenddev",
            role: "Engineer"
        });

    });

}

const userPromise = getUser();

console.log(userPromise);

// ==========================================
// End
// ==========================================