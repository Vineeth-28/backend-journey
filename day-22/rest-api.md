# REST API

> Day 22 · Backend Development
> Related: [HTTP Protocol](./http-protocol.md) · [API Types](./api-types.md) · [Interview Questions](./interview-questions.md)

## What Is REST

REST (Representational State Transfer) is an **architectural style** for designing networked applications, introduced by Roy Fielding in his 2000 doctoral dissertation. It's not a protocol or a standard — it's a set of constraints that, when followed, produce a "RESTful" API.

An API is only truly RESTful if it satisfies these six constraints.

## The Six Constraints

1. **Client-Server** — separation of concerns; client handles UI/UX, server handles data/logic. They evolve independently.
2. **Statelessness** — every request contains all the information needed to process it. No server-side session state between requests (see [HTTP Protocol → Statelessness](./http-protocol.md#statelessness-and-sessions)).
3. **Cacheability** — responses must define themselves as cacheable or not, so clients/intermediaries can reuse data and reduce load.
4. **Uniform Interface** — the core REST principle, broken into four sub-constraints:
   - Resource identification via URLs (`/users/42`)
   - Manipulation of resources through representations (send/receive JSON, not internal DB objects)
   - Self-descriptive messages (headers like `Content-Type` tell you how to parse the body)
   - HATEOAS (see below)
5. **Layered System** — client can't tell (and shouldn't need to know) whether it's talking directly to the server or through intermediaries like a load balancer or gateway.
6. **Code on Demand** (optional) — server can extend client functionality by sending executable code (e.g., JavaScript). Rarely used in practice.

## Resource-Based URLs

REST models everything as a **resource**, identified by a noun-based URL — not a verb.

```
Good:  GET /users/42
Bad:   GET /getUser?id=42
```

Conventions:
- Use **plural nouns**: `/users`, not `/user`
- Nest relationships logically: `/users/42/orders`
- Use query params for filtering/sorting/pagination, not new endpoints: `/users?role=admin&sort=name`
- Avoid verbs in the path — the HTTP method *is* the verb

## Mapping HTTP Methods to CRUD

| Operation | Method | Example              |
|-----------|--------|-----------------------|
| Create    | POST   | `POST /users`          |
| Read (one)| GET    | `GET /users/42`        |
| Read (all)| GET    | `GET /users`           |
| Update (full replace) | PUT | `PUT /users/42`   |
| Update (partial)      | PATCH | `PATCH /users/42`|
| Delete    | DELETE | `DELETE /users/42`     |

This connects directly to the method semantics covered in [HTTP Protocol](./http-protocol.md#http-methods) — REST doesn't invent new verbs, it reuses HTTP's.

## Status Codes in REST

REST APIs lean heavily on standard HTTP status codes to communicate outcome, rather than encoding success/failure in the response body:

- `201 Created` — after a successful POST, along with a `Location` header pointing to the new resource
- `204 No Content` — successful DELETE or update with nothing to return
- `400 Bad Request` — malformed request (validation failure)
- `404 Not Found` — resource doesn't exist
- `409 Conflict` — duplicate resource, version mismatch

## HATEOAS

**H**ypermedia **A**s **T**he **E**ngine **O**f **A**pplication **S**tate — the idea that a REST response should include links to related actions/resources, so the client doesn't need to hardcode URL structure.

```json
{
  "id": 42,
  "name": "Vee",
  "_links": {
    "self": { "href": "/users/42" },
    "orders": { "href": "/users/42/orders" }
  }
}
```

In practice, most "RESTful" APIs skip HATEOAS entirely — it's the constraint most commonly dropped.

## Richardson Maturity Model

A way to grade how "RESTful" an API actually is:

| Level | Description |
|-------|--------------|
| 0 | Single endpoint, one HTTP verb (basically RPC over HTTP) |
| 1 | Multiple resource-based endpoints, still one verb (usually POST) |
| 2 | Proper use of HTTP verbs and status codes (most real-world "REST" APIs stop here) |
| 3 | Full HATEOAS — responses drive navigation |

Most production APIs called "REST" are actually **Level 2** — resource URLs + correct verbs/status codes, without hypermedia links.

## Versioning Strategies

APIs change over time; versioning prevents breaking existing clients.

- **URL versioning**: `/v1/users` — simple, explicit, most common
- **Header versioning**: `Accept: application/vnd.myapi.v2+json` — cleaner URLs, less discoverable
- **Query param versioning**: `/users?version=2` — easy but easy to miss/omit

## Pagination, Filtering, Sorting

- **Pagination**: `?page=2&limit=20` (offset-based) or `?cursor=abc123` (cursor-based — better for large, changing datasets)
- **Filtering**: `?status=active&role=admin`
- **Sorting**: `?sort=-createdAt` (`-` prefix commonly means descending)

## Best Practices Checklist

- Use nouns for resources, HTTP verbs for actions
- Return correct, specific status codes — don't just return `200` for everything
- Version the API from day one
- Support pagination for any list endpoint that can grow unbounded
- Be consistent with naming (`camelCase` vs `snake_case` — pick one)
- Validate input and return clear `400`/`422` error bodies
- Use `Location` header on `201 Created` responses

## Quick Recap

- REST = architectural constraints, not a protocol
- Resources + HTTP verbs + status codes = the core of practical REST
- Statelessness and cacheability come straight from the underlying HTTP layer
- HATEOAS is the "purist" constraint most real APIs skip (Richardson Level 2 is the norm)
- Good REST design = predictable URLs, correct verb/status usage, sane versioning and pagination
