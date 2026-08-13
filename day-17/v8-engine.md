# V8 Engine

## What is V8?

V8 is Google's JavaScript engine.

Node.js embeds V8 so that JavaScript can be executed outside the browser.

```text
JavaScript
    ↓
Node.js
    ↓
V8
    ↓
Machine execution
```

V8 is part of the Node.js runtime, but V8 itself is not the entire Node.js runtime.

## Ignition

Ignition is V8's interpreter.

It executes JavaScript using bytecode.

```text
JavaScript
    ↓
Ignition
    ↓
Bytecode
```

## TurboFan

TurboFan is V8's optimizing compiler.

When V8 identifies code that runs frequently ("hot code"), it can optimize that code.

```text
Bytecode
    ↓
Hot code detected
    ↓
TurboFan
    ↓
Optimized machine code
```

If assumptions made during optimization become invalid, V8 can deoptimize the optimized code.

## JIT Compilation

JIT means Just-In-Time compilation.

Instead of compiling everything ahead of time, compilation and optimization can happen while the program is running.

This allows V8 to use runtime information when optimizing code.

## Orinoco

Orinoco is the project/system associated with V8's garbage collection work.

Garbage collection automatically manages memory by identifying objects that are no longer needed and reclaiming their memory.

V8 uses different strategies/generational concepts for young and old objects.

## Overall Mental Model

```text
JavaScript
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
    ↓
Deoptimization when assumptions become invalid
```

## Key Interview Points

- V8 is a JavaScript engine.
- Node.js embeds V8.
- Ignition interprets JavaScript using bytecode.
- TurboFan performs optimization.
- JIT means compilation can happen during runtime.
- V8 can deoptimize code when optimization assumptions become invalid.
- Orinoco is related to V8 garbage collection.
