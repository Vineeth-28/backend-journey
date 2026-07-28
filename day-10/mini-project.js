// ==========================================
// Mini Project
// Simulating API Request
// ==========================================

function fetchUser(callback) {
    console.log("Fetching user...");

    setTimeout(() => {
        callback({
            id: 1,
            name: "Vineet",
            role: "Backend Developer"
        });
    }, 2000);
}

fetchUser((user) => {
    console.log("User Received:");
    console.log(user);
});

/*

Real Backend Flow

Client Request
      ↓
Server
      ↓
Database Query
      ↓
Response
      ↓
Callback Executes

*/