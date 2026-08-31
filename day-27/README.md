# Day 27 — Objects, Types and Interfaces

## What I Learned

- How TypeScript infers an object literal's type from its shape
- Structural typing — objects are compatible if their shapes match, regardless of how (or whether) they were named
- Type aliases (`type Details = {...}`) for reusable object shapes
- Interfaces as contracts — they describe shape, never implementation, and can't be instantiated
- Optional properties (`host?: string`) and readonly properties (`readonly sessionId: string`)
- Indexed interfaces (`[index: number]: number`) for objects with dynamic keys
- The practical differences between `type` and `interface`
- Union types can only be written with `type`, never `interface`
- Function types — describing a function's signature with either `type` or a callable `interface`

## Practical Work

- `01-objects.ts` — object inference, explicit object typing, and a structural typing example with `Point2D`
- `02-type-aliases.ts` — the `Details` type alias plus a `UserRow` example modeling a database row shape
- `03-interfaces.ts` — a `Product` interface, optional properties on `Config`, and readonly properties on `Session`
- `04-type-vs-interface.ts` — indexed interfaces (`NumberArray`, `StringMap`) and a union type (`RequestStatus`) that can only be expressed with `type`
- `05-function-types.ts` — the `Logger` function type, its interface equivalent, and a practical `AuthForm` contract with a working `loginForm`

## Key Understanding

TypeScript checks objects **structurally** — it cares about the shape (what properties exist and their types), not what the object was declared as. This is why a plain object literal can be passed anywhere a `type` or `interface` with a matching shape is expected. Interfaces exist purely to describe what something looks like; they carry no implementation and can never be instantiated on their own.

## Backend Relevance

Almost everything a backend service deals with is shaped data: request bodies, response payloads, database rows, config objects. Type aliases and interfaces let you name these shapes once and reuse them everywhere — a function that accepts a `UserRow` or an `AuthForm` documents its contract directly in the type system, catching mismatched data before it causes a runtime bug.

## Questions I Should Be Able To Answer

1. What does "structural typing" mean, and how is it different from typing by name?
2. Why can't you do `new SomeInterface()`?
3. What's the difference between an optional property (`host?: string`) and a `readonly` property?
4. When would you choose `type` over `interface`, and vice versa?
5. Why can a union type only be expressed with `type`, not `interface`?
6. What is an indexed interface, and when would you use one?
7. How would you describe a function's shape using `type` vs using an interface?
8. Why is `unknown` often preferred over `any` in a function parameter like `onSubmit: (e: unknown) => void`?
9. If two objects have the same properties but were declared differently, does TypeScript treat them as compatible? Why?
10. Why does adding an undeclared property to a typed object (e.g. `admin.email = ...`) cause a compiler error?
