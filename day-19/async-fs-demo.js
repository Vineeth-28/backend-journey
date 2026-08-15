const fs = require("fs/promises");

async function fileSystemDemo() {
    try {
        await fs.writeFile("demo.txt", "Hello from Node.js!");

        const data = await fs.readFile("demo.txt", "utf8");
        console.log("Read:", data);

        await fs.appendFile("demo.txt", "\nLearning backend engineering.");

        const updatedData = await fs.readFile("demo.txt", "utf8");
        console.log("After append:", updatedData);

        // Uncomment to practice deletion:
        // await fs.unlink("demo.txt");
        // console.log("File deleted");
    } catch (error) {
        console.error("File system error:", error);
    }
}

fileSystemDemo();
