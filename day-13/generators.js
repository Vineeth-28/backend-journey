function* numbers() {
  yield 10;
  yield 20;
  yield 30;
}

const generator = numbers();

console.log(generator.next());

console.log(generator.next());

console.log(generator.next());

console.log(generator.next());


function* fruits() {

    yield "Apple";

    yield "Banana";

}

const f = fruits();

console.log(f.next());

console.log(f.next());

console.log(f.next());

//output 
// {value :"Apple ", done :false}
//{value :"Banana , ddone :false"}
//{ value : undefine , done : true }

// ======================================
// Interview Notes
// ======================================

// What is a Generator?
// A Generator is a special function that can pause
// and resume execution using yield.

// What does yield do?
// It returns a value and pauses the function
// until next() is called again.

// Difference between return and yield
// return -> ends the function permanently.
// yield -> pauses the function temporarily.

// Why are Generators useful?
// They create Iterators automatically.

// Real Backend Uses
// - Reading large files
// - Streaming data
// - Processing huge datasets
// - Lazy loading
// - Pagination

// Key Takeaways
// 1. function* creates a Generator.
// 2. yield pauses execution.
// 3. next() resumes execution.
// 4. Generators automatically implement the Iterator protocol.