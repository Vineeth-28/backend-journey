// Explicit Coercion

console.log(Number("20"));
console.log(String(100));

console.log(Boolean(0));
console.log(Boolean(""));

// ToNumber

console.log(Number("50"));
console.log(Number("999"));
console.log(Number("99abc"));
console.log(Number(""));
console.log(Number(" "));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

// String conversion

console.log(String(500));
console.log(String(true));
console.log(String(false));

// Boolean conversion

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean("hello"));
console.log(Boolean([]));
console.log(Boolean({}));