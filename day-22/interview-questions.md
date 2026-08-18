# Interview Questions — HTTP & APIs

> Day 22 · Backend Development
> Related: [HTTP Protocol](./http-protocol.md) · [API Types](./api-types.md) · [REST API](./rest-api.md)

## HTTP Protocol

**1. What does it mean that HTTP is stateless?**
Each request is independent — the server retains no memory of prior requests. Any "state" (like being logged in) has to be reconstructed each time via a cookie, token, or session ID sent with the request.

**2. What's the difference between PUT and PATCH?**
PUT replaces the entire resource with what's sent in the request body — fields not included are typically removed/reset. PATCH applies a partial update — only the included fields are changed. PUT is idempotent by definition; PATCH isn't guaranteed to be.

**3. What does "idempotent" mean, and which HTTP methods are idempotent?**
An idempotent operation produces the same result no matter how many times it's called. GET, PUT, DELETE, HEAD, and OPTIONS are idempotent. POST and (generally) PATCH are not.

**4. What's the difference between 401 and 403?**
401 Unauthorized = the server doesn't know who you are (missing/invalid credentials). 403 Forbidden = the server knows who you are, but you don't have permission for this action.

**5. What's the difference between HTTP/1.1 and HTTP/2?**
HTTP/2 introduces binary framing and multiplexing — multiple requests/responses can share a single TCP connection without blocking each other, plus header compression. HTTP/1.1 requires either multiple connections or serialized requests per connection to avoid head-of-line blocking.

**6. Why does HTTP/3 use QUIC instead of TCP?**
TCP guarantees ordered delivery — if one packet is lost, everything behind it waits (head-of-line blocking), even at the HTTP/2 framing layer. QUIC runs over UDP and handles streams independently, so a lost packet only blocks its own stream, not the whole connection. QUIC also folds in TLS handshake steps for faster connection setup.

**7. What's the difference between a cookie and a token (e.g., JWT) for authentication?**
Cookies are typically opaque session identifiers stored by the browser and sent automatically; the actual session data lives server-side (or is encoded in the cookie). JWTs are self-contained, signed tokens that carry claims directly — the server can verify them without a database lookup, which is why they're common in stateless/distributed systems.

## API Types

**8. When would you choose GraphQL over REST?**
When clients need flexible, nested data shapes and you want to avoid over-fetching/under-fetching — e.g., a mobile app and web app pulling different subsets of the same data from one endpoint, or deeply related data that would otherwise take several REST round trips.

**9. Why is gRPC often used for internal microservice communication instead of REST?**
gRPC uses Protocol Buffers (binary, smaller, faster to (de)serialize than JSON) and runs on HTTP/2, giving multiplexing and streaming support out of the box. For high-throughput, low-latency service-to-service calls, that overhead reduction matters more than human readability.

**10. What problem does GraphQL solve that plain REST struggles with?**
Over-fetching (getting more fields than needed) and under-fetching (needing multiple requests to assemble the data a screen needs). GraphQL lets the client specify exactly the fields/relations it wants in a single query.

**11. What is a WebSocket, and how is its connection established?**
A persistent, full-duplex connection allowing either side to push data at any time. It starts as a normal HTTP request with an `Upgrade: websocket` header; if the server agrees, the connection switches protocols and stays open for bidirectional messaging.

## REST API Design

**12. What are the core constraints that make an API "RESTful"?**
Client-server separation, statelessness, cacheability, uniform interface, layered system, and (optionally) code on demand. See [rest-api.md](./rest-api.md#the-six-constraints).

**13. How should you structure REST URLs — verbs or nouns?**
Nouns, plural, resource-based (`/users/42/orders`), never verbs — the HTTP method already expresses the action (`GET`, `POST`, etc.). `/getUserOrders` is an anti-pattern.

**14. What is HATEOAS, and is it commonly implemented?**
Hypermedia As The Engine Of Application State — responses include links to related actions/resources so clients don't hardcode URL structure. It's rarely implemented in practice; most real-world "REST" APIs stop at Richardson Maturity Level 2 (proper verbs + status codes, no hypermedia).

**15. What status code should a successful POST that creates a resource return, and what else should the response include?**
`201 Created`, along with a `Location` header pointing to the URL of the newly created resource.

**16. How would you version a REST API, and what are the trade-offs?**
URL versioning (`/v1/users`) is simplest and most discoverable but clutters the URL. Header versioning (`Accept: application/vnd.api.v2+json`) keeps URLs clean but is less obvious to consumers. Query param versioning is easy to implement but easy to omit accidentally.

**17. Offset pagination vs cursor pagination — when would you use each?**
Offset pagination (`?page=2&limit=20`) is simple but can skip/duplicate items if the underlying data changes between requests. Cursor pagination (`?cursor=abc123`) is more stable for large or frequently changing datasets since it anchors to a specific record rather than a position.

**18. Why is caching easier with REST than with GraphQL?**
REST's GET requests map naturally to HTTP's built-in caching (`Cache-Control`, `ETag`, CDN/browser caches keyed by URL). GraphQL typically sends all queries as POST to a single endpoint, so standard HTTP caching doesn't apply without additional tooling (e.g., persisted queries, client-side caching layers).

## Quick-Fire Round

- **GET vs POST for reads?** GET — safe, idempotent, cacheable.
- **Safe method?** One that doesn't modify server state (GET, HEAD, OPTIONS).
- **Stateless vs session-based?** Stateless = no server memory between requests; state reconstructed via token/cookie each time.
- **REST's data format?** Usually JSON, but not mandated by the constraints.
- **gRPC's serialization format?** Protocol Buffers (binary).
