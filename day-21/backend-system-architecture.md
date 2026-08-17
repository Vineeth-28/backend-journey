# Backend System Architecture

## Goal

Understand how backend systems are structured and how they scale to
handle more traffic.

---

## Basic Backend System

A basic backend system can be represented as:

```text
Client
   ↓
Backend / API Server
   ↓
Business Logic
   ↓
Database
```

The backend receives requests, performs business logic, communicates
with databases or other services, and returns responses.

---

## Scaling the Architecture

As traffic increases, the architecture can grow:

```text
Client
   ↓
Load Balancer
   ↓
Backend Servers
   ↓
Cache
   ↓
Database
   ↓
External Services
```

### Load Balancer

A load balancer can distribute incoming requests across multiple
backend servers.

```text
             Load Balancer
             /     |      \
            ↓      ↓       ↓
         Server  Server  Server
```

This helps distribute traffic and can improve availability and
scalability.

### Cache

A cache stores frequently accessed data so that it can be returned
faster without always querying the main database.

```text
Request
   ↓
Cache
   ├── HIT  → Return data
   │
   └── MISS → Database
```

---

## Backend Engineering Mental Model

A backend request can eventually look like:

```text
Client
   ↓
Load Balancer
   ↓
Route
   ↓
Controller
   ↓
Service
   ↓
Cache
   ↓
Repository / ORM
   ↓
Database
   ↓
Response
```

Not every application needs every component.

The architecture should depend on the actual requirements.

---

## Database Internals — Deferred

LSM Trees and deeper database internals were intentionally skipped for
now.

**Reason:**

The current goal is to become capable of building backend systems,
not to master database storage-engine internals immediately.

These topics can be revisited later during advanced database,
performance, and system-design study.

---

## Summary

* Databases provide persistent application data.
* Caches can reduce repeated database work.
* Load balancers distribute traffic across backend servers.
* Architecture should be driven by requirements rather than adding
  components unnecessarily.

See [`mvc-architecture.md`](./mvc-architecture.md) for how an individual
backend server is structured internally.
