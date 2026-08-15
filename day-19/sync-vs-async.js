const fs = require("fs");

// Synchronous: Node.js waits for the operation to finish.
const syncData = fs.readFileSync("demo.txt", "utf8");
console.log("Sync:", syncData);

// Asynchronous: Node.js can continue other work while waiting.
fs.readFile("demo.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Async:", data);
});

console.log("This may run before the async read finishes.");
