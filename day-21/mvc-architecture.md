# MVC Architecture

## Goal

Understand how backend applications separate responsibilities
internally using MVC, and how this extends into modern API
architecture.

---

## What Is MVC?

MVC stands for:

* Model
* View
* Controller

The main idea is **separation of responsibilities**.

Instead of putting everything into one large file, different parts of
the application have different responsibilities.

---

## Basic MVC Flow

```text
Client
   ↓
Request
   ↓
Controller
   ↓
Model
   ↓
Database
   ↓
Model
   ↓
Controller
   ↓
Response
   ↓
Client
```

---

## Model

The Model represents and manages application data.

It commonly interacts with the database.

Example:

```text
User Model
   ↓
Database
   ↓
Users
```

---

## Controller

The Controller receives the request and coordinates what should happen.

Example:

```text
GET /users/123
       ↓
User Controller
       ↓
User Model / Service
       ↓
Database
       ↓
Result
       ↓
Response
```

The controller should not contain every piece of business logic.

---

## View

The View is responsible for presenting data to the user.

Traditional server-rendered applications may use templates/views.

For a REST API that mainly returns JSON, a separate server-side View
layer may be much less important.

Example API response:

```json
{
  "id": 123,
  "name": "Vineet"
}
```

---

## MVC vs Modern API Architecture

In real backend applications, we often extend the basic MVC idea.

A common structure is:

```text
Request
   ↓
Route
   ↓
Controller
   ↓
Service
   ↓
Repository / Model
   ↓
Database
```

### Route

Determines which controller should handle the request.

### Controller

Handles HTTP-specific responsibilities.

### Service

Contains business logic.

### Repository / Model

Handles data access.

This separation makes the code easier to maintain, test, and scale.

---

## Summary

* MVC separates application responsibilities.
* Modern backend applications often use routes, controllers, services,
  and repositories/models.

See [`backend-system-architecture.md`](./backend-system-architecture.md)
for how this fits into the broader system.
