// ==========================================
// Callback Hell
// ==========================================

function loginUser(callback) {
    console.log("Logging in...");
    callback();
}

function getProfile(callback) {
    console.log("Fetching Profile...");
    callback();
}

function getOrders(callback) {
    console.log("Fetching Orders...");
    callback();
}

function placeOrder(callback) {
    console.log("Placing Order...");
    callback();
}

loginUser(() => {
    getProfile(() => {
        getOrders(() => {
            placeOrder(() => {
                console.log("Order Completed!");
            });
        });
    });
});

/*
Problems:
1. Pyramid of Doom
2. Hard to Read
3. Hard to Debug
4. Difficult Error Handling

Solved later using:
- Promises
- async/await
*/