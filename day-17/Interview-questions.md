# Day 17 — Interview Questions

## 1. What is V8?

V8 is Google's JavaScript engine.

Node.js embeds V8 to execute JavaScript outside the browser.

---

## 2. What does Ignition do?

Ignition is V8's interpreter that executes JavaScript using bytecode.

---

## 3. What does TurboFan do?

TurboFan is V8's optimizing compiler.

It optimizes frequently executed ("hot") code based on runtime information.

---

## 4. What is JIT compilation?

JIT stands for Just-In-Time compilation.

It means compilation and optimization can happen while the program is running.

---

## 5. What is Orinoco?

Orinoco is associated with V8's garbage collection system/work.

---

## 6. What is a process?

A process is a running instance of a program.

---

## 7. What is a thread?

A thread is an execution unit inside a process.

---

## 8. Why are threads generally cheaper than processes?

Threads can share resources belonging to the same process instead of requiring a completely separate process environment.

---

## 9. What happens when a process has multiple threads?

A process can contain multiple independently executing threads that share process resources.

---

## 10. Can threads in the same process share memory?

Yes. Threads in the same process can access shared memory/resources.

---

## 11. What is concurrency?

Concurrency means multiple tasks can make progress during overlapping periods.

---

## 12. What is parallelism?

Parallelism means multiple tasks are actually executing at the same time, usually on different CPU cores.

---

## 13. Is Node.js single-threaded?

JavaScript execution in Node.js normally happens on a main thread.

However, Node.js itself is not accurately described as "only one thread." The Node.js runtime can use other threads and operating-system mechanisms for certain asynchronous operations.

---

## 14. How can Node.js handle many requests if JavaScript runs on one main thread?

Node.js uses an event-driven, non-blocking architecture.

The main JavaScript thread does not have to wait synchronously for every I/O operation to finish.

The exact role of libuv and the thread pool will be covered next.

---

## 15. Why is blocking the main JavaScript thread dangerous?

If the main thread is busy with CPU-heavy or blocking work, other JavaScript tasks and incoming requests can be delayed.

This can increase latency and reduce server responsiveness.

---

## 16. What should we learn next?

The next concepts are:

- libuv
- Event Loop
- Thread Pool
- Node.js Modules
- File System APIs

These concepts will complete the mental model of how Node.js handles asynchronous work.
