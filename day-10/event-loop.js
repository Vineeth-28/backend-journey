// ==========================================
// Event Loop
// ==========================================

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3");

setTimeout(() => {
    console.log("4");
}, 0);

console.log("5");
console.log("6");

/*

Output

1
3
5
6
2
4

Reason:

1. JavaScript executes synchronous code.
2. Runtime handles timers.
3. Timers finish.
4. Callbacks enter Callback Queue.
5. Event Loop checks Call Stack.
6. Callback moves to Call Stack.
7. JavaScript executes callback.

*/