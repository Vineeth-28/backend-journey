// ============================================
// DAY 27 - 05: FUNCTION TYPES
// ============================================
// Both `type` and `interface` can describe the SHAPE of a function.

type Logger = (message: string, errorCode: number) => void;

const logError: Logger = (message, errorCode) => {
  console.log(`[${errorCode}] ${message}`);
};

logError("Database connection failed", 500);

// Same idea expressed with an interface (a "callable" interface)
interface LoggerInterface {
  (message: string, errorCode: number): void;
}

const logWarning: LoggerInterface = (message, errorCode) => {
  console.log(`[WARN ${errorCode}] ${message}`);
};

logWarning("Slow query detected", 200);

// --------------------------------------------
// A practical backend-style example: an AuthForm contract
// --------------------------------------------
interface AuthForm {
  name: string;
  submitButtonText: string;
  onReset: (e: unknown) => void;
  onSubmit: (e: unknown) => void;
}

const loginForm: AuthForm = {
  name: "Login Form",
  submitButtonText: "Login",
  onReset: (e) => {
    console.log("Form reset", e);
  },
  onSubmit: (e) => {
    console.log("Form submitted", e);
  },
};

console.log(loginForm.name);

// Note: `unknown` is used here instead of `any` — it's safer,
// because TS forces you to check/narrow the type before using it.
// (Covered in more depth on Day 28.)

export {};
