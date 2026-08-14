# Day 18 — Node.js Internals & Modules

## Topics Covered

### Node.js Internals

- V8 JavaScript Engine
- Ignition interpreter
- TurboFan JIT compiler
- Orinoco garbage collection
- Processes and threads
- Concurrency vs parallelism
- Node.js main JavaScript thread
- libuv
- Event Loop
- Asynchronous I/O
- Thread pool
- Blocking vs non-blocking operations

### Node.js Modules

- What are Node.js modules?
- Why modules are used
- CommonJS modules
- `require()`
- `module.exports`
- `exports`
- ES Modules
- `import` / `export`
- `.mjs` file extension
- CommonJS vs ES Modules

---

## Practical Work

### 1. Node.js Internals

Studied how Node.js executes JavaScript and handles
asynchronous operations.

Important flow:

```text
JavaScript
    ↓
V8 Engine
    ↓
Node.js Runtime
    ↓
libuv
    ↓
Event Loop / Thread Pool