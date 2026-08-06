function authenticateUser() {

    return Promise.resolve({
        username: "Aman",
        role: "Backend Engineer"

    });

}

async function login() {
    try {
        const user = await authenticateUser();
        console.log("Welcome", user.username);
        console.log("Role:", user.role);
    } catch (error) {
        console.log(error);
    }
}

login();