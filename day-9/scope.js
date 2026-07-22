/************************************************
 Day 9 - JavaScript Scope
************************************************/

/*
Global Scope
*/

const company = "OpenAI";

function greet() {
    console.log(company);
}

greet();
console.log(company);

/*
Function Scope
*/

function employee() {
    const salary = 50000;
    console.log(salary);
}

employee();
// console.log(salary);

/*
Block Scope
*/

if (true) {
    let city = "Delhi";
    console.log(city);
}

// console.log(city);

/*
Nested Scope
*/

const university = "IIT";

function college() {
    const department = "CSE";

    function student() {
        const name = "Vineet";

        console.log(university);
        console.log(department);
        console.log(name);
    }

    student();
}

college();

/*
Variable Shadowing
*/

let x = 10;

function first() {
    let x = 20;

    function second() {
        let x = 30;
        console.log(x);
    }

    second();
}

first();

// | Variable | Block Scope | Function Scope                                  |
// | -------- | ----------- | ----------------------------------------------- |
// | `var`    | ❌ No        | ✅ Yes                                           |
// | `let`    | ✅ Yes       | ✅ Yes (because a function body is also a block) |
// | `const`  | ✅ Yes       | ✅ Yes (because a function body is also a block) |


// 🧠 Memory Trick

// Imagine three boxes:

// Global
// │
// ├── Function
// │      │
// │      └── if
// │             │
// │             └── for
// var
// Ignores if
// Ignores for
// Stops at the function
// let / const
// Respect every pair of {}
// They stop at the nearest enclosing block.