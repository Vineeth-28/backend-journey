# Day 16 — Database Normalization

## Why Normalization?

Normalization organizes data to reduce:

- Data duplication
- Update anomalies
- Insert anomalies
- Delete anomalies
- Inconsistent data

## 1NF — First Normal Form

A table should contain atomic values.

Bad:

```text
id | name   | phone_numbers
1  | Vineet | 9876, 8765
```

Better:

```text
id | name   | phone
1  | Vineet | 9876
1  | Vineet | 8765
```

Mental model:

> One cell → One atomic value.

## 2NF — Second Normal Form

A table should:

1. Already be in 1NF.
2. Have no partial dependency on part of a composite key.

Example:

```text
StudentCourses
--------------------------------
student_id | course_id | student_name
1          | 10        | Vineet
1          | 20        | Vineet
2          | 10        | Aman
```

Primary key:

```text
(student_id, course_id)
```

But:

```text
student_id → student_name
```

`student_name` depends only on part of the composite key.

Separate the student data:

```text
Students
----------------
student_id | student_name
1          | Vineet
2          | Aman
```

## 3NF — Third Normal Form

A table should:

1. Already be in 2NF.
2. Avoid transitive dependencies.

Example:

```text
student_id → department_id
department_id → department_name
```

Therefore:

```text
student_id
    ↓
department_id
    ↓
department_name
```

`department_name` belongs to the Department entity.

Separate it:

```text
Students
-------------------------------
student_id | student_name | department_id
```

```text
Departments
--------------------------
department_id | department_name
```

## Quick Memory

```text
1NF → Atomic values
2NF → No partial dependency
3NF → No transitive dependency
```
