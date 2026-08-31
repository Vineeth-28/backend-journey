# Day 28 — TypeScript Special Types + Enums

## What I Learned

- Optional properties (`phoneNumber?: string`) vs properties that always exist but might be `undefined`
- Numeric enums (auto-numbered), custom-valued numeric enums (e.g. HTTP status codes), and string enums
- `any` — what it does and why it's risky
- `unknown` — a safer alternative that forces you to check a value's type before using it
- `void` — functions that return nothing meaningful
- `never` — functions that never return normally (always throw, or loop forever)
- Type narrowing with `typeof`, truthiness checks, and the `in` operator
- Building a small, practical `AuthForm` type that combines interfaces and enums

## Practical Work

- `01-optional-properties.ts` — a `UserProfile` interface with optional fields, and safely reading them with optional chaining / nullish coalescing
- `02-enums.ts` — `OrderStatus` (numeric), `HttpStatus` (custom-valued numeric), and `UserRole` (string enum)
- `03-any-unknown-void-never.ts` — direct side-by-side comparison of all four special types, with a written explanation of why `any` is risky
- `04-type-narrowing.ts` — narrowing a union with `typeof`, narrowing away `undefined` with a truthiness check, and distinguishing two object shapes with `in`
- `05-auth-form.ts` — a `createAuthForm` factory function combining an enum (`FormMode`) with an `AuthForm` interface

## Key Understanding

`any` turns off type checking entirely — TypeScript stops protecting you the moment a value becomes `any`. `unknown` is the disciplined version: it also accepts any value, but forces you to narrow it (check its actual type) before you're allowed to use it. Narrowing itself is just TypeScript following your own runtime checks (`typeof`, `in`, truthiness) to progressively figure out a more specific type as your code branches.

## Backend Relevance

Backend code constantly receives data it doesn't fully control — parsed JSON, environment variables, third-party API responses. `unknown` combined with narrowing is the correct default for handling this kind of data safely, instead of reaching for `any` and losing all protection. Enums are a natural fit for backend concepts with a fixed set of states — order status, user roles, HTTP status codes — because they prevent typos like `"Pendign"` from silently slipping through.

## Questions I Should Be Able To Answer

1. What's the practical difference between `any` and `unknown`?
2. Why is `any` discouraged in production backend code specifically?
3. What does it mean for TypeScript to "narrow" a type, and what triggers it?
4. What's the difference between a numeric enum and a string enum, and when would you prefer one over the other?
5. When would a function's return type be `never` instead of `void`?
6. How does the `in` operator help distinguish between two possible object shapes in a union?
7. Why does `phoneNumber?: string` behave differently from `phoneNumber: string | undefined`?
8. What does optional chaining (`?.`) actually do at runtime?
9. Why would you model HTTP status codes as a custom-valued numeric enum instead of raw numbers scattered through the code?
10. If you receive `unknown` data from an external API, what's the correct way to safely use one of its properties?
