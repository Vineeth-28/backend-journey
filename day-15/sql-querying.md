# Day 15 - DBMS, SQL & Querying

## Topics Covered

- Database Fundamentals
- DBMS
- SQL vs NoSQL
- MySQL
- Sorting
- Pagination
- DISTINCT
- Aggregate Functions
- GROUP BY
- HAVING
- WHERE vs HAVING
- SQL JOINs
- INNER JOIN
- LEFT JOIN
- RIGHT JOIN
- NULL Handling
- Finding Unmatched Records

---

# 1. Sorting Data

The `ORDER BY` clause is used to sort query results.

## Ascending Order

```sql
SELECT *
FROM users
ORDER BY age ASC;
```

`ASC` means ascending.

For numbers:

```text
22
25
27
30
```

## Descending Order

```sql
SELECT *
FROM users
ORDER BY age DESC;
```

`DESC` means descending.

```text
30
27
25
22
```

### Interview Tip

```text
ASC  → Small → Large
DESC → Large → Small
```

---

# 2. Pagination

Pagination is used to retrieve data in smaller batches instead of returning thousands of rows at once.

For example:

```text
10 users per page
```

We can use:

```sql
LIMIT
OFFSET
```

## Example

```sql
SELECT *
FROM users
LIMIT 10 OFFSET 20;
```

Meaning:

```text
OFFSET 20 → Skip first 20 rows

LIMIT 10 → Return next 10 rows
```

Therefore:

```text
Users 1–20   → skipped
Users 21–30  → returned
```

---

## Pagination Formula

```text
OFFSET = (page - 1) × limit
```

Example:

```text
Page = 3
Limit = 10

OFFSET = (3 - 1) × 10
       = 20
```

SQL:

```sql
SELECT *
FROM users
LIMIT 10 OFFSET 20;
```

### Backend Example

An API might receive:

```text
GET /users?page=3&limit=10
```

Backend calculates:

```text
page = 3
limit = 10

offset = (3 - 1) × 10

offset = 20
```

Then executes:

```sql
LIMIT 10 OFFSET 20;
```

---

# 3. DISTINCT

`DISTINCT` removes duplicate values from the query result.

Example:

```text
users

country
-------
India
India
USA
India
USA
Canada
```

Query:

```sql
SELECT DISTINCT country
FROM users;
```

Result:

```text
India
USA
Canada
```

### Important

`DISTINCT` does **not delete data from the database**.

It only removes duplicates from the result returned by the query.

---

# 4. Aggregate Functions

Aggregate functions perform calculations on multiple rows.

Important aggregate functions:

| Function | Purpose |
|---|---|
| `COUNT()` | Counts rows/values |
| `SUM()` | Adds values |
| `AVG()` | Calculates average |
| `MIN()` | Finds minimum value |
| `MAX()` | Finds maximum value |

---

## SUM()

Example:

```sql
SELECT SUM(salary)
FROM employees;
```

If salaries are:

```text
30000
50000
40000
60000
```

Result:

```text
180000
```

---

## AVG()

```sql
SELECT AVG(salary)
FROM employees;
```

---

## COUNT()

```sql
SELECT COUNT(*)
FROM employees;
```

---

## MIN()

```sql
SELECT MIN(salary)
FROM employees;
```

---

## MAX()

```sql
SELECT MAX(salary)
FROM employees;
```

---

# 5. GROUP BY

`GROUP BY` groups rows with the same value.

Example:

```text
employees

name    department    salary
Aman    IT            30000
Vineet  IT            50000
Rahul   HR            40000
Neha    HR            60000
Raj     Sales         35000
```

We want total salary for each department.

```sql
SELECT department, SUM(salary)
FROM employees
GROUP BY department;
```

Result:

```text
IT      → 80000
HR      → 100000
Sales   → 35000
```

### Interview Definition

> `GROUP BY` groups rows with the same values and allows aggregate functions to calculate results for each group.

---

# 6. WHERE vs HAVING

This is an important interview concept.

## WHERE

`WHERE` filters individual rows **before grouping**.

Example:

```sql
SELECT department, AVG(salary)
FROM employees
WHERE department = 'IT'
GROUP BY department;
```

Here:

```text
WHERE
↓
Filters rows
↓
GROUP BY
↓
AVG()
```

---

## HAVING

`HAVING` filters groups **after aggregation**.

Example:

```sql
SELECT department, SUM(salary)
FROM employees
GROUP BY department
HAVING SUM(salary) > 80000;
```

Here:

```text
Rows
 ↓
GROUP BY
 ↓
SUM()
 ↓
HAVING
 ↓
Result
```

---

## Easy Rule

```text
WHERE  → filters ROWS

HAVING → filters GROUPS
```

### Example

Correct:

```sql
WHERE department = 'IT'
```

Correct:

```sql
HAVING AVG(salary) > 40000
```

Do not use:

```sql
WHERE AVG(salary) > 40000
```

because the aggregate result is evaluated at the grouping stage.

---

# 7. SQL JOINs

A JOIN combines rows from multiple tables based on a related condition.

Example:

```text
users

id | name
---|------
1  | Vineet
2  | Aman
3  | Rahul
```

```text
orders

id  | user_id | amount
----|---------|-------
101 | 1       | 500
102 | 1       | 700
103 | 2       | 300
```

Relationship:

```text
users.id
   ↓
orders.user_id
```

---

# 8. INNER JOIN

`INNER JOIN` returns only rows where the join condition matches in both tables.

```sql
SELECT users.name, orders.amount
FROM users
INNER JOIN orders
ON users.id = orders.user_id;
```

Result:

```text
Vineet | 500
Vineet | 700
Aman   | 300
```

Rahul is not returned because Rahul has no matching order.

### Important

In SQL:

```sql
JOIN
```

normally means:

```sql
INNER JOIN
```

---

# 9. LEFT JOIN

`LEFT JOIN` returns:

```text
ALL rows from the LEFT table
+
matching rows from the RIGHT table
```

Example:

```sql
SELECT users.name, orders.amount
FROM users
LEFT JOIN orders
ON users.id = orders.user_id;
```

Result:

```text
Vineet | 500
Vineet | 700
Aman   | 300
Rahul  | NULL
```

Rahul appears because `users` is the left table.

Since Rahul has no matching order:

```text
orders.amount = NULL
```

### Interview Definition

> A LEFT JOIN returns all rows from the left table and matching rows from the right table. If no match exists, the right-side columns contain NULL.

---

# 10. RIGHT JOIN

`RIGHT JOIN` returns:

```text
ALL rows from the RIGHT table
+
matching rows from the LEFT table
```

Example:

```sql
SELECT users.name, orders.amount
FROM users
RIGHT JOIN orders
ON users.id = orders.user_id;
```

Here:

```text
users  → LEFT table
orders → RIGHT table
```

Therefore every order is preserved.

---

# 11. JOIN Cheat Sheet

```text
INNER JOIN
→ Only matching rows

LEFT JOIN
→ Everything from LEFT
→ Matching rows from RIGHT

RIGHT JOIN
→ Everything from RIGHT
→ Matching rows from LEFT
```

---

# 12. NULL and JOINs

When a LEFT JOIN finds no matching row, columns from the right table become:

```text
NULL
```

Example:

```text
Rahul | NULL
```

We can use this to find users who have never placed an order.

```sql
SELECT users.name
FROM users
LEFT JOIN orders
ON users.id = orders.user_id
WHERE orders.id IS NULL;
```

Result:

```text
Rahul
```

---

## Important NULL Rule

Do NOT write:

```sql
WHERE orders.id = NULL;
```

Use:

```sql
WHERE orders.id IS NULL;
```

Or:

```sql
WHERE orders.id IS NOT NULL;
```

---

# 13. Real Backend Example

Imagine an e-commerce application.

Tables:

```text
Users
Products
Orders
Payments
```

A user can have many orders:

```text
User
  |
  | 1
  |
  └──────< Orders
             many
```

The `orders.user_id` column can reference `users.id`.

Example:

```sql
SELECT users.name, orders.amount
FROM users
JOIN orders
ON users.id = orders.user_id;
```

This allows the backend to return information from multiple related tables.

---

# 14. SQL Query Processing Mental Model

A useful simplified way to think about a query is:

```text
FROM / JOIN
      ↓
WHERE
      ↓
GROUP BY
      ↓
Aggregate Functions
      ↓
HAVING
      ↓
SELECT
      ↓
ORDER BY
      ↓
LIMIT / OFFSET
```

This is a conceptual processing model, not a literal description of every internal database execution plan.

---

# Interview Questions

## Basic

### 1. What does ORDER BY do?

---

### 2. Difference between ASC and DESC?

---

### 3. What is pagination?

---

### 4. Difference between LIMIT and OFFSET?

---

### 5. What does DISTINCT do?

---

### 6. Name five aggregate functions.

---

## GROUP BY / HAVING

### 7. What is GROUP BY?

---

### 8. Difference between WHERE and HAVING?

---

### 9. Can WHERE directly filter an aggregate such as AVG()?

---

## JOINs

### 10. What is a JOIN?

---

### 11. What is an INNER JOIN?

---

### 12. What is a LEFT JOIN?

---

### 13. What is a RIGHT JOIN?

---

### 14. Difference between INNER JOIN and LEFT JOIN?

---

### 15. What happens when a LEFT JOIN has no matching row?

---

### 16. How can you find users who have never placed an order?

---

# Key Takeaways

```text
ORDER BY
→ Sort results

LIMIT
→ Limit number of returned rows

OFFSET
→ Skip rows

DISTINCT
→ Remove duplicate values from result

SUM()
→ Add values

AVG()
→ Average

COUNT()
→ Count

MIN()
→ Minimum

MAX()
→ Maximum

GROUP BY
→ Create groups

WHERE
→ Filter rows

HAVING
→ Filter groups

INNER JOIN
→ Matching rows

LEFT JOIN
→ All left + matching right

RIGHT JOIN
→ All right + matching left

IS NULL
→ Check for NULL
```

---

# Day 15 SQL Progress

```text
✅ Sorting
✅ Pagination
✅ DISTINCT
✅ Aggregate Functions
✅ GROUP BY
✅ HAVING
✅ WHERE vs HAVING
✅ INNER JOIN
✅ LEFT JOIN
✅ RIGHT JOIN
✅ NULL Handling
✅ Multi-table Queries
```

---


These concepts will prepare us for designing the database for the production backend project later.