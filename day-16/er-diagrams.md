# Day 16 — ER Diagrams

## What is an ER Diagram?

ER means Entity Relationship.

It represents:

- Entities
- Attributes
- Relationships

Mapping:

```text
Entity       → Table
Attribute    → Column
Relationship → Connection between tables
```

## Relationship Types

### One-to-One

```text
Users 1 ───── 1 Profiles
```

### One-to-Many

```text
Users 1 ─────< Orders
```

### Many-to-Many

```text
Students >──── StudentCourses ────< Courses
```

## TaskFlow Example

```text
Users 1 ─────────< Projects
Projects 1 ──────< Tasks
Users 1 ─────────< Comments
Tasks 1 ─────────< Comments
Users >──── ProjectMembers ────< Projects
```

`ProjectMembers` can contain:

```text
project_id
user_id
role
joined_at
```

## E-Commerce Example

```text
Users 1 ─────────< Orders
Orders 1 ────────< OrderItems >──────── 1 Products
```

`OrderItems` can contain:

```text
order_id
product_id
quantity
price
```

Quantity belongs to the order-product relationship, not the product itself.
