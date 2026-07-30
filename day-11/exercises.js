// ==========================================
// Day 11 Exercises
// File: exercises.js
// ==========================================

/*

Try predicting the output BEFORE running
the code.

*/

// ------------------------------------------
// Exercise 1
// ------------------------------------------

Promise.resolve(10)
.then((x) => {
    return x * 2;
})
.then((y) => {
    console.log(y);
});

/*
Expected Output

20

*/

// ------------------------------------------
// Exercise 2
// ------------------------------------------

Promise.resolve("Backend")
.then((value) => {
    console.log(value);
    return "Engineer";
})
.then((role) => {
    console.log(role);
});

/*
Expected Output

Backend
Engineer

*/

// ------------------------------------------
// Exercise 3
// ------------------------------------------

Promise.resolve(5)
.then((x) => {
    throw new Error("Database Error");
})
.catch((err) => {
    console.log(err.message);
});

/*
Expected Output

Database Error

*/

// ------------------------------------------
// Exercise 4
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
Expected Output

Start
End
Promise
Timeout

*/

// ------------------------------------------
// Exercise 5
// ------------------------------------------

Promise.resolve(2)
.then((x) => x + 3)
.then((y) => y * 5)
.then((z) => console.log(z));

/*
Expected Output

25

*/

// ==========================================
// Challenge
// ==========================================

/*

Create a function called loginUser()

Return a Promise.

If password is correct:

resolve("Login Successful")

Else

reject("Invalid Credentials")

Consume it using

.then()

.catch()

*/