# Day 17 — Node.js Runtime & Concurrency Fundamentals

## Goal

Understand the fundamentals behind Node.js execution and how Node.js handles concurrent work.

## Topics Covered

- V8 JavaScript Engine
- Ignition
- TurboFan
- JIT Compilation
- Orinoco / Garbage Collection
- Processes
- Threads
- Process vs Thread
- Shared resources
- Concurrency
- Parallelism
- Node.js single-threaded model
- Blocking vs non-blocking concepts

## V8 Mental Model

JavaScript code is executed by the V8 engine inside Node.js.

```text
JavaScript
    ↓
Node.js
    ↓
V8
    ↓
Ignition
    ↓
Bytecode
    ↓
Hot code
    ↓
TurboFan
    ↓
Optimized machine code
```

If runtime assumptions become invalid, optimized code can be deoptimized.

## Processes and Threads

A process is a running instance of a program.

A thread is an execution unit inside a process.

Threads belonging to the same process can share process resources, while each thread maintains its own execution state such as its stack and CPU registers.

## Concurrency vs Parallelism

### Concurrency

Multiple tasks can make progress during overlapping periods.

### Parallelism

Multiple tasks are actually executing at the same time, usually on different CPU cores.

## Node.js

JavaScript execution normally happens on the main thread.

Node.js can also use other threads and operating-system facilities for certain types of work.

The exact role of libuv, the event loop, and the thread pool will be studied next.

## Important Learning

The goal was not to memorize definitions.

The goal was to understand the relationship between:

```text
Node.js
   ↓
V8
   ↓
JavaScript execution
   ↓
Concurrency
   ↓
Event-driven architecture
```

## Next

- libuv
- Event Loop
- Thread Pool
- Node.js Modules
- File System APIs
- Practical Node.js experiments
