# Day 22 — HTTP & APIs

**Track:** Backend Development
**Focus:** HTTP protocol deep dive, API architectural styles, and REST API design principles.

## Topics Covered

| File | Topic |
|------|-------|
| [http-protocol.md](./http-protocol.md) | HTTP request/response structure, methods, status codes, headers, statelessness, HTTP/1.1 vs 2 vs 3 |
| [api-types.md](./api-types.md) | REST, GraphQL, gRPC, SOAP, WebSocket — what they are and when to use each |
| [rest-api.md](./rest-api.md) | REST constraints, resource design, CRUD-to-verb mapping, HATEOAS, versioning, pagination |
| [interview-questions.md](./interview-questions.md) | Q&A drilling the above three topics |

## How This Day Connects

Builds directly on the networking fundamentals (DNS, TCP, TLS, HTTPS) from earlier in the backend track — HTTP is the protocol that rides on top of that connection layer. Also sets up the transition into **Express.js**, since Express is fundamentally a framework for handling HTTP requests/responses and building REST APIs in Node.

```
Networking (DNS/TCP/TLS) → HTTP Protocol → API Design (REST/GraphQL/gRPC) → Express.js (next)
```

## Key Takeaways

- HTTP is stateless by design; "state" (auth, sessions) is bolted on via cookies/tokens, not the protocol itself.
- Status codes and HTTP verbs carry real semantic meaning — REST leans on this instead of reinventing it.
- Most production "REST" APIs are Richardson Maturity Level 2 (verbs + status codes), not full HATEOAS.
- API style is a design choice: REST for general CRUD, GraphQL for flexible/nested data, gRPC for fast internal service calls, WebSocket for real-time.

---
*Part of the [backend engineering self-study log](../README.md).*
