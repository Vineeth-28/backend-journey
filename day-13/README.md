# Day 13 - Iterators & Generators

## Topics Covered

- Iterators
- Iterator Protocol
- Symbol.iterator
- next()
- value & done
- Custom Iterators
- Generators
- function*
- yield
- next(value)
- Lazy Evaluation
- Backend Use Cases
- Task Queue Generator

## Files

- iterators.js
- custom-iterators.js
- generators.js
- yield.js
- backend-examples.js
- exercises.js
- mini-project.js

## Key Takeaways

- Iterators return one value at a time using the next() method.
- next() always returns an object containing value and done.
- Custom Iterators use closures to remember their current state.
- Generator Functions automatically implement the Iterator Protocol.
- yield pauses execution and next() resumes it from the same position.
- next(value) can send values back into a Generator.
- Generators support lazy evaluation, making them memory efficient.
- Iterators and Generators are useful for streaming data, pagination, background jobs and processing large datasets.