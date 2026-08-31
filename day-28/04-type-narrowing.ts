// ============================================
// DAY 28 - 04: TYPE NARROWING
// ============================================
// "Narrowing" means TypeScript progressively narrows a broad type
// (like a union or `unknown`) down to a more specific one, based
// on checks you write in your code.

// --------------------------------------------
// typeof narrowing
// --------------------------------------------
function formatValue(value: number | string): string {
  if (typeof value === "number") {
    // inside this block, TS knows `value` is a `number`
    return value.toFixed(2);
  }
  // here, TS knows `value` must be a `string`
  return value.toUpperCase();
}

console.log(formatValue(3.14159)); // "3.14"
console.log(formatValue("hello")); // "HELLO"

// --------------------------------------------
// Truthiness / undefined narrowing
// --------------------------------------------
function getPhoneOrDefault(phone?: string): string {
  if (!phone) {
    return "not provided";
  }
  // TS knows `phone` is definitely a `string` here (not undefined)
  return phone;
}

console.log(getPhoneOrDefault());          // "not provided"
console.log(getPhoneOrDefault("12345"));   // "12345"

// --------------------------------------------
// `in` operator narrowing — useful for distinguishing object shapes
// --------------------------------------------
interface EmailLogin {
  email: string;
  password: string;
}

interface TokenLogin {
  token: string;
}

function login(credentials: EmailLogin | TokenLogin): void {
  if ("email" in credentials) {
    console.log(`Logging in with email: ${credentials.email}`);
  } else {
    console.log(`Logging in with token: ${credentials.token}`);
  }
}

login({ email: "vineet@example.com", password: "secret" });
login({ token: "abc-123-token" });

export {};
