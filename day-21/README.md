# Day 21 — Backend System Architecture & MVC

## Goal

Understand how a client communicates with a backend system and how
backend applications are structured internally.

---

## Contents

* [`networking-request-journey.md`](./networking-request-journey.md)
  — DNS, IP, TCP, TLS, HTTPS, and the HTTP request/response cycle.
* [`backend-system-architecture.md`](./backend-system-architecture.md)
  — Backend servers, scaling, load balancers, caching, and where
  database internals (LSM trees) fit in later.
* [`mvc-architecture.md`](./mvc-architecture.md)
  — Model, View, Controller, and how it extends into modern
  route → controller → service → repository architecture.

---

## Day 20 Mental Model

```text
Client
   ↓
DNS
   ↓
IP
   ↓
TCP
   ↓
TLS
   ↓
HTTP
   ↓
Load Balancer
   ↓
Backend
   ↓
Route
   ↓
Controller
   ↓
Service
   ↓
Cache / Database
   ↓
HTTP Response
   ↓
Client
```

---

## Key Takeaways

* DNS helps resolve domain names to IP addresses.
* TCP provides reliable and ordered transport.
* TLS secures communication.
* HTTPS is HTTP over TLS.
* HTTP requests travel from clients to backend servers.
* Backend servers process requests and return HTTP responses.
* Databases provide persistent application data.
* Caches can reduce repeated database work.
* Load balancers distribute traffic across backend servers.
* MVC separates application responsibilities.
* Modern backend applications often use routes, controllers, services,
  and repositories/models.
* Architecture should be driven by requirements rather than adding
  components unnecessarily.

---

## Deferred

LSM Trees and deeper database storage-engine internals were
intentionally skipped for now — see the "Database Internals —
Deferred" section in `backend-system-architecture.md`. These will be
revisited during advanced database and system-design study.

---

## Next

Continue with the backend/API lessons and gradually implement these
concepts in the project instead of learning them only as theory.
