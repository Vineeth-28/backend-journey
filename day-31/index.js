// ============================================
// Day 31 - Plain HTTP Server (Node.js core `http` module)
// Goal: Understand how a raw HTTP server works before using Express
// ============================================

// http is a built-in Node.js module — no npm install needed
// it lets us create a server that can listen for requests and send responses
const http = require("http");

// port number where our server will listen for incoming requests
const PORT = 3000;

// createServer() takes a callback function that runs every time
// a request hits the server. This callback receives two objects:
// req  -> contains info about the incoming request (method, url, headers, etc.)
// res  -> used to send a response back to the client
const server = http.createServer(async (req, res) => {
  console.log("request received"); // logs every time a request comes in (useful for debugging)

  // req.method tells us the HTTP verb used (GET, POST, PUT, DELETE, etc.)
  if (req.method === "GET") {
    // set status code + content type before sending the body
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("get method received"); // send response and close the connection
  } else if (req.method === "POST") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("post method received");
  } else {
    // fallback for any other method (PUT, DELETE, PATCH, etc.)
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("HELLO");
  }
});
// at this point the server object exists, but it isn't listening yet —
// it won't accept connections until we call .listen()

// server.listen() starts the server and binds it to the given port
// the callback runs once the server successfully starts
server.listen(PORT, () => {
  console.log(`server is running on the port ${PORT}`);
});