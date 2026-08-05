//Log file Reader

function* logReader() {
  yield "Server Started";
  yield "Database Connected";
  yield "User logged In";
  yield "Request Completed";
}

const logs = logReader();
console.log(logs.next().value);
console.log(logs.next().value);
console.log(logs.next().value);
console.log(logs.next().value);

//Api Pagination

function* pages() {
  yield "Page 1";
  yield "Page 2";
  yield "Page 3";
  yield "Page 4";
}

const page = pages();
console.log(page.next());
console.log(page.next());
console.log(page.next());
console.log(page.next());


//Processing Order 
 function* processOrder(){
    yield "order #101"
    yield "order #102"
    yield "order #103"

 }
 const orders=processOrder();
 console.log(orders.next())
 console.log(orders.next())
 console.log(orders.next())
 console.log(orders.next())


 // ======================================
// Streaming Users
// ======================================

function* users() {

    yield "Aman";
    yield "Rahul";
    yield "Vineet";

}

const user = users();
console.log(user.next());
console.log(user.next());
console.log(user.next());
console.log(user.next());


// ======================================
// Interview Notes
// ======================================

// Why are Generators useful in Backend?

// They process one item at a time,
// making applications memory efficient.

// Real Backend Examples

// 1. Reading huge log files
// 2. Processing millions of database rows
// 3. Streaming APIs
// 4. Pagination
// 5. Processing queues
// 6. Event processing

// Advantages

// - Memory Efficient
// - Lazy Evaluation
// - Better Performance
// - Handles Large Data

// Interview Question

// Why not load everything into memory?

// Because huge datasets consume RAM.
// Generators produce values only when needed.