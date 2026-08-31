# Day 29 — TypeScript Classes

## What I Learned

- Class basics: properties, constructors, methods, and creating instances
- Access modifiers: `public` (default), `private`, and `protected`
- `readonly` properties — set once, then locked, and how it differs from `private`
- Inheritance with `extends`, calling the parent constructor with `super()`, and overriding methods
- Constructor parameter shorthand (`constructor(protected owner: string)`)
- Encapsulation using getters and setters to validate state changes

## Practical Work

- `01-classes.ts` — a basic `Product` class and a `User` class, showing that each instance has independent state
- `02-access-modifiers.ts` — a `BankAccount` class demonstrating `public`/`private`/`protected`, plus a `SavingsAccount` subclass that can access the protected field
- `03-readonly.ts` — a `Product` class with `readonly tags` and `readonly createdAt`, and a note on the difference between `readonly` (mutability) and `private` (visibility)
- `04-inheritance.ts` — an `Account` base class with `SavingsAccount` and `CheckingAccount` subclasses, including method overriding with `super`
- `05-encapsulation.ts` — a `Product` class using a getter/setter pair to validate price updates before accepting them

## Key Understanding

Access modifiers control **who can see or change** a property from outside the class; `readonly` controls **whether a property can be reassigned at all** after construction — these are two separate, combinable concerns. Inheritance lets a subclass reuse a parent's behavior while adding or overriding its own. Encapsulation is the discipline of keeping data private and only allowing changes through methods that can enforce rules — this is what prevents invalid state from ever existing in the first place.

## Backend Relevance

Classes map naturally onto backend domain concepts — `User`, `Account`, `Order`, `Product` — where certain fields (like a balance or a price) should never be set directly without validation. Encapsulation via getters/setters or dedicated methods (like `deposit`/`withdraw`) is exactly how backend services protect business rules like "balance can never go negative" from being silently violated somewhere in the codebase.

## Questions I Should Be Able To Answer

1. What's the difference between `public`, `private`, and `protected`?
2. Why does a subclass need to call `super()` before using `this` in its constructor?
3. How is `readonly` different from `private`, and can a property be both?
4. What problem does encapsulation (via getters/setters) actually solve?
5. Why might a bank account's `balance` field be `private` with a public `deposit`/`withdraw` method instead of just being `public`?
6. What does method overriding mean, and how does `super.methodName()` fit into it?
7. What's the constructor parameter shorthand (`constructor(protected owner: string)`) actually doing behind the scenes?
8. Why does `item.tags.push(...)` still work even when `tags` is `readonly`?
9. When would you choose composition over inheritance for a backend domain model? (open-ended — think about it even though it's not directly covered in the code)
10. How would a getter/setter pair prevent invalid data (e.g. a negative price) from ever being stored?
