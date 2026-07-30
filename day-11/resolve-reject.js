// ==========================================
// Day 11 - resolve() & reject()
// File: resolve-reject.js
// ==========================================

// ------------------------------------------
// Example 1
// ------------------------------------------

const promise1 = new Promise((resolve, reject) => {

    resolve("Backend Learning");

});

promise1.then((value) => {

    console.log(value);

});

/*
Output:

Backend Learning
*/

// ------------------------------------------
// Example 2
// ------------------------------------------

const promise2 = new Promise((resolve, reject) => {

    reject("Database Error");

});

promise2
    .then((value) => {

        console.log(value);

    })
    .catch((error) => {

        console.log(error);

    });

/*
Output:

Database Error
*/

// ------------------------------------------
// Example 3
// ------------------------------------------

const promise3 = new Promise((resolve) => {

    resolve({
        id:101,
        username:"vineet"
    });

});

promise3.then((user)=>{

    console.log(user);

});

// ------------------------------------------
// Example 4
// ------------------------------------------

const promise4 = new Promise((resolve)=>{

    resolve([1,2,3,4,5]);

});

promise4.then((numbers)=>{

    console.log(numbers);

});

// ------------------------------------------
// Backend Example
// ------------------------------------------

function connectDatabase(isConnected){

    return new Promise((resolve,reject)=>{

        if(isConnected){

            resolve("Database Connected");

        }else{

            reject("Connection Failed");

        }

    });

}

connectDatabase(true)
.then((message)=>{

    console.log(message);

})
.catch((error)=>{

    console.log(error);

});

/*
Output:

Database Connected
*/

// ==========================================
// Important Notes
// ==========================================

/*

resolve()

✔ Changes Promise state to Fulfilled.
✔ Passes a value to .then()

reject()

✔ Changes Promise state to Rejected.
✔ Passes an error to .catch()

Only the first resolve() or reject()
has any effect.

Promise state cannot change once settled.

*/

// ==========================================
// End
// ==========================================