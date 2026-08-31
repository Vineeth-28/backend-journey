# Day 30 — TypeScript Generics

## What I Learned

- Why generics exist: avoiding both code duplication (one function per type) and `any` (losing type safety)
- Generic functions with one type parameter (`<T>`) and multiple (`<A, B>`)
- How TypeScript often infers type parameters automatically from the arguments passed in
- Writing functions that operate generically over arrays (filtering, pagination) without knowing the element type
- Generic classes — declaring `<T>` once on the class and using it consistently across properties and methods
- Building a generic `Stack<T>` (a LIFO data structure) from scratch
- Generic linear search, plus a predicate-based `findBy` search for objects

## Practical Work

- `01-generics-functions.ts` — shows the duplication/`any` problem first, then the generic `first<T>` solution, plus a two-type-parameter `pair<A, B>` function
- `02-generics-arrays.ts` — `getLength`, a generic `filterArray`, and a `paginate` function usable on any list of records
- `03-generics-classes.ts` — a generic `Box<T>` class, and a backend-style `ApiResponse<T>` wrapper with a static factory method
- `04-generic-stack.ts` — a full `Stack<T>` class demonstrated with both `Stack<number>` and `Stack<string>`, plus a small "undo pipeline" example
- `05-generic-search.ts` — `linearSearch<T>` for simple values, and `findBy<T>` for searching an array of objects by a custom condition

## Key Understanding

Generics solve a real tension: without them, you either duplicate logic per type or use `any` and lose all safety. A type parameter (`<T>`) is a placeholder — TypeScript fills it in with a concrete type at the call site (often inferring it automatically) and then enforces that every place `T` appears uses that same type consistently. This is what makes a `Stack<number>` reject a string push at compile time, while the exact same `Stack` class also works perfectly for `Stack<string>`.

## Backend Relevance

Backend code is full of reusable, type-agnostic patterns: paginating a list, wrapping API responses, searching a collection, queueing tasks. Generics let you write these once — a single `ApiResponse<T>`, a single `paginate<T>`, a single `Stack<T>` — and reuse them safely across every domain type in the codebase (`User`, `Order`, `Product`) without duplicating logic or falling back to `any`.

## Questions I Should Be Able To Answer

1. What specific problem do generics solve that plain functions or `any` don't?
2. How does TypeScript usually infer a generic function's type parameter without you writing it explicitly?
3. What does it mean that `T` is "consistent" across a generic function's parameters and return type?
4. Why does `Stack<number>` reject a `.push("text")` call at compile time?
5. What's the difference between `filterArray<T>` and `findBy<T>` in terms of what they return?
6. Why would a backend API wrap its responses in a generic `ApiResponse<T>` type instead of a plain object?
7. Can a generic function have more than one type parameter? Give an example of when that's useful.
8. What would happen if `Stack<T>`'s `pop()` method were typed to return just `T` instead of `T | undefined`?
9. How is a generic class different from a generic function in terms of where the type parameter is declared?
10. Why is `linearSearch<T>` more reusable than writing a separate `searchNumbers` and `searchStrings` function?
