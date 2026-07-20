# 🚀 Day 7 - Object Methods & Higher Order Functions

## 📅 Date

20 July 2026

---

# 📚 Topics Covered

- Object.keys()
- Object.values()
- Object.entries()
- for...in Loop
- Higher Order Functions
- map()
- filter()
- find()
- reduce()

---

# 📂 Files

```text
day-7/
├── object-methods.js
├── for-in.js
├── higher-order-functions.js
├── mini-project.js
└── README.md
```

---

# 📖 Concepts Learned

## 📌 Object Methods

Practiced:

- Object.keys()
- Object.values()
- Object.entries()

These methods are useful for accessing and manipulating object data dynamically.

---

## 📌 for...in Loop

Used to iterate through the properties of an object.

Example:

```javascript
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
```

---

## 📌 Higher Order Functions

Practiced the following methods:

### map()

Creates a new array by transforming every element.

### filter()

Returns only the elements that satisfy a condition.

### find()

Returns the first matching element.

### reduce()

Combines all elements into a single value.

---

# 🚀 Mini Project

## 👨‍💼 Employee Management System

Created an employee management system using an array of objects.

Implemented:

- Display employee information
- Find employee by ID
- Filter employees by department
- Calculate total salary
- Create a simplified employee list using map()

---

# 💡 Backend Relevance

Higher Order Functions are heavily used in backend development.

Common use cases:

- Processing API responses
- Searching database results
- Filtering user data
- Calculating reports
- Transforming JSON objects

Example:

```javascript
const activeUsers = users
    .filter(user => user.isActive)
    .map(user => ({
        id: user.id,
        name: user.name
    }));
```

---

# 🎯 Key Learnings

- Objects can be traversed dynamically using Object methods.
- map() transforms data into a new structure.
- filter() selects matching data.
- find() retrieves a single matching item.
- reduce() combines multiple values into one result.
- Higher Order Functions make JavaScript code cleaner and more readable.

---

# 📈 Progress

- ✅ Day 1 - JavaScript Basics
- ✅ Day 2 - Conditionals
- ✅ Day 3 - Problem Solving
- ✅ Day 4 - Loops & Functions
- ✅ Day 5 - Advanced Control Flow
- ✅ Day 6 - Arrays, Objects & Template Strings
- ✅ Day 7 - Object Methods & Higher Order Functions

---

# 🚀 Next Step

➡️ Type Coercion

➡️ Scope

➡️ Callbacks

➡️ Promises

➡️ Async JavaScript

➡️ Node.js Fundamentals

---

## 💻 Author

**Vineeth**

Backend Engineer Journey 🚀