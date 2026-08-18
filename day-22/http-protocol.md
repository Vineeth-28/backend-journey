# HTTP Protocol

> Day 22 · Backend Development
> Related: [API Types](./api-types.md) · [REST API](./rest-api.md) · [Interview Questions](./interview-questions.md)

## What Is HTTP

HTTP (HyperText Transfer Protocol) is an **application-layer** protocol used for communication between clients (browsers, apps, scripts) and servers. It sits on top of TCP (or QUIC/UDP for HTTP/3) and defines a request-response model.

Key properties:
- **Stateless** — each request is independent; the server holds no memory of previous requests by default.
- **Text-based** (HTTP/1.x) or **binary-framed** (HTTP/2, HTTP/3).
- **Client-server** — the client always initiates the request.

This builds directly on the TCP/TLS foundation from the networking notes — HTTP is the layer that rides on top of that established, encrypted connection.

## Anatomy of an HTTP Request

```
GET /users/42?active=true HTTP/1.1
Host: api.example.com
Authorization: Bearer <token>
Accept: application/json
User-Agent: Mozilla/5.0

(optional body — used with POST/PUT/PATCH)
```

Components:
1. **Request line** — method, path (+ query string), HTTP version
2. **Headers** — key-value metadata
3. **Body** — optional payload (JSON, form data, files, etc.)

## Anatomy of an HTTP Response

```
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 128
Cache-Control: no-cache

{
  "id": 42,
  "name": "Vee"
}
```

Components:
1. **Status line** — HTTP version, status code, reason phrase
2. **Headers** — metadata about the response
3. **Body** — the actual payload

## HTTP Methods

| Method  | Purpose                          | Safe | Idempotent | Has Body |
|---------|-----------------------------------|------|------------|----------|
| GET     | Retrieve a resource               | Yes  | Yes        | No       |
| POST    | Create a resource / trigger action| No   | No         | Yes      |
| PUT     | Replace a resource entirely       | No   | Yes        | Yes      |
| PATCH   | Partially update a resource       | No   | No*        | Yes      |
| DELETE  | Remove a resource                 | No   | Yes        | Rare     |
| HEAD    | Like GET, headers only, no body   | Yes  | Yes        | No       |
| OPTIONS | Discover allowed methods (CORS)   | Yes  | Yes        | No       |

*PATCH can be made idempotent depending on implementation, but isn't guaranteed to be.

**Safe** = doesn't alter server state.
**Idempotent** = calling it N times has the same effect as calling it once.

## Status Codes

Grouped by first digit:

| Range | Category      | Common Codes |
|-------|---------------|--------------|
| 1xx   | Informational | 100 Continue |
| 2xx   | Success       | 200 OK, 201 Created, 204 No Content |
| 3xx   | Redirection   | 301 Moved Permanently, 302 Found, 304 Not Modified |
| 4xx   | Client Error  | 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity, 429 Too Many Requests |
| 5xx   | Server Error  | 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout |

Notes worth remembering:
- **401 vs 403** — 401 means "I don't know who you are" (missing/invalid auth); 403 means "I know who you are, but you're not allowed."
- **409 Conflict** — common for duplicate resource creation or version mismatch.
- **429** — pairs with rate limiting (see backend architecture notes on load balancers/caching).

## Common Headers

**Request headers**
- `Host` — target domain (required in HTTP/1.1+)
- `Authorization` — credentials (Bearer token, Basic auth)
- `Content-Type` — format of the request body (`application/json`, `multipart/form-data`, etc.)
- `Accept` — what response formats the client can handle
- `Cookie` — client-stored state sent back to server

**Response headers**
- `Content-Type` — format of the response body
- `Set-Cookie` — server asks client to store state
- `Cache-Control` — caching directives (`no-cache`, `max-age=3600`)
- `ETag` — a fingerprint of the resource, used for conditional requests / cache validation
- `Location` — used with 201/3xx to point to a new/redirected resource

## Statelessness and Sessions

HTTP itself has no memory between requests. To simulate state (e.g., "is this user logged in?"), servers use:
- **Cookies** — client stores a session ID, sent with every subsequent request
- **Tokens (JWT)** — self-contained, signed tokens sent via `Authorization` header
- **Server-side sessions** — session ID maps to state stored in a database/cache (e.g., Redis)

This is why "stateless" APIs (REST) still support login — the *protocol* is stateless, but *application state* is reconstructed each request via a token/cookie.

## HTTP Versions

| Version  | Key Change |
|----------|------------|
| HTTP/1.0 | One request per TCP connection |
| HTTP/1.1 | Persistent connections (keep-alive), pipelining, chunked transfer encoding |
| HTTP/2   | Binary framing, **multiplexing** (many requests over one connection, no head-of-line blocking at the HTTP layer), header compression (HPACK), server push |
| HTTP/3   | Runs over **QUIC** (UDP-based) instead of TCP — removes TCP-level head-of-line blocking, faster connection setup, built-in encryption |

## Quick Recap

- HTTP = stateless request/response protocol on top of TCP (or QUIC for HTTP/3)
- Requests = method + path + headers + optional body
- Responses = status code + headers + optional body
- Status codes tell you the *category* of outcome before you even read the body
- State is faked using cookies/tokens, not the protocol itself
