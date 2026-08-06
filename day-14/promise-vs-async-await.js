console.log("1");

async function test() {

    console.log("2");

    await Promise.resolve();

    console.log("3");

}

test();

Promise.resolve().then(() => {
    console.log("4");
});

console.log("5");
