# Day 26 — TypeScript Basics

## What I Learned

- The primitive types: `string`, `number`, `boolean`, `undefined`, `null`, `bigint`, `symbol`
- How to write type annotations (`let id: number = 1`)
- Type inference — how TypeScript figures out a type from the assigned value without an explicit annotation
- Static typing — once a type is set, a variable can't switch to a different type later
- Union types (`number | string`) for values that can legitimately be more than one type
- Typed arrays (`number[]`) vs heterogeneous arrays (`(number | string)[]`)
- Tuples — fixed-length arrays where each position has its own type
- Function parameter types and return types
- Optional parameters (`age?: number`) and default parameters

## Practical Work

- `01-primitives.ts` — declares every primitive type with a short backend-relevant example
- `02-type-inference.ts` — shows inferred vs explicitly annotated variables, and why static typing prevents reassigning a different type
- `03-union-types.ts` — a `formatUserId` function that safely narrows a `number | string` union using `typeof`
- `04-arrays-tuples.ts` — typed arrays, a mixed-type array, and a tuple used to represent an `[statusCode, message]` API result
- `05-functions.ts` — typed functions, an optional parameter example (`greet`), a default parameter example (`createUser`), and a simple validation function

## Key Understanding

TypeScript's core value at this stage is catching type mistakes **before the code runs**, not at runtime. A variable's type is locked in once declared or inferred — this is what "type-safe" and "statically typed" mean in practice. Union types exist for the common case where a value legitimately has more than one valid shape (very common at API boundaries, where everything often arrives as a string).

## Backend Relevance

Backend code constantly deals with data of unknown or inconsistent shape — request bodies, query params, database rows, environment variables. Union types and typed function signatures make it obvious, right in the code, what a function expects and returns, which prevents a huge class of bugs before they ever reach a test or production.

## Questions I Should Be Able To Answer

1. What is the difference between type annotation and type inference?
2. Why does TypeScript disallow reassigning a variable to a different type after it's declared?
3. When would you use a union type instead of `any`?
4. What's the difference between a typed array (`number[]`) and a tuple (`[number, string]`)?
5. What does an optional parameter (`age?: number`) actually become inside the function if the caller omits it?
6. Why might a backend function accept `number | string` for an ID parameter?
7. What's the practical difference between `null` and `undefined` in TypeScript?
8. When would `bigint` matter for a backend developer?
9. How does `typeof` help narrow a union type inside a function body?
10. Why is static typing especially valuable at the boundaries of a backend system (API input, DB output)?
