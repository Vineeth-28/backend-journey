//Project: Task Queue Generator
function* taskqueue(){
    yield "Send Email"
    yield  "Generate Invoice"
    yield "Upload Image"
    yield "Backup Database"
    yield "Notify User"

}
const queue =taskqueue();
let task = queue.next();
while (!task.done) {
    console.log("Processing:", task.value);
    task = queue.next();

}
console.log("All Tasks Completed");

// ======================================
// Interview Notes
// ======================================

// Mini Project
// Task Queue using Generators

// Concepts Used
// 1. Generator Function
// 2. yield
// 3. next()
// 4. done
// 5. Lazy Processing

// Backend Use Cases
// - Job Queues
// - Event Processing
// - Background Workers
// - Streaming APIs
// - File Processing

// Key Takeaways
// Generators allow processing one task
// at a time instead of loading everything
// into memory.