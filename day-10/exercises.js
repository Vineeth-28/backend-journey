// ==========================================
// Predict the Output
// ==========================================

// Question 1

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");

// Answer:
// Start
// End
// Timer

// ----------------------------

// Question 2

function hello() {
    console.log("Hello");
}

function execute(callback) {
    console.log("Running...");
    callback();
}

execute(hello);

// Answer:
// Running...
// Hello

// ----------------------------

// Question 3

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

setTimeout(() => {
    console.log("D");
}, 0);

console.log("E");

// Answer
// A
// C
// E
// B
// D