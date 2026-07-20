const numbers = [10,20,30,40,50];

const doubled = numbers.map(nums => nums*2);
console.log(doubled);


const greaterThan25 = numbers.filter(num => num > 25);

console.log(greaterThan25);

const found = numbers.find(num => num ==30);
console.log(found);


const total = numbers.reduce((sum , num)=>sum + num ,0);
console.log(total);