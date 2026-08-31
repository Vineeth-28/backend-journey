// ============================================
// DAY 28 - 05: PRACTICAL AUTHENTICATION FORM TYPE
// ============================================
// Combines interfaces, optional handling, and enums from this
// day into one practical, backend-adjacent example.

enum FormMode {
  Login = "LOGIN",
  Signup = "SIGNUP",
}

interface AuthForm {
  name: string;
  submitButtonText: string;
  onReset: () => void;
  onSubmit: () => void;
}

function createAuthForm(mode: FormMode): AuthForm {
  const isLogin = mode === FormMode.Login;

  return {
    name: isLogin ? "Login Form" : "Signup Form",
    submitButtonText: isLogin ? "Login" : "Create Account",
    onReset: () => {
      console.log(`${isLogin ? "Login" : "Signup"} form reset`);
    },
    onSubmit: () => {
      console.log(`${isLogin ? "Login" : "Signup"} form submitted`);
    },
  };
}

const loginForm: AuthForm = createAuthForm(FormMode.Login);
const signupForm: AuthForm = createAuthForm(FormMode.Signup);

console.log(loginForm.name, "->", loginForm.submitButtonText);
console.log(signupForm.name, "->", signupForm.submitButtonText);

loginForm.onSubmit();
signupForm.onReset();

export {};
