# Day 15 - Backend Examples

## Example 1 - User Login

Imagine a Login API.

User enters:

Email: vineet@gmail.com

Password: ********

The backend queries the database.

SQL

```sql
SELECT *
FROM users
WHERE email = 'vineet@gmail.com';
```

The DBMS searches the Users table and returns the matching user.

---

## Example 2 - E-Commerce

Tables

Users

Products

Orders

Payments

Relationships

User
↓

Order
↓

Payment

↓

Product

SQL databases handle these relationships efficiently.

---

## Example 3 - Instagram

Instead of many related tables, MongoDB can store one document.

```json
{
    "username": "vineet28",
    "followers": 1200,
    "posts": [
        "photo1.jpg",
        "photo2.jpg"
    ]
}
```

This flexible structure is useful when data changes frequently.

---

## Example 4 - Banking System

Tables

Customers

Accounts

Transactions

Loans

Relationships are extremely important.

Banks prefer SQL databases because of ACID transactions and strong consistency.

---

## Example 5 - Online Shopping

When a customer buys a product:

1. Check Product Stock
2. Create Order
3. Create Payment
4. Update Inventory

These operations should succeed together.

SQL databases provide transaction support for such scenarios.

---

# Key Takeaways

- SQL is suitable for applications with strong relationships.
- NoSQL is suitable for applications with flexible and rapidly changing data.
- Backend engineers choose the database based on application requirements.