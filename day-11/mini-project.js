// ==========================================
// Day 11 Mini Project
// Fake Login System using Promises
// ==========================================

function loginUser(username, password) {

    return new Promise((resolve, reject) => {

        console.log("Checking Credentials...");

        setTimeout(() => {

            if (
                username === "admin" &&
                password === "1234"
            ) {

                resolve({
                    id: 1,
                    username: "admin",
                    role: "Backend Engineer"
                });

            } else {

                reject("Invalid Username or Password");

            }

        }, 2000);

    });

}

// ------------------------------------------
// Consume Promise
// ------------------------------------------

loginUser("admin", "1234")

.then((user) => {

    console.log("Login Successful");

    console.log(user);

})

.catch((error) => {

    console.log(error);

})

.finally(() => {

    console.log("Request Completed");

});

/*

Output

Checking Credentials...

(wait 2 sec)

Login Successful

{
 id:1,
 username:'admin',
 role:'Backend Engineer'
}

Request Completed

*/