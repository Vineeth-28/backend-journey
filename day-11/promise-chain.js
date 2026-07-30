// ==========================================
// Day 11 - Promise Chaining
// File: promise-chain.js
// ==========================================

// ------------------------------------------
// Example 1
// ------------------------------------------

Promise.resolve(5)

.then((x) => {

    console.log(x);

    return x * 2;

})

.then((y) => {

    console.log(y);

});

/*
Output:

5
10

*/

// ------------------------------------------
// Example 2
// ------------------------------------------

Promise.resolve(100)

.then((value) => {

    console.log(value);

    return value + 50;

})

.then((result) => {

    console.log(result);

});

/*
Output

100
150

*/

// ------------------------------------------
// Example 3
// ------------------------------------------

Promise.resolve(2)

.then((x) => {

    console.log("A:", x);

    return x + 3;

})

.then((y) => {

    console.log("B:", y);

    return y * 2;

})

.then((z) => {

    console.log("C:", z);

});

/*
Output

A: 2
B: 5
C: 10

*/

// ------------------------------------------
// Example 4
// ------------------------------------------

Promise.resolve(1)

.then((a) => {

    console.log(a);

    return a + 1;

})

.then((b) => {

    console.log(b);

    return b + 1;

})

.then((c) => {

    console.log(c);

    return c + 1;

})

.then((d) => {

    console.log(d);

});

/*
Output

1
2
3
4

*/

// ==========================================
// Important Notes
// ==========================================

/*

Every return becomes the value
of the next Promise.

Promise.resolve(5)

↓

then()

↓

return 10

↓

next then receives 10

*/