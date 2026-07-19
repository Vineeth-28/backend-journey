const fruits = ["apple ", "banana ", "orange ", "kiwi"];
console.log("Original array:", fruits);

console.log("Index 0:", fruits[0]);
console.log("Index 1:", fruits[1]);
console.log("Index 2:", fruits[2]);
console.log("Index 3:", fruits[3]);

fruits.push("mango");
console.log("After push():", fruits);

fruits.pop();
console.log("After pop():", fruits);

fruits.shift();
console.log("After shift():", fruits);

fruits.unshift("strawberry");
console.log("After unshift():", fruits);

console.log("Includes 'kiwi'?:", fruits.includes("kiwi"));

console.log("Index of 'kiwi':", fruits.indexOf("kiwi"));

console.log("Array length:", fruits.length);

fruits[1] = "Pineapple";
console.log("After modifying index 1:", fruits);

console.log("Looping through elements:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`Element at index ${i}:`, fruits[i]);
}

fruits.push("gauava");
console.log("After pushing gauava:", fruits);

fruits.pop();
fruits.shift();
console.log("Final array state:", fruits);
