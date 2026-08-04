//Multiply Factory



function multiply(mulitplier) {
    return function (number) {
        return number * mulitplier;
    };
}

const double = multiply(2);
const triple = multiply(3);

console.log(double(5));
console.log(triple(5));


// Greeting Factory
function createGreeting(greeting) {
    return function (name) {
        return `${greeting} ${name}`
    };
}

const hello = createGreeting("hello");
const hi = createGreeting("hi");
console.log(hello("vineet"));
console.log(hi("Rahul"));

function createDiscount(discountPercent) {
    return function (price) {
        let discountAmount = price * (discountPercent / 100);
        let finalPrice = price = discountAmount;
        return finalPrice
    }
}


const tenPercent = createDiscount(10);
const twentyPercent = createDiscount(20);

console.log(tenPercent(1000));
console.log(twentyPercent(1000));


function createTaxCalculator(gstRate) {
    return function (basePrice) {

        let gstAmount = basePrice * (gstRate / 100);
        let totalPrice = basePrice + gstAmount;
    
    return {
            basePrice: basePrice,
            gstAmount: gstAmount,
            totalPrice: totalPrice
    }
}
}
const gst5 = createTaxCalculator(5);
const gst18 = createTaxCalculator(18);

console.log(gst5(1000));
console.log(gst18(1000));


function createPower(power){
    return function (base){
        return base ** power;
    }

}
const square = createPower(2);
const cube = createPower(3);

console.log(square(5));
console.log(cube(5));

// ======================================
// Interview Notes
// ======================================

// What is a Function Factory?
// A Function Factory is a function that returns another function.
// Each returned function remembers its own variables using closures.


// Why are Function Factories useful?
// They help create reusable and configurable functions
// without duplicating code.


// Real Backend Examples
// - Logger generators
// - Middleware generators
// - Authentication strategies
// - Validation rule generators
// - Database query builders


// Advantages
// 1. Reusability
// 2. Cleaner code
// 3. Encapsulation
// 4. Configuration without global variables


// Key Takeaways
// - Every returned function gets its own closure.
// - Different factory calls create independent memory.
// - Function Factories reduce code duplication.