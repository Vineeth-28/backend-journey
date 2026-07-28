# Day 10 - Callbacks & Event Loop

## Topics Covered

- Callbacks
- Callback Functions
- Function References
- Callback Hell
- Inversion of Control
- JavaScript Runtime
- setTimeout()
- Call Stack
- Callback Queue
- Event Loop

---

## Interview Questions

### What is a callback?

A callback is a function passed as an argument to another function which is executed later.

### What is Callback Hell?

Nested callbacks that make code difficult to read and maintain.

### Who executes setTimeout()?

The Runtime (Browser Web APIs / Node.js APIs)

### What does the Event Loop do?

It continuously checks whether the Call Stack is empty.
If callbacks are waiting in the Callback Queue, it moves them to the Call Stack.

### Why doesn't setTimeout(fn, 0) execute immediately?

Because JavaScript first completes all synchronous code.
Only then does the Event Loop move callbacks from the Callback Queue to the Call Stack.

---

## Files

- callbacks.js
- callback-hell.js
- runtime.js
- event-loop.js
- exercises.js
- mini-project.js