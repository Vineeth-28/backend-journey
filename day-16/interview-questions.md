# Day 16 — Database Design Interview Questions

## Basic

### 1. What is a database schema?

A database schema defines the structure of a database, including tables, columns, relationships and constraints.

### 2. What is a primary key?

A primary key uniquely identifies each row in a table.

### 3. What is a foreign key?

A foreign key references a key in another table and establishes a relationship.

### 4. Can a foreign key contain duplicate values?

Yes. Many orders can belong to the same user.

### 5. What is referential integrity?

It ensures that relationships between tables remain valid according to the defined foreign-key constraints.

## Keys

### 6. What is a composite key?

A key made from multiple columns that together uniquely identify a row.

### 7. Why use a composite key?

When no single column is sufficient to uniquely identify a row.

### 8. What is a candidate key?

A minimal set of attributes that can uniquely identify a row.

### 9. What is a super key?

Any set of attributes that can uniquely identify a row.

### 10. Candidate key vs super key?

A candidate key is a minimal super key.

## Relationships

### 11. What is a one-to-one relationship?

One record in one table corresponds to one record in another table.

### 12. What is a one-to-many relationship?

One record can be associated with many records.

### 13. What is a many-to-many relationship?

Many records in one table can relate to many records in another table.

### 14. How do you implement many-to-many relationships?

Using a junction or association table containing foreign keys referencing both tables.

## Functional Dependency

### 15. What is functional dependency?

If A determines B:

```text
A → B
```

then B is functionally dependent on A.

### 16. Give an example.

```text
user_id → user_name
```

### 17. Why are functional dependencies important?

They help identify duplication and design tables correctly during normalization.

## Normalization

### 18. What is normalization?

Normalization organizes data to reduce unnecessary duplication and data anomalies.

### 19. What is 1NF?

A table is in 1NF when values are atomic and a cell does not contain multiple values.

### 20. What is 2NF?

A table is in 2NF when it is in 1NF and has no partial dependency on part of a composite key.

### 21. What is 3NF?

A table is in 3NF when it is in 2NF and avoids transitive dependencies.

### 22. What is an update anomaly?

When duplicated data requires multiple updates and can become inconsistent if some rows are not updated.

## Practical Design

### 23. Why should user information not be duplicated in every order?

It creates unnecessary duplication and can cause update anomalies.

### 24. Where does the foreign key usually go in a one-to-many relationship?

On the many side.

### 25. Why does a many-to-many relationship require a junction table?

Because each side can have multiple related records, so the relationship itself needs to be represented.

### 26. Why does OrderItems contain quantity?

Because quantity describes how many units of a product were included in a specific order.

### 27. Why does ProjectMembers contain role?

Because the role belongs to a user's membership in a specific project, not necessarily to the user globally.

### 28. Why does ProjectMembers contain joined_at?

Because it describes when that user joined that particular project.
