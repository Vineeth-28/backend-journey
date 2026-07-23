

/*
Global Scope
*/

const company = "OpenAI";

function greet() {
    console.log(company);
}

greet();

/*
Function Scope
*/

function employee() {
    const salary = 50000;
    console.log(salary);
}

employee();

/*
Block Scope
*/

if (true) {
    let city = "Delhi";
    console.log(city);
}

/*
Nested Scope
*/

const university = "IIT";

function college() {
    const department = "CSE";

    function student() {
        const name = "Vineet";

        console.log(university);
        console.log(department);
        console.log(name);
    }

    student();
}

college();

/*
Variable Shadowing
*/

let x = 10;

function first() {
    let x = 20;

    function second() {
        let x = 30;
        console.log(x);
    }

    second();
}

first();

/*
Lexical Scope
*/

const language = "JavaScript";

function backend() {
    console.log(language);
}

backend();