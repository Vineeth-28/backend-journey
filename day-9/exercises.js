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

/*
Exercise 2
*/

function demo() {
    const b = 20;
}

// console.log(b);

/*
Exercise 3
*/

if (true) {
    let c = 30;
}

// console.log(c);

/*
Exercise 4
*/

if (true) {
    var d = 40;
}

console.log(d);

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

/*
Challenge 2
*/

const language = "JavaScript";

function backend() {
    const framework = "Express";
}

// console.log(framework);

/*
Challenge 3
*/

let score = 10;

function first() {
    let score = 20;

    function second() {
        console.log(score);
    }

    second();
}

first();

/*
Boss Question
*/

let value = 1;

function one1() {
    let value = 2;

    function two() {
        let value = 3;

        console.log(value);
    }

    two();
}

one1();