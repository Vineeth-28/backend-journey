//Lexical Scope 
let course = "Backend";
function outer() {
    let topic = "Closures";
    function inner() {
        console.log(course);
        console.log(topic);
    }
    inner();
}

outer();

// Nested Lexical Scope

let language = "Javascript";
function first() {
    let framework = "Node.js";
    function second() {
        let database = "MongoDB";
        function third() {
            console.log(language);
            console.log(framework);
            console.log(database);

        }
        third();
    }
    second();
}

first();

let company = "Google";
function first() {
    let department = "Backend";
    function second() {
        let employees = "Aman";
        function third() {
            console.log(company);
            console.log(department);
            console.log(employees);
        }
        third();

    }
    second();
}
first();

// ======================================
// Theory
// ======================================

// What is Scope?
// Scope defines where a variable can be accessed in a program.
// A variable is only accessible inside the block or function
// where it is is declared, unless it is available through an outer scope.


// What is Lexical Scope?
// Lexical Scope means JavaScript decides variable accessibility
// based on where functions are written in the source code,
// not where they are called.


// Can an outer function access variables from an inner function?
// No.
// Variables declared inside an inner function are private to that function.
// Once execution leaves the inner function, those variables cannot
// be accessed directly by the outer function.


// Can an inner function access variables from an outer function?
// Yes.
// JavaScript searches for variables from the current scope,
// then moves outward through the lexical scope chain until
// it finds the variable or reaches the global scope.


// Scope Chain
// If a variable is not found in the current scope,
// JavaScript looks in the parent scope,
// then the grandparent scope,
// and continues until the global scope.


// Key Takeaways
// 1. Every function creates its own scope.
// 2. Inner functions can access outer variables.
// 3. Outer functions cannot access inner variables.
// 4. JavaScript follows the lexical scope chain.
// 5. Lexical Scope is the foundation of Closures.