# Day 15 - SQL vs NoSQL

## What is SQL?

SQL stands for **Structured Query Language**.

SQL databases store data in **tables** with rows and columns.

Example:

| Id | Name   | Age |
|----|--------|-----|
| 1  | Vineet | 27  |
| 2  | Aman   | 25  |

Popular SQL Databases:

- MySQL
- PostgreSQL
- Oracle
- Microsoft SQL Server

---

## Characteristics of SQL

- Fixed Schema
- Structured Data
- Tables
- Rows and Columns
- Supports JOINs
- ACID Transactions
- Uses SQL Queries

Example Query

```sql
SELECT *
FROM users
WHERE age > 25;
```

---

## What is NoSQL?

NoSQL means **Not Only SQL**.

Instead of tables, it stores data in flexible formats like:

- Documents
- Key-Value
- Graph
- Column Family

The most popular NoSQL database is **MongoDB**.

Example Document

```json
{
    "name": "Vineet",
    "age": 27,
    "skills": [
        "Node.js",
        "Express",
        "MongoDB"
    ]
}
```

---

## Characteristics of NoSQL

- Flexible Schema
- JSON-like Documents
- Easy Horizontal Scaling
- Fast for Large Data
- High Availability

Popular NoSQL Databases

- MongoDB
- Redis
- Cassandra
- DynamoDB

---

# SQL vs NoSQL

| SQL | NoSQL |
|------|--------|
| Tables | Documents |
| Fixed Schema | Flexible Schema |
| Structured Data | Semi-Structured Data |
| Uses SQL | Uses Documents/JSON |
| Strong ACID Support | High Scalability |
| Best for Relationships | Best for Large Distributed Data |

---

# When should you use SQL?

Use SQL when:

- Banking Systems
- Payment Systems
- Hospital Management
- Inventory Management
- Airline Booking
- Student Management

Reason:

Relationships and transactions are very important.

---

# When should you use NoSQL?

Use NoSQL when:

- Social Media
- Chat Applications
- Real-time Analytics
- IoT Applications
- Logging Systems
- Content Management

Reason:

Huge amounts of changing data and easy scaling.

---

# Backend Examples

## SQL Example

Amazon Orders

```
Users
Orders
Products
Payments
```

Everything is connected using relationships.

---

## NoSQL Example

Instagram User

```json
{
    "username": "vineet28",
    "followers": 250,
    "posts": [
        "photo1.jpg",
        "photo2.jpg"
    ]
}
```

The entire user document can be stored together.

---

# Interview Notes

## What is SQL?

A relational database that stores structured data in tables.

---

## What is NoSQL?

A non-relational database that stores data in flexible formats like documents.

---

## Give Examples

SQL

- MySQL
- PostgreSQL

NoSQL

- MongoDB
- Redis

---

## SQL Advantages

- ACID Transactions
- Relationships
- Strong Consistency
- Complex Queries
- JOIN Operations

---

## NoSQL Advantages

- Flexible Schema
- Easy Scaling
- Fast Reads/Writes
- Handles Large Data
- High Availability

---

# Quiz

## 1. What does SQL stand for?

---

## 2. Name two SQL databases.

---

## 3. Name two NoSQL databases.

---

## 4. Which database stores data in tables?

---

## 5. Which database stores JSON-like documents?

---

## 6. Which database would you choose for a Banking System?

Why?

---

## 7. Which database would you choose for Instagram?

Why?

---

# Key Takeaways

- SQL stores structured data in tables.
- NoSQL stores flexible data like JSON documents.
- SQL is ideal for relationships and transactions.
- NoSQL is ideal for scalability and rapidly changing data.
- Backend engineers choose the database based on application requirements.