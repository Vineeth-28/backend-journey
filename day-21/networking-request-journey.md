# Networking — What Happens When You Visit a Website?

## Goal

Understand the journey a request takes from the browser to a backend
server and back.

---

## A Simplified Request Journey

```text
Browser
   ↓
Domain Name
   ↓
DNS
   ↓
IP Address
   ↓
TCP
   ↓
TLS
   ↓
HTTP Request
   ↓
Backend Server
   ↓
Business Logic
   ↓
Database / Services
   ↓
HTTP Response
   ↓
Browser
```

---

## DNS

DNS (Domain Name System) helps resolve a human-readable domain name
to an IP address.

```text
www.google.com
       ↓
      DNS
       ↓
   IP Address
```

---

## IP Address

An IP address identifies a destination on a network.

DNS records help map domain names to network destinations.

---

## TCP

TCP is a transport-layer protocol that provides reliable and ordered
delivery of data between endpoints.

---

## TLS

TLS provides secure communication through:

* Encryption
* Authentication
* Integrity

---

## HTTPS

HTTPS is HTTP communicated over a TLS-secured connection.

```text
HTTP + TLS = HTTPS
```

---

## HTTP Request

An HTTP request is a message sent by a client to a server.

Example:

```http
GET /users HTTP/1.1
Host: example.com
```

A request can contain:

* Method
* Path
* Headers
* Body

---

## HTTP Response

The server processes the request and sends an HTTP response.

Example:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Success"
}
```

---

## Summary

* DNS helps resolve domain names to IP addresses.
* TCP provides reliable and ordered transport.
* TLS secures communication.
* HTTPS is HTTP over TLS.
* HTTP requests travel from clients to backend servers.
* Backend servers process requests and return HTTP responses.

See [`backend-system-architecture.md`](./backend-system-architecture.md)
for what happens once the request reaches the backend.
