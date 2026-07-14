const user = {
  username: "aman",
  password: "backend123",
  isBlocked: false,
  role: "admin",
};

const enteredUsername = "aman";
const enteredPassword = "backend123";

if (user.username !== enteredUsername) {
  console.log("❌ User Not Found");
} else if (user.password !== enteredPassword) {
  console.log("❌ Incorrect Password");
} else if (user.isBlocked) {
  console.log("🚫 Account Blocked");
} else {
  console.log("✅ Login Successful");
  if (user.role === "admin") {
    console.log("👑 Welcome Admin");
  } else {
    console.log("👤 Welcome User");
  }
}
