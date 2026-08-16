
### `interview-questions.md`

```markdown
# Day 20 — Interview Questions

## 1. What is DNS?

DNS helps resolve human-readable domain names to IP addresses.

## 2. Why do we need an IP address?

An IP address identifies a destination on a network so communication
can be routed to the correct endpoint.

## 3. What is TCP?

TCP is a transport protocol that provides reliable and ordered delivery
of data between endpoints.

## 4. What is TLS?

TLS provides secure communication through encryption, authentication,
and integrity.

## 5. What is HTTPS?

HTTPS is HTTP communicated over a TLS-secured connection.

## 6. What is an HTTP request?

An HTTP request is a message sent by a client to a server to request a
resource or perform an operation.

## 7. What is an HTTP response?

An HTTP response is the server's message back to the client containing
the result of processing the request.

## 8. Where does a backend fit into the request journey?

The backend receives the HTTP request, performs business logic and
possibly communicates with databases or other services, then returns
an HTTP response.

## 9. What happens if DNS fails?

The client cannot resolve the domain to an IP address, so it cannot
normally proceed to communicate with the intended server.

## 10. What happens if the server is unreachable?

The client may know the destination IP but cannot successfully establish
or maintain communication with the server.