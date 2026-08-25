# Day 24 — REST APIs

**Track:** Backend Development
**Focus:** REST fundamentals from the ground up — resources, HTTP methods, CRUD mapping, status codes, statelessness, and a fully worked API design.

## Topics Covered

| File | Topic |
|------|-------|
| [rest-api.md](./rest-api.md) | What an API/REST is, resources, HTTP methods, CRUD mapping, status codes, statelessness, path/query params, REST principles |
| [api-design-examples.md](./api-design-examples.md) | A complete worked design (Project Management API) — endpoints, sample requests/responses, error shape, and practice prompts |

## How This Day Connects

Reinforces and applies the [Day 22 REST API notes](../day-22/rest-api.md) with a hands-on lens — less "constraints and theory," more "here's what the requests and responses actually look like." Also ties back into the MVC request flow from Day 21 (Route → Controller → Service → Repository), since REST defines the *shape* of the request/response while MVC organizes the code that handles it.

```
REST theory (Day 22) → REST practice + design (Day 24) → Express.js (next)
```

## Key Takeaways

- REST is an architectural style, not a protocol — resources, HTTP verbs, and status codes are the core building blocks.
- Resources are addressed as nouns (`/projects`, `/tasks`); the HTTP method carries the action.
- Statelessness means every request must carry what it needs — no relying on server memory between calls.
- Nesting (`/projects/:id/tasks`) is useful for listing/creating in context; flattening (`/tasks/:id`) is useful once a resource has its own identity.
- Designing a small API by hand (see [api-design-examples.md](./api-design-examples.md)) makes the theory stick far better than reading about it alone.

---
*Part of the [backend engineering self-study log](../README.md).*
