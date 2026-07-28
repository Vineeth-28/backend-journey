// ==========================================
// Day 10 - Callbacks
// ==========================================

// A callback is a function passed as an argument
// to another function.

function greet(name) {
    console.log(`Hello ${name}`);
}

function processUser(callback) {
    callback("Vineet");
}

processUser(greet);

// ------------------------------------------
// Anonymous Callback
// ------------------------------------------

function processOrder(callback) {
    console.log("Processing Order...");
    callback();
}

processOrder(function () {
    console.log("Order Completed");
});

// ------------------------------------------
// Arrow Function Callback
// ------------------------------------------

function fetchData(callback) {
    console.log("Fetching Data...");
    callback();
}

fetchData(() => {
    console.log("Data Received");
});

// ------------------------------------------
// Function Reference
// ------------------------------------------

function hello() {
    console.log("Hello");
}

function run(callback) {
    console.log("Start");
    callback();
    console.log("End");
}

run(hello);

// ------------------------------------------
// Calculator Example
// ------------------------------------------

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function calculate(fn) {
    console.log(fn(10, 5));
}

calculate(add);
calculate(subtract);

// ------------------------------------------
// Backend Example
// ------------------------------------------

function registerUser(callback) {
    console.log("Registering User...");
    callback();
}

function sendWelcomeEmail() {
    console.log("Welcome Email Sent");
}

registerUser(sendWelcomeEmail);