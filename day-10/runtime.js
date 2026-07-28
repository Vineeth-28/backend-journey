// ==========================================
// JavaScript Runtime
// ==========================================

console.log("Start");

setTimeout(() => {
    console.log("Timer Finished");
}, 2000);

console.log("End");

/*
Flow

JavaScript
    ↓
Runtime starts timer
    ↓
JS continues execution
    ↓
Timer finishes
    ↓
Callback Queue
    ↓
Event Loop
    ↓
Call Stack
*/