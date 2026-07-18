let a = 1;
let b = -5;
let c = 6;

let d = (b * b) - (4 * a * c);
let root1, root2;

if (d > 0) {
    root1 = (-b + Math.sqrt(d)) / (2 * a);
    root2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log(`Real and distinct roots: ${root1} and ${root2}`);
} else if (d === 0) {
    root1 = root2 = -b / (2 * a);
    console.log(`Real and equal roots: ${root1}`);
} else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-d) / (2 * a)).toFixed(2);
    console.log(`Complex roots: ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
}
let str1 = "apple";
let str2 = "banana";

// 1. Exact Equality Check
if (str1 === str2) {
    console.log("The strings are exactly identical.");
} else {
    console.log("The strings are different.");
}

// 2. Alphabetical Order Check
if (str1 < str2) {
    console.log(`"${str1}" comes before "${str2}" alphabetically.`);
} else if (str1 > str2) {
    console.log(`"${str1}" comes after "${str2}" alphabetically.`);
}

// 3. Case-Insensitive Comparison
let upperApple = "APPLE";
if (str1.toLowerCase() === upperApple.toLowerCase()) {
    console.log("The strings match (ignoring upper/lower case).");
}
