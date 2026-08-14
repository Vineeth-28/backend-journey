# Node.js Internals

## V8 Engine

- V8 executes JavaScript inside Node.js.
- Ignition interprets JavaScript into bytecode.
- TurboFan optimizes frequently executed code.
- JIT means Just-In-Time compilation.
- Orinoco handles garbage collection.

## Process & Threads

- A process is a running program.
- Threads are lightweight execution units inside a process.
- Threads can share resources within a process.
- Concurrency means managing multiple tasks.
- Parallelism means executing tasks simultaneously.

## Node.js Architecture

Node.js runs JavaScript on a main thread.

It uses libuv to handle asynchronous I/O and provides the event loop
and thread pool mechanisms.

## Event Loop

The event loop allows Node.js to handle asynchronous operations
without blocking the JavaScript execution thread.

Basic idea:

Request
→ asynchronous operation
→ operation completes
→ callback becomes ready
→ event loop executes callback

## Important

A CPU-heavy operation can block the main JavaScript thread.

Blocking the main thread is dangerous because other requests have
to wait.