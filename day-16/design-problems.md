# Day 16 — Database Design Problems

## Problem 1 — Users and Orders

Requirements:

- One user can have many orders.
- One order belongs to one user.

```text
Users
---------
id
name
email
```

```text
Orders
---------
id
user_id
created_at
```

Relationship:

```text
Users 1 ─────────< Orders
```

## Problem 2 — Students and Courses

Requirements:

- A student can take many courses.
- A course can have many students.

```text
Students
---------
id
name
```

```text
Courses
---------
id
name
```

```text
StudentCourses
----------------
student_id
course_id
```

Possible composite primary key:

```sql
PRIMARY KEY (student_id, course_id)
```

## Problem 3 — TaskFlow

Requirements:

- A user can create projects.
- A project can contain many tasks.
- Users can comment on tasks.
- A project can have many members.
- A user can belong to many projects.
- Project membership has a role and joined date.

Tables:

```text
Users
Projects
ProjectMembers
Tasks
Comments
```

Relationships:

```text
Users 1 ─────────< Projects
Projects 1 ──────< Tasks
Users 1 ─────────< Comments
Tasks 1 ─────────< Comments
Users >──── ProjectMembers ────< Projects
```

`ProjectMembers`:

```text
project_id
user_id
role
joined_at
```

Composite key:

```sql
PRIMARY KEY (project_id, user_id)
```

## Problem 4 — E-Commerce

Requirements:

- A user can place many orders.
- An order contains many products.
- A product can appear in many orders.
- Quantity belongs to the specific order-product relationship.

Tables:

```text
Users
Orders
Products
OrderItems
```

Relationships:

```text
Users 1 ─────────< Orders
Orders 1 ────────< OrderItems >──────── 1 Products
```

`OrderItems`:

```text
order_id
product_id
quantity
price
```

Why quantity belongs in `OrderItems`:

The same product can have different quantities in different orders.

## Design Questions

When designing a database, ask:

1. What entities exist?
2. What information belongs to each entity?
3. What uniquely identifies each entity?
4. How are entities related?
5. Is the relationship 1:1, 1:N or N:M?
6. Does the relationship need its own table?
7. Are we duplicating data?
8. Can the data be normalized?

Most important:

> Who does this piece of information actually belong to?
