function getName(){
   return Promise.resolve("Vineet")
}
async function showName(){
   const name = await getName();
   console.log(name);
}

showName();

function getAge(){
   return Promise.resolve(27);
}

async function showAge(){
   const age = await getAge();
   console.log(age);
}

showAge();

function getUser(){
   return Promise.resolve({
       name:"Vineet",
       role :"Backend Engineer"
   });
}

async function showUser(){
   const user = await getUser();
   console.log(user.name);
}

showUser();

function getFrontend(){
   return Promise.resolve("React")
}
function getBackend(){
   return Promise.resolve("Node")
}

async function showStack(){
   const frontend = await getFrontend()
   const backend = await getBackend()

   console.log(frontend)
   console.log(backend)
}

showStack();


// ======================================
// Interview Notes
// ======================================

// What does await do?

// await pauses the current async function
// until the Promise is resolved.

// Does await block JavaScript?

// No.
// It only pauses the current async function.
// The event loop continues executing other code.

// Where can await be used?

// Only inside async functions.

// What happens without await?

// You receive the Promise object.

// What happens with await?

// You receive the resolved value.

// Key Takeaways

// 1. await unwraps resolved Promises.
// 2. await pauses only the current async function.
// 3. JavaScript continues running other code.
// 4. await makes asynchronous code easier to read.