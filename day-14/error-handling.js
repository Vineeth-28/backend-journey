// ======================================
// Promise Rejection
// ======================================

const { error } = require("three");

function getUser() {
    return Promise.reject("User Not Found");
}

async function fetchUser() {
    try {
        const user = await getUser();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

fetchUser();

//Successful Promise

function getCourse(){
    return Promise.resolve("Backend");

}

async function study(){
    try{
        const course =await getCourse();
        console.log(course);
    }
    catch(error){
        console.log(error)
    }
}

study()

//Throwing an Error
async function login() {
    try {
       throw new Error("Invalid Password");

    } catch (error) {
        console.log(error.message);

    }

}

login();


//multiple awaits 
function getName(){
    return Promise.resolve("Aman");;
}
function getAge(){
    return Promise.resolve(27)
}

async function profile(){
    try{
        const name =await getName();
        const age=await getAge();
        console.log(name);
        console.log(age);

    }
    catch(error){
        console.log(error);
    }
}

profile()

// ======================================
// Interview Notes
// ======================================

// What happens if an awaited Promise rejects?

// Control immediately jumps to the catch block.

// Does code after the rejected await execute?

// No.
// Execution jumps directly to catch.

// Why use try...catch?

// It provides cleaner error handling than
// chaining multiple .catch() calls.

// Backend Uses

// - API calls
// - Database queries
// - Authentication
// - File operations
// - External services

// Key Takeaways

// 1. await works with try...catch.
// 2. Rejected Promises jump to catch.
// 3. Code after the rejected await is skipped.
// 4. try...catch is the preferred style in backend development.