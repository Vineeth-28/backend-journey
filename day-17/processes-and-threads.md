# Processes and Threads

## Process

A process is a running instance of a program.

A process has its own resources and execution environment.

Examples of process-related information/resources include:

- Process ID (PID)
- Memory space
- Heap
- Code
- Resources
- Threads

## Thread

A thread is an execution unit inside a process.

A simplified way to think about a thread is:

> A thread is a lightweight execution unit within a process.

## Process vs Thread

```text
PROCESS
│
├── Memory / Resources
│
├── Heap
│
└── Threads
    ├── Stack
    ├── CPU registers
    └── Execution state
```

Threads inside the same process can share the process's memory/resources.

However, each thread has its own execution state, including its own stack and CPU register state.

## Why Are Threads Cheaper?

Threads are generally cheaper than processes because threads belonging to the same process can share existing process resources instead of requiring a completely separate process environment.

## Multiple Threads

A single process can contain multiple threads.

```text
Process
   │
   ├── Thread 1
   ├── Thread 2
   ├── Thread 3
   └── Thread 4
```

Each thread can execute independently while sharing resources with other threads in the same process.

## Shared Memory

Threads belonging to the same process can access shared memory.

This makes communication between threads efficient, but it also introduces possible synchronization problems.

## Concurrency

Concurrency means multiple tasks can make progress during overlapping periods.

It does not necessarily mean that tasks are executing at exactly the same moment.

Example:

```text
Task A → waiting → Task B → waiting → Task A
```

## Parallelism

Parallelism means multiple tasks are actually executing at the same time.

This commonly happens when work is executed on multiple CPU cores.

```text
CPU Core 1: Task A ───────────>

CPU Core 2: Task B ───────────>
```

## Concurrency vs Parallelism

| Concept     | Meaning                                               |
| ----------- | ----------------------------------------------------- |
| Concurrency | Multiple tasks make progress over overlapping periods |
| Parallelism | Multiple tasks execute at the same time               |

## Connection to Node.js

Node.js normally executes JavaScript on a main thread.

However, Node.js can use other threads and operating-system mechanisms for certain types of asynchronous work.

The exact role of:

- libuv
- Event Loop
- Thread Pool

will be studied next.

## Important

Do not simplify Node.js as:

> "Node.js uses multiple worker processes for every request."

Instead, Node.js uses an event-driven, non-blocking model that allows the main JavaScript thread to continue processing work while asynchronous operations are handled through the underlying runtime/OS mechanisms.
