/************************************************
 Day 9 Exercises
************************************************/

/*
Exercise 1
*/

const a = 10;

function test() {
    console.log(a);
}

test();

// Answer:
// 10
// Function can access Global Scope

/*
Exercise 2
*/

function demo() {
    const b = 20;
}

// console.log(b);

// Answer:
// ReferenceError
// b belongs to demo()

/*
Exercise 3
*/

if (true) {
    let c = 30;
}

// console.log(c);

// Answer:
// ReferenceError
// let follows block scope

/*
Exercise 4
*/

if (true) {
    var d = 40;
}

console.log(d);

// Answer:
// 40
// var ignores block scope

/*
Challenge 1
*/

const num = 100;

function one() {

    const value = 200;

    if (true) {

        const total = 300;

        console.log(num);
        console.log(value);
        console.log(total);

    }

}

one();

// Answer:
// 100
// 200
// 300

/*
Challenge 2
*/

const language = "JavaScript";

function backend() {
    const framework = "Express";
}

// console.log(framework);

// Answer:
// ReferenceError

/*
Challenge 3
*/

let x = 10;

function first() {

    let x = 20;

    function second() {

        console.log(x);

    }

    second();

}

first();

// Answer:
// 20
// Scope Chain

/*
Boss Question
*/

let a1 = 1;

function one1() {

    let a1 = 2;

    function two() {

        let a1 = 3;

        console.log(a1);

    }

    two();

}

one1();

// Answer:
// 3