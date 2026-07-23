
/*
var
*/

console.log(a);

var a = 10;

/*
let
*/

// console.log(b);

let b = 20;

/*
const
*/

// console.log(c);

const c = 30;

/*
Function Declaration
*/

sayHello();

function sayHello() {
    console.log("Hello");
}

/*
Function Expression
*/

// greet();

// const greet = function () {
//     console.log("Hello");
// };

/*
Function Reference vs Function Call
*/

function add(a, b) {
    return a + b;
}

const fn = add;

console.log(fn(2, 3));

const result = add(5, 7);

console.log(result);