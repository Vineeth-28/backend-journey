// ============================================
// Day 31 - Basic Express Server
// Goal: See how Express simplifies what we built manually with the http module
// ============================================

// express is a minimal web framework built on top of Node's core http module
// it abstracts away a lot of the boilerplate (routing, headers, parsing, etc.)
const express = require('express');

// calling express() creates an "app" object — this is our application instance
// it comes with built-in methods for routing (app.get, app.post, etc.)
const app = express();

// port number where our server will listen for incoming requests
const PORT = 3001;

// app.get() registers a route handler for GET requests to the "/" path
// unlike the raw http module, we don't need to manually check req.method or req.url —
// Express handles the routing internally
app.get('/', (req, res) => {
  // res.send() automatically sets the Content-Type header based on what you pass in
  // (string -> text/html, object -> application/json, etc.) and calls res.end() for you
  res.send("Hello World");
});

// app.post() registers a route handler for POST requests to the "/" path
// note: GET "/" and POST "/" can coexist as separate handlers —
// this is exactly the kind of method+path routing we'd have to build by hand with plain http
app.post('/', (req, res) => {
  res.send("Hello World POST!");
});

// app.listen() starts the server, just like server.listen() in the http module
// under the hood, Express is actually using http.createServer() for you
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});