# API Design Examples

> Day 24 · Backend Development
> Related: [REST APIs](./rest-api.md)

A worked design for the Project Management API sketched out in the main notes — full endpoint list plus sample requests/responses, so the theory has something concrete attached to it.

## Resources

Two resources, one nested inside the other:

```text
/projects                  → collection of projects
/projects/:id               → a single project
/projects/:id/tasks         → tasks belonging to a project
/tasks/:id                  → a single task (accessed directly)
```

## Projects

### `GET /projects` — list all projects

Query params for filtering/pagination:
```text
GET /projects?status=active&page=1&limit=10
```

Response — `200 OK`
```json
{
  "data": [
    { "id": 1, "name": "Backend Journey", "status": "active" },
    { "id": 2, "name": "Portfolio Site", "status": "completed" }
  ],
  "page": 1,
  "limit": 10,
  "total": 2
}
```

### `POST /projects` — create a project

Request
```json
{
  "name": "Backend Journey",
  "description": "Daily backend engineering study log"
}
```

Response — `201 Created`
```http
Location: /projects/1
```
```json
{
  "id": 1,
  "name": "Backend Journey",
  "description": "Daily backend engineering study log",
  "status": "active",
  "createdAt": "2026-08-25T10:00:00Z"
}
```

### `GET /projects/:id` — get one project

```http
GET /projects/1
```

Response — `200 OK`
```json
{
  "id": 1,
  "name": "Backend Journey",
  "status": "active"
}
```

Not found — `404 Not Found`
```json
{
  "error": "Project with id 99 not found"
}
```

### `PATCH /projects/:id` — partial update

```http
PATCH /projects/1
```
```json
{
  "status": "completed"
}
```

Response — `200 OK`
```json
{
  "id": 1,
  "name": "Backend Journey",
  "status": "completed"
}
```

### `DELETE /projects/:id` — delete a project

```http
DELETE /projects/1
```

Response — `204 No Content` (empty body)

## Tasks (nested under a project)

### `GET /projects/:id/tasks` — list a project's tasks

```http
GET /projects/1/tasks?completed=false
```

Response — `200 OK`
```json
{
  "data": [
    { "id": 10, "title": "Write REST notes", "completed": true },
    { "id": 11, "title": "Design task API", "completed": false }
  ]
}
```

### `POST /projects/:id/tasks` — create a task under a project

```http
POST /projects/1/tasks
```
```json
{
  "title": "Design task API"
}
```

Response — `201 Created`
```http
Location: /tasks/11
```
```json
{
  "id": 11,
  "projectId": 1,
  "title": "Design task API",
  "completed": false
}
```

### `PATCH /tasks/:id` — update a task directly

Once a task has an ID, it doesn't need the project prefix to be addressed — it's its own resource:

```http
PATCH /tasks/11
```
```json
{
  "completed": true
}
```

Response — `200 OK`
```json
{
  "id": 11,
  "projectId": 1,
  "title": "Design task API",
  "completed": true
}
```

### `DELETE /tasks/:id`

```http
DELETE /tasks/11
```

Response — `204 No Content`

## Error Response Shape

Keeping error responses consistent across every endpoint makes the API predictable for clients:

```json
{
  "error": {
    "message": "Validation failed",
    "details": [
      { "field": "name", "issue": "name is required" }
    ]
  }
}
```

Used with `400 Bad Request` (validation) or `422 Unprocessable Entity` (semantically invalid data).

## Design Notes

- `tasks` is reachable two ways — `/projects/:id/tasks` for "give me this project's tasks," and `/tasks/:id` for "act on this specific task." This is a common and reasonable pattern: nest for listing/creating in context, flatten for direct access once an ID exists.
- Every mutating response (`POST`, `PATCH`) returns the full updated resource, so the client never has to guess the current state.
- `204 No Content` on `DELETE` — nothing meaningful to return, so the body stays empty.
- Pagination and filtering live in query params (`?page=`, `?status=`), never as separate endpoints.

## Try This Yourself

Before moving on, sketch the same treatment for a different domain — pick one and design the endpoints, status codes, and sample JSON bodies from scratch:

- A **bookstore API** — `books`, `authors`, `orders`
- A **task tracker** — `boards`, `lists`, `cards` (Trello-style nesting)
- A **blog API** — `posts`, `comments`, `tags`

The goal isn't a "correct" answer — it's practicing the resource/verb/status-code thinking until it's automatic.
