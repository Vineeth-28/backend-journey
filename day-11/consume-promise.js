// ==========================================
// Day 11 - Consuming Promises
// File: consume-promise.js
// ==========================================

// ------------------------------------------
// Example 1
// ------------------------------------------

const promise1 = new Promise((resolve) => {
    resolve("Backend Journey");
});

promise1.then((result) => {
    console.log(result);
});

/*
Output:
Backend Journey
*/

// ------------------------------------------
// Example 2
// ------------------------------------------

const promise2 = new Promise((resolve) => {
    resolve(100);
});

promise2.then((value) => {
    console.log(value);
});

/*
Output:
100
*/

// ------------------------------------------
// Example 3
// ------------------------------------------

const promise3 = new Promise((resolve) => {
    resolve({
        name: "Vineet",
        role: "Backend Engineer"
    });
});

promise3.then((user) => {
    console.log(user);
});

/*
Output:
{
  name: 'Vineet',
  role: 'Backend Engineer'
}
*/

// ------------------------------------------
// Example 4
// ------------------------------------------

const promise4 = new Promise((resolve) => {
    resolve([10, 20, 30]);
});

promise4.then((numbers) => {
    console.log(numbers);
});

/*
Output:
[10,20,30]
*/

// ------------------------------------------
// Backend Example
// ------------------------------------------

function fetchUser() {

    return new Promise((resolve) => {

        resolve({
            id: 101,
            username: "vineet"
        });

    });

}

fetchUser().then((user) => {

    console.log(user.username);

});

/*
Output:
vineet
*/

// ==========================================
// Notes
// ==========================================

/*

.then() receives the value passed to resolve()

resolve("Hello")

↓

.then((value)=>{
    console.log(value);
})

value = "Hello"

*/