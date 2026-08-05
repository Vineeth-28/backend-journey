// ======================================
// Basic Yield
// ======================================

function* numbers() {
  console.log("Start");
  yield 10;
  console.log("Middle");
  yield 20;
  console.log("End");
  yield 30;
}

const gen = numbers();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* greet() {
  const name = yield "What is your name?";
  console.log("Hello", name);
}

const g = greet();
console.log(g.next());
console.log(g.next("Vineet"));


function* test() {
    const a = yield 1;
    const b = yield 2;
    console.log(a, b);

}

const t = test();
console.log(t.next());
console.log(t.next(100));
console.log(t.next(200));

// ======================================
// Interview Notes
// ======================================

// What does yield do?
// yield pauses a Generator and returns a value.

// Can yield receive values?
// Yes.
// Values passed to next(value)
// become the result of the previous yield.

// Difference between return and yield
// return -> Ends execution.
// yield -> Pauses execution.

// Why is yield powerful?
// It supports two-way communication
// between the caller and the Generator.

// Backend Uses
// - Streaming large files
// - Processing incoming events
// - Lazy database reads
// - Reading logs
// - Data pipelines

// Key Takeaways
// 1. yield pauses execution.
// 2. next() resumes execution.
// 3. next(value) sends data into the Generator.
// 4. Execution resumes exactly where it paused.