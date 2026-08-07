# Day 15 - DBMS Basics

## What is Data?

Data is raw, unprocessed facts or values.

### Examples

```text
Vineet
27
Backend Engineer
85 kg
```

These values by themselves are just data.

---

## What is Information?

Information is processed and organized data that has meaning.

### Example

```text
Name : Vineet
Age : 27
Profession : Backend Engineer
```

Information helps us make decisions.

---

## Data vs Information

| Data | Information |
|------|-------------|
| Raw facts | Processed data |
| No context | Has meaning |
| Cannot be directly used | Useful for decision making |

---

## What is a File System?

A File System stores data inside files.

Example:

```text
users.txt

Vineet
Aman
Rahul
John
```

or

```json
[
    {
        "name": "Vineet"
    },
    {
        "name": "Aman"
    }
]
```

---

## Problems with File Systems

- Slow searching
- Duplicate data
- No relationships
- Poor security
- Difficult backup
- Difficult updates
- Multiple users cannot work efficiently

---

## What is a Database?

A Database is an organized collection of related data.

Example:

| ID | Name | Age |
|----|------|-----|
|1|Vineet|27|
|2|Aman|25|
|3|Rahul|30|

Databases organize data in a structured manner.

---

## What is DBMS?

DBMS stands for **Database Management System**.

A DBMS is software used to create, manage and interact with databases.

Examples:

- MySQL
- PostgreSQL
- Oracle
- Microsoft SQL Server

---

## Responsibilities of a DBMS

- Create Databases
- Create Tables
- Insert Data
- Read Data
- Update Data
- Delete Data
- Security
- Backup
- Recovery
- Multi-user Access

---

## Real Backend Example

Without DBMS

```text
users.txt

Vineet
Aman
Rahul
```

Searching requires reading every line manually.

---

With DBMS

```sql
SELECT *
FROM users
WHERE email = 'vineet@gmail.com';
```

The DBMS finds the required data efficiently.

---

# Interview Notes

## What is Data?

Raw and unprocessed facts.

---

## What is Information?

Processed and meaningful data.

---

## What is a Database?

An organized collection of related data.

---

## What is DBMS?

Software used to create, store, retrieve, update and manage data inside databases.

---

## Examples of DBMS

- MySQL
- PostgreSQL
- Oracle
- SQL Server

---

## Advantages of DBMS

- Fast Searching
- Better Security
- Data Integrity
- Backup & Recovery
- Multiple Users
- Scalability
- Relationships

---

# Quiz

## 1. Difference between Data and Information?

---

## 2. Why is a File System not suitable for Instagram?

---

## 3. What does a DBMS do?

---

## 4. Name four DBMS software.

---

## 5. Give three advantages of DBMS.

---

# Key Takeaways

- Data is raw facts.
- Information is processed data.
- A Database stores organized data.
- A DBMS manages databases efficiently.
- Modern backend applications rely on DBMS instead of plain file systems.