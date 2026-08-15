# Day 19 — Node.js File System (`fs`)

## Topic
Exploring Node.js built-in modules with the File System (`fs`) module.

## What I Learned

### What is `fs`?
`fs` stands for File System. It is a built-in Node.js module used to interact with files and directories.

It can:
- Read files
- Write files
- Append to files
- Delete files
- Work with directories

### Why does a backend need `fs`?
A backend may need to interact with files on the server, such as logs, configuration files, uploads, and temporary data.

### CommonJS import

```js
const fs = require("fs");
```

Promise-based API:

```js
const fs = require("fs/promises");
```

### Synchronous vs Asynchronous

Synchronous operations wait for the current operation to finish before continuing.

Asynchronous operations allow Node.js to continue other work while waiting for the operation.

For backend servers, asynchronous I/O is generally preferred because synchronous file operations can block the main JavaScript thread.

### Important methods

- `fs.readFile()` — reads a file
- `fs.writeFile()` — writes/replaces file contents
- `fs.appendFile()` — adds data to the end of a file
- `fs.unlink()` — deletes a file

### Callback

A callback is a function that Node.js can execute after an asynchronous operation finishes.

```js
fs.readFile("notes.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
});
```

### Backend Connection

Blocking the main JavaScript thread is dangerous because Node.js uses that thread to execute JavaScript for incoming requests. A slow synchronous file operation can delay other requests.

## Practical Work

- Created/wrote a file
- Read a file
- Appended to a file
- Practiced file deletion
- Compared synchronous and asynchronous file operations

## Mental Model

```text
Backend Code
     ↓
    fs
     ↓
Operating System
     ↓
Files / Directories
```

Day 19 focused on understanding how Node.js interacts with the file system and why asynchronous I/O matters for backend engineering.
