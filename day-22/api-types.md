# API Types

> Day 22 · Backend Development
> Related: [HTTP Protocol](./http-protocol.md) · [REST API](./rest-api.md) · [Interview Questions](./interview-questions.md)

## What Is an API

An API (Application Programming Interface) is a contract that lets one piece of software talk to another without exposing internal implementation. In backend work, this usually means: a client sends a request over a network, a server processes it and returns a response.

The "type" of API refers to the **architectural style / protocol** used to define that contract.

## REST (Representational State Transfer)

- Resource-oriented — everything is a "resource" addressed by a URL (`/users/42`)
- Uses standard HTTP methods (GET, POST, PUT, PATCH, DELETE) to act on resources
- Typically exchanges JSON
- Stateless (see [HTTP Protocol notes](./http-protocol.md#statelessness-and-sessions))
- Easy to cache at the HTTP layer (GET responses, ETags, `Cache-Control`)

**Good for:** general-purpose public/private APIs, CRUD-heavy applications, anything that benefits from HTTP caching.

Full breakdown in [rest-api.md](./rest-api.md).

## GraphQL

- Query language for APIs — client specifies **exactly** which fields it needs
- Single endpoint (usually `POST /graphql`) instead of many resource URLs
- Solves **over-fetching** (getting more data than needed) and **under-fetching** (needing multiple round trips)
- Strongly typed schema (defined via SDL — Schema Definition Language)
- Supports queries (read), mutations (write), and subscriptions (real-time)

**Trade-offs:**
- Harder to cache at the HTTP layer (everything is a POST to one endpoint)
- More complex server-side implementation (resolvers, N+1 query problem)
- Great for clients with varied/nested data needs (e.g., mobile apps pulling from many related resources at once)

**Good for:** complex, deeply nested data; multiple client types (web/mobile) needing different shapes of the same data.

## gRPC (Google Remote Procedure Call)

- Uses **Protocol Buffers (protobuf)** — a binary serialization format — instead of JSON
- Built on HTTP/2, so it gets multiplexing "for free"
- Contract defined in a `.proto` file; both client and server generate code from it
- Supports four communication patterns: unary, server streaming, client streaming, bidirectional streaming
- Much faster and smaller payloads than JSON-based APIs

**Trade-offs:**
- Not natively browser-friendly (needs gRPC-Web + proxy)
- Binary format isn't human-readable — harder to debug without tooling
- Steeper learning curve

**Good for:** internal service-to-service communication (microservices), low-latency systems, streaming data.

## SOAP (Simple Object Access Protocol)

- XML-based messaging protocol, older and more rigid than REST
- Has a strict contract defined via **WSDL** (Web Services Description Language)
- Built-in standards for security (WS-Security) and transactions
- Usually runs over HTTP, but protocol-agnostic in theory

**Good for:** legacy enterprise systems, banking/financial systems with strict compliance and formal contracts. Rarely chosen for new projects today.

## WebSocket

- Not a request/response API style — it's a **persistent, full-duplex connection** between client and server
- Starts as an HTTP handshake (`Upgrade: websocket`), then switches protocols
- Either side can push messages at any time, no polling needed

**Good for:** real-time features — chat apps, live notifications, collaborative editing, live dashboards, multiplayer games.

## Comparison Table

| Style      | Format         | Transport     | Best For                          | Caching   |
|------------|----------------|---------------|-------------------------------------|-----------|
| REST       | JSON           | HTTP/1.1, 2   | General CRUD APIs                   | Easy      |
| GraphQL    | JSON           | HTTP (POST)   | Flexible/nested data needs          | Hard      |
| gRPC       | Protobuf (bin) | HTTP/2        | Internal microservices, streaming   | N/A       |
| SOAP       | XML            | HTTP, SMTP…   | Legacy enterprise, strict contracts | Hard      |
| WebSocket  | Any (often JSON)| TCP (upgraded)| Real-time, bidirectional data      | N/A       |

## Choosing Between Them

- Public-facing, general API → **REST**
- Client needs flexible/nested queries, multiple frontends → **GraphQL**
- Internal microservice-to-microservice, performance-critical → **gRPC**
- Legacy enterprise integration → **SOAP**
- Real-time, two-way communication → **WebSocket**

Many real systems mix these: REST or GraphQL for public APIs, gRPC internally between services, WebSocket for the real-time slice of the product.

## Quick Recap

- API "type" = the contract style, not just the transport
- REST: resource + HTTP verbs, simple, cacheable
- GraphQL: single endpoint, client picks fields, solves over/under-fetching
- gRPC: binary, HTTP/2, fast, great for internal services
- SOAP: XML, rigid, mostly legacy
- WebSocket: persistent two-way connection for real-time needs
