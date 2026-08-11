# Day 16 — Database Keys

## Primary Key

Uniquely identifies each row.

Properties:

- Unique
- Cannot be NULL

## Foreign Key

References a key in another table.

```text
orders.user_id → users.id
```

A foreign key can repeat.

## Composite Key

Multiple columns together uniquely identify a row.

```sql
PRIMARY KEY (student_id, course_id)
```

## Candidate Key

A minimal set of attributes that can uniquely identify a row.

Example:

```text
id
email
username
```

if all are unique.

## Super Key

Any set of attributes that can uniquely identify a row.

A candidate key is a minimal super key.

## Mental Model

```text
Primary Key
→ Who is this row?

Foreign Key
→ Which related row does this reference?

Composite Key
→ Which combination identifies this row?

Candidate Key
→ Which minimal attributes could identify this row?

Super Key
→ Which attributes can identify this row?
```
