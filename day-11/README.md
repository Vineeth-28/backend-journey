# Day 11 - JavaScript Promises

## 📚 Topics Covered

- What is a Promise?
- Promise States
- Pending
- Fulfilled
- Rejected
- resolve()
- reject()
- Consuming Promises
- .then()
- Promise Chaining
- Returning Values
- Error Handling
- .catch()
- throw Error
- Microtask Queue
- Callback Queue
- Event Loop
- Promise Priority
- Fake Login Mini Project

---

## Folder Structure

```text
day-11/
│
├── promises.js
├── promise-syntax.js
├── resolve-reject.js
├── consume-promise.js
├── promise-chain.js
├── then-catch.js
├── microtask-queue.js
├── event-loop-advanced.js
├── exercises.js
├── mini-project.js
└── README.md
```

---

## Key Learnings

### Promise States

- Pending
- Fulfilled
- Rejected

---

### Promise Chain

```javascript
Promise.resolve(5)
    .then((x) => x * 2)
    .then((y) => console.log(y));
```

---

### Error Handling

```javascript
Promise.resolve()
.then(()=>{
    throw Error("DB Error");
})
.catch(err=>{
    console.log(err.message);
});
```

---

### Event Loop Priority

```
Call Stack
↓

Microtask Queue
(Promise.then)

↓

Callback Queue
(setTimeout)
```

---

## Mini Project

A fake login system using:

- Promise
- resolve()
- reject()
- then()
- catch()
- finally()

---

## Interview Questions

- What is a Promise?
- Promise States?
- Difference between resolve() and reject()?
- What does `.then()` return?
- What happens when you throw an error inside `.then()`?
- Difference between Callback Queue and Microtask Queue?
- Why does `Promise.then()` execute before `setTimeout(0)`?
- What is Promise Chaining?

---

## Git Commit

```bash
git add .

git commit -m "feat(day-11): master JavaScript promises and microtask queue"

git push origin main
```

---

## Status

✅ Day 11 Completed

**Next:** Day 12 - Closures