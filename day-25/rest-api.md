# REST APIs

> Day 24 · Backend Development
> Related: [Day 22 — REST API Deep Dive](../day-22/rest-api.md) · [API Design Examples](./api-design-examples.md)

## What Is an API

API stands for **Application Programming Interface**. It allows two applications to communicate with each other.

```text
Frontend / Client
        ↓
    API Request
        ↓
     Backend
        ↓
    Database
        ↓
    API Response
        ↓
Frontend / Client
```

A client sends a request to the backend, the backend processes it (often talking to a database along the way), and sends back a response.

## What Is REST

REST stands for **Representational State Transfer** — an **architectural style** used to design APIs.

A REST API usually relies on:
- HTTP
- URLs
- HTTP methods
- Status codes
- Resources

REST APIs let clients perform operations on **resources** — things like:

```text
Users
Projects
Tasks
Products
Orders
```

## Resources

In REST, APIs are designed around resources, not actions.

```text
/users       → collection of users
/users/10    → one specific user (ID 10)
/projects    → collection of projects
/tasks       → collection of tasks
```

## HTTP Methods

HTTP methods tell the server what operation to perform on a resource.

### GET — retrieve data

```http
GET /users        → get all users
GET /users/10      → get user with ID 10
```

### POST — create a new resource

```http
POST /users
```

```json
{
  "name": "Vineet",
  "email": "vineet@example.com"
}
```

### PUT — replace/update an entire resource

```http
PUT /users/10
```

### PATCH — partially update a resource

```http
PATCH /users/10
```

```json
{
  "name": "New Name"
}
```

### DELETE — delete a resource

```http
DELETE /users/10
```

## CRUD Operations

CRUD = **C**reate, **R**ead, **U**pdate, **D**elete. REST maps these onto HTTP methods:

| CRUD   | HTTP Method |
|--------|-------------|
| Create | POST        |
| Read   | GET         |
| Update | PUT / PATCH |
| Delete | DELETE      |

```text
POST   /users        → Create user
GET    /users        → Get all users
GET    /users/:id    → Get one user
PUT    /users/:id    → Replace user
PATCH  /users/:id    → Update user
DELETE /users/:id    → Delete user
```

## RESTful URLs

A REST API should use URLs to represent **resources**, not actions.

**Good:**
```text
/users
/users/10
/projects
/projects/5
/tasks/20
```

**Avoid** putting actions inside the URL when the HTTP method already explains the action:

```text
Instead of:  /createUser  /getUsers  /deleteUser
Prefer:      POST /users   GET /users   DELETE /users/:id
```

## Request

A client sends a request to the server. An HTTP request can contain:

```text
Method
URL
Headers
Query Parameters
Request Body
```

```http
POST /users
```
```json
{
  "name": "Vineet"
}
```

## Response

The server sends a response back. A response usually contains:

```text
Status Code
Headers
Response Body
```

```json
{
  "id": 1,
  "name": "Vineet"
}
```

## HTTP Status Codes

**Success**
```text
200 → OK
201 → Created
204 → No Content
```

**Client Errors**
```text
400 → Bad Request
401 → Unauthorized
403 → Forbidden
404 → Not Found
409 → Conflict
```

**Server Errors**
```text
500 → Internal Server Error
502 → Bad Gateway
503 → Service Unavailable
```

## Statelessness

REST APIs are generally **stateless** — the server shouldn't rely on remembering the previous request to understand the current one. Each request must carry the information needed to process it.

```text
Request 1 → Login
Request 2 → Send authentication token
```

```http
Authorization: Bearer <token>
```

## Path Parameters

Path parameters identify a specific resource.

```text
/users/10   →  10 is the user ID
```

In Express:
```js
GET /users/:id
```

## Query Parameters

Query parameters are used for filtering, searching, sorting, and pagination.

```text
/users?role=admin
/products?category=electronics
/users?page=1&limit=10
```

## Example REST API — Project Management App

```text
GET    /projects
POST   /projects

GET    /projects/:id
PATCH  /projects/:id
DELETE /projects/:id
```

Nested resource — tasks belong to a project:

```text
GET    /projects/:id/tasks
POST   /projects/:id/tasks

PATCH  /tasks/:id
DELETE /tasks/:id
```

A fully worked version of this design (with sample requests/responses per endpoint) lives in [api-design-examples.md](./api-design-examples.md).

## REST API Request Flow

```text
Client
   ↓
HTTP Request
   ↓
Route
   ↓
Middleware
   ↓
Controller
   ↓
Service
   ↓
Database
   ↓
Service
   ↓
Controller
   ↓
HTTP Response
   ↓
Client
```

This is the same Route → Controller → Service → Repository flow from the MVC notes — REST is what defines the *shape* of the request/response; MVC is what organizes the code that handles it.

## Important REST Principles

1. **Use resources** — `/users`, `/projects`, `/tasks`
2. **Use correct HTTP methods** — `GET`, `POST`, `PUT`, `PATCH`, `DELETE`
3. **Use meaningful status codes** — `200`, `201`, `400`, `401`, `404`, `500`
4. **Keep APIs stateless** — each request carries everything needed to process it
5. **Use consistent naming** — `/users`, `/projects`, `/tasks`, never a mix like `/getUsers`, `/create-project`, `/DeleteTask`

## My Understanding

REST is an architectural style for building APIs. In REST, application data is represented as resources such as `Users`, `Projects`, and `Tasks`. The client interacts with these resources using HTTP methods:

```text
GET    → Read
POST   → Create
PUT    → Replace
PATCH  → Update
DELETE → Delete
```

The backend receives the request, processes the required logic, communicates with the database if needed, and sends an HTTP response back to the client.

## Key Takeaway

A REST API is a structured way for clients and servers to communicate. The core things to have solid are:

```text
Resources
Endpoints
HTTP Methods
Requests
Responses
Status Codes
Parameters
Statelessness
CRUD
```

These concepts get used constantly once the backend project starts.
