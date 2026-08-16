# Day 20 — What Happens When You Type `www.google.com`?

## Overview

When we type a URL such as:

```text
https://www.google.com
```

the browser has to locate the server, establish a connection, send an HTTP request, receive an HTTP response, and finally display the result.

The high-level journey is:

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
HTTPS
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

## 1. Domain Name

The user enters:

```text
www.google.com
```

A domain name is a human-readable way of identifying a service or destination on the internet.

Computers ultimately need a network destination such as an IP address to communicate.

---

## 2. DNS

DNS stands for **Domain Name System**.

Its job is to help resolve a domain name to an IP address.

```text
www.google.com
       ↓
      DNS
       ↓
   IP Address
```

Think of DNS like the internet's directory:

```text
Human-friendly name → Network destination
```

---

## 3. IP Address

An IP address identifies a destination on a network.

Once the browser obtains the appropriate IP address, it knows where it needs to establish communication.

Important:

> An IP address is not the DNS record itself. DNS contains records that help map names to network destinations.

---

## 4. TCP

TCP is a **transport-layer protocol** that provides reliable and ordered delivery of data between endpoints.

Conceptually:

```text
Client
  ↕
TCP connection
  ↕
Server
```

TCP helps establish reliable communication before application data is exchanged.

---

## 5. TLS

TLS provides security for communication.

It provides important properties such as:

* Encryption
* Authentication
* Integrity

This helps prevent attackers from simply reading or modifying the communication in transit.

---

## 6. HTTPS

HTTPS means HTTP is being communicated over a TLS-secured connection.

Conceptually:

```text
HTTP
  +
TLS
  ↓
HTTPS
```

---

## 7. HTTP Request

Once communication is established, the browser can send an HTTP request.

Example:

```http
GET / HTTP/1.1
Host: www.google.com
```

An HTTP request can contain:

* HTTP method
* Path
* Headers
* Body

For example:

```text
GET /users
```

means:

> "Give me the resource represented by `/users`."

---

## 8. Backend Server

The request reaches the server running the application.

For our backend applications, this could eventually be:

```text
Client
   ↓
Node.js
   ↓
Express
   ↓
Controller
   ↓
Service
   ↓
Database
```

The backend processes the request and performs whatever business logic is required.

---

## 9. Database / Services

The backend may need additional data.

For example:

```text
HTTP Request
     ↓
Controller
     ↓
Service
     ↓
Database
     ↓
Data
     ↓
Service
```

The backend then prepares the result.

---

## 10. HTTP Response

The server sends an HTTP response back to the browser.

Example:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Success"
}
```

The response can contain:

* Status code
* Headers
* Body

---

## Complete Mental Model

```text
┌──────────────┐
│   Browser    │
└──────┬───────┘
       │
       ↓
  Domain Name
       │
       ↓
      DNS
       │
       ↓
   IP Address
       │
       ↓
      TCP
       │
       ↓
      TLS
       │
       ↓
     HTTPS
       │
       ↓
 HTTP Request
       │
       ↓
┌──────────────┐
│   Backend    │
│              │
│ Node.js      │
│ Express      │
│ Business     │
│ Logic        │
└──────┬───────┘
       │
       ↓
 Database / Services
       │
       ↓
 HTTP Response
       │
       ↓
┌──────────────┐
│   Browser    │
└──────────────┘
```

---

## Backend Engineer Connection

This entire journey matters because **we are going to become the people building the backend box in the middle**.

Eventually, we'll write code that handles requests such as:

```http
POST /users
GET /projects
PATCH /tasks/123
DELETE /comments/45
```

The client sends the request.

Our Node.js backend processes it.

Our backend communicates with the database or other services.

Then our backend returns the HTTP response.

---

## Key Takeaways

* **DNS** helps resolve domain names to IP addresses.
* **IP addresses** identify network destinations.
* **TCP** provides reliable, ordered transport.
* **TLS** secures communication.
* **HTTPS** is HTTP over TLS.
* **HTTP requests** are sent by clients to servers.
* **Backends** process requests and perform business logic.
* **HTTP responses** are returned by servers to clients.

### High-Level Flow

```text
Domain
  ↓
DNS
  ↓
IP
  ↓
TCP
  ↓
TLS
  ↓
HTTP Request
  ↓
Backend
  ↓
Database / Services
  ↓
HTTP Response
  ↓
Client
```

> This is a high-level model. Each networking layer will be studied in more depth as we continue the backend journey.